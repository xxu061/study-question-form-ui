<template>
  <main>
    <div class="d-flex justify-content-center">
      留学分析报告
    </div>
    <div class="personal-detail">
      <div class="row row-cols-lg-auto align-items-center">
        <div class="flex-fill m-1">
          <label class="form-label">姓名</label>
          <div class="input-group">
            <label class="form-label">郭德生</label>
          </div>
        </div>
        <div class="flex-fill m-1">
          <label class="form-label">年龄</label>
          <div class="input-group">
            <label class="form-label">{{this.application.age}}</label>
          </div>
        </div>
        <div class="flex-fill m-1">
          <label class="form-label">在读年级</label>
          <div class="input-group">
            <label class="form-label">{{this.application.level}}</label>
          </div>
        </div>
        <div class="flex-fill m-1">
          <label class="form-label">平均分</label>
          <div class="input-group">
            <label class="form-label">{{this.application.averageGrade}}</label>
          </div>
        </div>
      </div>
      <div class="row row-cols-lg-auto align-items-center">
        <div class="flex-fill m-1">
          <label class="form-label">在读学校</label>
          <div class="input-group">
            <label class="form-label">智障三小</label>
          </div>
        </div>
        <div class="flex-fill m-1">
          <label class="form-label">英文成绩</label>
          <div class="input-group">
            <label class="form-label">{{this.application.ielts}}</label>
          </div>
        </div>
        <div class="flex-fill m-1">
          <label class="form-label">留学国家</label>
          <div class="input-group">
            <label class="form-label">{{this.application.country}}</label>
          </div>
        </div>
      </div>
    </div>
    <div v-for="p in recommendations" :key="p.id">
      <div>
        <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">
              <input type="radio" v-model="selectedPath" :value="p" aria-label="Radio button for following text input">
              </div>
            </div>
            <div v-for="(stage, index) in p.stages" :key="stage.id">
              <div v-if="index != p.stages.length - 1">{{ stage.name }}-></div>
              <div v-else>{{ stage.name }}-></div>
            </div>
          </div>

      </div>
    </div>
    <button type="button" class="btn btn-primary" @click="print">打印</button>
    <button type="button" class="btn btn-primary" @click="next">发送邮件</button>
    <button type="button" class="btn btn-primary" @click="next">发送链接至短信</button>
  </main>
  <!-- <highcharts :options="chartOptions"></highcharts> -->
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
      application: {},
      recommendations: [],
      selectedPath: {},
      chartOptions: {
        series: [{
          data: [1,2,3] // sample data
        }]
      }
    }
  },
  methods: {
    print(){
      window.print();
    },
    async getReport(){
      return this.application.path;
    }
  },
  async mounted() {
    this.application = await this.questionService.getApplication(this.$store.state.application.id);
    var a = 11;
  }
}

</script>


