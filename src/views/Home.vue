<template>
  <div class="home page">
    <div
      id="move-around"
      :style="isClicked ? { 'font-family': 'Quicksand' } : null"
      @click="toggleIsClicked"
    >
      <h1>
        Hi! I'm Ivar Olsson
      </h1>
      <p>
        I had an argument with my friends on what font we like the most <br />
        we could not come to an agreement se i'll let you decide. Just click
      </p>
    </div>
    <p class="me-text">
      Welcome to one of my projects. <br />
      This is a website purely for practice. This is my playground
    </p>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap");
p {
  color: rgb(211, 212, 212);
}

h1 {
  color: beige;
}

#move-around {
  margin-top: 8em;
  /* background-image: url("~@/Border.png"); */
}

.me-text {
  margin-top: 3em;
  font-size: 2em;
}

.page {
  width: inherit;
}
</style>

<script>
export default {
  methods: {
    toggleIsClicked: function() {
      this.isClicked = !this.isClicked;
    },
  },
  data() {
    return {
      isClicked: false,
    };
  },
};
</script>
