<template id="body">
  <div id="app">
    <nav id="nav">
      <li>
        <img id="logo" src="@/assets/Logo@48px.png" />
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/Skills">Cities</router-link>
        <router-link to="/login">login</router-link>
        <a>
          <b-dropdown
            id="dropdown-offset"
            offset="25"
            text="Offset Dropdown"
            class="m-2"
          >
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here</b-dropdown-item>
          </b-dropdown>
        </a>
        <span id="username">Welcome {{ user }}</span>
      </li>
    </nav>
    <router-view />
    <footer id="footer">
      <a href="#" class="fa fa-facebook"></a>
      <a href="#" class="fa fa-twitter"></a>
      <a href="#" class="fa fa-instagram"></a>
      <a href="#" class="fa fa-linkedin"></a>
      <img id="logo-footer" src="@/assets/Logo@48px.png" />
    </footer>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
  </div>
</template>




<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap");

* {
  list-style: none;
  background-color: #0d0d0f;
  font-family: "Montserrat", sans-serif;
}

#username {
  color: rgb(255, 255, 255);
  margin-left: 20em;
}

#app {
  text-align: center;
  height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #6b6b6b;
  text-decoration: none;
  font-size: 1.2em;
  padding: 1em;
}

#nav a.router-link-exact-active {
  color: aliceblue;
}

#logo {
  float: left;
}

#footer {
  background-color: #0d0d0f;
  color: white;
  height: 5vh;
  display: flex;
  justify-content: center;
  position: fixed;
  padding: 10px 10px 0px 10px;
  bottom: 0;
  width: 100%;
}

#footer a {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1em;
  color: white;
}

#logo-footer {
  padding: 5px;
}
</style>

<script>
let user = localStorage.getItem("userText");
console.log(user);
export default {
  data() {
    return {
      user: null,
    };
  },
};
</script>



