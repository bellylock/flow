<template>
    <div class="cabin">
        <loghead></loghead>
        <div class="content help_content">
            <div class="container">
                <div class="layout">
                    <Layout>
                        <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
                            <Menu active-name="1-1" theme="dark" width="auto" :class="menuitemClasses">
                                <MenuItem name="1-1" >
                                    <Icon type="ios-navigate"></Icon>
                                    <span>概况</span>
                                </MenuItem>
                                <router-link to="/order">
                                    <MenuItem name="1-2">
                                        <Icon type="md-filing"></Icon>
                                        <span>返利订单</span>
                                    </MenuItem>
                                </router-link>
                                <router-link to="/security">
                                    <MenuItem name="1-3">
                                        <Icon type="ios-settings"></Icon>
                                        <span>账户安全</span>
                                    </MenuItem>
                                </router-link>
                                <router-link to="/finance">
                                    <MenuItem name="1-4">
                                        <Icon type="logo-yen"></Icon>
                                        <span>财务信息</span>
                                    </MenuItem>
                                </router-link>
                                <router-link to="/distributor">
                                    <MenuItem name="1-5">
                                        <Icon type="md-funnel"></Icon>
                                        <span>分销商管理</span>
                                    </MenuItem>
                                </router-link>
                            </Menu>
                            <div slot="trigger"></div>
                        </Sider>
                        <Layout class="help_main">
                            <Content :style="{margin: '20px', background: '#fff', minHeight: '220px'}">
                                <div class="helpbin">
                                    <div class="helpbox">
                                        <div class="helpinfo">
                                            <img src="../assets/images/h-2.jpg" alt="">
                                            <p>
                                                <span>仙尊大盗</span><br />
                                                <em>5级</em>
                                                <router-link to="/" class="exit">退出</router-link>
                                            </p>
                                        </div>
                                        <div class="helptool">
                                            <div class="tooltext">
                                                <i>推广工具</i>
                                                <p>最少<em>15%</em>佣金奖励</p>
                                                <span>客户访问右侧链接，30天成为我们的推广客户分享代金券红包，客户有效购买返现15%-25%</span>
                                            </div>
                                            <div class="toolshare">
                                                <span>立即分享</span>
                                                <a class="copylink"
                                                        v-clipboard:copy="message"
                                                        v-clipboard:success="onCopy"
                                                        v-clipboard:error="onError">复制分享链接</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="refund">
                                        <header>返利动态</header>
                                        <div class="refundbox">
                                            <div class="bin">
                                                <p class="account">
                                                    <span>返利支付宝账号：</span>
                                                    <em>已绑定</em>
                                                </p>
                                                <p>
                                                    <span>姓名：</span>
                                                    <span>毕超</span>
                                                </p>
                                                <p>
                                                    <span>支付宝账号：</span>
                                                    <span>18182563865</span>
                                                </p>
                                            </div>
                                            <div class="bin">
                                                <span>可提取奖励</span>
                                                <template>
                                                    <Tooltip placement="right" max-width="200" content="提示信息">
                                                        <img class="question_icon" src="../assets/images/question.png" alt="">
                                                    </Tooltip>
                                                </template>
                                                <span class="award">￥28.56</span>
                                                <a>申请提现</a>
                                            </div>
                                            <div class="bin">
                                                <span>已提取奖励</span>
                                                <span class="should_own">￥228.56</span>
                                            </div>
                                            <div class="bin">
                                                <span>待到账奖励</span>
                                                <span class="should_own">￥228.56</span>
                                            </div>
                                            <div class="bin">
                                                <span>订单实时奖励</span>
                                                <span class="should_own">￥228.56</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="popularize">
                                        <header>推广客户</header>
                                        <div class="popul">
                                            <div class="boxs">
                                                <span>4</span>
                                                <em>次</em>
                                                <p>当前累计推广次数</p>
                                            </div>
                                            <div class="boxs">
                                                <span>4</span>
                                                <em>次</em>
                                                <p>当前已购买客户</p>
                                            </div>
                                            <div class="boxs">
                                                <router-link to="/order">查看客户数列表</router-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="common_question">
                                        <header>常见帮助</header>
                                        <ul class="questionbox">
                                            <li><p>相关帮助</p></li>
                                            <li><a>1.如何加入返利活动中</a></li>
                                            <li><a>2.流量推广的返利计划</a></li>
                                            <li><a>3.如何进行更高效的推广</a></li>
                                            <li><a>4.推广订单如何计算返利</a></li>
                                            <li><a>5.其他帮助</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </Content>
                        </Layout>
                    </Layout>
                </div>
            </div>
        </div>
        <myfooter></myfooter>
    </div>
</template>

<script>
    import loghead from './logHead'
    import myfooter from './myFooter'
    export default {
        name: "hc",
        data(){
            return{
                isCollapsed: false,
                message:"www.ynweb.com"
            }
        },
        methods:{
            onCopy: function (e) {
                console.log(e.text);
                this.$Message.info('复制成功！');
            },
            onError: function (e) {
                this.$Message.info('复制失败！');
            },
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        components:{
            loghead,
            myfooter
        }
    }
</script>

<style scoped>

</style>
