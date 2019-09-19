<template>
  <div class="page">
  <div class="contact-us">
    <div class="mail-box">
      <h2>Contact Us</h2>
      <p>Fill out our contact form or send us an email at</p>
      <p class="email">{{harEmail}}</p>
      <p class="asap">We strive to respond to all inquiries within 24 hours.</p>
      <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1110.9221949626235!2d10.211799447951439!3d56.15979506671462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c3f97a8a42bc1%3A0x7079757e6a27b86a!2sMejlgade%2048C%2C%201%20TH%2C%208000%20Aarhus%2C%20Denmark!5e0!3m2!1sen!2s!4v1568886487577!5m2!1sen!2s" width="402" height="200" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
      </div>
      <form class="mailing-form" @submit.prevent="submit">
        <div class="group">
          <input type="text"
                  placeholder="Name"
                  class="info"
                  name="name"
                  id="name"
                  required=""
                  v-model="name"
          >
          <input type="email"
                 class="info"
                 placeholder="Email"
                 name="email"
                 id="email"
                 required=""
          >
        </div>
        <textarea class="info" name="" id="message" cols="30" rows="4" placeholder="Message"></textarea>
       <Button :buttonWidth=404 :buttonText="buttonText" />
      </form>
    </div>
    <div class="side-box">

    </div>
  </div>
<!--     <bottom-footer v-scroll="handleScroll" class="effect-box" brand="Har Studio." />
 -->  </div>
</template>
<script>
import Button from '@/components/Button.vue';
// import BottomFooter from '@/components/BottomFooter.vue'
export default {
  name: "ContactUs",
  components: {
    Button,
    // BottomFooter,
  },
  methods: {
    handleScroll: function (evt, el) {
      if (window.scrollY > 50) {
        el.setAttribute(
          'style',
          'opacity: 1; transform: translate3d(0, 0px, 0)'
        )
      }
      return window.scrollY > 100
    },
  },
  data() {
    return {
      buttonText: "Get in Touch",
      harEmail: "contact@harstudio.dk",
      address: {
        lon: "",
        lat: "",
      }
    }
  }
}
</script>
<style scoped>
.contact-us {
  height: 100vh;
}

.mailing-form {
  display: flex;
  flex-direction: column;
}

input {
  padding: 0px;
  margin: 4px;
  width: 14.97vw;
}

.info {
  background: rgb(196,196,196);
  border: 0px;
  padding: 5px;
}

::placeholder {
  font-style: "roboto";
  font-size: 14px;
}

#message {
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: 13px;

}

textarea {
  width: 30.8vw;
}

#name {
  margin-left: 0px;
  /*margin-right: 3px;*/
}

.group {
  display: block;
  padding: 0px;
}

.mail-box * {

}

.email {
  font-weight: bold;
  margin-top: 0px;
}


.asap {
  margin-bottom: 30px;
}

h2 {
  padding-top: 40px;
  font-style: "Niramit";
  font-size: 35px;
  padding-left: 16px;
}

.black {
  margin-left: 13px;
}

.page {
  display: flex;
}

.mail-box {
  margin-left: 10vw;
  margin-top: 10vh;
  width: 33vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
}

p {
  padding-left: 16px;
  margin-bottom: 0px;
  text-align: left;
  font-size: 14px;
}

</style>
