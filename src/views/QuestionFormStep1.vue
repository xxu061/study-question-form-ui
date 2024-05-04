<template>
  <main>
    <div>
        <form>
          <div class="mb-3">
              <label for="selectedCountry" class="col-form-label">意向国家</label>
              <div class="col-sm-10">
              <select class="form-control" aria-labelledby="dropdownMenuButton" v-model="selectedCountry" >
                <option v-for="country in this.countries" :key="country.name" :value="country.name">
                {{ country.name }}
              </option>
              </select>
            </div>
          </div>
          <div class="mb-3" v-if="selectedCountry">
              <label for="selectedCity" class="col-form-label">意向城市</label>
              <div class="col-sm-10">
              <select class="form-control" aria-labelledby="dropdownMenuButton" v-model="selectedCity">
                <option v-for="city in getCities()" :key="city" :value="city">
                {{ city }}
              </option>
              </select>
            </div>
          </div>
          <button type="button" class="btn btn-primary" @click="next">下一步</button>
        </form>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      countries: [], //[{name: "新西兰", cities:["奥克兰", "惠灵顿","基督城"]}, {name: "澳大利亚", cities: ["悉尼","墨尔本","堪培拉","阿德莱德","珀斯","布里斯班"]}],
      selectedCountry: "",
      selectedCity: ""
    }
  },
  methods: {
    async next(){
      this.application = await (await fetch('http://localhost:5002/api/QuestionForm/createApplication', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ country: this.selectedCountry, city: this.selectedCity, state: this.selectedCity })
      })).json();
      this.$store.commit('updateApplication', this.application);
      this.$router.push({ name: 'step2'})
    },
    getCities(){
      return this.countries.filter((country) => country.name === this.selectedCountry)[0].cities;
    },
    async getCountries(){
      return await (await fetch('https://study-form-app.azurewebsites.net/api/QuestionForm/country', {
          method: "GET",
          headers: { "Content-Type": "application/json" }
      })).json();
    }
  },
  async mounted(){
    this.countries = await this.getCountries();
  }
}

</script>


