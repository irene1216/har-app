<template>
    <div class="sidebar">
        <div class="nav">
            <div class="nav-menu" >
                <img class="menu-toggle" v-on:click="isHidden = !isHidden" alt="bento Go!" src="@/assets/bento-menu.svg" style="width: 25px" />
                <div class="menu-list" v-if="!isHidden">
                    <router-link class="menu-item" to="/">Home</router-link>
                    <router-link class="menu-item" to="/about">About Us</router-link>
                    <router-link class="menu-item" to="/FAQ">FAQ</router-link>
                </div>
            </div>
            <div class="nav-logo">Har Studio.</div>
            <div class="nav-menu">
                <i class="fab fa-youtube"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-facebook-f"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SideBar",
        data() {
            return {
                isHidden: true
            };
        },
    }
</script>

<style>
    .nav {
        float: left;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;
        width: 10vh;
        padding-left: 0px;
        padding-right: 0px;
    }

    .nav-menu{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .nav-menu * {
        display: block;
    }
    .nav-menu * + * {
        margin-top: 10px;
    }

    .nav-logo {
        transform: rotate(-90deg);
        white-space: nowrap;
    }

    .menu-list {
        font-size: 15px;
        white-space: nowrap;
        position: absolute;
        margin: 0px;
        top: 80px;
        left: 30px;

    }

    .menu-list * {
        /*padding-top: 10px;*/

    }

    .menu-list a {
        text-decoration: none;
        color: grey;
    }

    .menu-list a.router-link-exact-active {
        text-decoration: none;
        color: black;
    }



</style>
