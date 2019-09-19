<template>
  <div class="banner">
   <div class="row">
    <div class="col-lg-6 col-sm-12">
      <div class="banner-image">
        <div class="banner-image-background">
          <b-img fluid alt="Responsive image" src="../assets/alex_right.png"/>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-sm-12">
      <div class="banner-text d-flex flex-column ml-5">
        <h2>
          Natural looking dense hair in just 30 seconds.
        </h2>
        <h1>Get Back Your Confidence with Har.</h1>
        <Button :buttonWidth=400 :buttonText="buttonText" />
      </div>
    </div>
  </div>

      <img class="arrow" src="@/assets/arrow-down.svg">

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

.banner-image {
  position: relative;
  flex-direction: column;
  align-items: center;
}

.banner-image-background{
  background:#F2F04F;
}

.banner-text{
  justify-content: center;
  height: 100%;
}

.arrow {
  width: 25px;
  position: absolute;
  bottom:5%;
  transform-origin: 20% 20%;
  animation: jump 1s linear alternate infinite;
}

</style>
