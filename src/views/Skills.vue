<template>
  <div class="cities">
    <h3>
      This is just a fetch call from an API.
    </h3>
    <dl v-if="cities">
      <div :key="city.uuid" v-for="city in cities">
        <li>{{ city.name }}</li>
      </div>
    </dl>
  </div>
</template>

<style scoped>
* {
  color: aliceblue;
}

.cities h3 {
  margin-top: 5%;
  padding: 2em;
}
</style>

<script>
export default {
  created() {
    fetch("https://avancera.app/cities/")
      .then((response) => response.json())
      .then((result) => {
        this.cities = result;
        console.log(result);
      });
  },
  data() {
    return {
      cities: this.result,
    };
  },
};
</script>
