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
        <div class="product-section d-flex align-items-center">
          <div class="tabs">
            <products
            :products="products"
            :activeId="activeId"
            @show:product="showProduct" class="product-tabs"/>
          </div>
          <div class="product-display d-flex">
           <img :src="display.img" alt="" class="col-6">
           <div class="product-display-text col-6">
             <h1>{{display.name}}</h1>
             <p>{{display.size}}</p>
             <hr>
             <p>{{display.description}}</p>
             <div v-if="display.instructions == [] ">
             </div>
             <div v-else>
               <h2>Instructions:</h2>
               <ol v-for="(instruction, index) in display.instructions">
                <li class="instructions"><div class="index">{{index+1}}</div>{{instruction}}</li>
              </ol>
            </div>
            <ul v-for="ingredient in display.ingredients">
              <li>{{ingredient}}</li>
            </ul>
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
  height:500px;
  width:500px;
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
  border-top: 3px solid black;
  border-bottom: 3px solid black;
}

.instructions {
  display:flex;
  align-items: center;

}


.index {
  content: counter(step-counter);
  background-color: transparent;
  color: black;
  font-weight: bold;
  border: 3px solid black;
  border-radius: 50%;
  margin-right: 2%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 4px 12px;

}


/*animations*/

@keyframes jump {
  0%   {transform: translate3d(0,0,0) scale3d(1,1,1);}
  100% {transform: translate3d(0,100%,0) scale3d(1,1,1);}
}

</style>
