<script setup>
import { ref } from 'vue';
const currentTab = ref("tabs1")
const tabsChange = (tab) => {
    currentTab.value = tab
}

const portfolioTab = ref("design")

const portfolioChange = (tab2) => {
    portfolioTab.value = tab2
}

</script>

<template>
    <section class="header">
        <div class="txt">
            <h2 v-enter="' enterBottom'">WANG ZI-YA</h2>
            <h3>網頁開發｜平面設計｜影音動畫</h3>
        </div>
    </section>

    <!-- introduce -->
    <section class="introduce">
        <img class="bg-icon bg-icon-1" src="@/assets/images/bg-icon-01.png" alt="">
        <img class="bg-icon bg-icon-2" src="@/assets/images/bg-icon-02.png" alt="">
        <div class="scroll">
            <span>scroll down</span>
            <img src="@/assets/images/home-scroll.png" alt="">
        </div>
        <div class="introduce-card">
            <div v-enter="' enterLeft'" class="picture">
            </div>
            <div v-enter="' enterRight'" class="txt">
                <h1>王姿雅<span>Wang Zi-Ya</span></h1>
                <ul>
                    <li>#2000.8.6 #台中 #設計轉前端</li>
                    <li>2015.9-2018.6<br>台中市立東山高中｜普通科</li>
                    <li>2018.9-2022.6<br>銘傳大學台北校區｜新媒體暨傳播管理學系</li>
                    <li>2022.6-2023.10<br>普德家電股份有限公司｜美編設計人員</li>
                    <li>2023.11-2024<br>學習網頁前端</li>
                </ul>
                <router-link to="/Personal-Website/about">
                    <div class="button button-more">了解更多</div>
                </router-link>
            </div>
        </div>
    </section>

    <!-- portfolio -->
    <section class="portfolio">
        <img class="bg-icon bg-icon-5" src="@/assets/images/bg-icon-05.png" alt="">
        <img class="bg-icon bg-icon-6" src="@/assets/images/bg-icon-06.png" alt="">
        <img class="bg-icon bg-icon-7" src="@/assets/images/bg-icon-07.png" alt="">
        <div class="protfolio-inside" v-enter="' enterOpacity'">
            <div class="title">
                作品集
                <span>——Portfolio——</span>
            </div>

            <div class="portfolio-button">
                <div @click="portfolioChange('design')" class="button button-tab"
                    :style="portfolioTab === 'design' ? 'background:#FFA969;color:white' : ''">設計</div>
                <div @click="portfolioChange('media')" class="button button-tab"
                    :style="portfolioTab === 'media' ? 'background:#FFA969;color:white' : ''">多媒體</div>
                <div @click="portfolioChange('project')" class="button button-tab"
                    :style="portfolioTab === 'project' ? 'background:#FFA969;color:white' : ''">網頁開發</div>
            </div>
        </div>

        <div class="portfolio-swiper" v-enter="' enterBottom'">
            <el-carousel :interval="4000" type="card" height="auto" indicator-position="outside">
                <template v-if="portfolioTab === 'design'">
                    <el-carousel-item><img src="/src/assets/images/portfolio/design1_1-1.jpg" alt=""
                            style="height: 100%;width: 100%;"></el-carousel-item>
                    <el-carousel-item><img src="/src/assets/images/portfolio/design1_2-1.jpg" alt=""
                            style="height: 100%;width: 100%;"></el-carousel-item>
                    <el-carousel-item><img src="/src/assets/images/portfolio/design1_1-2.jpg" alt=""
                            style="height: 100%;width: 100%;"></el-carousel-item>
                    <el-carousel-item><img src="/src/assets/images/portfolio/design1_2-2.jpg" alt=""
                            style="height: 100%;width: 100%;"></el-carousel-item>
                    <el-carousel-item><img src="/src/assets/images/portfolio/design2_1.jpg" alt=""
                            style="height: 100%;width: 100%;"></el-carousel-item>
                    <el-carousel-item><img src="/src/assets/images/portfolio/design2_2.jpg" alt=""
                            style="height: 100%;width: 100%;"></el-carousel-item>
                    <el-carousel-item><img src="/src/assets/images/portfolio/design2_3.jpg" alt=""
                            style="height: 100%;width: 100%;"></el-carousel-item>
                </template>

                <template v-if="portfolioTab === 'media'">
                    <el-carousel-item><img src="/src/assets/images/portfolio/media1.jpg" alt=""
                            style="height: 100%;width: 100%;"></el-carousel-item>
                    <el-carousel-item><img src="/src/assets/images/portfolio/media2.jpg" alt=""
                            style="height: 100%;width: 100%;"></el-carousel-item>
                    <el-carousel-item><img src="/src/assets/images/portfolio/media3.jpg" alt=""
                            style="height: 100%;width: 100%;"></el-carousel-item>
                    <el-carousel-item><img src="/src/assets/images/portfolio/media4.jpg" alt=""
                            style="height: 100%;width: 100%;"></el-carousel-item>
                </template>

                <template v-if="portfolioTab === 'project'">
                    <el-carousel-item><img src="/src/assets/images/portfolio/project.jpg" alt=""
                            style="height: 100%;width: 100%;"></el-carousel-item>
                </template>
            </el-carousel>
        </div>
        <router-link to="/Personal-Website/portfolio/project">
            <div class="button protfolio-button-more">了解更多</div><br>
        </router-link>
    </section>

    <!-- skills -->
    <section class="skills">
        <img class="bg-icon bg-icon-3" src="@/assets/images/bg-icon-03.png" alt="">
        <img class="bg-icon bg-icon-4" src="@/assets/images/bg-icon-04.png" alt="">
        <div class="title" v-enter="' enterOpacity'">
            技能
            <span>——Skills——</span>
        </div>

        <div class="skills-container" v-enter="' enterBottom'">
            <ul class="tabs">
                <li @click="tabsChange('tabs1')"
                    :style="currentTab === 'tabs1' ? 'background:#FFA969;color:white' : ''">
                    前端技術
                </li>
                <li @click="tabsChange('tabs2')"
                    :style="currentTab === 'tabs2' ? 'background:#FFA969;color:white' : ''">多媒體
                </li>
                <li @click="tabsChange('tabs3')"
                    :style="currentTab === 'tabs3' ? 'background:#FFA969;color:white' : ''">
                    工具應用
                </li>
                <li @click="tabsChange('tabs4')"
                    :style="currentTab === 'tabs4' ? 'background:#FFA969;color:white' : ''">
                    UI框架
                </li>
            </ul>

            <div class="skills-box">
                <ul class="skills-icon">
                    <template v-if="currentTab === 'tabs1'">
                        <li>
                            <img src="/src/assets/images/icon/icon-html.png" alt="">
                            <span>HTML</span>
                        </li>
                        <li>
                            <img src="/src/assets/images/icon/icon-css.png" alt="">
                            <span>CSS</span>
                        </li>
                        <li>
                            <img src="/src/assets/images/icon/icon-js.png" alt="">
                            <span>Javascript</span>
                        </li>
                        <li>
                            <img src="/src/assets/images/icon/icon-vue.png" alt="">
                            <span>Vue</span>
                        </li>
                        <li>
                            <img src="/src/assets/images/icon/icon-vite.png" alt="">
                            <span>Vite</span>
                        </li>
                        <li>
                            <img src="/src/assets/images/icon/icon-pinia.png" alt="">
                            <span>Pinia</span>
                        </li>
                        <li>
                            <img src="/src/assets/images/icon/icon-ts.png" alt="">
                            <span>Typescript</span>
                        </li>
                    </template>

                    <template v-if="currentTab === 'tabs2'">
                        <li>
                            <img src="/src/assets/images/icon/icon-ai.png" alt="">
                            <span>Adobe Illustrator</span>
                        </li>
                        <li>
                            <img src="/src/assets/images/icon/icon-ps.png" alt="">
                            <span>Adobe Photoshop</span>
                        </li>
                        <li>
                            <img src="/src/assets/images/icon/icon-pr.png" alt="">
                            <span>Adobe Premiere</span>
                        </li>
                        <li>
                            <img src="/src/assets/images/icon/icon-ae.png" alt="">
                            <span>Adobe Effects</span>
                        </li>
                    </template>

                    <template v-if="currentTab === 'tabs3'">
                        <li>
                            <img src="/src/assets/images/icon/icon-vscode.png" alt="">
                            <span>Visual Studio Code</span>
                        </li>
                        <li>
                            <img src="/src/assets/images/icon/icon-git.png" alt="">
                            <span>Git</span>
                        </li>
                    </template>

                    <template v-if="currentTab === 'tabs4'">
                        <li>
                            <img src="/src/assets/images/icon/icon-bootstrap.png" alt="">
                            <span>Bootstrap</span>
                        </li>
                        <li>
                            <img src="/src/assets/images/icon/icon-elementPlus.png" alt="">
                            <span>Element Plus</span>
                        </li>
                    </template>
                </ul>
            </div>

        </div>

    </section>

