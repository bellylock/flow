<template>
    <div class="cabin">
        <myhead></myhead>
        <div class="content index_content">
            <div class="container">
                <div class="context">
                    <Tabs class="nav_list">
                        <TabPane label="充值话费" icon="logo-whatsapp">
                            <div class="box">
                                <span>充值号码</span>
                                <Input v-model="value" @on-focus="get_input()" @on-blur="lose()"
                                       placeholder="请输入要充值的手机号码"/>
                                <em class="tip" ref="phone_number">请输入正确的11位手机号</em>
                            </div>
                            <div class="box">
                                <span>充值面额</span>
                                <ul>
                                    <li :class="{ price_active:index === flag }" v-for="(item,index) in array"
                                        @click="change(index);off_sale_price($event)">
                                        {{item.price}}
                                    </li>
                                    <li class="last_price_li" @click="definePrice">
                                        <input type="number" @blur="count()" v-model="defineValue" ref="defineInput"
                                               placeholder="自定义价格">
                                    </li>
                                </ul>
                            </div>
                            <div class="box">
                                <span>销售价格</span>
                                <p class="sale_price"><span ref="sale_pri">{{charge_num}}</span>元</p>
                            </div>
                            <div class="box_last box">
                                <a href="###">立即充值</a>
                                <span>( 确保输入正确的号码，否则将无法退款 )</span>
                            </div>
                            <div class="charge_info">
                                <h3>充值说明</h3>
                                <ul>
                                    <li>
                                        <span>1.充值到账时间</span>
                                        <p>正常情况下，话费和流量充值会在二十分钟以内到账，充值高峰期间可能会有延迟情况，请您放心充值，如有疑问请联系我们！</p>
                                    </li>
                                    <li>
                                        <span>2.充值延迟情况</span>
                                        <p>月初和月末运营商系统繁忙,到账时间会稍有延迟.</p>
                                    </li>
                                    <li>
                                        <span>3.充值失败说明</span>
                                        <p>受系统升级影响,部分订单可能会充值失败.若充值失败,钱款会退至您的付款账户,请您耐心等待.</p>
                                    </li>
                                    <li>
                                        <span>4.充值活动</span>
                                        <p>该充值业务不参与消费返现活动.</p>
                                    </li>
                                    <li>
                                        <span>5.充值帮助</span>
                                        <p>如有问题请联系我们的客服为您提供帮助,客服电话：11111111.</p>
                                    </li>
                                </ul>
                            </div>
                        </TabPane>
                        <TabPane label="充值流量" icon="ios-water">
                            <div class="box">
                                <span>充值号码</span>
                                <Input v-model="value_flow" @on-focus="get_input_flow()" @on-blur="lose_flow()"
                                       placeholder="请输入要充值的手机号码"/>
                                <em class="tip" ref="phone_number_flow">请输入正确的11位手机号</em>
                            </div>
                            <div class="box">
                                <span>充值面额</span>
                                <ul>
                                    <li :class="{ flow_active:index === flag_flow }" v-for="(item,index) in list"
                                        @click="change_flow(index);off_sale_flow($event)">
                                        {{item.flow}}
                                    </li>
                                    <li class="defineLi">
                                        <Select ref="select_flow" v-model="defineFlow" @on-change="pickFlow(defineFlow)"
                                                size="large" style="width:92px" placeholder="其他面额">
                                            <Option v-for="item in flowList" :value="item.value" :key="item.value">{{
                                                item.label }}
                                            </Option>
                                        </Select>
                                    </li>
                                </ul>
                            </div>
                            <div class="box">
                                <span>付款价格</span>
                                <p class="sale_price_flow"><span ref="sale_pri_flow">{{charge_flow_num}}</span>元</p>
                                <i class="flow_ps">全国流量，当月可用</i>
                            </div>
                            <div class="box_last box">
                                <a href="###">立即充值</a>
                                <span>( 确保输入正确的号码，否则将无法退款 )</span>
                            </div>
                            <div class="charge_info">
                                <h3>充值说明</h3>
                                <ul>
                                    <li>
                                        <span>1.充值到账时间</span>
                                        <p>正常情况下，话费和流量充值会在二十分钟以内到账，充值高峰期间可能会有延迟情况，请您放心充值，如有疑问请联系我们！</p>
                                    </li>
                                    <li>
                                        <span>2.充值延迟情况</span>
                                        <p>月初和月末运营商系统繁忙,到账时间会稍有延迟.</p>
                                    </li>
                                    <li>
                                        <span>3.充值失败说明</span>
                                        <p>受系统升级影响,部分订单可能会充值失败.若充值失败,钱款会退至您的付款账户,请您耐心等待.</p>
                                    </li>
                                    <li>
                                        <span>4.充值活动</span>
                                        <p>该充值业务不参与消费返现活动.</p>
                                    </li>
                                    <li>
                                        <span>5.充值帮助</span>
                                        <p>如有问题请联系我们的客服为您提供帮助,客服电话：11111111.</p>
                                    </li>
                                </ul>
                            </div>
                        </TabPane>
                    </Tabs>
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
        name: "index",
        data() {
            return {
                value: "",
                value_flow: "",
                val: 10,
                val_flow: 100,
                flag: 0,
                flag_flow: 0,
                defineValue: "",
                defineFlow: "",
                array: [
                    {
                        "price": "10元"
                    },
                    {
                        "price": "20元"
                    },
                    {
                        "price": "30元"
                    },
                    {
                        "price": "50元"
                    },
                    {
                        "price": "100元"
                    },
                    {
                        "price": "300元"
                    },
                    {
                        "price": "500元"
                    },
                ],
                list: [
                    {
                        "flow": "100M"
                    },
                    {
                        "flow": "200M"
                    },
                    {
                        "flow": "300M"
                    },
                    {
                        "flow": "500M"
                    },
                    {
                        "flow": "1G"
                    },
                    {
                        "flow": "2G"
                    },
                    {
                        "flow": "3G"
                    },
                ],
                flowList: [
                    {
                        value: '1',
                        label: '4G'
                    },
                    {
                        value: '2',
                        label: '5G'
                    },
                    {
                        value: '3',
                        label: '6G'
                    },
                    {
                        value: '4',
                        label: '7G'
                    },
                    {
                        value: '5',
                        label: '8G'
                    },
                    {
                        value: '6',
                        label: '9G'
                    },
                    {
                        value: '7',
                        label: '10G'
                    }
                ],
            }
        },
        methods: {
            get_input() {
                this.$refs.phone_number.style.display = "none"
            },
            get_input_flow() {
                this.$refs.phone_number_flow.style.display = "none"
            },
            lose() {
                var myreg = /^1[34578]\d{9}$/;
                if (!myreg.test(this.value)) {
                    this.$refs.phone_number.style.display = "inline-block";
                    return false;
                }else{
                    this.$refs.phone_number.style.display = "none";
                    this.$refs.phone_number_flow.style.display = "none";
                }
                this.value_flow = this.value;
            },
            lose_flow() {
                var myreg = /^1[34578]\d{9}$/;
                if (!myreg.test(this.value_flow)) {
                    this.$refs.phone_number_flow.style.display = "inline-block";
                    return false;
                }else{
                    this.$refs.phone_number_flow.style.display = "none";
                    this.$refs.phone_number.style.display = "none";
                }
                this.value = this.value_flow
            },
            change(index) {  //切换充值面额高亮
                this.flag = index;
                this.$refs.defineInput.style.borderColor = "#ccc";
                this.$refs.defineInput.style.color = "#000";
                this.defineValue = ""
            },
            change_flow(index) {  //切换充值流量高亮
                this.flag_flow = index;
                document.querySelector(".ivu-select-selection").style.borderColor = "#ccc";
                // var a = this.$refs.select_flow.querySelector(".ivu-select-selection");
                if (this.defineFlow > 0) {
                    console.log(1)
                }
                // var text = this.$el.querySelect('.ivu-select-selection').innerHTML;
                // console.log( a );
                // this.$refs.defineInput.style.borderColor = "#ccc";
                // this.$refs.defineInput.style.color = "#000";
                // this.defineValue = ""
            },
            off_sale_price(e) {  //获取充值面值
                var str = e.target.innerHTML;
                var need = parseInt(str);
                this.val = need;
            },
            off_sale_flow(e) {  //获取充值流量
                var str = e.target.innerHTML;
                var needs = parseInt(str);
                if (needs < 100) {
                    needs = needs * 1024;
                }
                this.val_flow = needs;
            },
            definePrice() {
                this.flag = -1;
                this.$refs.defineInput.style.borderColor = "#dc0201";
                this.$refs.defineInput.style.color = "#dc0201";
            },
            count() {  //话费自定义价格
                var value = this.defineValue * 0.998;
                var value = value.toFixed(2);
                this.$refs.sale_pri.innerText = value;
            },
            pickFlow() { //流量自定义兆数
                this.flag_flow = -1;
                var val = parseInt(this.defineFlow);
                var text = (val + 3) * 1024;
                text = text * 0.01;
                this.$refs.sale_pri_flow.innerText = text;
                document.querySelector(".ivu-select-selection").style.borderColor = "#dc0201";
            }
        },
        computed: {
            charge_num() {   //计算充值话费金额
                var final_price = this.val * 0.998;
                final_price = final_price.toFixed(2);
                return final_price;
            },
            charge_flow_num() {   //计算充值流量金额
                var final_price_flow = this.val_flow * 0.01;
                final_price_flow = final_price_flow.toFixed(2);
                return final_price_flow;
            }
        },
        components:{
            myhead,
            myfooter,
        }
    }
</script>

<style scoped>

</style>
