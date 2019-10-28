<template>
  <div class="banner">
      <div class="left">
        <div class="banner-image-background"></div>
        <div class="photo">
          <img
            class="sad"
            fluid
            alt="Responsive image"
            src="../assets/alex_left.png"
          />
          <img
            class="happy"
            fluid
            alt="Responsive image"
            src="../assets/alex_right.png"
          />
        </div>
      </div>
        <div class="banner-text">
          <div class="small-text">
            <h2>Natural looking dense hair in just <b>30 seconds.</b></h2>
          </div>

          <div class="big-text">
            <h1>Get Back Your Confidence with Har.</h1>
            <Button  :buttonText="buttonText" />
          </div>
        </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  name: "Banner",
  data() {
    return {
      buttonText: "Shop Har"
    };
  },
  mounted() {
    // TweenMax.to('.banner', 5, {
    //   opacity: 1,
    //   y: -10,
    //   ease: Sine.easeOut
    // })
  },
  components: {
    Button
  }
};
</script>

<style scoped>
.banner {
  position: relative;
  display: flex;
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
  position: absolute;
  left: 10px;
}

.sad {
  width: 570px;
  height: 580px;
  position: absolute;
  left: 10px;
}

.photo img {
  position: absolute;
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
    opacity: 0;
  }
  45% {
    opacity: 0;
  }
  55% {
    opacity: 1;
  }
  100% {
    opacity: 1;
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
    opacity: 1;
  }
  45% {
    opacity: 1;
  }
  55% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.banner-image-background {
  background: #f2f04f;
  position: absolute;
  height: 560px;
  width: 530px;
  margin-left: 2vw;
  top: -30px;
}

  .black {
    width: 400px;
  }

.small-text {
  margin-top: 20vh;
}

.big-text {
  height: 60vh;
  width: 30vw;
}

.big-text > h1 {
  padding-bottom: 5vh;
  font-size: 3em;
}

.banner-text {
  margin-left: 7vw;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

@keyframes text-animation {
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media screen and (max-width: 600px) {
  .row {
    height: 100vh;
    width: 100vw;
  }

  .banner-image-background {
    top: 11.5vh;
    left: 10vw;
    width: 91.5%;
    height: 36%;
    /*opacity: 0;*/
  }

  .happy {
    top: 20vh;
    left: 9vw;
    width: 57.5%;
    height: 57.5%;
  }
  .sad {
    top: 20vh;
    left: 9vw;
    width: 57.5%;
    height: 57.5%;
  }
  .small-text {
    margin-top: 10px;
    padding-bottom: 38vh;
    opacity: 0;
  }
  .banner-text {
    margin-top: 10vh;
    padding-left: 8vw;
    width: 280px;
  }

  .black {
    width: 270px;
  }

  .big-text{
    font-size: 12px;
    text-align: left;
    width: 285px;
  }

  .big-text > h1{
    padding-bottom: 20px;
    /*background: #f2f04f;*/
  }

  .left {
    height: 0px;
    width: 0px;
    /*opacity: 0;*/
  }



}
</style>
