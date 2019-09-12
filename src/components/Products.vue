<template>
  <div class="products d-flex">
    <!-- tabs -->
    <!-- div class="col-2"> -->
      <header class="product-header">
        <ul class="tab-heads">
          <li class="tab-head pl-3" v-for="tab in tabs" :key="tab"v-bind:class="{'tab-head--active' : activeTab === tab }"v-on:click="switchTab(tab)">
            <slot :name="tabHeadSlotName(tab)">{{tab}}</slot>
          </li>
        </ul>
      </header>
  <!--   </div> -->
    <!-- content  -->
 <main class="product-body">
        <div class="tab-panel d-flex"><slot :name="tabPanelSlotName"></slot></div>
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
  height: 100%;
}

.product-header{
  position:absolute;
  z-index: 1;
}

.product-body{
  position:relative;
}

.tab-heads{
  height:100%;
  color:grey;
  text-align: left;
  padding-left: 3px;
}

.tab-head--active{
  color:black;
  border-left: 3px solid black;
}

</style>
