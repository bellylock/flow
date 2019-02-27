<template>
    <div class="cabin">
        <myhead></myhead>
        <div class="content favor_content">
            <div class="bgwell">
                <div class="container">
                    <div class="tat">
                        <div class="tatbox"><span>客服热线</span><p>您的声音我们用心在听</p><em>400-123-1234</em></div>
                        <div class="tatbox"><span>在线咨询</span><p>及时响应，一对一在线服务</p><router-link to="###">点击咨询</router-link></div>
                        <div class="tatbox"><span>意见反馈</span><p>专业团队，24小时极速跟进</p><router-link to="###">欢迎咨询</router-link></div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="favorbox">
                    <div class="questiones">
                        <h2>常见问题</h2>
                        <ul class="ques">
                            <li v-for="item in question">
                                <router-link to="/answer">{{item}}</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <myfooter></myfooter>
    </div>
</template>

<script>
    import myhead from './myHead'
    import myfooter from './myFooter'
    export default {
        name:"help",
        data(){
            return{
                question:[
                    "1、话费流量充值多久能到账？",
                    "2、话费充值是否支持开发票？",
                    "3、话费充值能参加运营商活动吗？",
                    "4、充值手机话费有什么优惠？",
                    "5、充值手机话费要手续费吗？",
                    "6、为什么充值后话费长时间未到账？",
                    "1、话费流量充值多久能到账话费流量充值多久能到账？",
                    "2、话费充值是否支持开发票话费充值是否支持开发票？",
                    "3、话费充值能参加运营商活动吗话费充值能参加运营商活动吗？",
                    "4、充值手机话费有什么优惠充值手机话费有什么优惠？",
                    "5、充值手机话费要手续费吗充值手机话费要手续费吗？",
                    "6、为什么充值后话费长时间未到账为什么充值后话费长时间未到账？",
                    "1、话费流量充值多久能到账？",
                    "2、话费充值是否支持开发票？",
                    "3、话费充值能参加运营商活动吗？",
                    "4、充值手机话费有什么优惠？",
                    "5、充值手机话费要手续费吗？",
                    "6、为什么充值后话费长时间未到账？",
                    "1、话费流量充值多久能到账？",
                    "2、话费充值是否支持开发票？",
                    "3、话费充值能参加运营商活动吗？",
                    "4、充值手机话费有什么优惠？",
                    "5、充值手机话费要手续费吗？",
                    "6、为什么充值后话费长时间未到账？",
                    "1、话费流量充值多久能到账？",
                    "2、话费充值是否支持开发票？",
                    "3、话费充值能参加运营商活动吗？",
                    "4、充值手机话费有什么优惠？",
                    "5、充值手机话费要手续费吗？",
                    "6、为什么充值后话费长时间未到账？"
                ]
            }
        },
        methods:{

        },
        components:{
            myhead,
            myfooter
        }
    }
</script>

<style scoped>

</style>
