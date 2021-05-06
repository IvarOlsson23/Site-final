<template>
  <div id="form">
    <p>Please enter your information , {{ name }}</p>
    <span>
      <input type="text" placeholder="Enter Username" v-model="userText" />
    </span>
    <span>
      <input type="password" placeholder="Enter Password" />
    </span>
    <input @click="onClick" id="button" type="button" value="Submit" />
  </div>
</template>

<style scoped>
p {
  color: aliceblue;
}

#form {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

#form span {
  padding: 1em;
}

#button {
  margin: 25px 45% 75px;
}
</style>

<script>
export default {
  data() {
    return {
      userText: null,
    };
  },
  props: ["name"],

  methods: {
    onClick() {
      console.log(this.userText);
      localStorage.userText = this.userText;
      alert("Welcome, " + this.userText);
    },
  },
};
</script>
