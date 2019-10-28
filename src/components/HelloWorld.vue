<template>
  <div class="hello">
    <div v-scroll="handleHeader" class="responsive-h1">
      <router-link to="/"><h1>{{ msg }}</h1></router-link>
    </div>
</div>
</template>

<script>
export default {
  name: "HelloWorld",
  directives: {
  scroll: {
    inserted: function (el, binding) {
      const f = function (evt) {
        if (binding.value(evt, el)) {
          window.removeEventListener('scroll', f)
          }
        }
        window.addEventListener('scroll', f)
      }
    }
  },
  props: {
    msg: String,
    handleHeader: Function
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

@media screen and (max-width: 600px) {
  h1 {
    font-size: 2.6em;
    text-align: right;
    padding-right: 100px;
  }

  .hello {
    position: fixed;
    /*height: 1000px;*/
    top: 0;
    z-index: 10;
  }

}
</style>
