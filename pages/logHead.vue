<template>
    <div class="cabin">
        <div class="header">
            <div class="container">
                <div class="nav">
                    <div class="logobox">
                        <router-link to="/" class="logoimg"><img src="../assets/images/logo.png" alt=""></router-link>
                    </div>
                    <div class="navlist">
                        <router-link to="/" exact>首页</router-link>
                        <router-link to="/help">帮助中心</router-link>
                        <router-link to="/helpCenter" class="user">你好，用户仙尊大盗</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "myhead",
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .header{
        margin-bottom: 10px !important;
    }
    .user{
        color: #10b7ca !important;
    }
</style>
