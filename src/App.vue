<template>
  <div className="app">
    <Navbar />
    <div className="container">
      <div className="row">
        <router-view :countries="countries" />
      </div>
    </div>
  </div>
</template>

<script>
import CountriesList from "./components/CountriesList.vue";
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
    CountriesList,
  },
  data() {
    return {
      countries: []
    }
  },
  created() {
    fetch("/countries.json")
      .then(res => res.json())
      .then(data => this.countries = data)
  }
};
</script>

<style>
</style>
