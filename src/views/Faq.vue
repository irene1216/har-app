<template>
  <div class="faq">
    <HelloWorld msg="Har Studio." />
    <div class="faq-box">
      <h2 class="header pb-4">FAQs</h2>
      <div class="box">
      <faq-box
        :questions="questions"
        :activeId="activeId"
        @show:question="showQuestion"
      />
      <div
        v-if="showing.id !=undefined"
        v-bind:class="[ showing.id !=undefined ? 'active-answer' : 'answer' ]"
      >
        <p>{{showing.answer}}</p>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import HelloWorld from "@/components/HelloWorld.vue";
import FaqBox from "@/components/FaqBox.vue";
import axios from 'axios';

export default {
  name: "Faq",
  components: {
    HelloWorld,
    FaqBox,
  },
  data() {
    return {
      baseUrl: '/',
      questions: [],
      showing: {},
      activeId: null,
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      axios.get(this.baseUrl + 'data.json').then(response => {
        this.questions = response.data;
      })
    },
    mouseover (e) {
      this.hover = true
    },
    mouseleave (e) {
      this.hover = false
    },
    showQuestion(id) {
      console.log(id)
      if (this.showing.id === id) {
        this.showing = {}
        this.activeId = null
                          console.log(this.activeId)

      } else {
        this.questions.forEach((question) => {
          if (question.id === id) {
            this.showing = question
            this.activeId = id
                  console.log(this.activeId)

          }
        })
      }
    }
  }
}
</script>
<style scope>
.box {
  display: flex;
  justify-content: space-between;
}

.header {
  border-bottom: 5px solid black;
  width: 100vw;
}

.active-answer {
  font-size: 0.8em;
  text-align: left;
  width: 50vw;
  padding: 15px;
  /*padding-left: vw;*/
  padding-right: 13vw;
  /*background: rgb(238,140,52);*/
    -webkit-transition: width 2s; /* For Safari 3.1 to 6.0 */
  transition: width 2s;
  border-right: 5px solid black;
},

.answer {
  font-size: 0.8em;
  text-align: left;
  width: 50vw;
  background: white;
  -webkit-transition: width 2s; /* For Safari 3.1 to 6.0 */
  transition: width 2s;
}
.faq-box {
  height: 100%;
  padding-top: 8vh;
  padding-bottom: 8vh;
  left: 100px;
  position: fixed;
}
</style>
