<template>
    <div id="header" class="header is-flex">
        <div class="mr-auto hd-menu">
            <ul class="is-flex items-center">
                <li class="hd-menu-item">
                    <nuxt-link :to="'/'" class="hd-menu-item-link" exact>
                        <i class="rl rl-CCfanghu-guize"></i>
                        首页
                    </nuxt-link>
                </li>
                <li class="hd-menu-item">
                    <nuxt-link :to="'/login'" class="hd-menu-item-link">
                        <i class="rl rl-CCfanghu-guize"></i>
                        内容
                    </nuxt-link>
                </li>
                <li class="hd-menu-item">
                    <nuxt-link :to="'/system/menu'" class="hd-menu-item-link">
                        <i class="rl rl-CCfanghu-guize"></i>
                        会员
                    </nuxt-link>
                </li>
                <li class="hd-menu-item">
                    <nuxt-link :to="'/3'" class="hd-menu-item-link">
                        <i class="rl rl-CCfanghu-guize"></i>
                        系统
                    </nuxt-link>
                </li>
                <li class="hd-menu-item">
                    <a-dropdown
                            :trigger="['click']"
                            @visibleChange="visibleChange"
                            :class="visible ? 'active-link' : ''"
                            placement="bottomCenter"
                    >
                        <div class="ant-dropdown-link hd-menu-item-link" href="#">
                            <i class="rl rl-CCfanghu-guize"></i>
                            其他菜单 <a-icon type="down" />
                        </div>
                        <a-menu slot="overlay" style="margin-top: 8px;">
                            <a-menu-item key="0">
                                <a href="http://www.alipay.com/">1st menu item</a>
                            </a-menu-item>
                            <a-menu-item key="1">
                                <a href="http://www.taobao.com/">2nd menu item</a>
                            </a-menu-item>
                            <a-menu-divider />
                            <a-menu-item key="3">3rd menu item</a-menu-item>
                        </a-menu>
                    </a-dropdown>
                </li>
            </ul>
        </div>
        <div class="hd-menu is-flex items-center">
            <div class="hd-menu-item">
                <a href="/" class="hd-menu-item-link">
                    <i class="rl rl-zhuye" style="font-size: 16px;"></i>
                </a>
            </div>
            <div class="hd-menu-item user-dropdown-item">
                <a-dropdown
                        :trigger="['click']"
                        @visibleChange="visibleChange"
                        :class="visible ? 'active-link' : ''"
                >
                    <a class="ant-dropdown-link user-dropdown-link">
                        <svg class="rl user-avatar" aria-hidden="true" style="height: 28px;width: 28px;vertical-align: middle;">
                            <use xlink:href="#rl-icon-test1"></use>
                        </svg>
                    </a>
                    <a-menu slot="overlay" style="margin-top: 10px;">
                        <a-menu-item key="0">
                            <i class="rl rl-guanliyuan1"></i>
                            账号设置
                        </a-menu-item>
                        <a-menu-item key="1">
                            <i class="rl rl-guanliyuan1"></i>
                            个人主页
                        </a-menu-item>
                        <a-menu-item key="2">
                            <i class="rl rl-drxx04"></i>
                            修改密码
                        </a-menu-item>
                        <a-menu-divider />
                        <a-menu-item key="4">
                            <i class="rl rl-out"></i>
                            退出登录
                        </a-menu-item>
                    </a-menu>
                </a-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                visible:false,
            }
        },
        methods: {
            visibleChange(visible) {
                this.visible = visible;
            }
        },
    }
</script>
