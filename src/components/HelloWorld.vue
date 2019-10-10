<template>
  <div class="hello">
    <div class="responsive-h1">
      <router-link to="/"><h1>{{ msg }}</h1></router-link>
    </div>
</div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<style scoped>
h1 {
  color: black;
  font-size: 3.5em;
  text-align: left;
  width: 330px;
}

:hover{
  text-decoration: none;
}

.responsive-h1 {
  display: flex;
  justify-content: center;
  padding-top: 21px;
  padding-right: 20px;
}

.hello {
  padding-left: 10vh;
}
</style>
