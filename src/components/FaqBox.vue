<template>
  <div class="faqbox">
    <div class="questions" v-for="question in questions">
      <div v-on:click="$emit('show:question',question.id)" v-bind:class="[activeId === question.id ? 'active' : 'faq-color']">
        <h6>{{"&nbsp &nbsp" + question.question}}</h6>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "faq-box",
  props: {
    questions: Array,
    activeId: Number,
    hover: Boolean,
  },
  data() {
    return {}
  },
};
</script>

<style scoped>

.questions {
  height: 50px;
}

.qq {
  font-size: 1000px;
}

.faq-color {
  background: #F2F04F;
  display: float;
  height: 35px;
  top: 28px;
  right: 10px;
  width: 0px;
  -webkit-transition: width 2s;
  /* For Safari 3.1 to 6.0 */
  transition: width 2s;
  white-space: nowrap;
  color: grey;
}

.active {
  background: #F2F04F;
  display: float;
  height: 35px;
  top: 28px;
  right: 10px;
  width: 400px;
  -webkit-transition: width 2s;
  transition: width 2s;
  white-space: nowrap;
  color: black;
  /*border-right: 3px solid black;*/

}

.faq-color:hover {
  width: 400px;
}

.active-question {
  color: black;
}

.active>h6 {
  padding-top: 6px;
  padding-right: 6px;
  text-align: right;
}


.faq-color>h6 {
  padding-top: 6px;
  padding-right: 6px;
  text-align: right;
}
</style>
