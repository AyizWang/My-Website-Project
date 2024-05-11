<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute()
const sidebar = ref(false)
const portfolio = ref(false)
const sidebarShow = () => {
    sidebar.value = true
}
const sidebarClose = () => {
    sidebar.value = false
}
const portfolioShow = () => {
    if (portfolio.value) {
        portfolio.value = false
    } else {
        portfolio.value = true
    }
}
</script>
<template>
    <header>
        <div class="wrap">
            <div class="logo">
                <img class="logo-bg" src="@/assets/images/logo-background.png" alt="">
                <router-link to="/Personal-Website/">
                    <img src="@/assets/images/logo_ziya.png" alt="">
                </router-link>
            </div>
            <div class="right-box" v-enter="' enterNav'">
                <ul>
                    <router-link to="/Personal-Website/">
                        <li class="navItem"
                            :style="route.path === '/Personal-Website/' | route.path === '/' ? 'color:white;background: rgba(244,114,114,0.5);' : ''">
                            首頁
                            <span>Home</span>
                        </li>
                    </router-link>
                    <router-link to="/Personal-Website/about">
                        <li class="navItem gap"
                            :style="route.path === '/Personal-Website/about' ? 'color:white;background: rgba(244,114,114,0.5);' : ''">
                            關於我
                            <span>About</span>
                        </li>
                    </router-link>
                    <router-link to="/Personal-Website/portfolio/project">
                        <li class="navItem gap"
                            :style="route.path === '/Personal-Website/portfolio/project' | route.path === '/Personal-Website/portfolio/design' | route.path === '/Personal-Website/portfolio/media'| route.path === '/Personal-Website/portfolio/project/myWebsite'| route.path === '/Personal-Website/portfolio/project/shoppingWebsite'
                            | route.path === '/Personal-Website/portfolio/design/banner' | route.path === '/Personal-Website/portfolio/design/dm'| route.path === '/Personal-Website/portfolio/design/socialmedia'| route.path === '/Personal-Website/portfolio/design/billboard'| route.path === '/Personal-Website/portfolio/design/outdoor'| route.path === '/Personal-Website/portfolio/media/video'| route.path === '/Personal-Website/portfolio/media/animation'
                            ? 'color:white;background: rgba(244,114,114,0.5);' : ''">
                            作品集
                            <span>Portfolio</span>
                            <ul class="nav-detail">
                                <li><router-link to="/Personal-Website/portfolio/project"
                                        :style="route.path === '/Personal-Website/portfolio/project'| route.path === '/Personal-Website/portfolio/project/myWebsite'| route.path === '/Personal-Website/portfolio/project/shoppingWebsite' ? 'color:#F47272;' : ''">專案作品</router-link>
                                </li>
                                <li><router-link to="/Personal-Website/portfolio/design"
                                        :style="route.path === '/Personal-Website/portfolio/design'| route.path === '/Personal-Website/portfolio/design/banner' | route.path === '/Personal-Website/portfolio/design/dm'| route.path === '/Personal-Website/portfolio/design/socialmedia'| route.path === '/Personal-Website/portfolio/design/billboard'| route.path === '/Personal-Website/portfolio/design/outdoor' ? 'color:#F47272;letter-spacing: 10px;' : 'letter-spacing: 10px;'">設計</router-link>
                                </li>
                                <li><router-link to="/Personal-Website/portfolio/media"
                                        :style="route.path === '/Personal-Website/portfolio/media'| route.path === '/Personal-Website/portfolio/media/video'| route.path === '/Personal-Website/portfolio/media/animation' ? 'color:#F47272;' : ''">影音/動畫</router-link>
                                </li>
                            </ul>
                        </li>
                    </router-link>
                    <router-link to="/Personal-Website/contact">
                        <li class="navItem gap"
                            :style="route.path === '/Personal-Website/contact' ? 'color:white;background: rgba(244,114,114,0.5);' : ''">
                            聯絡資訊
                            <span>Contact</span>
                        </li>
                    </router-link>
                    <li id="line-icon">
                        <a href="https://line.me/ti/p/KfC6y_RhJG" target="_blank"><img
                                src="@/assets/images/line-icon.png" alt=""></a>
                    </li>
                </ul>
            </div>
            <!-- mobile navbar -->
            <div class="mobile-nav" @click="sidebarShow" v-enter="' enterOpacity'">
                <span></span>
            </div>
        </div>
        <!-- mobile sidebar -->
        <div :class="sidebar ? 'sidebar show' : 'sidebar'">
            <div class="button-close" @click="sidebarClose">X</div>
            <ul>
                <router-link to="/Personal-Website/">
                    <li @click="sidebarClose"
                        :style="route.path === '/' | route.path === '/Personal-Website/' ? 'color:#847C74' : ''">
                        首頁<span>Home</span>
                    </li>
                </router-link>
                <router-link to="/Personal-Website/about">
                    <li @click="sidebarClose" :style="route.path === '/Personal-Website/about' ? 'color:#847C74' : ''">
                        關於我<span>About</span></li>
                </router-link>
                <li @click="portfolioShow"
                    :style="route.path === '/Personal-Website/portfolio/project' | route.path === '/Personal-Website/portfolio/design' | route.path === '/Personal-Website/portfolio/media'| route.path === '/Personal-Website/portfolio/project/myWebsite'| route.path === '/Personal-Website/portfolio/project/shoppingWebsite'
                            | route.path === '/Personal-Website/portfolio/design/banner' | route.path === '/Personal-Website/portfolio/design/dm'| route.path === '/Personal-Website/portfolio/design/socialmedia'| route.path === '/Personal-Website/portfolio/design/billboard'| route.path === '/Personal-Website/portfolio/design/outdoor'| route.path === '/Personal-Website/portfolio/media/video'| route.path === '/Personal-Website/portfolio/media/animation'
                            ? 'color:#847C74' : ''">
                    作品集<span>Portfolio</span>
                    <ul :class="portfolio ? 'sidebar-detail show' : 'sidebar-detail'">
                        <router-link to="/Personal-Website/portfolio/project">
                            <li @click="sidebarClose"
                                :style="route.path === '/Personal-Website/portfolio/project'| route.path === '/Personal-Website/portfolio/project/myWebsite'| route.path === '/Personal-Website/portfolio/project/shoppingWebsite' ? 'color:#847C74' : ''">
                                專案作品</li>
                        </router-link>
                        <router-link to="/Personal-Website/portfolio/design">
                            <li @click="sidebarClose"
                                :style="route.path === '/Personal-Website/portfolio/design'| route.path === '/Personal-Website/portfolio/design/banner' | route.path === '/Personal-Website/portfolio/design/dm'| route.path === '/Personal-Website/portfolio/design/socialmedia'| route.path === '/Personal-Website/portfolio/design/billboard'| route.path === '/Personal-Website/portfolio/design/outdoor' ? 'color:#847C74' : ''">
                                設計</li>
                        </router-link>
                        <router-link to="/Personal-Website/portfolio/media">
                            <li @click="sidebarClose"
                                :style="route.path === '/Personal-Website/portfolio/media'| route.path === '/Personal-Website/portfolio/media/video'| route.path === '/Personal-Website/portfolio/media/animation' ? 'color:#847C74' : ''">
                                影音/動畫</li>
                        </router-link>
                    </ul>
                </li @click="sidebarClose">
                <router-link to="/Personal-Website/contact">
                    <li @click="sidebarClose"
                        :style="route.path === '/Personal-Website/contact' ? 'color:#847C74' : ''">
                        聯絡資訊<span>Contact</span></li>
                </router-link>
            </ul>
            <div class="bottomBox"></div>
        </div>
        <div :class="sidebar ? 'sidebar-mask show' : 'sidebar-mask'" @click="sidebarClose"></div>

    </header>
