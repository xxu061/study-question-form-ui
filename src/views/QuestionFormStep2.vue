<script>
import AssistantModal from '../components/modal/AssistantModal.vue'
export default {
  components: {
    AssistantModal
  },
  data() {
    return {
      selectedCity: this.$route.params.selectedCountry,
      selectedCountry: this.$route.params.selectedCity,
      form: {},
      showAssistant: false
    }
  },
  methods: {
    async next(){
      this.posts = await (await fetch('http://localhost:8080/', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.form)
      })).text();
      return this.form;
    },
    toggleAssistant(){
      this.showAssistant = !this.showAssistant;
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
            <input type="text" class="form-control" id="age" v-model="form.age">
        </div>
        <div class="mb-3">
            <label for="level" class="form-label">年级</label>
            <input type="text" class="form-control" id="level" v-model="form.level">
        </div>
        <div class="mb-3">
            <label for="gender" class="form-label">性别</label>
            <input type="text" class="form-control" id="gender" v-model="form.gender">
        </div>
        <div class="mb-3">
            <label for="averageGrade" class="form-label">平均分</label>
            <input type="text" class="form-control" id="averageGrade" v-model="form.averageGrade">
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
            <input type="text" class="form-control" id="ielts" v-model="form.ielts">
        </div>
        <button type="button" class="btn btn-primary" @click="load">提交</button>
        </form>
        <AssistantModal></AssistantModal>
    </div>
  </main>
</template>



