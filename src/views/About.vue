<template>
  <div class="page">
    <div class="about">
      <section id="about1">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde maxime
          illum accusamus dolore est quasi exercitationem odit consequuntur.
          Delectus numquam provident minus officia? Architecto labore sit error
          numquam? Et, quas?
        </div>
      </section>
      <section id="about2">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde maxime
          illum accusamus dolore est quasi exercitationem odit consequuntur.
          Delectus numquam provident minus officia? Architecto labore sit error
          numquam? Et, quas?
        </div>
      </section>
    </div>
    <div id="email-form">
      <h2>Contact form</h2>
      <form id="sign-upform" @submit.prevent="processForm">
        <span v-if="!$v.name.required">Please enter your name</span>
        <div class="field">
          <label class="label">Name</label>
          <input type="text" name="name" class="input" v-model="name" />
        </div>

        <div class="field">
          <label class="label">Email</label>
          <input
            type="email"
            class="input"
            name="email"
            v-model="email"
            @blur="validateEmail"
          />
          <p class="help is-danger" v-if="errors.email">
            Please enter a valid Email adress.
          </p>
        </div>
        <textarea id="complaint-text" rows="3" cols="40" />
        <div class="field has-text-right">
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.about {
  color: aliceblue;
  font-size: 1.2em;
  display: flex;
  margin-top: 6em;
  justify-content: center;
}

#about1 {
  width: 500px;
  margin-left: 50px;
}

#about2 {
  width: 500px;
  margin-left: 50px;
}

#email-form {
  margin-top: 4em;
  color: aliceblue;
}

.page {
  width: inherit;
}
</style>

<script>
import { maxLength, required, alpha } from "vuelidate/lib/validators";
export default {
  name: "Complaints",
  data() {
    return {
      name: "",
      email: "",
      text: "",
      errors: {
        name: false,
        email: false,
      },
    };
  },
  validations: {
    name: {
      required,
    },
    text: {
      maxLength: maxLength(200),
      alpha,
    },
  },
  methods: {
    //Name-required validation
    submitComp() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        alert("Please enter name");
      }
    },
    //Email regular expression valoidator
    processForm() {
      alert("Thanks for the kind words... i hope");
    },
    validateEmail() {
      var isValid = this.emailregex(this.email);
      this.errors.email = !isValid;
    },
    emailregex(email) {
      var re = /^([a-z0-9_\-.])+@([a-z])+\.([a-z]{2,4})$/;
      return re.test(email);
    },
  },
};
</script>