</template>

<style scoped lang="scss">
header {
    width: 100%;
    z-index: 100;
    position: fixed;
    top: 0;

    .wrap {
        width: 100%;
        @include flex(row, space-between, center);
        position: absolute;

        .logo {
            width: 200px;

            a {
                cursor: pointer;

                img {
                    width: 105px;
                    margin-top: 20px;
                    margin-left: 30px;
                }
            }

            .logo-bg {
                position: absolute;
                width: 200px;
                z-index: -1;
            }
        }

        .right-box {
            position: relative;
            right: 100px;

            &:before {
                content: '';
                position: absolute;
                width: 6px;
                height: 30px;
                background: #7C5949;
                left: 80px;
                top: -28px;
                z-index: -1;
            }

            &:after {
                content: '';
                position: absolute;
                width: 6px;
                height: 30px;
                background: #7C5949;
                right: 80px;
                top: -28px;
                z-index: -1;
            }

            >ul {
                display: flex;
                padding: 6px 8px;
                background: url(@/assets/images/nav-bg.png);
                background-size: 100% 100%;
                border-radius: 30px;
                box-shadow: 1px 1px 3px rgba(#AF7751, 0.4);

                .navItem {
                    @include flex(column, center, center);
                    margin-left: 8px;
                    margin-right: 8px;
                    color: $colorPink;
                    letter-spacing: 3px;
                    width: 120px;
                    border-radius: 25px;
                    position: relative;
                    cursor: pointer;
                    transition-duration: 0.5s;

                    &:hover {
                        background: rgba($colorPink, 0.5);
                        color: white;

                        .nav-detail {
                            display: flex;
                        }
                    }

                    span {
                        font-size: 10px;
                        color: #C17848;
                        font-family: 'noto Sans TC';
                        letter-spacing: 2px;
                    }
                }

                .gap:after {
                    content: '';
                    position: absolute;
                    left: -8px;
                    top: 8px;
                    z-index: 1;
                    width: 1px;
                    height: 20px;
                    background: #C17848;
                }

                #line-icon {
                    margin-left: 10px;
                    margin-top: 4px;
                    margin-right: 20px;
                    cursor: pointer;
                    width: 30px;
                    right: 10px;

                    img {
                        width: 100%;
                    }
                }
            }

            .nav-detail {
                width: 100px;
                position: absolute;
                top: 50px;
                background: rgba(white, 0.9);
                display: none;
                flex-direction: column;
                align-items: center;
                font-size: 14px;
                padding: 5px 0px;
                border-radius: 8px;
                // color: #A89292;

                &::before {
                    content: '▲';
                    color: rgba(white, 0.9);
                    position: absolute;
                    top: -15px;
                    width: 100px;
                    text-align: center;
                }

                li {
                    line-height: 30px;

                    &:not(:last-child)::after {
                        content: '';
                        width: 75px;
                        height: 1px;
                        background: rgba(#A89292, 0.5);
                        position: absolute;
                        left: 50%;
                        transform: translateX(-50%) translateY(30px);
                    }

                    a {
                        color: $colorBrown;

                        &:hover {
                            color: $colorPink;
                        }
                    }
                }
            }
        }
    }

    // mobile sidebar
    .sidebar {
        width: 100%;
        height: 100vh;
        max-width: 300px;
        background: url(@/assets/images/bg-texture.png);
        top: 0;
        right: 0;
        position: absolute;
        z-index: 100;
        opacity: 0;
        pointer-events: none;
        transition: all 0.5s;
        transform: translateX(100%);
        display: none;
        min-height: 640px;

        >ul {
            @include flex(column, flex-start, center);
            margin-top: 50px;
            min-height: 420px;

            li {
                @include flex(column, center, center);
                font-size: 20px;
                color: $colorPink;
                letter-spacing: 4px;
                text-align: center;
                margin-bottom: 30px;
                cursor: pointer;
                transition-duration: 0.5s;

                &:hover {
                    color: $colorBlack;
                }

                span {
                    font-size: 12px;
                    color: rgba(#C17848, 0.5);
                    font-family: 'noto Sans TC';
                    letter-spacing: 5px;
                }

                .sidebar-detail {
                    margin-top: 20px;
                    display: none;

                    li {
                        margin-bottom: 0;
                        font-size: 18px;
                        line-height: 30px;
                        color: rgba($colorPink, 0.7);

                        &:hover {
                            color: $colorBlack;
                        }
                    }
                }

                .sidebar-detail.show {
                    display: block;
                    opacity: 1;
                }
            }
        }

        .bottomBox {
            background: url(@/assets/images/footer-bg.png);
            background-size: cover;
            width: 100%;
            height: 200px;
            bottom: 0;
            position: absolute;
        }

        .button-close {
            margin: 10px 30px 0px 0px;
            color: $colorOrange;
            font-family: 'Noto Sans TC';
            font-size: 40px;
            position: absolute;
            right: 0;
            transform: scaleX(1.3);
            cursor: pointer;
        }
    }

    .sidebar.show {
        opacity: 1;
        pointer-events: auto;
        transform: translateX(0%);
    }

    .sidebar-mask {
        pointer-events: none;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 98;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 0;
        transition: all 0.5s;
        display: none;
    }

    .sidebar-mask.show {
        pointer-events: auto;
        opacity: 1;
    }

    .mobile-nav {
        display: none;
        width: 70px;
        height: 70px;
        background: url(@/assets/images/logo-background.png);
        background-size: 200% 200%;
        border-radius: 20px 20px;
        position: absolute;
        right: 20px;
        top: 20px;
        box-shadow: 1px 1px 3px rgba(#AF7751, 0.4);
        cursor: pointer;

        span {
            display: block;
            position: absolute;
            width: 45px;
            height: 6px;
            border-radius: 10px;
            background: $colorOrange;
            left: 50%;
            transform: translateX(-50%);
            top: 17px;

            &::before {
                content: '';
                width: 45px;
                height: 6px;
                border-radius: 10px;
                background-color: $colorOrange;
                left: 50%;
                transform: translateX(-50%);
                position: absolute;
                top: 15px;
            }

            &::after {
                content: '';
                width: 45px;
                height: 6px;
                border-radius: 10px;
                background-color: $colorOrange;
                left: 50%;
                transform: translateX(-50%);
                position: absolute;
                top: 30px;

            }
        }
    }
}

.isActive {
    @include flex(column, center, center);
    margin-left: 8px;
    margin-right: 8px;
    letter-spacing: 3px;
    width: 120px;
    border-radius: 25px;
    position: relative;
    cursor: pointer;
    transition-duration: 0.5s;
    background: rgba($colorPink, 0.5);
    color: white;
}

@media (max-width: 991px) {
    header .right-box {
        display: none;
    }

    header .mobile-nav {
        display: block;
    }

    header .sidebar {
        display: block;
    }

    header .sidebar-mask {
        display: block;
    }
}

@media (max-width: 650px) {
    header .wrap .logo .logo-bg {
        width: 150px;
    }

    header .wrap .logo a img {
        width: 90px;
        margin-top: 12px;
        margin-left: 15px;
    }
}
</style>