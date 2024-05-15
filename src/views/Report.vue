<template>
  <main>
    <div class="d-flex justify-content-center">
      留学报告
    </div>
    <div class="personal-detail">
      <div class="row row-cols-lg-auto align-items-center">
        <div class="flex-fill m-1">
          <label class="form-label">姓名</label>
          <div class="input-group">
            <label class="form-label">{{this.application.name}}</label>
          </div>
        </div>
        <div class="flex-fill m-1">
          <label class="form-label">年龄</label>
          <div class="input-group">
            <label class="form-label">{{this.application.age}}</label>
          </div>
        </div>
        <div class="flex-fill m-1">
          <label class="form-label">目前学历</label>
          <div class="input-group">
            <label class="form-label">{{this.application.qualification}}</label>
          </div>
        </div>
        <div class="flex-fill m-1">
          <label class="form-label">平均成绩</label>
          <div class="input-group">
            <label class="form-label">{{this.application.averageGrade}}</label>
          </div>
        </div>
        <div class="flex-fill m-1">
          <label class="form-label">意向国家</label>
          <div class="input-group">
            <label class="form-label">{{this.application.country}}</label>
          </div>
        </div>
      </div>
      <div class="row row-cols-lg-auto align-items-center">
        <div class="flex-fill m-1">
          <div class="">
            <p>尊敬的客户，根据您的基本学术条件以及所选择的留学路径，专业留学建议如下：</p>
          </div>
          <div v-if="this.application.bestMatch">
            最佳匹配：
            第一阶段：{{ this.application.bestMatch.path.name }}
            <div>
                <div class="flex-fill m-1">
                  <label class="form-label">国家（Country）</label>
                  <div class="input-group">
                    <label class="form-label">{{this.application.country}}</label>
                  </div>
                </div>
                <div class="flex-fill m-1">
                  <label class="form-label">所在城市（City）</label>
                  <div class="input-group">
                    <label class="form-label">{{this.application.bestMatch.path.state}}</label>
                  </div>
                </div>
                <div class="flex-fill m-1">
                  <label class="form-label">时长（Duration）</label>
                  <div class="input-group">
                    <label class="form-label">{{this.application.bestMatch.path.duration}}</label>
                  </div>
                </div>
                <div class="flex-fill m-1">
                  <label class="form-label">学费（Tuition Fee）</label>
                  <div class="input-group">
                    <label class="form-label">{{this.application.bestMatch.path.tuitionFee}}/年</label>
                  </div>
                </div>
                <div v-if="this.application.bestMatch.path.englishRequirements">
                  <div class="flex-fill m-1">
                    <label class="form-label">预科英语水平要求（English Requirements）</label>
                    <div class="input-group">
                      <label class="form-label">雅思</label>
                    </div>
                  </div>
                  <div class="flex-fill m-1">
                    <label class="form-label">总分</label>
                    <div class="input-group">
                      <label class="form-label">{{this.application.bestMatch.path.englishRequirements.ielts.overall}}</label>
                    </div>
                  </div>
                  <div class="flex-fill m-1">
                    <label class="form-label">听力</label>
                    <div class="input-group">
                      <label class="form-label">{{this.application.bestMatch.path.englishRequirements.ielts.listening}}</label>
                    </div>
                  </div>
                  <div class="flex-fill m-1">
                    <label class="form-label">口语</label>
                    <div class="input-group">
                      <label class="form-label">{{this.application.bestMatch.path.englishRequirements.ielts.speaking}}</label>
                    </div>
                  </div>
                  <div class="flex-fill m-1">
                    <label class="form-label">写作</label>
                    <div class="input-group">
                      <label class="form-label">{{this.application.bestMatch.path.englishRequirements.ielts.writing}}</label>
                    </div>
                  </div>
                  <div class="flex-fill m-1">
                    <label class="form-label">阅读</label>
                    <div class="input-group">
                      <label class="form-label">{{this.application.bestMatch.path.englishRequirements.ielts.reading}}</label>
                    </div>
                  </div>
              </div>
            </div>
            第二阶段：{{ this.application.bestMatch.major.name }}
            <div>
                <div class="flex-fill m-1">
                  <label class="form-label">国家（Country）</label>
                  <div class="input-group">
                    <label class="form-label">{{this.application.country}}</label>
                  </div>
                </div>
                <div class="flex-fill m-1">
                  <label class="form-label">所在城市（City）</label>
                  <div class="input-group">
                    <label class="form-label">{{this.application.bestMatch.path.state}}</label>
                  </div>
                </div>
                <div class="flex-fill m-1">
                  <label class="form-label">大学及专业（School and Degree（Major））</label>
                  <div class="input-group">
                    <label class="form-label">{{this.application.bestMatch.major.schoolName}}</label>
                  </div>
                </div>
                <div class="flex-fill m-1">
                  <label class="form-label">所属院系（Faculty）</label>
                  <div class="input-group">
                    <label class="form-label">{{this.application.bestMatch.major.faculty}}</label>
                  </div>
                </div>
                <div class="flex-fill m-1">
                  <label class="form-label">学制（Duration）</label>
                  <div class="input-group">
                    <label class="form-label">{{this.application.bestMatch.major.duration}}</label>
                  </div>
                </div>
                <div class="flex-fill m-1">
                  <label class="form-label">学费（Tuition Fee）</label>
                  <div class="input-group">
                    <label class="form-label">{{this.application.bestMatch.major.tuitionFee}}/年</label>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="flex-fill m-1">
                  <label class="form-label">总学费（Total Tuition Fee）</label>
                  <div class="input-group">
                    <label class="form-label">{{this.application.bestMatch.totalTuitionFee}}/年</label>
                  </div>
                </div>
                <div class="flex-fill m-1">
                  <label class="form-label">总时长（Total Duration）</label>
                  <div class="input-group">
                    <label class="form-label">{{this.application.bestMatch.totalDurationInMonth}}个月</label>
                  </div>
                </div>
            </div>
          </div>
          <!-- <div v-if="this.application.targeting">
            冲刺选项：
            第一阶段：{{ this.application.targeting.path.name }}
            <div>
                <div class="flex-fill m-1">
                  <label class="form-label">国家（Country）</label>
                  <div class="input-group">
                    <label class="form-label">{{this.application.country}}</label>
                  </div>
                </div>
                <div class="flex-fill m-1">
                  <label class="form-label">所在城市（City）</label>
                  <div class="input-group">
                    <label class="form-label">{{this.application.targeting.path.state}}</label>
                  </div>
                </div>
                <div class="flex-fill m-1">
                  <label class="form-label">学制（Duration）</label>
                  <div class="input-group">
                    <label class="form-label">{{this.application.targeting.path.duration}}</label>
                  </div>
                </div>
                <div class="flex-fill m-1">
                  <label class="form-label">学费（Tuition Fee）</label>
                  <div class="input-group">
                    <label class="form-label">{{this.application.targeting.path.tuitionFee}}个月</label>
                  </div>
                </div>
                <div>
                  <div class="flex-fill m-1">
                    <label class="form-label">预科英语水平要求（English Requirements）</label>
                    <div class="input-group">
                      <label class="form-label">雅思</label>
                    </div>
                  </div>
                  <div class="flex-fill m-1">
                    <label class="form-label">总分</label>
                    <div class="input-group">
                      <label class="form-label">{{this.application.targeting.path.englishRequirements.ielts.overall}}</label>
                    </div>
                  </div>
                  <div class="flex-fill m-1">
                    <label class="form-label">听力</label>
                    <div class="input-group">
                      <label class="form-label">{{this.application.targeting.path.englishRequirements.ielts.listening}}</label>
                    </div>
                  </div>
                  <div class="flex-fill m-1">
                    <label class="form-label">口语</label>
                    <div class="input-group">
                      <label class="form-label">{{this.application.targeting.path.englishRequirements.ielts.speaking}}</label>
                    </div>
                  </div>
                  <div class="flex-fill m-1">
                    <label class="form-label">写作</label>
                    <div class="input-group">
                      <label class="form-label">{{this.application.targeting.path.englishRequirements.ielts.writing}}</label>
                    </div>
                  </div>
                  <div class="flex-fill m-1">
                    <label class="form-label">阅读</label>
                    <div class="input-group">
                      <label class="form-label">{{this.application.targeting.path.englishRequirements.ielts.reading}}</label>
                    </div>
                  </div>
              </div>
            </div>
            第二阶段：{{ this.application.targeting.major.name }}
            <div>
                <div class="flex-fill m-1">
                  <label class="form-label">国家（Country）</label>
                  <div class="input-group">
                    <label class="form-label">{{this.application.country}}</label>
                  </div>
                </div>
                <div class="flex-fill m-1">
                  <label class="form-label">所在城市（City）</label>
                  <div class="input-group">
                    <label class="form-label">{{this.application.targeting.path.state}}</label>
                  </div>
                </div>
                <div class="flex-fill m-1">
                  <label class="form-label">大学及专业（School and Degree（Major））</label>
                  <div class="input-group">
                    <label class="form-label">{{this.application.targeting.major.schoolName}}</label>
                  </div>
                </div>
                <div class="flex-fill m-1">
                  <label class="form-label">所属院系（Faculty）</label>
                  <div class="input-group">
                    <label class="form-label">{{this.application.targeting.major.faculty}}</label>
                  </div>
                </div>
                <div class="flex-fill m-1">
                  <label class="form-label">学制（Duration）</label>
                  <div class="input-group">
                    <label class="form-label">{{this.application.targeting.major.duration}}</label>
                  </div>
                </div>
                <div class="flex-fill m-1">
                  <label class="form-label">学费（Tuition Fee）</label>
                  <div class="input-group">
                    <label class="form-label">{{this.application.targeting.major.tuitionFee}}个月</label>
                  </div>
                </div>
                  <div class="flex-fill m-1">
                    <label class="form-label">预科英语水平要求（English Requirements）</label>
                    <div class="input-group">
                      <label class="form-label">雅思</label>
                    </div>
                  </div>
                  <div class="flex-fill m-1">
                    <label class="form-label">总分</label>
                    <div class="input-group">
                      <label class="form-label">{{path.englishRequirements.ielts.overall}}</label>
                    </div>
                  </div>
                  <div class="flex-fill m-1">
                    <label class="form-label">听力</label>
                    <div class="input-group">
                      <label class="form-label">{{path.englishRequirements.ielts.listening}}</label>
                    </div>
                  </div>
                  <div class="flex-fill m-1">
                    <label class="form-label">口语</label>
                    <div class="input-group">
                      <label class="form-label">{{path.englishRequirements.ielts.speaking}}</label>
                    </div>
                  </div>
                  <div class="flex-fill m-1">
                    <label class="form-label">写作</label>
                    <div class="input-group">
                      <label class="form-label">{{path.englishRequirements.ielts.writing}}</label>
                    </div>
                  </div>
                  <div class="flex-fill m-1">
                    <label class="form-label">阅读</label>
                    <div class="input-group">
                      <label class="form-label">{{path.englishRequirements.ielts.reading}}</label>
                    </div>
                  </div>
              </div>
            </div>
          <div v-if="this.application.conservative">
            保底建议：
            第一阶段：{{ this.application.bestMatch.path.name }}
            <div>
                <div class="flex-fill m-1">
                  <label class="form-label">国家（Country）</label>
                  <div class="input-group">
                    <label class="form-label">{{this.application.country}}</label>
                  </div>
                </div>
                <div class="flex-fill m-1">
                  <label class="form-label">所在城市（City）</label>
                  <div class="input-group">
                    <label class="form-label">{{this.application.bestMatch.path.state}}</label>
                  </div>
                </div>
                <div class="flex-fill m-1">
                  <label class="form-label">学制（Duration）</label>
                  <div class="input-group">
                    <label class="form-label">{{this.application.bestMatch.path.duration}}</label>
                  </div>
                </div>
                <div class="flex-fill m-1">
                  <label class="form-label">学费（Tuition Fee）</label>
                  <div class="input-group">
                    <label class="form-label">{{this.application.bestMatch.path.tuitionFee}}个月</label>
                  </div>
                </div>
                <div>
                  <div class="flex-fill m-1">
                    <label class="form-label">预科英语水平要求（English Requirements）</label>
                    <div class="input-group">
                      <label class="form-label">雅思</label>
                    </div>
                  </div>
                  <div class="flex-fill m-1">
                    <label class="form-label">总分</label>
                    <div class="input-group">
                      <label class="form-label">{{this.application.bestMatch.path.englishRequirements.ielts.overall}}</label>
                    </div>
                  </div>
                  <div class="flex-fill m-1">
                    <label class="form-label">听力</label>
                    <div class="input-group">
                      <label class="form-label">{{this.application.bestMatch.path.englishRequirements.ielts.listening}}</label>
                    </div>
                  </div>
                  <div class="flex-fill m-1">
                    <label class="form-label">口语</label>
                    <div class="input-group">
                      <label class="form-label">{{this.application.bestMatch.path.englishRequirements.ielts.speaking}}</label>
                    </div>
                  </div>
                  <div class="flex-fill m-1">
                    <label class="form-label">写作</label>
                    <div class="input-group">
                      <label class="form-label">{{this.application.bestMatch.path.englishRequirements.ielts.writing}}</label>
                    </div>
                  </div>
                  <div class="flex-fill m-1">
                    <label class="form-label">阅读</label>
                    <div class="input-group">
                      <label class="form-label">{{this.application.bestMatch.path.englishRequirements.ielts.reading}}</label>
                    </div>
                  </div>
              </div>
            </div>
            第二阶段：{{ this.application.bestMatch.major.name }}
            <div>
                <div class="flex-fill m-1">
                  <label class="form-label">国家（Country）</label>
                  <div class="input-group">
                    <label class="form-label">{{this.application.country}}</label>
                  </div>
                </div>
                <div class="flex-fill m-1">
                  <label class="form-label">所在城市（City）</label>
                  <div class="input-group">
                    <label class="form-label">{{this.application.bestMatch.path.state}}</label>
                  </div>
                </div>
                <div class="flex-fill m-1">
                  <label class="form-label">大学及专业（School and Degree（Major））</label>
                  <div class="input-group">
                    <label class="form-label">{{this.application.bestMatch.major.schoolName}}</label>
                  </div>
                </div>
                <div class="flex-fill m-1">
                  <label class="form-label">所属院系（Faculty）</label>
                  <div class="input-group">
                    <label class="form-label">{{this.application.bestMatch.major.faculty}}</label>
                  </div>
                </div>
                <div class="flex-fill m-1">
                  <label class="form-label">学制（Duration）</label>
                  <div class="input-group">
                    <label class="form-label">{{this.application.bestMatch.major.duration}}</label>
                  </div>
                </div>
                <div class="flex-fill m-1">
                  <label class="form-label">学费（Tuition Fee）</label>
                  <div class="input-group">
                    <label class="form-label">{{this.application.bestMatch.major.tuitionFee}}个月</label>
                  </div>
                </div>
                  <div class="flex-fill m-1">
                    <label class="form-label">预科英语水平要求（English Requirements）</label>
                    <div class="input-group">
                      <label class="form-label">雅思</label>
                    </div>
                  </div>
                  <div class="flex-fill m-1">
                    <label class="form-label">总分</label>
                    <div class="input-group">
                      <label class="form-label">{{path.englishRequirements.ielts.overall}}</label>
                    </div>
                  </div>
                  <div class="flex-fill m-1">
                    <label class="form-label">听力</label>
                    <div class="input-group">
                      <label class="form-label">{{path.englishRequirements.ielts.listening}}</label>
                    </div>
                  </div>
                  <div class="flex-fill m-1">
                    <label class="form-label">口语</label>
                    <div class="input-group">
                      <label class="form-label">{{path.englishRequirements.ielts.speaking}}</label>
                    </div>
                  </div>
                  <div class="flex-fill m-1">
                    <label class="form-label">写作</label>
                    <div class="input-group">
                      <label class="form-label">{{path.englishRequirements.ielts.writing}}</label>
                    </div>
                  </div>
                  <div class="flex-fill m-1">
                    <label class="form-label">阅读</label>
                    <div class="input-group">
                      <label class="form-label">{{path.englishRequirements.ielts.reading}}</label>
                    </div>
                  </div>
              </div>
            </div> -->
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
    }
  },
  async mounted() {
    var id = history.state.id;
    if(id){
      this.application = await this.questionService.getApplication(id);
    }
    else{
      this.application = await this.questionService.getApplication(this.$store.state.application.id);
    }
    
    //var a = 11;
  }
}

</script>