</template>

<style scoped lang="scss">
.header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url(@/assets/images/homeBanner-bg.png);
    background-size: cover;

    &::after {
        content: '';
        height: 150px;
        width: 100%;
        background: url(@/assets/images/homeBanner-bg-bottom-3.png);
        background-size: 100% auto;
        background-position: left bottom;
        background-repeat: repeat-x;
        bottom: -5px;
        position: relative;
    }

    .txt {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 150px;
        margin-bottom: 100px;

        h2 {
            text-align: center;
            color: white;
            font-size: 50px;
            font-family: 'Noto Sans TC';
            font-weight: 800;
            line-height: 40px;
            margin: 20px 0px 30px 0px;
            text-shadow: 3px 3px 1px rgba($colorPink, 0.2);
            letter-spacing: 3px;
        }

        h3 {
            color: white;
            font-family: 'Noto Sans TC';
            font-weight: 500;
            letter-spacing: 5px;
            font-size: 16px;
            background: rgba($colorPink, 0.8);
            border: solid 2px white;
            border-radius: 30px;
            line-height: 30px;
            padding: 0px 20px;
        }
    }
}

.scroll {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: -85px;

    span {
        color: rgba($colorPink, 0.8);
        margin-bottom: 8px;
        font-family: 'Noto Sans TC';
        font-weight: bold;
        letter-spacing: 3px;
        font-size: 14px;
        animation: float 2s linear infinite;
    }

    img {
        width: 8px;
    }
}

