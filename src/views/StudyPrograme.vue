<template>
  <main>
    <div v-for="p in recommendations" :key="p.id">
      <div>
        <div class="mb-3">
          <div class="form-check">
              <input type="radio" v-model="selectedPath" :value="p" aria-label="Radio button for following text input" class="form-check-input">
            <div v-for="(stage, index) in p.stages" class="float-start" :key="stage.id">
              <div v-if="index !== p.stages.length - 1">{{ stage.name }}-></div>
              <div v-else>{{ stage.name }}</div>
            </div>
          </div>
          </div>

      </div>
    </div>
    <button type="button" class="btn btn-primary" @click="next">生成报告</button>
  </main>
</template>
<script>
import {useQuestionService} from '../plugin/QuestionPlugin';
export default {
  setup() {
    const questionService = useQuestionService();

    return {questionService};
  },
  data() {
    return {
      application: this.$store.state.application,
      studyPrograms: [],
      selectedProgram: {},
    }
  },
  methods: {
    async getStudyPrograms(){
      return await this.questionService.getStudyProgrames(this.application);
    },
    async next(){
      this.application.path = this.selectedPath;      
      this.application = await this.questionService.choosePath(this.application);
      this.$store.commit('updateApplication', this.application);
      this.$router.push({ name: 'report'});
    },
  },
  async mounted() {
    this.studyPrograms = await this.getStudyPrograms();
  }
}

</script>


