<template>
  <h1>countries list</h1>
  <div class="main">
    <div class="countries-container">
      <div class="country" v-for="country in countries" :key="country" @click="countryDetails(country)">
        <router-link :to="`/details/${country.alpha3Code}`">
          <img :src="getFlagSrc(country)" />
          <p>{{ country.name.common }} - {{ country.alpha3Code }}</p>
        </router-link>
        <br />
      </div>
    </div>
    <router-view :details="currentCountry"/>
  </div>
</template>

<script>
export default {
  props: {
    countries: Array,
  },
  data() {
    return {
      currentCountry: {}
    };
  },
  methods: {
    getFlagSrc(country) {
      return `https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`;
    },
    countryDetails(country) {
      this.currentCountry = {
        name: country.name.common,
        capital: country.capital[0],
        area: country.area,
        borders: country.borders
      }
    }
  },
};
</script>

<style>
.main {
  display: flex;
}

.main .countries-container {
  width: 300px;
}
</style>