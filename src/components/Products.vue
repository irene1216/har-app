<template>
  <div class="products d-flex">
    <!-- tabs -->
    <div
      class="tabs d-flex flex-column"
      v-for="tab in tabs" :key="tab"
      v-on:click="switchTab(tab)"
    >
      <slot :name="tabHeadSlotName(tab)">
        {{tab}}
      </slot>
    </div>
    <div>
<!--         <p @v-on:click="showProduct('starter')">Har Starter Kit</p>
        <p @v-on:click="showProduct('fiber')">Har Fiber</p>
        <p @v-on:click="showProduct('mist')">Har Mist</p>
        <p @v-on:click="showProduct('refill')">Har Refill</p> -->
    </div>
    <!-- content  -->
    <div class="content">
      <div id="starter" class="tabcontent d-flex">
        <img src="" alt="" class="image">
        <div class="tabs-content-text">
          <p>starter</p>
        </div>
      </div>
      <div id="fiber" class="tabcontent d-flex">
        <img src="" alt="" class="image">
        <div class="tabs-content-text">
          <p>Fiber</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Products",
    props: {
      initialTab: String,
      tabs: Array
    },
    methods: {
      tabHeadSlotName(tabName) {
        return `tab-head-${tabName}`;
      },

      switchTab(tabName) {
        this.activeTab=tabName;
      },
    },
  };
</script>

<style>


.content{
  display:none;
}

.content:target{
  display:block;
}
.tabcontent img{
  background:green;
  height:100px;
  width:100px;
}

.tabs {
  background: transparent;
  outline:none;
  float:left;
  text-align: left;
  text-decoration: none;
  flex-basis: 20%;
  justify-content: center;
}
.tabs p {
  color:grey;
  padding-left: 8%;
  white-space: none;
  word-wrap: nowrap;
}
.tabs a:hover, a:active {
  color:black;
  text-decoration:none;
  border-left: 3px solid black;
}

</style>
