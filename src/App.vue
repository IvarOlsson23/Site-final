<template>
  <div id="app">
    <nav id="nav">
      <img id="logo" alt="small-logo-nav" src="@/assets/Logo@48px.png" />
      <router-link to="/">Home</router-link>
      <router-link to="/about">About Me</router-link>
      <router-link to="/login">login</router-link>
      <router-link to="/Skills">Fetch</router-link>
    </nav>
    <transition
      name="router-anim"
      enter-active-class="animated fadeInLeft"
      leave-active-class="animated fadeOutRight"
    >
      <router-view />
    </transition>

    <footer id="footer">
      <a href="#" class="fa fa-facebook"></a>
      <a href="#" class="fa fa-twitter"></a>
      <a href="#" class="fa fa-instagram"></a>
      <a href="#" class="fa fa-linkedin"></a>
      <img
        id="logo-footer"
        alt="small-logo-footer"
        src="@/assets/Logo@48px.png"
      />
    </footer>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap");
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

#app {
  list-style: none;
  font-family: "Architects Daughter", cursive;
  background-image: url("~@/assets/Birds.png");
  text-align: center;
  height: 100vh;
  background-color: black;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #929292;
  text-decoration: none;
  font-size: 1.2em;
  padding: 1em;
}

#nav a.router-link-exact-active {
  color: rgb(211, 168, 168);
}

#logo {
  float: left;
}

#footer {
  background-color: #020101;
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
export default {};
</script>
