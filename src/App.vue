<template>
  <div class="all">
    <side-bar />
        <router-link to="/">Home</router-link>
        <router-link to="/about">ddddddAbout</router-link>
    <div id="app">
      <router-view />
    </div>
  </div>
</template>

<script>
  import SideBar from '@/components/SideBar.vue'
  export default {
    name: 'app',
      components: {
        SideBar,
      }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Niramit:700|Roboto|Staatliches&display=swap');

#app {
  font-family: "Niramit", sans-serif, Arial, sans-serif;


  text-align: center;

}

ul {
  list-style-type: none;
}



</style>
