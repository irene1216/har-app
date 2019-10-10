<template>
  <div class="home">
    <transition appear appear-active-class="first-enter-active">
      <side-bar

                :brand="sideLogo"
                :handleLogo="handleLogo"
                :handleSocial="handleSocial"
      />
    </transition>
    <transition appear appear-active-class="first-enter-active">
      <HelloWorld msg="Har Studio." />
    </transition>
    <!-- banner -->

    <div class="section banner">
      <div class="container">
            <transition appear appear-active-class="first-enter-active">

        <banner />
        </transition>
      </div>
    </div>
    <!-- Products -->
    <div class="section beige-bg">
      <div class="container">
            <div class="tabs">
              <products :products="products"
                        :activeId="activeId"
                        :display="display"
                        :handleProductImg="handleProductImg"
                        :handleProductYellow="handleProductYellow"
                        @show:product="showProduct"
                        @productUpdate="productUpdate"
                        class="product-tabs"
              />

        </div>
      </div>
    </div>
    <!-- Contact -->
    <div class="section">
      <ContactUs :handleContact="handleContact" />
    </div>
    <!-- footer -->
    <div>
      <bottom-footer v-scroll="handleFooter" class="effect-box" brand="Har Studio." />
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
import { TweenMax } from 'gsap';


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
  directives: {
    scroll: {
      inserted: function (el, binding) {
        const f = function (evt) {
          if (binding.value(evt, el)) {
            window.removeEventListener('scroll', f)
          }
        }
        window.addEventListener('scroll', f)
      }
    }
  },
  data() {
    return {
      products: [],
      activeId: null,
      sideLogo: "Har Studio.",
      buttonText: "Shop Har",
      hovered: false,
      colorsAry: [],
      display: {}
    };
  },
  mounted() {
    this.fetchData()
    let page = this
    console.log("omggggggggg")
    console.log(page.display)
      // if (this.hovered === false) {
      //   this.colorsAry.forEach((color)=>{
      //     console.log(color.cImg)
      //     setTimeout(()=>{page.productUpdate(cImg)}, 1000)

      //   })
      // }
  },
  methods: {
    fetchData() {
      axios.get('products.json').then(response => {
        this.products = response.data;
        this.colorsAry = response.data[0].colors
        this.showProduct(this.products[0].id)
      })
    },
    showProduct(id) {
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
      if (window.scrollY > 1700) {
        el.setAttribute(
          'style',
          'opacity: 1; transform: translate3d(0, -14vh, 0);'
          )
      }
      else if (window.scrollY < 1700) {
        el.setAttribute(
          'style',
          'opacity: 1; transform: translate3d(0, 0, 0); transition: 1s all cubic-bezier(0.39, 0.575, 0.565, 1)'
          )
      }
    },
    handleLogo: function(evt, el) {
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
    handleFooter: function(evt, el) {
      if (window.scrollY > 1600) {
          el.setAttribute(
            'style',
            'opacity: 1; transform: translate3d(0, 0px, 0)'
          )
      }
    },
    handleProductImg: function(evt, el) {
      if (window.scrollY > 350) {
        TweenMax.to(el, 0.6, {
          opacity: 1,
          y: -5,
          ease: Sine.easeIn,
        })
      }
    },
    handleProductYellow: function(evt, el) {
      if (window.scrollY > 750) {
        el.setAttribute(
          'style',
          'width: 640px;',
          'opacity: 1;',
          // 'animation: go 2s;'
        )
      }
    },
    handleContact: function(evt, el) {
      if (window.scrollY > 1250) {
        TweenMax.to(el, 0.6, {
          opacity: 1,
          y: -5,
          ease: Sine.easeIn,
        })
      }
    }
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

.effect-box {
  opacity: 0;
  transition: 3s all cubic-bezier(0.39, 0.575, 0.565, 1);
}

.section {
  padding-top: 5%;
  padding-bottom: 5%;
}

.beige-bg {
  background: #EDEAE5;
  height: 100vh;
}

@keyframes go {
  from {
    width: 0vw;
    opacity: 0;
  }
  to {
    width: 50vw;
    opacity: 1;
  }
}
</style>
