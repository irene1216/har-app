<template>
  <div class="products d-flex">
    <!-- tabs -->
    <header class="product-header">
      <ul class="tab-heads d-flex flex-column">
        <li class="tab-head pl-3" v-for="tab in tabs" :key="tab"v-bind:class="{'tab-head--active' : activeTab === tab }"v-on:click="switchTab(tab)">
          <slot :name="tabHeadSlotName(tab)">{{tab}}</slot>
        </li>
      </ul>
    </header>
    <!-- content  -->
    <main class="product-body">
      <div class="tab-panel"><slot :name="tabPanelSlotName"></slot></div>
    </main>
  </div>
</template>

<script>
  export default {
    name: "Products",
    props: {
      initialTab: String,
      tabs: Array
    },
    data(){
      return{
        activeTab:this.initialTab
      };
    },
    computed: {
      tabPanelSlotName(){
        return`tab-panel-${this.activeTab}`;
      }
    },
    methods: {
      tabHeadSlotName(tabName) {
        return `tab-head-${tabName}`;
      },

      switchTab(tabName) {
        this.activeTab = tabName;
      },
    },
  };
</script>

<style scoped>

.products {
  border-radius: 6px;
  width: 100%;
  height: 100%;
  background:white;
}

.product-body {
  padding: 20px 16px;
  flex-basis: 80%;
}


.tab-heads{
  height:100%;
  color:grey;
  text-align: left;
  padding-left: 3px;
    justify-content: center;
  align-content: center;
  flex-basis: 20%;
}

.tab-head--active{
  color:black;
  border-left: 3px solid black;
}

</style>
