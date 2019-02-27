<template>
    <div class="cabin">
        <loghead></loghead>
        <div class="content help_content">
            <div class="container">
                <div class="layout">
                    <Layout>
                        <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
                            <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
                                <router-link to="/helpCenter">
                                    <MenuItem name="1-1" >
                                        <Icon type="ios-navigate"></Icon>
                                        <span>概况</span>
                                    </MenuItem>
                                </router-link>
                                <MenuItem name="1-2">
                                    <Icon type="md-filing"></Icon>
                                    <span>返利订单</span>
                                </MenuItem>
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
                                <div class="orderbox">
                                    <span>选择手机号码：</span>
                                    <Input v-model="value" placeholder="请输入手机号码进行查询" style="width: 300px" />
                                    <a href="###">查询</a>
                                    <span>选择日期：</span>
                                    <Row>
                                        <Col span="12">
                                            <DatePicker type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></DatePicker>
                                        </Col>
                                    </Row>
                                </div>
                                <div class="orderlist">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th v-for="item in columns1">{{item.title}}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in data1">
                                                <td>{{item.phone}}</td>
                                                <td>{{item.product}}</td>
                                                <td>{{item.paytime}}</td>
                                                <td>{{item.pay}}</td>
                                                <td class="predict">{{item.return_num}}</td>
                                                <td>
                                                    <span :class="item.status_num === 1 ? 'green' : item.status_num === 2 ? 'orange' : 'red' ">{{item.status}}</span>
                                                </td>
                                                <td>{{item.cash_time}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="page"><Page :total="100" /></div>
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
        name: "order",
        data(){
            return{
                value:"",
                isCollapsed: false,
                columns1: [
                    {
                        title: '手机号码',
                        key: 'phone'
                    },
                    {
                        title: '产品类型',
                        key: 'product'
                    },
                    {
                        title: '支付时间',
                        key: 'paytime'
                    },
                    {
                        title: '订单支付金额',
                        key: 'pay'
                    },
                    {
                        title: '预计返利金额',
                        key: 'return_num'
                    },
                    {
                        title: '状态',
                        key: 'status'
                    },
                    {
                        title: '预计可提现时间',
                        key: 'cash_time'
                    }
                ],
                data1: [
                    {
                        phone: '18182563865',
                        product: "流量",
                        paytime: '2018-12-25 12:25:20',
                        pay: '￥256.36',
                        return_num: "￥63.36",
                        status: '待提取',
                        cash_time: '2019-02-03 23:59:59',
                        status_num:1
                    },
                    {
                        phone: '18182563865',
                        product: "话费",
                        paytime: '2018-12-25 12:25:20',
                        pay: '￥256.36',
                        return_num: "￥63.36",
                        status: '可提取',
                        cash_time: '2019-02-03 23:59:59',
                        status_num:2
                    },
                    {
                        phone: '18182563865',
                        product: "流量",
                        paytime: '2018-12-25 12:25:20',
                        pay: '￥256.36',
                        return_num: "￥63.36",
                        status: '已提取',
                        cash_time: '2019-02-03 23:59:59',
                        status_num:3
                    },
                    {
                        phone: '18182563865',
                        product: "流量",
                        paytime: '2018-12-25 12:25:20',
                        pay: '￥256.36',
                        return_num: "￥63.36",
                        status: '待提取',
                        cash_time: '2019-02-03 23:59:59',
                        status_num:1
                    },
                    {
                        phone: '18182563865',
                        product: "话费",
                        paytime: '2018-12-25 12:25:20',
                        pay: '￥256.36',
                        return_num: "￥63.36",
                        status: '可提取',
                        cash_time: '2019-02-03 23:59:59',
                        status_num:2
                    },
                    {
                        phone: '18182563865',
                        product: "流量",
                        paytime: '2018-12-25 12:25:20',
                        pay: '￥256.36',
                        return_num: "￥63.36",
                        status: '已提取',
                        cash_time: '2019-02-03 23:59:59',
                        status_num:3
                    },
                    {
                        phone: '18182563865',
                        product: "流量",
                        paytime: '2018-12-25 12:25:20',
                        pay: '￥256.36',
                        return_num: "￥63.36",
                        status: '待提取',
                        cash_time: '2019-02-03 23:59:59',
                        status_num:1
                    },
                    {
                        phone: '18182563865',
                        product: "话费",
                        paytime: '2018-12-25 12:25:20',
                        pay: '￥256.36',
                        return_num: "￥63.36",
                        status: '可提取',
                        cash_time: '2019-02-03 23:59:59',
                        status_num:2
                    },
                    {
                        phone: '18182563865',
                        product: "流量",
                        paytime: '2018-12-25 12:25:20',
                        pay: '￥256.36',
                        return_num: "￥63.36",
                        status: '已提取',
                        cash_time: '2019-02-03 23:59:59',
                        status_num:3
                    },
                    {
                        phone: '18182563865',
                        product: "流量",
                        paytime: '2018-12-25 12:25:20',
                        pay: '￥256.36',
                        return_num: "￥63.36",
                        status: '待提取',
                        cash_time: '2019-02-03 23:59:59',
                        status_num:1
                    },
                    {
                        phone: '18182563865',
                        product: "话费",
                        paytime: '2018-12-25 12:25:20',
                        pay: '￥256.36',
                        return_num: "￥63.36",
                        status: '可提取',
                        cash_time: '2019-02-03 23:59:59',
                        status_num:2
                    },
                    {
                        phone: '18182563865',
                        product: "流量",
                        paytime: '2018-12-25 12:25:20',
                        pay: '￥256.36',
                        return_num: "￥63.36",
                        status: '已提取',
                        cash_time: '2019-02-03 23:59:59',
                        status_num:3
                    },
                    {
                        phone: '18182563865',
                        product: "流量",
                        paytime: '2018-12-25 12:25:20',
                        pay: '￥256.36',
                        return_num: "￥63.36",
                        status: '待提取',
                        cash_time: '2019-02-03 23:59:59',
                        status_num:1
                    },
                    {
                        phone: '18182563865',
                        product: "话费",
                        paytime: '2018-12-25 12:25:20',
                        pay: '￥256.36',
                        return_num: "￥63.36",
                        status: '可提取',
                        cash_time: '2019-02-03 23:59:59',
                        status_num:2
                    },
                    {
                        phone: '18182563865',
                        product: "流量",
                        paytime: '2018-12-25 12:25:20',
                        pay: '￥256.36',
                        return_num: "￥63.36",
                        status: '已提取',
                        cash_time: '2019-02-03 23:59:59',
                        status_num:3
                    },
                    {
                        phone: '18182563865',
                        product: "流量",
                        paytime: '2018-12-25 12:25:20',
                        pay: '￥256.36',
                        return_num: "￥63.36",
                        status: '待提取',
                        cash_time: '2019-02-03 23:59:59',
                        status_num:1
                    },
                    {
                        phone: '18182563865',
                        product: "话费",
                        paytime: '2018-12-25 12:25:20',
                        pay: '￥256.36',
                        return_num: "￥63.36",
                        status: '可提取',
                        cash_time: '2019-02-03 23:59:59',
                        status_num:2
                    },
                    {
                        phone: '18182563865',
                        product: "流量",
                        paytime: '2018-12-25 12:25:20',
                        pay: '￥256.36',
                        return_num: "￥63.36",
                        status: '已提取',
                        cash_time: '2019-02-03 23:59:59',
                        status_num:3
                    },
                    {
                        phone: '18182563865',
                        product: "流量",
                        paytime: '2018-12-25 12:25:20',
                        pay: '￥256.36',
                        return_num: "￥63.36",
                        status: '待提取',
                        cash_time: '2019-02-03 23:59:59',
                        status_num:1
                    },
                    {
                        phone: '18182563865',
                        product: "话费",
                        paytime: '2018-12-25 12:25:20',
                        pay: '￥256.36',
                        return_num: "￥63.36",
                        status: '可提取',
                        cash_time: '2019-02-03 23:59:59',
                        status_num:2
                    },
                    {
                        phone: '18182563865',
                        product: "流量",
                        paytime: '2018-12-25 12:25:20',
                        pay: '￥256.36',
                        return_num: "￥63.36",
                        status: '已提取',
                        cash_time: '2019-02-03 23:59:59',
                        status_num:3
                    },
                    {
                        phone: '18182563865',
                        product: "流量",
                        paytime: '2018-12-25 12:25:20',
                        pay: '￥256.36',
                        return_num: "￥63.36",
                        status: '待提取',
                        cash_time: '2019-02-03 23:59:59',
                        status_num:1
                    },
                    {
                        phone: '18182563865',
                        product: "话费",
                        paytime: '2018-12-25 12:25:20',
                        pay: '￥256.36',
                        return_num: "￥63.36",
                        status: '可提取',
                        cash_time: '2019-02-03 23:59:59',
                        status_num:2
                    },
                    {
                        phone: '18182563865',
                        product: "流量",
                        paytime: '2018-12-25 12:25:20',
                        pay: '￥256.36',
                        return_num: "￥63.36",
                        status: '已提取',
                        cash_time: '2019-02-03 23:59:59',
                        status_num:3
                    },
                    {
                        phone: '18182563865',
                        product: "流量",
                        paytime: '2018-12-25 12:25:20',
                        pay: '￥256.36',
                        return_num: "￥63.36",
                        status: '待提取',
                        cash_time: '2019-02-03 23:59:59',
                        status_num:1
                    },
                    {
                        phone: '18182563865',
                        product: "话费",
                        paytime: '2018-12-25 12:25:20',
                        pay: '￥256.36',
                        return_num: "￥63.36",
                        status: '可提取',
                        cash_time: '2019-02-03 23:59:59',
                        status_num:2
                    },
                    {
                        phone: '18182563865',
                        product: "流量",
                        paytime: '2018-12-25 12:25:20',
                        pay: '￥256.36',
                        return_num: "￥63.36",
                        status: '已提取',
                        cash_time: '2019-02-03 23:59:59',
                        status_num:3
                    }
                ]
            }
        },
        methods:{

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
    .green{
        color: #0bbb0b;
    }
    .orange{
        color: orange;
    }
    .red{
        color: #dc0201;
    }
    .predict{
        color: orange;
    }
</style>
