<template>
  <main>
    <div v-for="major in majors" :key="major">
      <div>
        <label>{{ major.displayName }}</label>
        <table class="table">
          <thead>
            <tr >
              <th scope="col"></th>
              <th scope="col">名称</th>
              <th scope="col">学费</th>
              <th scope=col>时长（月）</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(path, index) in major.paths" :key="index" :class="{'table-danger' : path.isQualified === false}" :title="getTips(path)">
              <th scope="row"><input
                      class="form-check-input"
                      type="checkbox"
                      :id="'checkbox-' + index + '-' + path"
                      :value="path"
                      v-model="selectedPaths"/></th>
              <td>{{path.name}}</td>
              <td>{{path.tuitionFee}}</td>
              <td>{{ path.durationInMonth }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <button type="button" class="btn btn-primary" @click="next">生成报告</button>
  </main>
</template>

<script>
import {useQuestionService} from '../plugin/QuestionPlugin';
import { ref } from 'vue';
export default {
  setup() {
    const questionService = useQuestionService();
    const majors = ref([]);
    const selectedPaths = ref([]);
    return {questionService, majors, selectedPaths};
  },
  data() {
    return {
      application: this.$store.state.application,
      recommendations: [],
    }
  },
  methods: {
    async getPaths(){
      return await this.questionService.getPaths(this.application);
    },
    async next(){    
      this.application = await this.questionService.choosePath(this.application);
      // this.$store.commit('updateApplication', this.application);
      // this.$router.push({ name: 'report'});
    },
    getTips(path){
      return path.disqualifyReasons.join(" ");
    }
  },
  async mounted() {
    this.majors = await this.getPaths();
  }
}

</script>


