<template>
  <div>
    <p>专业小助手</p>
    <div>
      <div v-for="(criteria, index) in filterCriterias" :key="index">
        <input type="radio" :id="'radio-' + index + '-' + criteria.value" :value="criteria.value" v-model="selectedCriteria" />
        <label :for="'radio-' + index + '-' + criteria.value">{{ criteria.label }}</label>
      </div>
      <div v-if="majors.length > 0">
        <label class="col-form-label">推荐专业</label>
        <div v-for="(major, index) in majors" :key="major.name">          
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :id="'checkbox-' + index + '-' + major"
                      :value="major"
                      v-model="selectedMajors"/>
                      <label class="form-check-label" :for="'checkbox-' + index + '-' + major">
                        {{ major.displayName }}
                      </label>
        </div>
      </div>
      <div v-if="selectedMajors">
          <p>已选择的专业:</p>
          <ul>
            <li v-for="major in selectedMajors" :key="major">{{ major.name }}</li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, defineProps } from 'vue';
import {useQuestionService} from '../plugin/QuestionPlugin';
export default {
  props: {
    existingSelectedMajors: {
      type: Array,
      default: () => []
    },
    message: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    console.log(props);

    const questionService = useQuestionService();

    const selectedCriteria = ref("");
    const selectedMajors = ref([]);
    const majors = ref([]);
    const filterCriterias = [
      { label: "QS排名", value: "qs" },
      { label: "就业率高", value: "employmentRate" },
      { label: "毕业起薪高", value: "startSalary" },
      { label: "留学生占比高", value: "internationalStudent" },
      { label: "雇主最喜欢", value: "employerPreferred" }
    ];

    // Setup a watcher on selectedCriteria
    watch(selectedMajors, (newValue, oldValue) => {
      if (newValue !== oldValue) {
        emit('notify', newValue);
      }
    });

    watch(selectedCriteria, (newValue, oldValue) => {
      if (newValue && newValue !== oldValue) {
        fetchMajorSuggestions(newValue);
        selectedMajors.value = [];
      }
    });

    async function fetchMajorSuggestions(criteria) {
      const data = await questionService.getMajorSuggestions(criteria);
      majors.value = await data.json();

    }
    
    if(props.existingSelectedMajors){
      selectedMajors.value = props.existingSelectedMajors;
    }

    return {
      selectedCriteria,
      filterCriterias,
      majors,
      selectedMajors
    };
  }
}
</script>
