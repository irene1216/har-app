<template>
  <div class="all">
    <div id="app">
      <transition name="moveInUp">
       <router-view />
      </transition>
    <!-- <bottom-footer brand="Har Studio." /> -->
    </div>
  </div>
</template>
<script>
  export default {
    name: 'app'
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=DM+Sans:700|Roboto|Staatliches&display=swap');
@import url('https://use.fontawesome.com/releases/v5.2.0/css/all.css"');


#app {
  font-family: 'DM Sans', sans-serif;
  text-align: center;
}

.sticky {
  position: fixed;
  top: 0;
}

h1{
  text-align: left;
  font-family: 'DM Sans', sans-serif;
  font-size:3em;
}

h2{
  font-family: "Roboto", Arial, sans-serif;
  font-size:1.17em;
  text-align:left;
  font-weight:bold;
}

p{
  font-family: "Roboto", Arial, sans-serif;
  font-size: 14px;
  color:#4F4F4F;
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

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {

    *{
      margin:0;
      padding:0;
    }


    h1{
      font-size:2em;
      text-align:left;
    }

    h2{
      font-size:1em;
      text-align:left;


    }
}


</style>
