<template>
    <div class="project-box">
        <router-link to="/Personal-Website/portfolio/project/myWebsite">
            <div class="project-item" v-enter="' enterBottom'">
                <img src="@/assets/images/portfolio/project.jpg" alt="">
                <div class="project-txt">
                    <span>個人網站製作</span>
                    <hr>
                    <ul>
                        <li>網站使用Vue.js架設</li>
                        <li>Vue Vite管理專案</li>
                        <li>Adobe Illustrator設計網頁風格</li>
                        <li>Vue-Router配置路由</li>
                        <li>RWD響應式網頁</li>
                        <li>SCSS管理樣式</li>
                        <li>Element Plus組件</li>
                    </ul>
                </div>
            </div>
        </router-link>

        <router-link to="/Personal-Website/portfolio/project/shoppingWebsite">
            <div class="project-item" v-enter="' enterBottom'">
                <img src="@/assets/images/portfolio/project-shopping.jpg" alt="">
                <div class="project-txt">
                    <span>購物網站課程項目練習</span>
                    <hr>
                    <ul>
                        <li>網站使用Vue.js架設</li>
                        <li>Vue Vite管理專案</li>
                        <li>Vue-Router配置路由</li>
                        <li>Axios請求接口</li>
                        <li>Pinia狀態管理</li>
                        <li>Element Plus組件</li>
                    </ul>
                </div>
            </div>
        </router-link>
    </div>
</template>

<style scoped lang="scss">
.project-box a {
    @include flex(column, center, center);
    width: 80%;
    max-width: 800px;
    margin: 0 auto;
    color: $colorBlack;

    .project-item {
        @include flex(row, flex-start, center);
        @include shadow;
        width: 100%;
        background: white;
        margin-bottom: 40px;
        border-radius: 10px;
        padding: 20px;
        transition-duration: 0.5s;

        &:hover {
            transform: scale(1.05);
        }

        img {
            width: 250px;
            @include shadow;
        }

        .project-txt {
            width: 70%;
            margin-left: 20px;

            span {
                color: $colorPink;
                letter-spacing: 3px;
                text-align: left;
                margin-left: 5px;
            }

            hr {
                width: 100%;
                border: 1px solid rgba($colorPink, 0.4);
            }

            ul {
                list-style: disc;
                margin-left: 20px;

                li {
                    font-size: 12px;
                    letter-spacing: 1px;
                }
            }
        }
    }
}

@media (max-width:650px) {

    .project-box a {
        width: 60%;
        min-width: 300px;

        .project-item {
            flex-direction: column;

            .project-txt {
                margin-left: 0px;
                margin-top: 20px;
                width: 100%;
                text-align: center;

                span {
                    text-align: center;
                    margin-left: 0px;
                }

                hr {
                    width: 100%;
                }

                ul {
                    text-align: left;
                }
            }
        }
    }
}
</style>