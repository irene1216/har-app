<template>

    <button v-bind:style="{ width: buttonWidth + 'px' }" class="black"><h2>{{buttonText}}</h2></button>

</template>

<script>
export default {
  name: "Button",
  props: {
    buttonText: String,
    buttonWidth: Number,
  }
}
</script>

<style scoped>
.black{
  background: black;
  color:white;
  height:45px;
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border:none;
  margin-right: 0px;
}

.black h2{
  margin:0;
}

</style>
