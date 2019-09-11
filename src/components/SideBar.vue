<template>
    <div class="sidebar">
        <div class="nav">
            <div class="nav-menu">
                <img alt="bento Go!" src="@/assets/bento-menu.svg" style="width: 25px" />
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
        name: "SideBar"
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


</style>
