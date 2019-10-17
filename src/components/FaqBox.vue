<template>
    <!--     <div class="box">
 -->
    <div class="faqbox">
        <div class="questions">
            <div v-for="question in questions">
                <div v-on:click="$emit('show:question',question.id)" v-bind:class="[activeId === question.id ? 'active' : 'faq-color']">
                    <h6>{{question.question}}</h6>
                </div>
            </div>
        </div>
        <transition name="slide-fade" mode="out-in">
            <div v-if="showing.id !=undefined" v-bind:class="[ showing.id !=undefined ? 'active-answer' : 'answer' ]" :key="showing.answer">
                <p>{{showing.answer}}</p>
            </div>
        </transition>
    </div>
    <!--     </div>
 -->
</template>
<script scoped>
export default {
    name: "faq-box",
    props: {
        questions: Array,
        activeId: Number,
        hover: Boolean,
        showing: Object,
    },
    data() {
        return {}
    },
};
</script>
<style scoped>
.faqbox {
    display: flex;
    flex-direction: row;
/*    width: 100%;
*/}

.questions {
    height: 50px;
    width:50%;
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

.slide-fade-enter-active {
    transition: all 1s ease;
}

.slide-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to

    {
    transform: translateX(0px);
    opacity: 0;
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

@media (min-width: 1281px) {


}


@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
 .faqbox{
  flex-direction: column;
 }

 .questions{
  width:100%;
  display:block;
 }

 .faq-color{
    width: 100%;
        white-space: normal;
        text-align:left;
        background:transparent;
 }

 .faq-color h6{
  text-align: left;
 }

 .active-answer{
  width:100%;
 }
}
</style>
