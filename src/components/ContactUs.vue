<template>
    <div v-scroll="handleContact" class="page">
        <div class="contact-us">
            <div class="mail-box">
                <h2>Contact Us</h2>
                <p>Fill out our contact form or send us an email at</p>
                <p class="email">{{harEmail}}</p>
                <p class="asap">We strive to respond to all inquiries within 24 hours.</p>
                <div class="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1110.9221949626235!2d10.211799447951439!3d56.15979506671462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c3f97a8a42bc1%3A0x7079757e6a27b86a!2sMejlgade%2048C%2C%201%20TH%2C%208000%20Aarhus%2C%20Denmark!5e0!3m2!1sen!2s!4v1568886487577!5m2!1sen!2s" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                </div>
                <form @submit.prevent="sendMail" id="myform" method="post" class="mailing-form">
                    <div class="group">
                        <input type="text" placeholder="Name" class="info" name="name" id="name" required="" v-model="templateParams.name">
                        <input type="email" class="info" placeholder="Email" name="email" id="email" required="" v-model="templateParams.email">
                    </div>
                    <textarea class="info" name="" id="textarea" rows="4" v-model="templateParams.message" :maxlength="maxlength" placeholder="Message">
          </textarea>
                    <Button @click="sendMail" :buttonText="buttonText" />
                </form>
            </div>
            <div class="side-box">
                <img class="contact-img" src="../assets/contactPic.jpg" />
            </div>
        </div>
    </div>
</template>
<script>
import Button from '@/components/Button.vue';
import axios from 'axios';

// import BottomFooter from '@/components/BottomFooter.vue'
export default {
    name: "ContactUs",
    data() {
        return {
            service_id: 'default_service',
            template_id: 'template_IeZxpaWU',
            user_id: 'user_sxsh0gguOOisBgmy7TAfn',
        }
    },
    directives: {
        // directive 1
        scroll: {
            // directive definition
            inserted: function(el, binding) {
                const f = function(evt) {
                    if (binding.value(evt, el)) {
                        window.removeEventListener('scroll', f)
                    }
                }
                window.addEventListener('scroll', f)
            }
        }
    },
    components: {
        Button,
    },
    props: {
        handleContact: Function
    },
    methods: {
        handleScroll: function(evt, el) {
            if (window.scrollY > 50) {
                el.setAttribute(
                    'style',
                    'opacity: 1; transform: translate3d(0, 0px, 0)'
                )
            }
            return window.scrollY > 100
        },
        submitEmail: function() {},
        sendMail: function() {
            const data = {
                service_id: 'default_service',
                template_id: 'har',
                user_id: 'user_sxsh0gguOOisBgmy7TAfn',
                template_params: {
                    'name': 'this.templateParams.name',
                    'email': 'this.templateParams.email',
                    'message': 'this.templateParams.message'
                }
            };
            window.emailjs.send(data.service_id, data.template_id, this.templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                }, function(error) {
                    console.log('FAILED...', error);
                });
            // console.log(data)
            // axios.post('https://api.emailjs.com/api/v1.0/email/send', {
            //   data: JSON.stringify(data),
            // }).then((response) => {
            //   console.log(response)
            // })
            // .catch((e) => {
            //   console.error(e)
            // })
        },
        // sendMail: function('YOUR_TEMPLATE_ID', templateParams) {
        //   emailjs.send('default_service', 'template_IeZxpaWU', this.templateParams)
        //     .then(function(response) {
        //        console.log('SUCCESS!', response.status, response.text);
        //     }, function(error) {
        //        console.log('FAILED...', error);
        //     })
        //   }
        // },
    },
    data() {
        return {
            maxlength: 255,
            buttonText: "Get in Touch",
            harEmail: "contact@harstudio.dk",
            address: {
                lon: "",
                lat: "",
            },
            templateParams: {
                name: "",
                email: "",
                message: "",
            },
            submitted: false
        }
    }
}
</script>
<style lang="scss" scoped>

.page {
    opacity: 0;
}

.contact-us {
    width: 100%;
    display: flex;
    align-items: center;
}

.mailing-form {
    display: flex;
    flex-direction: column;

    button {
        margin: 0;
    }
}

.info {
    background: rgb(196, 196, 196);
    border: 0px;
    padding: 5px;
}

#name {
    margin-left: 0px;
    /*margin-right: 3px;*/
}



.group {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

    ::placeholder {
        font-style: "roboto";
        font-size: 14px;
    }

    input {
        width: 49%;
    }

}

textarea {
    width: 100%;
    padding: 0;
    margin: 2% 0%;
}

.email {
    font-weight: bold;
    margin-top: 0px;
}


.asap {
    margin-bottom: 30px;
}


.black {
    margin-left: 13px;
}

.page {
    display: flex;
}

.mail-box {

    width: 45%;


    h2 {
        padding-top: 40px;
        font-style: "Niramit";
        font-size: 35px;
    }

    p {
        margin-bottom: 0px;
        text-align: left;
        font-size: 14px;
    }


}

.side-box {
    width: 50%;
    margin-left: 3em;

    img {
        height: 650px;
        object-fit: cover;
        object-position: -150px 0;
        overflow: hidden;
        top: 0;
        width: 129%;
    }

}

@media(min-device-width : 320px) and (max-device-width : 480px) {
.side-box{
  display:none;
}
.mail-box{
  width:100%;
}
}

</style>
