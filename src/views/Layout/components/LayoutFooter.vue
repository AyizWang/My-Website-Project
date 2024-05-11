<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute()
//TOP按鈕
const topShow = ref(false)
const scrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
window.onscroll = () => {
    if (document.documentElement.scrollTop > 600) {
        topShow.value = true
    } else {
        topShow.value = false
    }
}

</script>
<template>
    <footer>
        <img v-if="topShow" @click="scrollTop" class="top-button" src="@/assets/images/top-button.png" alt="">
        <div class="wrap">
            <div class="logo">
                <router-link to="/Personal-Website/">
                    <img src="@/assets/images/logo_ziya.png" alt="">
                </router-link>
            </div>
            <div class="right-box">
                <ul>
                    <router-link to="/Personal-Website/">
                        <li class="navItem"
                            :style="route.path === '/' | route.path === '/Personal-Website/'? 'color:white;background: rgba(244,114,114,0.5);' : ''">
                            首頁
                            <span>Home</span>
                            <span class="hover"></span>
                        </li>
                    </router-link>
                    <router-link to="/Personal-Website/about">
                        <li class="navItem gap"
                            :style="route.path === '/Personal-Website/about' ? 'color:white;background: rgba(244,114,114,0.5);' : ''">關於我
                            <span>About</span>
                            <span class="hover"></span>

                        </li>
                    </router-link>
                    <router-link to="/Personal-Website/portfolio/project">
                        <li class="navItem gap"
                            :style="route.path === '/Personal-Website/portfolio/project' | route.path === '/Personal-Website/portfolio/design' | route.path === '/Personal-Website/portfolio/media'| route.path === '/Personal-Website/portfolio/project/myWebsite'| route.path === '/Personal-Website/portfolio/project/shoppingWebsite'
                            | route.path === '/Personal-Website/portfolio/design/banner' | route.path === '/Personal-Website/portfolio/design/dm'| route.path === '/Personal-Website/portfolio/design/socialmedia'| route.path === '/Personal-Website/portfolio/design/billboard'| route.path === '/Personal-Website/portfolio/design/outdoor'| route.path === '/Personal-Website/portfolio/media/video'| route.path === '/Personal-Website/portfolio/media/animation'
                            ? 'color:white;background: rgba(244,114,114,0.5);' : ''">
                            作品集
                            <span>Portfolio</span>
                            <span class="hover"></span>
                        </li>
                    </router-link>
                    <router-link to="/Personal-Website/contact">
                        <li class="navItem gap"
                            :style="route.path === '/Personal-Website/contact' ? 'color:white;background: rgba(244,114,114,0.5);' : ''">
                            聯絡資訊
                            <span>Contact</span>
                            <span class="hover"></span>
                        </li>
                    </router-link>
                    <li id="line-icon">
                        <a href="https://line.me/ti/p/KfC6y_RhJG" target="_blank"><img
                                src="@/assets/images/line-icon.png" alt=""></a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
footer {
    position: relative;
    width: 100%;
    z-index: 50;
    bottom: 0;
    background: url(@/assets/images/footer-bg.png);
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 100px 0px 50px 0px;

    .top-button {
        position: fixed;
        z-index: 101;
        bottom: 50px;
        right: 50px;
        width: 80px;
        opacity: 0.5;
        cursor: pointer;
        transition-duration: 0.3s;
        animation: top-button 0.5s ease;

        &:hover {
            opacity: 1;
            transform: scale(1.1)
        }
    }

    .wrap {
        @include flex(row, center, center);

        .logo {
            width: 150px;
        }

        .right-box {
            position: relative;

            >ul {
                display: flex;
                padding: 6px 8px;

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
                    width: 40px;

                    img {
                        width: 100%;
                    }
                }
            }


        }
    }
}

@media (max-width: 991px) {
    footer .wrap {
        flex-direction: column;

        .logo {
            margin-right: 0;
        }
    }
}

@media (max-width: 650px) {
    footer .wrap ul {
        flex-direction: column;

        .gap:after {
            opacity: 0;
        }

        .navItem {
            margin-bottom: 10px;

        }

        #line-icon {
            margin: auto;
        }

    }

    footer .top-button {
        right: 10px;
        width: 70px;
    }
}
</style>