<template>
  <div class="hello">
      <h1>{{ msg }}</h1>

</div>
</template>

<script>
export default {
  name: "SmallLogo",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-size: 2em;
  text-align: center;
  padding-top: 30px;
}

.hello {

  position: fixed;
  width: 100vw;
  /*padding-left: 10vh;*/
}
</style>
