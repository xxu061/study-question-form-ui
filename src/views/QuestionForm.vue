<template>
  <main class="d-flex justify-content-center align-items-center">
    <div class="row">
      <div class="col">
        <div class="d-flex justify-content-center">
          <div class="w-100">
        <form :class="{ 'needs-validation': true, 'was-validated': submitted}" novalidate>
          <div v-for="(field, index) in currentQuestions" :key="index">
            <div class="mb-3">

              <div class="col-sm-10">
                <template v-if="field.questionType === 'text'">
                  <label class="col-form-label">{{field.questionText}}</label>
                  <input class="form-control" :type="field.type" v-model="field.answer.value" :placeholder="field.placeholder" required />
                </template>
                <template v-else-if="field.questionType === 'dropdown'">
                  <label class="col-form-label">{{field.questionText}}</label>
                  <select v-model="field.answer.value" class="form-control" aria-labelledby="dropdownMenuButton" required>
                    <option v-for="(option, optionIndex) in field.options" :key="optionIndex" :value="option">{{ option }}</option>
                  </select>
                </template>
                <template v-else-if="field.questionType === 'autocomplete'">
                  <input
                    type="text"
                    class="form-control"
                    v-model="field.answer.value"
                    @input="handleInput"
                    placeholder="Type to search..."
                    required 
                  >
                  <div class="autocomplete-dropdown mt-2" v-if="showDropdown">
                    <ul class="list-group">
                      <li
                        class="list-group-item"
                        v-for="(option, autoCompleteIndex) in filteredItems(field.options, field.answer.value)"
                        :key="autoCompleteIndex"
                        @click="selectItem(option, index)"
                      >
                        {{ option }}
                      </li>
                    </ul>
                  </div>
                </template>
                <template v-else-if="field.questionType === 'radio'">
                  <label class="col-form-label">{{field.questionText}}</label>
                  <div v-for="(option, optionIndex) in field.options" :key="optionIndex" class="form-check">
                    <input name="radio-stacked" class="form-check-input" type="radio" :id="'radio-' + optionIndex + '-' + option" :value="option" v-model="field.answer.value" required />
                    <label class="form-check-label" :for="'radio-' + optionIndex + '-' + option">{{ option.name === undefined ? option : option.name }}</label>
                    <div class="invalid-feedback" v-if="!fieldIsValid(field)">Please enter a valid {{ field.questionText }}</div>
                  </div>
                </template>
                <template v-else-if="field.questionType === 'checkbox'">
                  <label class="col-form-label">{{field.questionText}}</label>
                  <div v-for="(option, optionIndex) in field.options" :key="optionIndex"  class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :id="'checkbox-' + optionIndex + '-' + option"
                      :value="optionIndex"
                      v-model="field.answer.value"/>
                      <label class="form-check-label" :for="'checkbox-' + optionIndex + '-' + option">
                        {{ option }}
                      </label>
                      <div class="invalid-feedback" v-if="!fieldIsValid(field)">Please enter a valid {{ field.questionText }}</div>
                  </div>
                </template>
                <template v-else-if="field.questionType === 'knownMajorAssistant'">
                  <KnownMajorAssistant @notify="handleNotify" :existingSelectedMajors="field.answer.value"></KnownMajorAssistant>
                </template>
                <template v-else-if="field.questionType === 'assistant'">
                  <UnknownMajorAssistant @notify="handleNotify" :existingSelectedMajors="field.answer.value"></UnknownMajorAssistant>
                </template>
                <div class="invalid-feedback" v-if="!fieldIsValid(field)">Please enter a valid {{ field.questionText }}</div>
             </div>
            </div>
          </div>

        </form>
      </div>
    </div>
  </div>
    <div>
      <button class="btn btn-secondary" @click="previous" >前一步</button>
      <button class="btn btn-primary float-end" @click="next" type="button">下一步</button>
    </div>
    </div>
  </main>
</template>
<script>
import {useQuestionService} from '../plugin/QuestionPlugin';
import { defineComponent } from 'vue';

const QuestionForm = defineComponent({
  setup() {
    const questionService = useQuestionService();
    const filteredItems = (options, text) => {
      if(text){
        return options.filter(item =>
          item.toLowerCase().includes(text.toLowerCase())
        );
      }
    };
    return {questionService, filteredItems};
  },
  data() {
    return {
      questions: [],
      currentQuestions: [],
      application: {},
      isFromHandler: false,       
      showDropdown: false,
      page: 0,
      submitted: false
    }
  },

  methods: {
    async next(){
      const allFieldsValid = this.currentQuestions.every(field => this.fieldIsValid(field));
    this.submitted = true;
    // If all fields are valid, proceed to the next step
      if (allFieldsValid) {
        let moreQuestions = await this.questionService.answerQuestion({ id: this.application.id, questions: this.currentQuestions });
        var questionSet = { page: this.page, questions: this.currentQuestions };
        this.questions.push(questionSet);
        this.page++;
        if (moreQuestions.length === 0) {
          this.$router.push({ name: 'recommendation' });
        } else {
          this.currentQuestions = moreQuestions;
        }
        this.$store.commit('updateApplication', this.application);
        this.submitted = false;
      } else {
        // If any field is invalid, display error messages and prevent proceeding
        console.log('Some fields are invalid. Please correct them before proceeding.');
      }
    },
    previous(){
      this.page--;
      if(this.page < 0) this.page = 0;
      this.currentQuestions = this.questions.filter(s => s.page === this.page)[0].questions;
    },
    fieldIsValid(field){
      if(field.answer){
        if(field.answer.value){
          var value = field.answer.value.toString();
          return value.trim() !== '';
        }
      }
      return false;
    },
    handleNotify(answer) {
      var question = this.currentQuestions.filter((q)=> q.questionType === "assistant" || q.questionType === "knownMajorAssistant" )[0];
      question.answer.value = answer;
    },
    handleInput() {
      this.showDropdown = true;
    },
    selectItem(item, index) {
      this.currentQuestions[index].answer.value = item;
      this.showDropdown = false;
    }
  },
  async mounted(){
    this.application = await this.questionService.createApplication();

    var result = await this.questionService.getInitialQuestions();
    const initialQuestions = await result.json();
    this.application.questions = initialQuestions;
    this.$store.commit('updateApplication', this.application);
    this.currentQuestions = initialQuestions;
    // var questionSet = {page: 0, questions: initialQuestions};
    //   this.questions.push(questionSet);
  }
});
export default QuestionForm;

</script>


