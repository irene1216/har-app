<template>
  <div class="home">
    <side-bar />
    <!-- header -->

    <HelloWorld msg="Har Studio."/>
    <!-- banner -->
    <div class="section banner">
      <div class="container">
        <banner/>
      </div>
    </div>
    <!-- Products -->
    <div class="section beige-bg">
      <div class="container">
        <products :tabs="tabs" :initialTab="initialTab">
          <!-- Har Fiber -->
          <template slot="tab-head-fiber">
            Har Fiber
          </template>
          <template class="tab-content" slot="tab-panel-fiber">
            <div class="col-6">
              <img src="../assets/White.jpg"/>
            </div>
            <div class="col-6">
              <div class="tab-content-text">
                <h1 class="pt-3">Har Fiber</h1>
                <p class="tab-content-dose">Size: 12g (Can last for 2-4 weeks depending on individual consumption)</p>
                <hr>
                <p>HAR FIBERS are made from naturally colored organic cotton fibers. HAR FIBERS naturally blends with your existing hair and conceals thinned and bald areas. The fibers bind static to your existing strands of hair, giving a thick and dense look in just 30 seconds.</p>
                <h2>Instructions</h2>
                <ol class="instructions">
                  <li>Spray HAR FIBERS  over thinned areas</li>
                  <li>Adjust the amount of applied fibers as needed</li>
                  <li>Spray HAR FIBERS  over thinned areas</li>
                </ol>
                <h2>Ingredients</h2>
                <p>Gossypium Herbaceum Fiber<br>Mineral-based color pigments</p>
                <h2>Colors:</h2>
                <div class="colors">
                </div>
              </div>
            </div>
          </template>
          <!-- Har Starter Kit -->
          <template slot="tab-head-starter">
            Har Starter Kit
          </template>
          <template class="tab-content" slot="tab-panel-starter">
            <div class="col-6">
              <img src="../assets/starter.jpg"/>
            </div>
            <div class="col-6">
              <div class="tab-content-text">
                <h1 class="pt-3">Har Starter Kit</h1>
                <br>
                <hr>
                <p>HAR STARTER KIT is for you who want the perfect start. Here you have everything you need to get your confidence back</p>
                <h2>Instructions</h2>
                <ol class="instructions">
                  <li>Shake liberally onto thinning areas</li>
                  <li>Gently pat hair to disperse fibers and style as usual.</li>
                  <li>Follow up with HAR MIST for greater durability.</li>
                </ol>
                <h2>Ingredients</h2>
                <p>Gossypium Herbaceum Fiber<br>Mineral-based color pigments</p>
                <h2>Har Starter Kit contains:</h2>
                <p>1 piece. HAR HAIR FIBER that ensures you full and dense hair.1 piece. HAR MIST which ensures you maximized power and durability of your HAR HAIR FIBERS.See further details and guidance under the respective products.</p>
              </div>
            </div>
          </template>
          <!-- Har mist -->
          <template slot="tab-head-mist">
            Har Mist
          </template>
          <template class="tab-content" slot="tab-panel-mist">
            <div class="col-6">
              <img src="../assets/mist.jpg">
            </div>
            <div class="col-6">
              <div class="tab-content-text">
                <h1 class="pt-3">Har Mist</h1>
                <p class="tab-content-dose">Size: 100ml (Can last for 4-6 weeks depending on individual consumption)</p>
                <hr>
                <p>HAR MIST is designed to maximize the effect of HAR FIBER. HAR MIST attach the fibers to your hair and ensures optimum durability, volume and expression. Use after applying HAR FIBER.</p>
                <h2>Instructions</h2>
                <ol class="instructions">
                  <li>Spray HAR FIBERS  over thinned areas</li>
                  <li>Adjust the amount of applied fibers as needed</li>
                  <li>Spray HAR FIBERS  over thinned areas</li>
                </ol>
                <h2>Ingredients</h2>
                <p>Water<br>Acrylate<br>Propylene Glycol<br>Oxidation of Castor Oil<br>EDTA-2Na.</p>
              </div>
            </div>
          </template>
          <!-- Har Refill -->
          <template slot="tab-head-refill">
            Har Refill
          </template>
          <template class="tab-content" slot="tab-panel-refill">
            <div class="col-6">
              <img src="../assets/refill.jpg">
            </div>
            <div class="col-6">
              <div class="tab-content-text">
                <h1 class="pt-3">Har Refill</h1>
                <p class="tab-content-dose">Size: 25g (Can last for 4-8 weeks depending on individual consumption)</p>
                <hr>
                <p>HAR FIBERS are made from naturally colored organic cotton fibers. HAR FIBERS naturally blends with your existing hair and conceals thinned and bald areas. The fibers bind static to your existing strands of hair, giving a thick and dense look in just 30 seconds.</p>
                <h2>Instructions</h2>
                <ol class="instructions">
                  <li>Shake liberally onto thinning areas</li>
                  <li>Gently pat hair to disperse fibers and style as usual.</li>
                  <li>Follow up with HAR MIST for greater durability.</li>
                </ol>
                <h2>Ingredients</h2>
                <p>Gossypium Herbaceum Fiber<br>Mineral-based color pigments</p>
                <h2>Colors:</h2>
                <div class="colors">
                </div>
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
import SideBar from '@/components/SideBar.vue'
import HelloWorld from "@/components/HelloWorld.vue";
import Banner from "@/components/Banner.vue";
import Products from "@/components/Products.vue";
export default {
  name: "home",
  components: {
    HelloWorld,
    Banner,
    Products,
    SideBar,
  },
  data () {
    return {
      initialTab: "fiber",
      tabs: ["fiber","starter", "mist", "refill"],
      products:[{
        productId: 1,
        productColor: "Black",
        productImg:'../assets/Black.jpg',
      },{
        productId: 2,
        productColor: "Wlack",
        productImg:'../assets/White.jpg',
      }
      ]
    };
  },
  methods:{
    updateProduct(productImg){
      this.image = productImg
    }
  }
}

</script>

<style>

/*General*/
.home {
  height:100vh;
}

.section {
  padding-top: 5%;
  padding-bottom: 5%;
}

.beige-bg {
  background:#EDEAE5;
}

/*buttons*/
.btn-black{
  background: black;
  color:white;
  height:45px;
  width:75%;
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
hr{
  border: 0.5px solid black;
}

.tab-panel img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.tab-content-text{
  border-top: 3px solid black;
  border-bottom: 3px solid black;
  text-align: left;
}

.tab-content-dose {
  color:silver;
}

.instructions {
  list-style-type: none;
  padding:0;
}

.instructions li {
  counter-increment: step-counter;
  margin-bottom: 4%;
  margin-top: 4%;
  color: grey;
}

.instructions li::before {
  content: counter(step-counter);
  background-color: transparent;
  color: black;
  font-weight: bold;
  border: 3px solid black;
  border-radius: 50%;
  margin-right: 2%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 4px 10px;

}


/*animations*/

@keyframes jump {
  0%   {transform: translate3d(0,0,0) scale3d(1,1,1);}
  100% {transform: translate3d(0,100%,0) scale3d(1,1,1);}
}

</style>
