<template>
    <div class="big-wrapper">
        <div class="top-wrap">
            <side-bar :handleLogo="handleLogo" :handleSocial="handleSocial" :brand="sideLogo" />
            <SmallLogo :msg="smallLogo" />
            <div class="faq-box">
                <transition appear appear-active-class="header-enter-active">
                    <h2 class="header pb-4">FAQs</h2>
                </transition>
                <faq-box :questions="questions" :activeId="activeId" @show:question="showQuestion" :showing="showing" />
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
            sideLogo: "",
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
        },
        handleLogo: function(evt, el) {
            if (window.scrollY > 50) {
                el.setAttribute(
                    'style',
                    ''
                )
            }
        },


        handleScroll: function(evt, el) {
            const sm = window.matcheMedia("(max-device-width : 480px)")
            if (!sm.matches) {
                if (window.scrollY > 50) {
                    el.setAttribute(
                        'style',
                        'opacity: 1; transform: translate3d(0, 0px, 0)'
                    )
                } else if (window.scrollY === 0) {
                    el.setAttribute(
                        'style',
                        'opacity: 0; transform: translate3d(0, 0, 0); transition: 1s all cubic-bezier(0.39, 0.575, 0.565, 1)'
                    )
                }
            }
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

.hello{
  z-index:4;
}
.top-wrap {
    height: 110vh;
}

.header {
    border-bottom: 5px solid black;
    width: 80vw;
    font-size: 28px;
    margin-bottom: 30px;
}

.box {
    display: flex;
    justify-content: space-between;
}


.big-wrapper {
    display: flex;
    flex-direction: column;
}

.faq-box {
    height: 100%;
    width: 100%;
    padding-top: 22vh;
    display: flex;
    flex-direction: column;
    padding-bottom: 8vh;
    align-items: center;
    justify-content: center;
    position: fixed;
}



@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    .effect-box {
        opacity: 1;
    }

    .faq-box {
        left: 0vw;
        right: 0vw;
        padding: 60px 15px 0px 15px;
        position: relative;
    }

    .box {
        display: flex;
        flex-direction: column;
    }

    .header {
        width: 100%;
    }

    .faq-box{
      padding: 100px 15px 0px 15px;
    }
}
</style>
