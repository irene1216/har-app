<template>
  <div class="products d-flex">
    <!-- tabs -->
    <div class="tabs d-flex flex-column">
      <a href="#har-starter">Har Starter Kit</a>
        <a href="#har-fiber">Har Fiber</a>
        <a href="#har-mist" >Har Mist</a>
        <a href="#har-refill">Har Refill</a>
    </div>
    <!-- content  -->
    <div class="content">
      <div id="har-starter" class="tabcontent d-flex">
        <img src="" alt="" class="image">
        <div class="tabs-content-text">
          <p>starter</p>
        </div>
      </div>
      <div id="har-fiber" class="tabcontent d-flex">
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
    // methods: {
    //   showProduct (event, product) {
    //     var i, tabcontent, tablink;
    //     tabcontent = document.getElementsByClassName("tabscontet");
    //   }
    // },
  }
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
.tabs a {
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
