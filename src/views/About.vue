<template>
  <div class="about">
    <div class="content">
      <side-bar />
      <SmallLogo msg="Har Studio." />
        <img v-scroll="handleScroll" class="about-img"src="../assets/alex_about.png"/>
      <div class="slogen">
        <h2>
          {{slogen}}
        </h2>
      </div>
      <div v-scroll="scrollerSlider" class="slogen-content">
        <p v-scroll="sliderText">
          {{content}}
        </p>
      </div>
    </div>
    <bottom-footer v-scroll="handleScroll" class="effect-box" brand="Har Studio." />
  </div>
</template>

<script>
import SmallLogo from "@/components/SmallLogo.vue";
import SideBar from '@/components/SideBar.vue';
import BottomFooter from '@/components/BottomFooter.vue'

  export default{
    name: "About",
    methods: {
      handleScroll: function (evt, el) {
        if (window.scrollY > 50) {
          el.setAttribute(
            'style',
            'opacity: 1; transform: translate3d(0, 0px, 0)'
          )
        }
        return window.scrollY > 100
      },
      scrollerSlider: function (evt, el) {
        if (window.scrollY > 50) {
          el.setAttribute(
            'style',
            'opacity: 1; width: 50vw; transition: 3s all cubic-bezier(0.39, 0.575, 0.565, 1); '
          )
        }
        return window.scrollY > 100
      },
      sliderText: function (evt, el) {
        if (window.scrollY > 50) {
          el.setAttribute(
            'style',
            'opacity: 1;'
          )
        }
        return window.scrollY > 100
      }
    },
    data() {
      return {
        slogen: "We're Here to Help",
        content: "HAR STUDIO is intended for people, men as well as women who puts beauty and well-being in the forefront. HAR STUDIO brings high performance products on the market that combine the best ingredients and the greatest degree of convenience so men and women no longer have to live in stress and anxiety about their involuntary hair loss.",
      }
    },
    components: {
      SmallLogo,
      SideBar,
      BottomFooter,
    }
  }
</script>

<style>
.slogen-content {
  opacity: 0;
  text-align: left;
  height: 30vh;
  width: 50vw;
  transition: width 2s;
  margin-bottom: 10vh;
  padding: 20px;
  background: #F2F04F;
  width: 0px;
  /*transition: 3s all cubic-bezier(0.39, 0.575, 0.565, 1);*/
}

.slogen-content > p {
  padding-left: 15.5vw;
  width: 45vw;
  opacity: 0;
  transition: 3s all cubic-bezier(0.39, 0.575, 0.565, 1);
}

.content {
  flex: 1;
}

.about-img {
  opacity: 0;
  width: 50vw;
  float: right;
  margin-right: -90px;
  margin-top: 14vh;
  transition: 3s all cubic-bezier(0.39, 0.575, 0.565, 1);
}

.effect-box {
  opacity: 0;
  /*transform: translateZ(0);*/
  /*backface-visibility: hidden*/;
  /*background: rgba(255, 255, 255, 0.1);*/
  transition: 3s all cubic-bezier(0.39, 0.575, 0.565, 1);
}

.slogen {
  margin-top: 15vh;
  padding-left: 17vw;
  height: 25vh;
  width: 43vw;
}

.slogen > h2{
  font-family: Niramit;
  font-size: 4rem;
  text-align: left;
}


.about {
  background: rgb(237,234,229);
  height: 110vh;
  display: flex;
  flex-direction: column;
}
</style>
