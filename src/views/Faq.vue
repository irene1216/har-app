<template>
  <div class="faq">
    <HelloWorld msg="Har Studio." />
    <div class="faq-box">
      <h1>FAQs</h1>
      <div class="box">
      <faq-box :questions="questions" :activeId="showing.id" @show:question="showQuestion" />
      <div v-if="showing.id !=undefined" class="answer">
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
    }
  },
  mounted() {
    this.fetchData()
    console.log(this.showing)
  },
  methods: {
    fetchData() {
      axios.get(this.baseUrl + 'data.json').then(response => {
        this.questions = response.data;
        console.log(this.questions)
      })
    },
    showQuestion(id) {
      if (this.showing.id === id) {
        this.showing = {}
        console.log(this.showing.id)
      } else {
        this.questions.forEach((question) => {
          if (question.id === id) {
            this.showing = question
            console.log(question.id)
          }
        })
      }
    }
  }
}
</script>
<style>
.box {
  display: flex;
  justify-content: space-between;
}

.answer {
  font-size: 0.8em;
  text-align: left;
  width: 50vw;
}
.faq-box {
  height: 100vh;
  padding-top: 8vh;
  padding-bottom: 8vh;
  left: 100px;
  position: fixed;
}
</style>
