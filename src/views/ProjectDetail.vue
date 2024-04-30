<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<template>
    <section class="header">
        <h2 v-enter="' enterBottom'">作品集</h2>
        <h3>—Portfolio—</h3>
    </section>
    <section class="project-detail">
        <template v-if="route.params.id === 'myWebsite'">
            <div class="project-box">
                <div class="project-image">
                    <img src="@/assets/images/portfolio/project1.jpg" alt="">
                </div>
                <div class="project-txt" v-enter="' enterRight'">
                    <p>個人網站製作</p>
                    <span>使用技術</span>
                    <ul>
                        <li>網站使用Vue.js架設</li>
                        <li>Vue Vite管理專案</li>
                        <li>Adobe Illustrator設計網頁風格</li>
                        <li>Vue-Router配置路由</li>
                        <li>RWD響應式網頁</li>
                        <li>SCSS管理樣式</li>
                        <li>Element Plus組件</li>
                    </ul>
                    <a href="https://github.com/AyizWang/My-Website-Project" target="_blank"><u>Github</u></a>
                </div>
            </div>
        </template>

        <template v-if="route.params.id === 'shoppingWebsite'">
            <div class="project-box">
                <div class="project-image">
                    <img src="@/assets/images/portfolio/project-shopping1.jpg" alt="">
                    <img src="@/assets/images/portfolio/project-shopping2.jpg" alt="">
                    <img src="@/assets/images/portfolio/project-shopping3.jpg" alt="">
                    <img src="@/assets/images/portfolio/project-shopping4.jpg" alt="">
                </div>
                <div class="project-txt" v-enter="' enterRight'">
                    <p>購物網站課程項目練習</p>
                    <span>使用技術</span>
                    <ul>
                        <li>網站使用Vue.js架設</li>
                        <li>Vue Vite管理專案</li>
                        <li>Vue-Router配置路由</li>
                        <li>Axios請求接口</li>
                        <li>Pinia狀態管理</li>
                        <li>Element Plus組件</li>
                    </ul>
                    <span>實現功能</span>
                    <ul>
                        <li>首頁：輪播圖、導航欄、商品分類</li>
                        <li>分類：一級分類、二級分類渲染</li>
                        <li>商品：圖片展示、商品詳情、商品規格、加入購物車</li>
                        <li>購物車：數量更改、商品刪除、價格計算</li>
                        <li>登入：表單校驗、帳號登入</li>
                        <li>支付：訂單內容、出貨地址</li>
                        <li>個人中心：個人信息、訂單管理</li>
                    </ul>
                    <a href="https://ayizwang.github.io/Vue-Shopping-Website/" target="_blank"><u>網站連結</u></a><br>
                    <a href="https://github.com/AyizWang/Shopping-Website-Project" target="_blank"><u>Github</u></a>
                </div>
            </div>
        </template>
    </section>

</template>

<style scoped lang="scss">
.header {
    @include flex(column, center, center);
    background: url(@/assets/images/homeBanner-bg.png);
    background-size: cover;

    &::after {
        content: '';
        height: 180px;
        width: 100%;
        background: url(@/assets/images/homeBanner-bg-bottom-3.png);
        background-size: 100% auto;
        background-position: left bottom;
        background-repeat: repeat-x;
        bottom: -5px;
        position: relative;
    }

    h2 {
        color: $colorPink;
        font-size: 44px;
        font-weight: 500;
        text-shadow: 0 0 5px rgba(white, 1);
        letter-spacing: 8px;
        text-indent: 8px;
        margin-top: 140px;
        margin-bottom: 0;
    }

    h3 {
        color: $colorOrange;
        font-size: 22px;
        font-weight: normal;
        letter-spacing: 5px;
        text-indent: 5px;
        font-family: 'Noto Sans TC';
        text-shadow: 0 0 5px rgba(white, 1);
    }
}

.project-detail {
    width: 100%;

    .project-box {
        display: flex;
        justify-content: center;
        width: 90%;
        margin: 0 auto;

        .project-txt {
            width: 350px;
            border-left: 2px solid rgba($colorOrange, 0.5);
            padding: 30px;

            p {
                color: $colorPink;
                letter-spacing: 3px;
                font-size: 20px;
                font-weight: 600;
                margin-bottom: 15px;
            }

            span {
                background: rgba($colorOrange, 0.3);
                border-radius: 5px;
                padding: 2px 8px;
                letter-spacing: 2px;
                font-size: 14px;
                line-height: 50px;
            }

            ul {
                list-style: disc;
                margin-left: 20px;
                font-size: 14px;
                line-height: 24px;
                letter-spacing: 1px;
                margin-bottom: 10px;
            }

            a {
                font-size: 14px;
                line-height: 25px;
                color: $colorOrange;
                margin-left: 5px;
            }
        }

        .project-image {
            width: 70%;
            padding: 40px;

            img {
                margin-bottom: 30px;
                @include shadow;
            }
        }
    }
}

@media (max-width: 991px) {
    .project-detail {
        .project-box {
            flex-direction: column;
            align-items: center;

            .project-txt {
                order: -1;
                border-left: 0px;
                border-bottom: 2px solid rgba($colorOrange, 0.5);
                width: 100%;

                p {
                    text-align: center;
                    margin-bottom: 10px;
                    font-size: 18px;
                }
            }

            .project-image {
                width: 100%;
                padding: 0px;
            }
        }
    }
}

@media (max-width:780px) {
    .header::after {
        background-size: auto 100%;
        height: 80px;
    }

    .header h2 {
        font-size: 34px;
        margin-top: 100px;
    }
}
</style>