<template>
  <div class="product-display">
    <div v-scroll="handleProductImg" class="products">
      <div
        v-for="product in products"
        @click="$emit('show:product', product.id)"
      >
        <div class="tab-space"></div>
        <h2 v-bind:class="[activeId === product.id ? 'tab-active' : 'tab']">
          {{ product.name }}
        </h2>
      </div>
    </div>
    <div v-scroll="handleProductImg" class="display-white">
      <img :src="display.img" />
    </div>
    <div v-scroll="handleProductImg" class="product-display-text">
        <div class="text-top">
          <h1 style="text-transform: uppercase;">{{ display.name }}</h1>
          <div class="product-size">
            <p>{{ display.size }}</p>
          </div>
          <p>{{ display.description }}</p>
        </div>
        <div v-if="display.instructions != null" v-scroll="handleProductYellow" class="slogen-content"">
          <h2>Instructions:</h2>
          <div class="instructions-block" v-for="(instruction, index) in display.instructions">
            <li class="instruction-list">
              <div class="index">{{ index + 1 }}</div>
              <p>{{ instruction }}</p>
            </li>
          </div>
        </div>
        <div v-if="display.colors != null" class="my-3">
          <h2>Colors:</h2>
          <div class="d-flex">
            <div
              v-for="color in display.colors"
              :key="color.cId"
              class="color-box"
              :style="{ backgroundColor: color.cColor }"
              @mouseover="$emit('productUpdate', color.cImg)"
            ></div>
          </div>
        </div>
      <Button :buttonWidth="400" :buttonText="buttonText" />
    </div>
  </div>
</template>
<script scoped>
import Button from "@/components/Button.vue";

export default {
  name: "Products",
  data() {
    return {
      buttonText: "Shop Har"
    };
  },
  props: {
    products: Array,
    activeId: Number,
    display: Object,
    handleProductImg: Function,
    handleProductYellow: Function
  },
  components: {
    Button
  },
  methods: {},
  directives: {
    // directive 1
    scroll: {
      // directive definition
      inserted: function(el, binding) {
        const f = function(evt) {
          if (binding.value(evt, el)) {
            window.removeEventListener("scroll", f);
          }
        };
        window.addEventListener("scroll", f);
      }
    }
  }
};
</script>
<style scoped>
.text-top {
  margin-bottom: 2vh;
}

.black {
  margin-bottom: 15px;
}

.display-white {
  position: absolute;
  height: 520px;
  width: 520px;
  background: white;
  opacity: 0;
  margin-left: 20px;
  margin-top: 30px;
}

.product-size {
  border-bottom: 1px solid black;
}

.product-display {
  text-align: left;
  display: flex;
  justify-content: space-between;
}

.display-white img {
  object-fit: contain;
  height: 100%;
  width: 100%;
}

.product-display-text {
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  margin-left: 7em;
  height: 570px;
  border-top: 3px solid black;
  width: 410px;
  margin-right: 80px;
  border-bottom: 3px solid black;
}

.product-display-text h1 {
  margin-top: 13px;
  margin-bottom: 0px;
}

.product-display-text p {
  font-size: 13px;
  margin-bottom: 6px;
  margin-top: 12px;
}

.slogen-content * {
  transition: 3s all cubic-bezier(0.39, 0.575, 0.565, 1);
  margin-left: 10px;;
}

.slogen-content > h2 {
  margin-top: 22px;;
  margin-left: 50px;;
}

.slogen-content {
  text-align: left;
  height: 26vh;
  margin-bottom: 5vh;
  transition: width 2s;
  background: #F2F04F;
  width: 0vw;
  margin-left: -50px;
  padding-left: -50px;
}

.instruction-list {
  display: flex;
  align-items: center;
  width: 640px;
  padding-left: 15px;
}
.index {
  background-color: transparent;
  color: black;
  font-weight: normal;
  height: 26px;
  width: 26px;
  text-align: center;
  border: 1.6px solid black;
  border-radius: 50%;
  margin-right: 2%;
  margin-bottom: 0px;
}

.color-box {
  width: 32px;
  height: 32px;
  margin-top: 2px;
  margin-right: 8px;
}

.tab-space {
  height: 10px;
}

.products {
  opacity: 0;
  border-radius: 6px;
  height: 100%;
  flex-direction: column;
  padding-bottom: 5px;
  z-index: 1;
  position: relative;
  left: 22px;
  top: 225px;
}

.tab {
  color: grey;
  padding-left: 10px;
}

.tab-active {
  color: black;
  border-left: 3px solid black;
  padding-left: 7px;
}
</style>
