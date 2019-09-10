<template>
    <div class="sidebar">
        <div class="logo">
            <h1>Har</h1>
        </div>
        <div class="nav">
            <div class="nav-menu">
                <img alt="bento Go!" src="@/assets/bento-menu.svg" style="width: 25px" />
            </div>
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
        name: "SideBar"
    }
</script>

<style>
    .logo {
        width: 100vh;
    }
    .nav {
        float: left;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;

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


</style>