//introduce
.introduce {
    display: flex;
    justify-content: center;
    padding: 0px 0px 100px 0px;
    flex-direction: column;

    .introduce-card {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .picture {
        width: 230px;
        height: 310px;
        background: url(@/assets/images/about-picture.jpg);
        background-size: cover;
        margin-right: 50px;
        border-radius: 10px;
        box-shadow: 0px 0px 3px rgba(#a58e7b, 0.4);
    }

    .txt {
        display: flex;
        flex-direction: column;
        width: 400px;
        position: relative;

        h1 {
            color: rgb(250, 172, 135);
            letter-spacing: 18px;
            font-size: 40px;
            font-weight: 500;

            span {
                color: rgba(250, 172, 135, 0.4);
                letter-spacing: 3px;
                font-size: 24px;
                font-weight: 600;
                font-family: 'Noto Sans TC';
            }
        }

        li {
            color: $colorBlack;
            margin-bottom: 12px;
            letter-spacing: 3px;

            &:first-child {
                color: $colorBrown;
                line-height: 30px;
            }
        }

        .button-more {
            position: absolute;
            bottom: 0;
            right: 0;
        }
    }
}

.button {
    border: solid 1px $colorOrange;
    border-radius: 20px;
    letter-spacing: 3px;
    padding: 4px 20px;
    color: $colorOrange;
    transition-duration: 0.5s;
    display: inline-block;
    cursor: pointer;
    text-align: center;
    font-weight: 500;

    &:hover {
        background: $colorOrange;
        color: white;
    }
}


// portfolio
.portfolio {
    width: 100%;
    background: linear-gradient(to right, #FFEEE0, #FFE8E8);
    position: relative;

    .protfolio-inside {
        @include flex(column, center, center);
        padding: 40px 0px;
        position: relative;

        .portfolio-button {
            @include flex(row, center, center);
            width: 100%;

            .button-tab {
                margin: 0px 10px;
                width: 130px;
                text-align: center;
                font-size: 18px;
            }
        }
    }

    .portfolio-swiper {
        width: 600px;
        margin: 0 auto;

        .el-carousel__item {
            border: 6px solid rgb(247, 153, 153);
            border-radius: 20px;
            width: 300px;
            height: 180px;
        }

        .el-carousel__item:nth-child(2n) {
            background-color: #99a9bf;
        }

        .el-carousel__item:nth-child(2n + 1) {
            background-color: #d3dce6;
        }
    }

    .protfolio-button-more {
        left: 50%;
        position: relative;
        transform: translateX(-50%);
        margin: 40px 0 80px 0;
    }

    &::before {
        content: '';
        position: absolute;
        height: 40px;
        width: 100%;
        background-image: url(@/assets/images/home-portfolio-gap.png);
        background-size: 100% 100%;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        height: 40px;
        width: 100%;
        background-image: url(@/assets/images/home-portfolio-gap.png);
        background-size: 100% 100%;
        transform: rotate(180deg);
    }


}

.title {
    @include flex(column, center, center);
    font-size: 40px;
    color: $colorPink;
    letter-spacing: 10px;
    text-indent: 10px;
    margin: 30px 0px;
    font-weight: 500;

    &::before {
        content: '';
        width: 38px;
        height: 18px;
        background-image: url(@/assets/images/title-flower.png);
        background-size: cover;
        position: absolute;
        transform: translate(-110px, -8px);
    }

    &::after {
        content: '';
        width: 38px;
        height: 18px;
        background-image: url(@/assets/images/title-flower.png);
        background-size: cover;
        position: absolute;
        transform: translate(110px, -8px) scaleX(-1);
    }

    span {
        font-size: 16px;
        font-weight: normal;
        letter-spacing: 5px;
        text-indent: 5px;
    }
}

// skills
.skills {
    width: 100%;
    margin-bottom: 50px;

    .skills-container {
        width: 80%;
        max-width: 800px;
        min-width: 350px;
        margin: 0 auto;

        .tabs {
            @include flex(row, space-evenly, start-end);
            padding: 0px 30px;

            li {
                color: $colorOrange;
                border: 1.5px solid $colorOrange;
                border-bottom: 0px;
                border-radius: 15px 15px 0 0;
                letter-spacing: 3px;
                text-indent: 3px;
                width: 18%;
                text-align: center;
                line-height: 30px;
                transition-duration: 0.5s;
                padding: 2px 3px 1px 3px;
                font-size: 20px;
                cursor: pointer;
                font-weight: 500;

                &:hover {
                    background: $colorOrange;
                    color: white;
                }
            }
        }

        .skills-box {
            background: white;
            width: 100%;
            border-radius: 30px;
            @include shadow;
            padding: 15px;

            .skills-icon {
                @include flex(row, space-evenly, center);
                flex-wrap: wrap;
                width: 100%;
                height: 100%;
                border: 2px dashed rgba($colorPink, 0.3);
                border-radius: 20px;
                padding: 5% 10%;

                li {
                    @include flex(column, center, center);
                    width: 13%;
                    margin: 5px 20px;

                    span {
                        font-family: 'Noto Sans TC';
                        letter-spacing: 2px;
                        text-align: center;
                        margin-top: 5px;
                    }
                }
            }
        }

    }
}


.el-tabs--border-card>.el-tabs__header {
    border: 1px solid red !important;
}

@media (max-width:780px) {
    .header::after {
        background-size: auto 100%;
        height: 80px;
    }

    .introduce-card {
        flex-direction: column;
        align-items: center;

        .picture {
            margin-right: 0;
            margin-bottom: 30px;
        }

        .txt {
            text-align: center;
            align-items: center;
            width: 100%;

            h1 {
                font-size: 34px;

                span {
                    font-size: 20px;
                }
            }

            li {
                font-size: 14px;
                margin-bottom: 10px;
                line-height: 22px;
            }

            .button-more {
                position: relative;
                width: 200px;
                right: 0;
                margin-top: 10px;

            }
        }
    }

    // -----------
    .portfolio::before,
    .portfolio::after {
        height: 20px;
    }

    .portfolio .protfolio-inside .portfolio-button .button-tab {
        font-size: 14px;
        width: 100px;

    }

    .button {
        letter-spacing: 2px;
        padding: 3px 8px;
    }

    .protfolio-button-more {
        width: 200px;
    }

    // -----------
    .skills .skills-container {
        min-width: 97%;
    }

    .skills .skills-container .tabs li {
        font-size: 14px;
        letter-spacing: 1px;
        padding: 0px 1px 0px 1px;
        line-height: 25px;
        width: 24%;
    }

    .skills .skills-container .skills-box .skills-icon li span {
        font-size: 14px;
        letter-spacing: 0px;
    }

    .skills .skills-container .skills-box .skills-icon {
        padding: 5% 2%;
    }

    .skills .skills-container .skills-box {
        padding: 8px;
    }

    .skills .skills-container .skills-box .skills-icon li {
        width: 10%;
    }

    .skills .skills-container .tabs {
        padding: 0px 20px;
    }

    .title {
        font-size: 30px;

        &::before {
            transform: translate(-90px, -6px);
        }

        &::after {
            transform: translate(90px, -6px) scaleX(-1);
        }

        span {
            font-size: 12px;
        }
    }
}

@media (max-width:650px) {
    .header .txt h2 {
        font-size: 40px;
    }

    .header .txt h3 {
        font-size: 14px;
        letter-spacing: 3px;
    }

    .portfolio .portfolio-swiper {
        width: 340px;

        .el-carousel__item {
            width: 170px;
            height: 100px;
            border-radius: 10px;
            border: 4px solid rgb(247, 153, 153);
        }
    }
}
</style>
