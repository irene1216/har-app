<template>
  <div class="banner">
   <div class="row">
    <div class="col-lg-6 col-sm-12">
<!--       <transition
      appear
      appear-active-class="third-enter-active"
      > -->
      <div class="banner-image-background"></div>
<!--     </transition>
    <transition
    appear
    appear-active-class="second-enter-active"
    > -->
    <div class="photo">
      <img class="sad" fluid alt="Responsive image" src="../assets/alex_left.png"/>
      <img class="happy" fluid alt="Responsive image" src="../assets/alex_right.png"/>
    </div>
  <!-- </transition> -->
</div>
<div class="col-lg-6 col-sm-12">
  <div class="banner-text">

    <div class="small-text">
      <h2>
        Natural looking dense hair in just <b>30 seconds.</b>
      </h2>
    </div>

    <div class="big-text">
      <h1>Get Back Your Confidence with Har.</h1>
      <Button :buttonWidth=400 :buttonText="buttonText" />
    </div>
  </div>
</div>
</div>
</div>

</template>

<script>
  import Button from '@/components/Button.vue';
  export default{
    name: "Banner",
    data(){
      return {
        buttonText: "Shop Har"
      }
    },
    mounted(){
      // TweenMax.to('.banner', 5, {
      //   opacity: 1,
      //   y: -10,
      //   ease: Sine.easeOut
      // })
    },
    components: {
      Button,
    }
  }
</script>


<style scoped>
.banner {

}
.photo {
  width: 570px;
  height: 580px;
  position: relative;
  top: -50px;
}

.happy {
  width: 570px;
  height: 580px;
  position:absolute;
  left:10px;
}

.sad{
  width: 570px;
  height: 580px;
  position:absolute;
  left:10px;
}

.photo img{
  position:absolute;
}

.photo img.happy {
  animation-name: imgFadeInOut;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
  animation-duration: 10s;
  y: -10;
  animation-direction: alternate;
}

@keyframes imgFadeInOut {
  0% {
    opacity:0;
  }
  45% {
    opacity:0;
  }
  55% {
    opacity:1;
  }
  100% {
    opacity:1;
  }
}

.photo img.sad {
  animation-name: img2FadeInOut;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 10s;
  animation-direction: alternate;
}

@keyframes img2FadeInOut {
  0% {
    opacity:1;
  }
  45% {
    opacity:1;
  }
  55% {
    opacity:0;
  }
  100% {
    opacity:0;
  }
}

.banner-image-background{
  background:#F2F04F;
  position: absolute;
  height: 560px;
  width: 530px;
  margin-left: 1vw;
  top: -30px;
}

.small-text {
  margin-top: 20vh;
}

.big-text {
  height: 60vh;
  width: 30vw;
}

.big-text >h1 {
  padding-bottom: 5vh;
  font-size: 3em;
}

.banner-text{
  margin-left: 7vw;
  justify-content: center;
  display: flex;
  flex-direction: column;
/*  animation: text-animation 2s linear forwards;
  animation-delay: 0.5s;
  opacity: 0;*/
}

.arrow {
  width: 25px;
  position: absolute;
  bottom:5%;
  transform-origin: 20% 20%;
  animation: jump 1s linear alternate infinite;
}

.second-enter-active {
  animation: ok 3s;
}

@keyframes ok {
  0% {
    opacity: 0;
  }
  37% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.third-enter-active {
  animation: notok 3s;
}

@keyframes notok {
  0% {
    opacity: 0;
  }
  60% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.third-enter-active {
  animation: ok 3s;
}

@keyframes text-animation {
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
