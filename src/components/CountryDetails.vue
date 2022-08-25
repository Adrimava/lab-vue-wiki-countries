<template>
  <h1> {{ details.name }}</h1>
  <p>Capital: {{ details.capital }}</p>
  <p>Area: {{ details.area }} km2</p>
  <p>Borders:</p>
  <ul>
    <li v-for="border in details.borders" :key="border">{{ border }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    details: Object,
  },
};
</script>

<style>
</style>