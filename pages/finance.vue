<template>
    <div class="cabin">
        <loghead></loghead>
        <div class="content help_content">
            <div class="container">
                <div class="layout">
                    <Layout>
                        <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
                            <Menu active-name="1-4" theme="dark" width="auto" :class="menuitemClasses">
                                <router-link to="/helpCenter">
                                    <MenuItem name="1-1">
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
                                <MenuItem name="1-4">
                                    <Icon type="logo-yen"></Icon>
                                    <span>财务信息</span>
                                </MenuItem>
                                <router-link to="/distributor">
                                    <MenuItem name="1-5">
                                        <Icon type="md-funnel"></Icon>
                                        <span>分销商管理</span>
                                    </MenuItem>
                                </router-link>
                            </Menu>
                            <div slot="trigger"></div>
                        </Sider>
                        <Layout class="finance_main help_main">
                            <Content :style="{padding: '20px', background: '#fff', minHeight: '220px'}">
                                <div class="helpbin">
                                    <div class="refund financebox">
                                        <header>财务信息</header>
                                        <div class="refundbox">
                                            <div class="bin">
                                                <p class="account">提现账户</p>
                                            </div>
                                            <div class="bin">
                                                <span>支付宝账号</span>
                                                <p id="aliaccount">18182563865</p>
                                            </div>
                                            <div class="bin">
                                                <span>真实姓名</span>
                                                <p id="name">毕超</p>
                                            </div>
                                            <div class="bin">
                                                <span>身份证号码</span>
                                                <p id="identify">136523698574852123</p>
                                            </div>
                                            <div class="bin">
                                                <button @click="modal10 = true">编辑</button>
                                            </div>
                                        </div>
                                        <table>
                                            <thead>
                                            <tr>
                                                <th>序号</th>
                                                <th>可提取奖励</th>
                                                <th>已提取奖励</th>
                                                <th>待到账奖励</th>
                                                <th>订单实时奖励</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="item in array">
                                                <td>{{item.num}}</td>
                                                <td class="orange">{{item.catch}}</td>
                                                <td>{{item.got}}</td>
                                                <td>{{item.wait}}</td>
                                                <td>{{item.award}}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <Modal
                                    v-model="modal10"
                                    title="修改账户信息"
                                    @on-ok="ok"
                                    @on-cancel="cancel">
                                    <p class="edit">
                                        <span>支付宝账号</span>
                                        <input ref="editaccount" type="text">
                                    </p>
                                    <p class="edit">
                                        <span>真实姓名</span>
                                        <input ref="editname" type="text">
                                    </p>
                                    <p class="edit">
                                        <span>身份证号码</span>
                                        <input ref="editidentify" type="text">
                                    </p>
                                </Modal>
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
        name: "finance",
        data() {
            return {
                isCollapsed: false,
                modal10: false,
                array: [
                    {
                        num: 1,
                        catch: "￥123",
                        got: "￥546",
                        wait: '￥52',
                        award: '￥52'
                    },
                    {
                        num: 2,
                        catch: "￥123",
                        got: "￥546",
                        wait: '￥52',
                        award: '￥52'
                    },
                    {
                        num: 3,
                        catch: "￥123",
                        got: "￥546",
                        wait: '￥52',
                        award: '￥52'
                    },
                    {
                        num: 4,
                        catch: "￥123",
                        got: "￥546",
                        wait: '￥52',
                        award: '￥52'
                    },
                    {
                        num: 5,
                        catch: "￥123",
                        got: "￥546",
                        wait: '￥52',
                        award: '￥52'
                    },
                    {
                        num: 6,
                        catch: "￥123",
                        got: "￥546",
                        wait: '￥52',
                        award: '￥52'
                    },
                    {
                        num: 7,
                        catch: "￥123",
                        got: "￥546",
                        wait: '￥52',
                        award: '￥52'
                    },
                    {
                        num: 8,
                        catch: "￥123",
                        got: "￥546",
                        wait: '￥52',
                        award: '￥52'
                    },
                    {
                        num: 9,
                        catch: "￥123",
                        got: "￥546",
                        wait: '￥52',
                        award: '￥52'
                    },
                    {
                        num: 10,
                        catch: "￥123",
                        got: "￥546",
                        wait: '￥52',
                        award: '￥52'
                    },
                    {
                        num: 11,
                        catch: "￥123",
                        got: "￥546",
                        wait: '￥52',
                        award: '￥52'
                    },
                    {
                        num: 12,
                        catch: "￥123",
                        got: "￥546",
                        wait: '￥52',
                        award: '￥52'
                    },
                    {
                        num: 13,
                        catch: "￥123",
                        got: "￥546",
                        wait: '￥52',
                        award: '￥52'
                    }
                ]
            }
        },
        methods: {
            ok () {
                var value = this.$refs.editaccount.value;
                var name = this.$refs.editname.value;
                var identify = this.$refs.editidentify.value;
                if(value == "" && name == "" && identify == ""){
                    this.$Message.info("修改内容不能为空");
                    return
                }else{
                    document.getElementById("aliaccount").innerText = value;
                    document.getElementById("name").innerText = name;
                    document.getElementById("identify").innerText = identify;
                    this.$refs.editaccount.value = "";
                    this.$refs.editname.value = "";
                    this.$refs.editidentify.value = "";
                    this.$Message.info("修改成功");
                }
            },
            cancel () {
                this.$refs.editaccount.value = "";
                this.$refs.editname.value = "";
                this.$refs.editidentify.value = "";
                this.$Message.info('取消修改');
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
        components: {
            loghead,
            myfooter
        }
    }
</script>

<style scoped>
    .orange {
        color: orange !important;
    }
    .edit{
        overflow: hidden;
        margin-bottom: 15px;
    }
    .edit span{
        font-size: 15px;
        line-height: 34px;
        width: 80px;
        float: left;
        margin-right: 15px;
    }
    .edit input{
        float: left;
        width: 260px;
        height: 34px;
        line-height: 34px;
        font-size: 15px;
        border: 1px solid #ccc;
        border-radius: 6px;
        padding-left: 15px;
    }
    .edit input:focus{
        outline: none;
    }
</style>
