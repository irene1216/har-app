<template>
  <div class="hello">
    <div class="responsive-h1">
      <h1>{{ msg }}</h1>
    </div>

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
<style>
h1{
  font-size: 2em;
  text-align: right;
  width: 165px;
  padding-top: 24px;
  /*white-space: nowrap;*/
}

.responsive-h1 {
  display: flex;
  justify-content: center;
  padding-right: 20px;
}

.hello {
  padding-left: 10vh;
}
</style>
