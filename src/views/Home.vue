<template>
  <div class="home">
    <!-- header -->
    <HelloWorld msg="Har Studio." />
    <div class="container">
      <!-- banner -->
      <div class="section">
        <banner/>
      </div>
      <!-- Products -->
      <div class="section">
      </div>
      <!-- Contact -->
      <div class="section">
      </div>
      <!-- footer -->

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Banner from "@/components/Banner.vue";


export default {
  name: "home",
  components: {
    HelloWorld,
    Banner
  }
};
</script>

<style>

/*general styling*/

.home {
  height:100vh;
}

.container{
  height:100%;
}

.section{
  height:100%;
}

.btn-black{
  background: black;
  color:white;
  height:45px;
  width:300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
}

.btn-black h2{
  margin:0;
}

</style>
