<template>
  <div class="banner">
    <div class="banner-image">
      <div class="banner-image-background">
      </div>
      <img alt="man" src="../assets/alex_right.png"/>
    </div>
    <div class="banner-text">
      <h2>
        Natural looking dense hair in just 30 seconds.
      </h2>
      <h1>Get Back Your Confidence with Har.</h1>
      <button class="btn-black"><h2>Shop Har</h2></button>
    </div>
  </div>

</template>

<script>
  export default{
    name: "Banner",
  }
</script>


<style>

.banner{
  display:flex;
  width:100%;
  height:80%;

}

.banner-image {
  flex-basis: 50%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
}

.banner-image-background{
  background:#F2F04F;
  position: absolute;
  z-index: 0;
  height:70%;
  width:80%;
}

.banner-image img{
  width:100%;
  z-index: 1;
  position: absolute;

}

.banner-text{
  flex-basis:50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>
