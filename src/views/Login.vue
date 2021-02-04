<template>
  <login-form id="form" :name="user.name"></login-form>
</template>

<style scoped>
#form {
  margin-top: 15em;
}
</style>

<script>
import loginForm from "../components/login-form.vue";
export default {
  name: "Login",
  components: {
    loginForm,
  },
  data() {
    return {
      user: {
        name: "Mr/Ms..",
      },
    };
  },
};
</script>