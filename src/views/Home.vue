<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <HelloWorld msg="Har Studio." />
    <div class="container">
      <div class="banner-section">
        <div class="banner-image">
          <h1>Hello</h1>
        </div>
        <div class="banner-text">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style>

.home {
  height:100vh;
}

.banner-section{
  display:flex;
}

.banner-image {
  background:purple;
}

</style>
