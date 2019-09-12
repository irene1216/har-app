<template>
  <div class="all">
    <side-bar @isHidden />
    <div id="app">
      <transition name="moveInUp">
       <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
  import SideBar from '@/components/SideBar.vue'
  export default {
    name: 'app',
    components: {
      SideBar,
    },
    method: {
    },
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Niramit:700|Roboto|Staatliches&display=swap');

#app {
  font-family: "Niramit", sans-serif, Arial, sans-serif;
  text-align: center;
}

h1{
  text-align: left;
}

h2{
  font-family: "Roboto", sans-serif, Arial, sans-serif;
  font-size:1.25em;
  text-align:left;
  font-weight:bold;
}

p{
  font-family: "Roboto", sans-serif, Arial, sans-serif;
  font-size:1em;
  color:grey;
}

ul {
  font-family: "roboto";
  list-style-type: none;
}

ol {
  font-family: "roboto";
  list-style-type: none;
}

.moveInUp-enter-active {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  0%  {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}

/*.moveInUp-leave-active {
  animation: moveInUp .3s ease-in;
}

@keyframes moveInUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-400px);
  }
}*/

</style>
