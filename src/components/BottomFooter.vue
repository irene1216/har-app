<template>
  <div class="footer">
    <router-link to="/"><p>{{ brand }}</p></router-link>
    <div class="social-media">
      <router-link to="/about">About Us</router-link>
      <router-link to="/faq">FAQ</router-link>
    </div>
</div>
</template>
<script>
export default {
  name: "BottomFooter",
  props: {
    brand: String
  }
};
</script>
<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  clear: both;
  bottom: 0px;
  height: 12vh;
  background-color: black;
  text-align: center;
  width: 100vw;
  padding: 1.3rem;
  padding-left: 50px
}

:hover {
  text-decoration: none;
}

p {
  color: white;
  font-family: 'DM Sans';
  font-size: 1.6rem;
}

.social-media {
  padding-top: 6px
}

.social-media > a {
  margin-top: 10px;
  padding-right: 15px;
  /*padding-left: 5px;*/
  text-decoration: none;
  color: white;
}


/*MOBILE*/

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
 .footer{
  height: auto;
    flex-direction: column;
    text-align:left;
    padding:15px;
    position:relative;
 }

 .social-media {
display:flex;
flex-direction: column;
 }
}

</style>
