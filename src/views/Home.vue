<template>
  <div class="home">
    <transition appear appear-active-class="first-enter-active">
      <side-bar :handleLogo="handleLogo" :handleSocial="handleSocial" :brand="sideLogo" />
    </transition>
    <transition appear appear-active-class="first-enter-active">
      <HelloWorld msg="Har Studio." />
    </transition>
    <!-- banner -->
    <div class="section banner">
      <div class="container">
        <banner />
      </div>
    </div>
    <!-- Products -->
    <div class="section beige-bg">
      <div class="container">
            <div class="tabs">
              <products :products="products"
                        :activeId="activeId"
                        :display="display"
                        @show:product="showProduct"
                        @productUpdate="productUpdate"
                        class="product-tabs"
              />

        </div>
      </div>
    </div>
    <!-- Contact -->
    <div class="section">
      <ContactUs />
    </div>
    <!-- footer -->
    <div>
      <bottom-footer v-scroll="handleScroll" brand="Har Studio." />
    </div>
  </div>

</template>
<script>
// @ is an alias to /src
import SideBar from '@/components/SideBar.vue';
import HelloWorld from "@/components/HelloWorld.vue";
import Banner from "@/components/Banner.vue";
import Products from "@/components/Products.vue";
import axios from 'axios'
import ContactUs from "@/components/ContactUs.vue";
import BottomFooter from '@/components/BottomFooter.vue';
import Button from '@/components/Button.vue';


export default {
  name: "home",
  components: {
    HelloWorld,
    Banner,
    Products,
    SideBar,
    ContactUs,
    BottomFooter,
    Button,
  },
  data() {
    return {
      products: [],
      display: {},
      activeId: null,
      sideLogo: "Har Studio.",
      buttonText: "Shop Har",
    };
  },
  mounted() {
    console.log("hai hai")
    this.fetchData()
  },
  methods: {
    fetchData() {
      axios.get('products.json').then(response => {
        this.products = response.data;
        this.showProduct(this.products[0].id)
      })
    },
    showProduct(id) {
      console.log("product", id)
      if (this.display.id === id) {
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
    },
    handleSocial: function(evt, el) {

      console.log(window.scrollY)
      if (window.scrollY > 1600) {
        el.setAttribute(
          'style',
          'opacity: 1; transform: translate3d(0, -10vh, 0);'
          )
      }
      else if (window.scrollY < 1600) {
        el.setAttribute(
          'style',
          'opacity: 1; transform: translate3d(0, 0, 0); transition: 1s all cubic-bezier(0.39, 0.575, 0.565, 1)'
          )
      }
    },
    handleLogo: function(evt, el) {
      console.log(window.scrollY)
      if (window.scrollY > 100) {
        el.setAttribute(
          'style',
          'opacity: 1; transform: translate3d(0, 0px, 0); transform: rotate(-90deg); transition: 2s all cubic-bezier(0.39, 0.575, 0.565, 1)'
          )
      }
      else if (window.scrollY < 1350) {
        el.setAttribute(
          'style',
          'opacity: 0; transform: translate3d(0, 0px, 0); transform: rotate(-90deg); transition: 2s all cubic-bezier(0.39, 0.575, 0.565, 1)'
          )
      }
    },
    handleScroll: function(evt, el) {
      if (window.scrollY > 1500) {
        el.setAttribute(
          'style',
          'opacity: 1; transform: translate3d(0, 0px, 0)'
          )
      }
      return window.scrollY > 100
    },
  }
}
</script>
<style>



.first-enter-active {
  animation: ok 2s;
}

.second-enter-active {
  animation: ok 5s;
}

@keyframes ok {
  0% {
    opacity: 0;
  }

  37% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.photo {
  height: 30vh;
}

/*General*/
.home {
  height: 100vh;
}

.section {
  padding-top: 5%;
  padding-bottom: 5%;
}

.beige-bg {
  background: #EDEAE5;
  height: 100vh;
}



/*product section*/


/*animations*/

@keyframes jump {
  0% {
    transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
  }

  100% {
    transform: translate3d(0, 100%, 0) scale3d(1, 1, 1);
  }
}
</style>
