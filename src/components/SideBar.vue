<template>
  <div class="sidebar" >
    <div class="nav">
      <div class="nav-menu">
        <img class="menu-toggle" @click="handlerOne" alt="bento Go!" src="@/assets/bento-menu.svg" style="width: 25px" />
        <div class="menu-list" v-if="!isHidden" @click="handlerOne" v-bind:class="{ onhide: isHidden == true }">
          <router-link v-bind:class=" { onShow1: !isHidden }" class="menu-item" to="/">Home</router-link>
          <router-link v-bind:class=" { onShow2: !isHidden }" class="menu-item" to="/about">About Us</router-link>
          <router-link v-bind:class=" { onShow3: !isHidden }" class="menu-item" to="/faq">FAQ</router-link>
        </div>
      </div>
        <div v-scroll="handleLogo" class="nav-logo">
<router-link to="/">{{ brand }}</router-link>
        </div>
      <div class="nav-menu" v-scroll="handleSocial"  >
        <a href="https://www.youtube.com/channel/UC0JQ6FRCunSej59MF1S3wgQ" target="_blank"><i class="fab fa-youtube"></i></a>
        <a href="http://instagram.com/harstudio.dk" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://www.facebook.com/harstudio.dk" target="_blank"><i class="fab fa-facebook-f"></i></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  beforeUpdate() {
    console.log("Updating :D")
  },
 directives: {
  // directive 1
    scroll: {
     // directive definition
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
  name: "SideBar",
    methods: {
      handlerOne () {
        this.isHidden = !this.isHidden
      },
    },
  data() {
    return {
      isHidden: true,
    };
  },
  props: {
    brand: String,
    handleLogo: Function,
    handleSocial: Function,
  }
}
</script>
<style scoped>
.nav {
  z-index: 1;
  position: fixed;
  float: left;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 8vw;
  padding-left: 0px;
  padding-right: 0px;
  margin-top: 10px;
}

.nav-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.7s all cubic-bezier(0.39, 0.575, 0.565, 1);
}

.nav-menu > a {
  text-decoration: none;
  color: black;
}

.nav-menu > a:hover {
  color: rgb(241, 89, 66);
}


.nav-menu * {
  display: block;
  text-align: left;
  font-family: Arial;
}

.nav-menu *+* {
  margin-top: 10px;
}

.nav-logo {
  opacity: 0;
  transform: rotate(-90deg);
  white-space: nowrap;
}

.menu-list {
  font-size: 15px;
  white-space: nowrap;
  position: absolute;
  top: 80px;
  left: 30px;
}

.menu-list a {
  text-decoration: none;
  color: grey;
}

.menu-list a:hover {
  color: rgb(241, 89, 66);
}

.menu-list a.router-link-exact-active {
  text-decoration: none;
  color: black;
}

.onShow1 {
  animation: fadeIn1 0.6s ease-in;
}

.onShow2 {
  animation: fadeIn2 1s ease-in;

}

.onShow3 {
  animation: fadeIn3 1.5s ease-in;
}

@keyframes fadeIn1 {
  0% {
    opacity: 0;
  }

  45% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeIn2 {
  0% {
    opacity: 0;
  }
}

@keyframes fadeIn2 {
  0% {
    opacity: 0;
  }

  60% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}


@keyframes fadeIn3 {
  0% {
    opacity: 0;
  }

  75% {
    opacity: 0
  }

  100% {
    opacity: 1;
  }
}

a {
  text-decoration: none;
  color: black;
}


@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {

  .nav{
    padding: 21px 0px 0px 0px;
    margin:0;
  }
}
</style>
