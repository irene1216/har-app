<template>
  <div class="banner d-flex">
    <div class="col-6">
      <div class="banner-image d-flex flex-column">
        <div class="banner-image-background">
        </div>
        <img alt="man" src="../assets/alex_right.png"/>
      </div>
    </div>
    <div class="col-6">
      <div class="banner-text d-flex flex-column ml-5">
        <h2>
          Natural looking dense hair in just 30 seconds.
        </h2>
        <h1>Get Back Your Confidence with Har.</h1>
        <button class="btn-black"><h2>Shop Har</h2></button>
      </div>
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
  width:100%;
  height:80%;

}

.banner-image {
  /*  flex-basis: 50%;*/
  position: relative;
  flex-direction: column;
  align-items: center;
}

.banner-image-background{
  background:#F2F04F;
  position: absolute;
  z-index: 0;
  height:500px;
  width:500px;
}

.banner-image img{
  width:100%;
  z-index: 1;
  position: absolute;

}

.banner-text{
  justify-content: center;
  height: 100%;
}

</style>
