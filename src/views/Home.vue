<template>
  <div class="home">
    <!-- header -->
    <HelloWorld msg="Har Studio."/>

    <!-- banner -->
    <div class="section banner mt-5">
      <div class="container">
        <banner/>
        <img class="arrow" src="@/assets/arrow-down.svg">
      </div>
    </div>
    <!-- Products -->
    <div class="section color py-5">
      <div class="container">
        <products :tabs="tabs" :initialTab="initialTab">
          <!-- Har Fiber -->
          <template slot="tab-head-fiber">
            Har Fiber
          </template>
          <template class="tab-content" slot="tab-panel-fiber">
            <div class="col-6"style="background:blue;">
              <img src="">
            </div>
            <div class="col-6">
              <div class="tab-content-text">
                <h1>Har Fiber</h1>
                <p class="amount">Size: (2-4 weeks depending on individual consumption)</p>
                <hr>
                <p>HAVE HAIR FIBERS are made from naturally colored organic cotton fibers. HAVE HAIR FIBER naturally blends with your existing hair and conceals thinned and bald areas. The fibers bind static to your existing strands of hair, giving a thick and dense look in just 30 seconds.</p>
                <h2>Instructions</h2>
                <ol>
                  <li>Spray HAIR FIBER over thinned areas</li>
                  <li>Adjust the amount of applied fibers as needed</li>
                  <li>Spray HAIR FIBER over thinned areas</li>
                </ol>
                <h2>Ingredients</h2>
                <p>Gossypium Herbaceum Fiber<br>Mineral-based color pigments</p>
                <h2>Colors:</h2>
              </div>
            </div>
          </template>
          <!-- Har Starter Kit -->
          <template slot="tab-head-starter">
            Har Starter Kit
          </template>
          <template class="tab-content" slot="tab-panel-starter">
            <div class="col-6"style="background:blue;">
              <img src="">
            </div>
            <div class="col-6">
              <div class="tab-content-text">
                <div class="title px-5">
                  <h1>Har Fiber</h1>
                  <p class="amount">Size: (2-4 weeks depending on individual consumption)</p>
                </div>
              </div>
            </div>
          </template>
          <!-- Har mist -->
          <template slot="tab-head-mist">
            Har Mist
          </template>
          <template class="tab-content" slot="tab-panel-mist">
            <div class="col-6"style="background:blue;">
              <img src="">
            </div>
            <div class="col-6">
              <div class="tab-content-text">
                <h1>Har Mist</h1>
                <p>Starterrrrrrrrrrr</p>
              </div>
            </div>
          </template>
          <!-- Har Refill -->
          <template slot="tab-head-refill">
            Har Refill
          </template>
          <template class="tab-content" slot="tab-panel-refill">
            <div class="col-6"style="background:blue;">
              <img src="">
            </div>
            <div class="col-6">
              <div class="tab-content-text">
                <h1>Har Refill</h1>
                <p>Starterrrrrrrrrrr</p>
              </div>
            </div>
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
      initialTab: "fiber",
      tabs: ["fiber","starter", "mist", "refill"]
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

.banner{
  height:85%;
}
.color{
  background:#EDEAE5;
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

/*product section*/

.tab-content-text{
  border-top: 3px solid black;
  border-bottom: 3px solid black;
  text-align: left;
}

.description {
  margin-top: 5px;
  max-width: 85%;
  line-height: 22px;
  margin-bottom: 10px;
}

.arrow {
  width: 25px;
  position: absolute;
  bottom: 30px;
  transform-origin: 20% 20%;
  animation: jump 1s linear alternate infinite;
}

@keyframes jump {
  0%   {transform: translate3d(0,0,0) scale3d(1,1,1);}
  100% {transform: translate3d(0,100%,0) scale3d(1,1,1);}
}

</style>
