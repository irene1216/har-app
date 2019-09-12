<template>
  <div class="faqbox" >
      <div class="questions" v-for="question in questions">
        <!-- <div class="color"></div> -->
        <div class="question" v-on:click="$emit('show:question',question.id)">
          <h6 v-bind:class="{'active-question' : activeId === question.id}">{{question.question}}</h6>
          <img v-bind:class="{'active-arrow' : activeId === question.id}" src="../assets/arrow-down.svg" />
        </div>
      </div>
  </div>
</template>
<script scoped>
export default {
  name: "faq-box",
  props: {
    questions: Array,
    activeId: null,
    // showing: Number,
  },
  data() {
    return {}
  },
};
</script>
<style>

.questions {
  width: 50%;
  background: rgb (0,0,0,0);
}

/*.color {
  background: rgb(207,231,205);
  display: float;
  width: 400px;
  height: 100px;
  bottom: 50px;
}*/

.active-question {
  color: black;
}

.question:hover{
  display: float;
  background: rgb(215,234,237);
  -webkit-transition: width 2s; /* For Safari 3.1 to 6.0 */
  transition: width 2s;
}

.question {
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  padding-right: 15px;
  text-align: left;
  width: 400px;
  color: grey;
}

.question>h6 {
  margin-top: 20px;
  padding-right: 10px;
}

.question>img {
  width: 13px;
  margin-top: 15px;
  /*transform: rotate(-90deg);*/
}
</style>
