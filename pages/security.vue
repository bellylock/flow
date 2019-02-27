<template>
    <div class="cabin">
        <loghead></loghead>
        <div class="content help_content">
            <div class="container">
                <div class="layout">
                    <Layout>
                        <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
                            <Menu active-name="1-3" theme="dark" width="auto" :class="menuitemClasses">
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
                                <MenuItem name="1-3">
                                    <Icon type="ios-settings"></Icon>
                                    <span>账户安全</span>
                                </MenuItem>
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
                        <Layout class="help_main security_context">
                            <Content :style="{margin: '20px', background: '#fff', minHeight: '220px'}">
                                <div class="code1 code">
                                    <h3>密码修改</h3>
                                    <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
                                        <FormItem label="手机号码" prop="phone">
                                            <Input class="limit" type="text" v-model="formCustom.phone" number></Input>
                                        </FormItem>
                                        <FormItem label="短信验证码" prop="code" style="width: 460px;display: inline-block;">
                                            <Input type="text" v-model="formCustom.code" style="width: 200px;display: inline-block;"></Input>
                                            <div class="getcode">
                                                <span v-show="show" class="frontget" @click="getCode">获取验证码</span>
                                                <span v-show="!show" class="aftercount">重新发送（{{count}}）s</span>
                                            </div>
                                        </FormItem>
                                        <FormItem label="密码修改" prop="passwd">
                                            <Input class="limit" type="password" v-model="formCustom.passwd"></Input>
                                        </FormItem>
                                        <FormItem label="确认密码" prop="passwdCheck">
                                            <Input class="limit" type="password" v-model="formCustom.passwdCheck"></Input>
                                        </FormItem>
                                        <FormItem>
                                            <Button type="primary" @click="handleSubmit('formCustom')">提交</Button>
                                            <Button @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>
                                        </FormItem>
                                    </Form>
                                </div>
                                <div class="code2 code">
                                    <h3>手机号码修改</h3>
                                    <Form ref="formCustom2" :model="formCustom2" :rules="ruleCustom2" :label-width="80">
                                        <FormItem label="原手机号码" prop="ori_phone">
                                            <Input class="limit" type="text" v-model="formCustom2.ori_phone" number></Input>
                                        </FormItem>
                                        <FormItem label="原手机号码验证码" prop="code" style="width: 460px;display: inline-block;">
                                            <Input type="text" v-model="formCustom2.code" style="width: 200px;display: inline-block;"></Input>
                                            <div class="getcode">
                                                <span v-show="show_ori" class="frontget_ori" @click="getCode_ori">获取验证码</span>
                                                <span v-show="!show_ori" class="aftercount_ori">重新发送（{{count_ori}}）s</span>
                                            </div>
                                        </FormItem>
                                        <FormItem label="新手机号码" prop="new_phone">
                                            <Input class="limit" type="text" v-model="formCustom2.new_phone"></Input>
                                        </FormItem>
                                        <FormItem>
                                            <Button type="primary" @click="handleSubmit2('formCustom2')">提交</Button>
                                            <Button @click="handleReset2('formCustom2')" style="margin-left: 8px">重置</Button>
                                        </FormItem>
                                    </Form>
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
        name: "security",
        data(){
            //密码修改验证
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入您的密码'));
                } else {
                    if (this.formCustom.passwdCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formCustom.validateField('passwdCheck');
                    }
                    callback();
                }
            };
            //确认密码验证
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入您的密码'));
                } else if (value !== this.formCustom.passwd) {
                    callback(new Error('两次密码输入不一致'));
                } else {
                    callback();
                }
            };
            //密码修改的手机验证
            const validatePhone = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('手机号码不能为空'));
                } else {
                    if (value !== '') {
                        var reg=/^1[3456789]\d{9}$/;
                        if(!reg.test(value)){
                            callback(new Error('请输入有效的手机号码'));
                        }
                    }
                    callback();
                    this.formCustom2.ori_phone = this.formCustom.phone
                }
            };
            //密码修改的短信验证
            const validateCode = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('手机验证码不能为空'));
                }else {
                    if (value.length < 4) {
                        return callback(new Error('手机验证码不正确'));
                    }
                    callback();
                }
            };
            //手机号码修改的新手机号码验证
            const validateNew_phone = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('手机号码不能为空'));
                } else {
                    if (value !== '') {
                        var reg=/^1[3456789]\d{9}$/;
                        if(!reg.test(value)){
                            callback(new Error('请输入有效的手机号码'));
                        }
                    }
                    callback();
                }
            };
            //手机修改的原手机号码验证
            const validateOri_phone = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('手机号码不能为空'));
                } else {
                    if (value !== '') {
                        var reg=/^1[3456789]\d{9}$/;
                        if(!reg.test(value)){
                            callback(new Error('请输入有效的手机号码'));
                        }
                    }
                    callback();
                }
            };
            //手机修改的原手机短信验证
            const validateCode2 = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('手机验证码不能为空'));
                }else {
                    if (value.length < 4) {
                        return callback(new Error('手机验证码不正确'));
                    }
                    callback();
                }
            };
            return{
                show: true,
                count: '',
                timer: null,
                show_ori: true,
                count_ori: '',
                timer_ori: null,
                isCollapsed: false,
                formCustom: {
                    passwd: '',
                    passwdCheck: '',
                    phone: '',
                    code:""
                },
                ruleCustom: {
                    passwd: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    passwdCheck: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ],
                    phone: [
                        { validator: validatePhone, trigger: 'blur' }
                    ],
                    code: [
                        { validator: validateCode, trigger: 'blur' }
                    ]
                },
                formCustom2: {
                    new_phone: '',
                    ori_phone: '',
                    code:""
                },
                ruleCustom2: {
                    new_phone: [
                        { validator: validateNew_phone, trigger: 'blur' }
                    ],
                    ori_phone: [
                        { validator: validateOri_phone, trigger: 'blur' }
                    ],
                    code: [
                        { validator: validateCode2, trigger: 'blur' }
                    ]
                }
            }
        },
        methods:{
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('提交失败!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            handleSubmit2 (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('提交失败!');
                    }
                })
            },
            handleReset2 (name) {
                this.$refs[name].resetFields();
            },
            getCode(){
                const TIME_COUNT = 60;
                if (!this.timer) {
                    this.count = TIME_COUNT;
                    this.show = false;
                    this.timer = setInterval(() => {
                        if (this.count > 0 && this.count <= TIME_COUNT) {
                            this.count--;
                        } else {
                            this.show = true;
                            clearInterval(this.timer);
                            this.timer = null;
                        }
                    }, 1000)
                }
            },
            getCode_ori(){
                const TIME_COUNT_ori = 60;
                if (!this.timer_ori) {
                    this.count_ori = TIME_COUNT_ori;
                    this.show_ori = false;
                    this.timer_ori = setInterval(() => {
                        if (this.count_ori > 0 && this.count_ori <= TIME_COUNT_ori) {
                            this.count_ori--;
                        } else {
                            this.show_ori = true;
                            clearInterval(this.timer_ori);
                            this.timer_ori = null;
                        }
                    }, 1000)
                }
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
    .identify_phone:disabled{
        opacity: .5;
    }
    .limit{
    width: 370px !important;
    }
</style>
