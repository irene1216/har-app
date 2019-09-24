<template>
  <div class="products">
    <div class="products" v-for="product in products">
      <div @click="$emit('show:product', product.id)" v-bind:class="[activeId === product.id ? 'tab-active' : 'tab']">
        <h2>{{product.name}}</h2>
      </div>
    </div>
  </div>
</template>

<script scoped>
  export default {
    name: "Products",
    props: {
      products: Array,
      activeId: Number,
    },
  };
</script>

<style scoped>

.products {
  border-radius: 6px;
  height: 100%;
  flex-direction: column;
  padding-bottom: 5px;
  z-index: 1;
}

.tab{
  color:grey;
  padding-left: 10px;
}

.tab-active{
  color:black;
  border-left: 3px solid black;
  padding-left: 7px;
}

</style>
