<template>
  <div class="about">
    <div class="content">
    <side-bar :handleSocial="handleSocial"
              :handleLogo="handleLogo"
              :brand="sideLogo"
    />
      <SmallLogo v-scroll="handleTopLogo" :msg="smallLogo" />
        <transition
          appear
          appear-active-class="image-enter-active"
        >
          <img class="about-img" src="../assets/alex_about.png"/>
        </transition>
      <div class="slogen">
        <h2>
          {{slogen}}
        </h2>
      </div>
    <transition
      appear
      appear-active-class="fade-enter-active"
      >
        <div class="slogen-content">
          <p>
            {{content}}
          </p>

        <Button :buttonWidth=400 :buttonText="buttonText" />
        </div>
    </transition>
    </div>
    <bottom-footer v-scroll="handleFooter" class="effect-box" brand="Har Studio." />
  </div>
</template>

<script>
import SmallLogo from "@/components/SmallLogo.vue";
import SideBar from '@/components/SideBar.vue';
import BottomFooter from '@/components/BottomFooter.vue'
import Button from '@/components/Button.vue'

  export default{
    name: "About",
    mounted(){
      this.mounted = true
    },
    methods: {
      handleLogo: function (evt, el) {
        if (window.scrollY > 20) {
          el.setAttribute(
            'style',
            'opacity: 0; transform: translate3d(0, 0px, 0); transform: rotate(-90deg); transition: 2s all cubic-bezier(0.39, 0.575, 0.565, 1)'
          )
        }
        else if (window.scrollY === 0) {
          el.setAttribute(
            'style',
            'opacity: 0; transform: translate3d(0, 0px, 0); transform: rotate(-90deg); transition: 2s all cubic-bezier(0.39, 0.575, 0.565, 1)'
          )
        }
      },
      handleTopLogo: function (evt, el) {
        if (window.scrollY > 10) {
          el.setAttribute(
            'style',
            'opacity: 0; transform: translate3d(0, -10px, 0); transition: 0.5s all cubic-bezier(0.39, 0.575, 0.565, 1)'
          )
        }
        else if (window.scrollY === 0) {
          el.setAttribute(
            'style',
            'opacity: 1; transform: translate3d(0, 0px, 0); transition: 1s all cubic-bezier(0.39, 0.575, 0.565, 1)'
          )
        }
      },
      handleFooter: function (evt, el) {
          console.log(window.scrollY)
        if (window.scrollY > 50) {
          el.setAttribute(
            'style',
            'opacity: 1; transform: translate3d(0, 0px, 0)'
          )
        }
        else if (window.scrollY === 0) {
          el.setAttribute(
            'style',
            'opacity: 0; transform: translate3d(0, 0, 0); transition: 1s all cubic-bezier(0.39, 0.575, 0.565, 1)'
          )
        }
      },
      handleSocial: function (evt, el) {
          console.log(window.scrollY)
        if (window.scrollY > 30) {
          el.setAttribute(
            'style',
            'opacity: 1; transform: translate3d(0, -10vh, 0);'
          )
        }
        else if (window.scrollY === 0) {
          el.setAttribute(
            'style',
            'opacity: 1; transform: translate3d(0, 0, 0); transition: 1s all cubic-bezier(0.39, 0.575, 0.565, 1)'
          )
        }
      },
    },
    data() {
      return {
        smallLogo: "Har Studio.",
        buttonText: "Get in touch",
        sideLogo: "Har Studio.",
        mounted: false,
        slogen: "We're Here to Help",
        content: "HAR STUDIO is intended for people, men as well as women who puts beauty and well-being in the forefront. HAR STUDIO brings high performance products on the market that combine the best ingredients and the greatest degree of convenience so men and women no longer have to live in stress and anxiety about their involuntary hair loss.",
      }
    },
    components: {
      SmallLogo,
      SideBar,
      BottomFooter,
      Button
    }
  }
</script>

<style scoped>
.slogen-content {
  text-align: left;
  height: 24vh;
  width: 50vw;
  margin-bottom: 10vh;
  padding: 20px;
  background: #F2F04F;
  width: 50vw;
}

.fade-enter-active {
  animation: go 2s;
}

@keyframes go {
  from {
    width: 0vw;
    opacity: 0;
  }
  to {
    width: 50vw;
    opacity: 1;
  }
}

.image-enter-active {
  animation: ok 5s;
}

@keyframes ok {
  0% {
    opacity: 0;
  }
  27% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.black {
  margin-left: 15.5vw;
  margin-top: 8vh;
}

.slogen-content > p {
  padding-left: 15.5vw;
  width: 45vw;
  transition: 3s all cubic-bezier(0.39, 0.575, 0.565, 1);
}

.open-enter-active, .open-leave-active {
  transition: opacity .5s;
}
.open-enter, .open-leave-to /* .open-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.content {
  flex: 1;
}

.about-img {
  width: 45vw;
  float: right;
  /*margin-right: -90px;*/
  margin-top: 16vh;
  transition: 3s all cubic-bezier(0.39, 0.575, 0.565, 1);
}

.effect-box {
  opacity: 0;
  transition: 3s all cubic-bezier(0.39, 0.575, 0.565, 1);
}

.slogen {
  margin-top: 15vh;
  padding-left: 17vw;
  height: 25vh;
  width: 43vw;
}

.slogen > h2{
  font-family: DM Sans;
  font-size: 4rem;
  text-align: left;
}


.about {
  /*width: 100vw;*/
  background: rgb(237,234,229);
  height: 110vh;
  display: flex;
  flex-direction: column;
}
</style>
