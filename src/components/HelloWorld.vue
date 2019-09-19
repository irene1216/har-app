<template>
  <div class="hello">
    <div class="responsive-h1">
      <h1>{{ msg }}</h1>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1{
  font-size: 4em;
  text-align: left;
  width: 330px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
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
