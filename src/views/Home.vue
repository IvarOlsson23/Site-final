<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div id="main-wrapper">
      <h1 id="header">Ivar Olsson <br />Practice Project</h1>
    </div>
    <div id="card-wrapper">
      <div class="cardhel">
        <b-card
          title="Projects"
          img-src="https://picsum.photos/600/300/?image=6"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text> Some quick example text </b-card-text>

          <b-button href="#" class="button" variant="primary"
            >Go somewhere</b-button
          >
        </b-card>
      </div>
      <div class="cardhel">
        <b-card
          title="Experience"
          img-src="https://picsum.photos/600/300/?image=20"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text> Some quick example text </b-card-text>

          <b-button href="#" class="button" variant="primary"
            >Go somewhere</b-button
          >
        </b-card>
      </div>

      <div class="cardhel">
        <b-card
          title="Merits"
          img-src="https://picsum.photos/600/300/?image=38"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text> Some quick example text </b-card-text>

          <b-button href="#" class="button" variant="primary"
            >Go somewhere</b-button
          >
        </b-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
#card-wrapper {
  text-align: center;
  height: 35em;
}

.mb-2 {
  position: relative;
  width: 300px;
  height: 230px;
  margin: 80px 0;
  margin: 1em;
  background-color: #e9e7cb;
}

.mb-2:before,
.mb-2:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 150px solid transparent;
  border-right: 150px solid transparent;
}

.mb-2:before {
  bottom: 100%;
  border-bottom: 80px solid #e9e7cb;
}

.mb-2:after {
  top: 100%;
  width: 0;
  border-top: 80px solid#e9e7cb;
}

.button {
  margin-top: 5em;
  border: black;
  background: rgb(51, 51, 51);
}

#card-wrapper {
  display: flex;
  justify-content: center;
  background: radial-gradient(#252525, #06060c);
}

#main-wrapper {
  background-image: url("~@/assets/wrapper.jpg");
  height: 50vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#header {
  color: rgb(255, 255, 255);
  font-family: "Amatic SC", cursive;
}
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap");
</style>




