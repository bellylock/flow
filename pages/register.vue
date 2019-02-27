<template>
    <div class="cabin">
        <myhead></myhead>
        <div class="content register_content">
            <div class="regbox">
                <div class="container">
                    <div class="regbin">
                        <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
                            <FormItem label="" prop="phone">
                                <Input type="text" placeholder="请输入手机号码" v-model="formCustom.phone" number></Input>
                            </FormItem>
                            <div class="identifyCode" >
                                <div class='captcha'>
                                    <input id="identifycode" type="text" placeholder="请输入验证码" class="yanzhengma_input" >
                                    <input type="button" @click="createCode" class="verification" v-model="checkCode"/>
                                    <p id="codeps">验证码输入不正确</p>
                                </div>
                            </div>
                            <div class="getregcode">
                                <Input v-model="value" placeholder="输入短信验证码" />
                                <div class="codebox">
                                    <span v-show="show" class="frontget" @click="getCode">获取短信验证码</span>
                                    <span v-show="!show" class="aftercount">重新发送（{{count}}）s</span>
                                </div>
                                <p id="msgps">请先输入上面验证码进行验证再获取手机验证码</p>
                            </div>
                            <FormItem label="" prop="passwd">
                                <Input placeholder="请输入密码" type="password" v-model="formCustom.passwd"></Input>
                            </FormItem>
                            <FormItem label="" prop="passwdCheck">
                                <Input placeholder="请再次输入密码" type="password" v-model="formCustom.passwdCheck"></Input>
                            </FormItem>
                            <FormItem class="lastform">
                                <Button class="submit" type="primary" @click="handleSubmit('formCustom')">注 册</Button>
                            </FormItem>
                            <router-link to="/logo" class="tolog">已有账号去登录</router-link>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    var code = "";
    import myhead from './myHead'
    export default {
        name:"register",
        data(){
            //密码验证
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.formCustom.passwdCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formCustom.validateField('passwdCheck');
                    }
                    if( value.length < 6){
                        callback(new Error('密码长度不得少于6位'));
                    }
                    callback();
                }
            };
            // 再次验证密码
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入您的密码'));
                } else if (value !== this.formCustom.passwd) {
                    callback(new Error('两次密码输入不一致!'));
                } else {
                    callback();
                }
            };
            // 验证手机号码
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
                }
            };
            return{
                checkCode:"",
                picLyanzhengma:"",
                show: true,
                count: '',
                timer:null,
                value:"",
                formCustom: {
                    passwd: '',
                    passwdCheck: '',
                    phone: ''
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
                    ]
                }
            }
        },
        methods:{
            handleSubmit (name) {
                var obj = document.getElementById("identifycode");
                var value = obj.value;
                this.$refs[name].validate((valid) => {
                    if (valid && value == this.checkCode) {
                        document.getElementById("codeps").style.display = "none";
                        this.$Message.success('注册成功!');
                    } else {
                        if( value == "" || value != this.checkCode){
                            document.getElementById("codeps").style.display = "block"
                        }
                        if( value == this.checkCode){
                            document.getElementById("codeps").style.display = "none";
                        }
                        this.$Message.error('注册失败!');
                    }
                })
            },
            // 验证码
            createCode(){
                //先清空验证码的输入
                this.code = "";
                this.checkCode = "";
                this.picLyanzhengma = "";
                //验证码的长度
                var codeLength = 4;
                //随机数
                var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
                for(var i = 0; i < codeLength; i++) {
                    //取得随机数的索引（0~35）
                    var index = Math.floor(Math.random()*36);
                    //根据索引取得随机数加到code上
                    this.code += random[index];
                }
                //把code值赋给验证码
                this.checkCode = this.code;
            },
            getCode(){
                var obj = document.getElementById("identifycode");
                if( obj.value == "" ){
                    document.getElementById("msgps").style.display = "block"
                }else{
                    const TIME_COUNT = 60;
                    if (!this.timer && obj.value == this.checkCode) {
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
                        }, 1000);
                        document.getElementById("msgps").style.display = "none";
                        document.getElementById("codeps").style.display = "none";
                    }
                    if( obj.value != this.checkCode ){
                        document.getElementById("msgps").innerText = "上面验证码输入不正确"
                    }
                }
            },
        },
        created(){
            // 验证码
            this.createCode()
        },
        components:{
            myhead
        }
    }
</script>

<style scoped>
    .regbox{
        width: 100%;
        height: calc( 100vh - 60px);
        background: url(../assets/images/269.jpg) no-repeat left top;
        background-size: 100% 100%;
        padding-top: 12%;
    }
    .regbin{
        /*width: 320px;*/
        /*margin: 0 auto;*/
        width: 360px;
        margin: 0 auto;
        background: white;
        padding: 20px;
    }
    .submit{
        width: 100%;
        font-size: 14px;
    }
    /*验证码*/
    .identifyCode{
        width: 320px;
        margin-bottom: 26px;
        position: relative;
    }
    .yanzhengma_input{
        border: 1px solid #dadada;
        color: #333;
        outline: none;
        font-size: 15px;
        font-weight: normal;
        height: 32px;
        float: left;
        width: 150px;
        padding: 0 10px;
        background: white;
        line-height: 36px;
        border-radius: 4px;
    }
    .yanzhengma_input:hover{
        border-color: #57a3f3;
    }
    .verification{
        float: right;
        width: 150px;
        letter-spacing: 10px;
        height: 32px;
        border: none;
        cursor: pointer;
        background: #fe9191;
        border-radius: 4px;
        font-size: 15px;
    }
    .verification:focus{
        outline: none;
    }
    .captcha{
        overflow: hidden;
    }
    #codeps{
        position: absolute;
        bottom: -25px;
        left: 0;
        display: none;
        font-size: 12px;
        color: #DC0201;
        float: left;
        line-height: 26px;
    }
</style>
