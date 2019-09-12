<template>
  <div class="about">
        <HelloWorld msg="Har Studio." />

    <h1>This is an about page</h1>
  </div>
</template>

<script>
  import HelloWorld from "@/components/HelloWorld.vue";

  export default{
    name: "About",
    components: {
      HelloWorld
    }
  }
</script>

<style>
.about {
  background: rgb(237,234,229);
  height: 100vh;
}
</style>
