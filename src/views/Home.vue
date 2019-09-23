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
        <div class="product-section">
          <div class="product-display d-flex align-items-center">
           <div class="tabs">
            <products
            :products="products"
            :activeId="activeId"
            @show:product="showProduct" class="product-tabs"/>
          </div>
          <img :src="display.img" alt="" class="col-6 d-flex align-items-center">
          <div class="product-display-text col-6">
           <h1>{{display.name}}</h1>
           <p>{{display.size}}</p>
           <hr>
           <p>{{display.description}}</p>
           <div class="my-3">
             <div v-if="display.instructions == null ">
             </div>
             <div v-else>
              <div class="instructions yellow-bg">
               <h2>Instructions:</h2>
               <div v-for="(instruction, index) in display.instructions">
                <li class="instruction-list"><div class="index">{{index+1}}</div><p>{{instruction}}</p></li>
              </div>
              </div>
            </div>
          </div>
          <div class="my-3">
            <h2>Ingredients:</h2>
            <div v-for="ingredient in display.ingredients">
              <p class="m-0">{{ingredient}}</p>
            </div>
          </div>
          <div v-if="display.colors == null">
          </div>
          <div v-else>
            <div class="my-3">
              <h2>Colors:</h2>
              <div class="d-flex">
                <div v-for="color in display.colors"
                :key="color.cId"
                class="color-box"
                :style="{ backgroundColor: color.cColor}"
                @mouseover="productUpdate(color.cImg)">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
import SideBar from '@/components/SideBar.vue';
import HelloWorld from "@/components/HelloWorld.vue";
import Banner from "@/components/Banner.vue";
import Products from "@/components/Products.vue";
import axios from 'axios'


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
      products: [],
      display: {},
      activeId: null,
    };
  },
  mounted(){
    console.log("hai hai")
    this.fetchData()
  },
  methods:{
    fetchData(){
      axios.get('products.json').then(response => {
        this.products = response.data;
        this.showProduct(this.products[0].id)
      })
    },
    showProduct(id) {
      console.log("product",id)
      if (this.display.id === id){
        this.display === {}
        this.activeId === null
      } else {
        this.products.forEach((product) => {
          if (product.id === id) {
            this.display = product
            this.activeId = id
          }
        })
      }
    },
    productUpdate(cImg) {
      this.display.img = cImg
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

.yellow-bg{
    background: #F2F04F;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-left: -20px;
    padding-left: 20px;
    width: 675px;
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

  text-align: left;
}

.tab-content-dose {
  color:silver;
}

.tabs{
  position:absolute;
  z-index: 1;
}

.product-display{
  text-align: left;

}

.product-display img{
  object-fit: cover;
  height:700px;
  padding:0;
}

.product-display ol {
  padding:0;
  margin:0;
}

.product-display ul {
  padding:0;
  margin:0;
}

.product-display-text{
  margin-left: 3em;
  height:730px;
  border-top: 3px solid black;
  border-bottom: 3px solid black;
}

.instructions{
  z-index: 1;
}

.instruction-list {
  display:flex;
  align-items: center;
}

.index {
  background-color: transparent;
  color: black;
  font-weight: bold;
  border: 3px solid black;
  border-radius: 50%;
  margin-right: 2%;
  margin-bottom: 1.5%;
  padding: 4px 12px;
}

.color-box {
  width: 40px;
  height: 40px;
  margin-top: 5px;
  margin-right: 5px;
}

/*animations*/

@keyframes jump {
  0%   {transform: translate3d(0,0,0) scale3d(1,1,1);}
  100% {transform: translate3d(0,100%,0) scale3d(1,1,1);}
}

</style>
