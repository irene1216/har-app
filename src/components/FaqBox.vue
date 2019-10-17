<template>
    <div class="faqbox" :key="showing.answer">
        <div v-for="question in questions" class="question">
            <div class="" v-on:click="$emit('show:question',question.id)" v-bind:class="[activeId === question.id ? 'active' : 'faq-color']">
                <h6>{{question.question}}</h6>
            </div>
            <transition name="slide-fade" mode="out-in">
                <div v-if="activeId != undefined && activeId == question.id " v-bind:class="[ showing.id !=undefined ? 'active-answer' : 'answer' ]">
                    <p>{{showing.answer}}</p>
                </div>
            </transition>
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
    height: 100%;
    width: 80vw;
    flex-direction: column;
}

.question {
    display: flex;
    justify-content: space-between;
    position: relative;
}

.qq {
    font-size: 1000px;
}

.faq-color {
    display: flex;
    -webkit-transition: width 2s;
    transition: width 2s;
    white-space: nowrap;
    color: grey;
}

.faq-color:hover {
    width: 400px;
}



.faq-color h6 {
    padding: 10px 7px;
    margin: 0;
}

.active {
    background: #F2F04F;
    display: flex;
    width: 400px;
    height: 35px;
    -webkit-transition: width 2s;
    transition: width 2s;
    white-space: nowrap;
    color: black;
    margin: 0;
}


.active-question {
    color: black;
}

.active h6 {
    padding: 10px 7px;
    margin: 0;
}

.slide-fade-enter-active {
    transition: all 1s ease;
}

.slide-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateX(0px);
    opacity: 0;
}

.active-answer {
    padding-left: 20px;
    font-size: 0.8em;
    text-align: left;
    width: 40vw;
    -webkit-transition: width 2s;
    position: fixed;
    right: 150px;
    top: 275px;
}

.active-answer p {
    -webkit-transition: width 2s;

}

@media (min-width: 1281px) {}


@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    .faqbox {
        flex-direction: column;
            width: 100%;
    }

    .question {
        width: 100%;
        display: block;
        flex-direction: column;
    }

    .faq-color {
        width: 100%;
        white-space: normal;
        text-align: left;
        background: transparent;
    }

    .faq-color h6 {
        text-align: left;
    }

    .active {
      background: transparent;
        white-space: normal;
        width: 100%;
        text-align: left;
        height: auto;
    }

    .active-answer {
        padding-left: 0;
        width: 100%;
        position: relative;
        right: 0;
        top: 0;
/*        padding: 10px 7px;
*/
    }

    .active-answer p {
        display: inline-block;
        width: 100%;
        padding: 0;
        margin: 0;
    }


    .faq-color h6, .active h6 {
      padding:10px 0px;
    }
}
</style>
