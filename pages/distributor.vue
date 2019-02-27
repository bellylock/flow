<template>
    <div class="cabin">
        <loghead></loghead>
        <div class="content help_content">
            <div class="container">
                <div class="layout">
                    <Layout>
                        <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
                            <Menu active-name="1-5" theme="dark" width="auto" :class="menuitemClasses">
                                <router-link to="/helpCenter">
                                    <MenuItem name="1-1" >
                                        <Icon type="ios-navigate"></Icon>
                                        <span>概况</span>
                                    </MenuItem>
                                </router-link>
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
                                <MenuItem name="1-5">
                                    <Icon type="md-funnel"></Icon>
                                    <span>分销商管理</span>
                                </MenuItem>
                            </Menu>
                            <div slot="trigger"></div>
                        </Sider>
                        <Layout class="distributor_main">
                            <Content :style="{padding: '20px', background: '#fff', minHeight: '220px'}">
                                <div class="disbox disbox1">
                                    <h3>下级分销注册</h3>
                                    <div class="dis_info">
                                        <p>一级：为直接面向消费者，直接促成成交的分销商；该级分销商应获得的分销比例应为最高；</p>
                                        <p>二级：直接面向消费者的分销商的上线；</p>
                                        <p>三线：直接面向消费者的分销商的上上线；</p>
                                        <p>注意：系统默认开启三级分销，如您只想做一级或二级分销，可将后两级或第三级的提成比例设置为零；</p>
                                    </div>
                                    <span>注册链接:</span>
                                    <a href="###">www.baidu.com</a>
                                    <button class="copylink"
                                        v-clipboard:copy="link1"
                                        v-clipboard:success="onCopy"
                                        v-clipboard:error="onError">复制注册链接</button>
                                </div>
                                <div class="disbox">
                                    <h3>充值推广</h3>
                                    <div class="dis_info">
                                        <p>一级：为直接面向消费者，直接促成成交的分销商；该级分销商应获得的分销比例应为最高；</p>
                                        <p>二级：直接面向消费者的分销商的上线；</p>
                                        <p>三线：直接面向消费者的分销商的上上线；</p>
                                        <p>注意：系统默认开启三级分销，如您只想做一级或二级分销，可将后两级或第三级的提成比例设置为零；</p>
                                    </div>
                                    <span>推广链接:</span>
                                    <a href="###">www.ynweb.com</a>
                                    <button class="copylink"
                                            v-clipboard:copy="link2"
                                            v-clipboard:success="onCopy2"
                                            v-clipboard:error="onError2">复制推广链接</button>
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
        name: "distributor",
        data(){
            return{
                isCollapsed: false,
                link1:"www.baidu.com",
                link2:"www.ynweb.com"

            }
        },
        methods:{
            onCopy: function (e) {
                console.log(e.text);
                this.$Message.info('注册链接复制成功！');
            },
            onError: function (e) {
                this.$Message.info('复制失败！');
            },
            onCopy2: function (e) {
                console.log(e.text);
                this.$Message.info('推广链接复制成功！');
            },
            onError2: function (e) {
                this.$Message.info('复制失败！');
            }
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
    .copylink{
        font-size: 14px;
        color: #dc0201 !important;
        padding: 0 15px;
        line-height: 26px;
        margin-left: 20px;
        display: inline-block;
        border: none;
        cursor: pointer;
        background: #dadada;
    }
</style>
