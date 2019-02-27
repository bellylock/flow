<template>
    <div class="cabin">
        <myhead></myhead>
        <div class="content">
            <div class="logbox">
                <div class="container">
                    <div class="logbin">
                        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                            <FormItem prop="user" class="cabin">
                                <Input type="text" v-model="formInline.user" placeholder="请输入用户名/手机号码">
                                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                                </Input>
                            </FormItem>
                            <FormItem prop="password" class="cabin">
                                <Input type="password" v-model="formInline.password" placeholder="请输入密码">
                                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                                </Input>
                            </FormItem>
                            <div class="identifyCode" >
                                <div class='captcha'>
                                    <input id="identifycode" type="text" placeholder="请输入验证码" class="yanzhengma_input" >
                                    <input type="button" @click="createCode" class="verification" v-model="checkCode"/>
                                    <p id="codeps">验证码输入不正确</p>
                                </div>
                            </div>
                            <FormItem class="cabin subbox lastform">
                                <Button class="submit" type="primary" @click="handleSubmit('formInline')">登 录</Button>
                            </FormItem>
                            <FormItem class="cabin logps lastform">
                                <router-link to="/register">立即注册</router-link>
                                <a href="###">忘记密码</a>
                            </FormItem>
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
        name:"logo",
        data(){
            return{
                checkCode:"",
                picLyanzhengma:"",
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能少于6位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods:{
            handleSubmit(name) {
                var obj = document.getElementById("identifycode");
                var value = obj.value;
                this.$refs[name].validate((valid) => {
                    if (valid && value == this.checkCode) {
                        document.getElementById("codeps").style.display = "none";
                        this.$Message.success('登录成功!');
                        window.location.href = "/helpCenter"
                    } else {
                        if( value == "" || value != this.checkCode){
                            document.getElementById("codeps").style.display = "block"
                        }
                        if( value == this.checkCode){
                            document.getElementById("codeps").style.display = "none";
                        }
                        this.$Message.error('登录失败!');
                    }
                });
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
            }
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
    .logbox{
        width: 100%;
        padding-top: 12%;
        height: calc(100vh - 60px);
        background: url(../assets/images/269.jpg) no-repeat left top;
        background-size: 100% 100%;
    }
    .logbin{
        /*width: 300px;*/
        /*margin: 0 auto;*/
        width: 330px;
        margin: 0 auto;
        background: white;
        padding: 20px;
    }
    .cabin{
        display: block;
    }
    .submit{
        display: block;
        width: 100%;
        line-height: 24px;
        font-size: 14px;
    }
    /*验证码*/
    .identifyCode{
        position: relative;
        width: 290px;
        margin-bottom: 26px;
    }
    .yanzhengma_input{
        border: 1px solid #dadada;
        color: #333;
        outline: none;
        font-size: 15px;
        font-weight: normal;
        height: 36px;
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
        width: 100px;
        letter-spacing: 5px;
        height: 36px;
        border: none;
        cursor: pointer;
        background: #fe9191;
        border-radius: 4px;
    }
    .verification:focus{
        outline: none;
    }
    .captcha{
        overflow: hidden;
        /*height: 50px;*/
        /*text-align: justify;*/
    }
    #codeps{
        position: absolute;
        bottom: -25px;
        left: 0;
        display: none;
        font-size: 12px;
        color: #dc0201;
        float: left;
        line-height: 26px;
    }
</style>
