<template>
  <main>
    <div>
        <form>
          <div class="mb-3 form-group">
              <label for="selectedCountry" class="form-label">意向国家</label>
              <select class="custom-select form-control" aria-labelledby="dropdownMenuButton" v-model="selectedCountry" >
                <option v-for="country in this.countries" :key="country.name" :value="country.name">
                {{ country.name }}
              </option>
              </select>
          </div>
          <div class="mb-3 form-group" v-if="selectedCountry">
              <label for="selectedCity" class="form-label">意向城市</label>
              <select class="custom-select form-control" aria-labelledby="dropdownMenuButton" v-model="selectedCity">
                <option v-for="city in getCities()" :key="city" :value="city">
                {{ city }}
              </option>
              </select>
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
      countries: [{name: "新西兰", cities:["奥克兰", "惠灵顿","基督城"]}, {name: "澳大利亚", cities: ["悉尼","墨尔本","堪培拉","阿德莱德","珀斯","布里斯班"]}],
      selectedCountry: "",
      selectedCity: ""
    }
  },
  methods: {
    next(){
      this.$router.push({ name: 'step2', params: { selectedCountry: this.selectedCountry, selectedCity: this.selectedCity }})
    },
    getCities(){
      return this.countries.filter((country) => country.name === this.selectedCountry)[0].cities;
    }
  }
}

</script>


