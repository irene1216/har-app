<template>
  <div class="big-wrapper">
    <div class="top-wrap">
      <side-bar :handleLogo="handleLogo" :handleSocial="handleSocial" :brand="sideLogo" />
      <SmallLogo :msg="smallLogo" />
      <div class="faq-box">
        <transition appear appear-active-class="header-enter-active">
          <h2 class="header pb-4">FAQs</h2>
        </transition>
        <div class="box">
          <faq-box :questions="questions" :activeId="activeId" @show:question="showQuestion" />
          <transition name="slide-fade" mode="out-in">
            <div v-if="showing.id !=undefined" v-bind:class="[ showing.id !=undefined ? 'active-answer' : 'answer' ]" :key="showing.answer">
              <p>{{showing.answer}}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div class="bot-wrap">
      <bottom-footer v-scroll="handleScroll" brand="Har Studio." />
    </div>
  </div>
</template>
<script>
import SmallLogo from "@/components/SmallLogo.vue";
import FaqBox from "@/components/FaqBox.vue";
import axios from 'axios';
import SideBar from '@/components/SideBar.vue';
import BottomFooter from '@/components/BottomFooter.vue'


export default {
  name: "Faq",
  components: {
    SmallLogo,
    FaqBox,
    SideBar,
    BottomFooter,
  },
  data() {
    return {
      baseUrl: '/',
      questions: [],
      showing: {},
      activeId: null,
      smallLogo: "Har Studio.",
      sideLogo: ""
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    handleSocial: function(evt, el) {
      console.log(window.scrollY)
      if (window.scrollY > 30) {
        el.setAttribute(
          'style',
          'opacity: 1; transform: translate3d(0, -10vh, 0);'
        )
      } else if (window.scrollY === 0) {
        el.setAttribute(
          'style',
          'opacity: 1; transform: translate3d(0, 0, 0); transition: 1s all cubic-bezier(0.39, 0.575, 0.565, 1)'
        )
      }
      // return window.scrollY > 1700
    },
    handleLogo: function(evt, el) {
      if (window.scrollY > 50) {
        el.setAttribute(
          'style',
          ''
        )
      }
      // return window.scrollY > 1700
    },
    handleScroll: function(evt, el) {
      if (window.scrollY > 50) {
        el.setAttribute(
          'style',
          'opacity: 1; transform: translate3d(0, 0px, 0)'
        )
      }
      return window.scrollY > 100
    },
    fetchData() {
      axios.get(this.baseUrl + 'data.json').then(response => {
        this.questions = response.data;
      })
    },
    showQuestion(id) {
      console.log(id)
      if (this.showing.id === id) {
        this.showing = {}
        this.activeId = null
      } else {
        this.questions.forEach((question) => {
          if (question.id === id) {
            this.showing = question
            this.activeId = id
          }
        })
      }
    }
  }
}
</script>
<style>
.top-wrap {
  height: 110vh;
}

.box {
  display: flex;
  justify-content: space-between;
}

.header {
  border-bottom: 5px solid black;
  width: 80vw;
  font-size: 28px;
  margin-bottom: 30px;
}

.active-answer {
  padding-left: 20px;
  font-size: 0.8em;
  text-align: left;
  width: 37vw;
  -webkit-transition: width 2s;
  /* For Safari 3.1 to 6.0 */
}

.active-answer>p {
  padding-left: 20px;
  text-align: left;
  width: 37vw;
  -webkit-transition: width 2s;
  /* For Safari 3.1 to 6.0 */
}

.slide-fade-enter-active {
  transition: all 1s ease;
}

.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to

/* .slide-fade-leave-active for <2.1.8 */
  {
  transform: translateX(0px);
  opacity: 0;
}

.big-wrapper {
  display: flex;
  flex-direction: column;
}

.answer {
  font-size: 0.8em;
  text-align: left;
  width: 50vw;
  background: white;
  -webkit-transition: width 2s;
  /* For Safari 3.1 to 6.0 */
  transition: width 2s;
}

.faq-box {
  height: 100%;
  padding-top: 22vh;
  padding-bottom: 8vh;
  left: 12vw;
  right: 12vw;
  position: fixed;
}
</style>
