<script>
import AssistantModal from '../components/modal/AssistantModal.vue'
export default {
  components: {
    AssistantModal
  },
  data() {
    return {
      application: this.$store.state.application,
      form: {age: 1, level: "1", gender: 1, averageGrade: 100, preferredSchool: "奥克兰大学", preferredMajor: "计算机", ielts: 6.5},
      showAssistant: false
    }
  },
  methods: {
    async next(){      
      this.application = await (await fetch('http://localhost:5002/api/QuestionForm/updateApplication', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.mapApplicaton(this.form))
      })).json();
      this.$store.commit('updateApplication', this.application);
      this.$router.push({ name: 'recommendation'});
    },
    toggleAssistant(){
      this.showAssistant = !this.showAssistant;
    },
    mapApplicaton(form){
      var application = {id: this.application.id, country: this.application.country, state: this.application.state, city: this.application.city};
      application.age = form.age;
      application.level = form.level;
      application.gender = form.gender;
      application.averageGrade = form.averageGrade;
      application.preferredSchool = form.preferredSchool;
      application.preferredMajor = form.preferredMajor;
      application.ielts = form.ielts;

      return application;
    }
}
}

</script>
<template>
  <main>
    <div>
        <form>
        <div class="mb-3">
            <label for="age" class="form-label">年龄</label>

              <input type="number" class="form-control" id="age" v-model.number="form.age">

        </div>
        <div class="mb-3">
            <label for="level" class="form-label">年级</label>
            <input type="text" class="form-control" id="level" v-model="form.level">
        </div>
        <div class="mb-3">
            <label class="form-label">性别</label>
            <div class="form-check">
            <input type="radio" v-model.number="form.gender" id="male" :value="0" name="customRadio" class="form-check-input">
            <label class="form-label" for="male">男</label>
          </div>
          <div class="form-check">
            <input type="radio" v-model.number="form.gender" id="female" :value="1" name="customRadio" class="form-check-input">
            <label class="form-label" for="female">女</label>
          </div>
        </div>
        <div class="mb-3">
            <label for="qualification" class="form-label">现有学历</label>
              <div class="col-sm-10">
              <select class="form-control" aria-labelledby="dropdownMenuButton" v-model="form.qualification" >
                <option>
                高二
              </option>
              <option>
                本科
              </option>
              </select>
              </div>
        </div>
        <div class="mb-3" v-if="form.qualification">
            <label for="averageGrade" class="form-label">平均分</label>

            <input type="number" class="form-control" id="averageGrade" v-model="form.averageGrade">

        </div>
        <div class="mb-3">
            <label for="highSchoolExamScore" class="form-label">高考成绩（可选）</label>

            <input type="number" class="form-control" id="highSchoolExamScore" v-model="form.highSchoolExamScore">

        </div>
        <div class="mb-3">
            <label for="preferredSchool" class="form-label">目标大学</label>

            <input type="text" class="form-control" id="preferredSchool" v-model="form.preferredSchool">

        </div>
        <div class="mb-3">
            <label for="preferredMajor" class="form-label">目标专业</label>

            <input type="text" class="form-control" id="preferredMajor" v-model="form.preferredMajor">

        </div>
        <div class="mb-3">
          <button type="button" class="btn btn-secondary" @click="toggleAssistant()">专业小助手</button>
        </div>
        <div v-if="showAssistant" class="mb-3">
          <div>
            推荐专业
          </div>
        </div>
        <div class="mb-3">
            <label for="ielts" class="form-label">雅思成绩</label>

            <input type="number" class="form-control" id="ielts" v-model="form.ielts">
        </div>
        <button type="button" class="btn btn-primary" @click="next()">提交</button>
        </form>
        <AssistantModal></AssistantModal>
    </div>
  </main>
</template>



