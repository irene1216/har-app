<template>
  <div class="home">
    <!-- header -->
    <HelloWorld msg="Har Studio."/>

    <!-- banner -->
    <div class="section mt-5">
      <div class="container">
        <banner/>
      </div>
    </div>
    <!-- Products -->
    <div class="section color py-5">
      <div class="container">
        <products :tabs="tabs" :initialTab="initialTab">
        <template slot="tab-head-starter">
          Har Starter Kit
       </template>
       <template slot="tab-panel-starter">
        <h1>Har Starter Kit</h1>
        <p>Starterrrrrrrrrrr</p>
      </template>
    </products>
    </div>
  </div>
  <!-- Contact -->
  <div class="section">
  </div>
  <!-- footer -->


</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Banner from "@/components/Banner.vue";
import Products from "@/components/Products.vue";
export default {
  name: "home",
  components: {
    HelloWorld,
    Banner,
    Products,
  },
  data () {
    return {
      initialTab: "starter",
      tabs: ["starter", "Har Fiber", "Har Mist", "Har Refill"]
    };
  }
}
</script>

<style>

/*general styling*/


.home {
  height:100vh;
}

.container{
  height:100%;
}

.color{
  background:#EDEAE5;
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
  border:none;
}

.btn-black h2{
  margin:0;
}

.title {
  margin-top: 10px;
  margin-bottom: 20px;
}

.description {
  margin-top: 5px;
  max-width: 85%;
  line-height: 22px;
  margin-bottom: 10px;
}

</style>
