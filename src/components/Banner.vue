<template>
  <div class="banner">
   <div class="row">
    <div class="col-lg-6 col-sm-12">
      <div class="banner-image-background">
      </div>
        <img class="photo" fluid alt="Responsive image" src="../assets/alex_right.png"/>
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

<!--       <img class="arrow" src="@/assets/arrow-down.svg">
 -->
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
  components: {
    Button,
  }
}
</script>


<style scoped>

.photo {
  width: 570px;
  height: 610px;
  position: relative;
  top: -70px;
}

.banner-image-background{
  background:#F2F04F;
  position: absolute;
  height: 540px;
  width: 540px;
  margin-left: 1vw;
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
}

.arrow {
  width: 25px;
  position: absolute;
  bottom:5%;
  transform-origin: 20% 20%;
  animation: jump 1s linear alternate infinite;
}

</style>
