<script setup>
import { ref } from 'vue';
const currentTab = ref("tabs1")
const tabsChange = (tab) => {
    currentTab.value = tab
}

</script>

<template>
    <section class="header">
        <h2 v-enter="' enterBottom'">關於我</h2>
        <h3>—About—</h3>
    </section>

    <section class="about-introduce">
        <img class="bg-icon bg-icon-1" src="@/assets/images/bg-icon-01.png" alt="">
        <img class="bg-icon bg-icon-2" src="@/assets/images/bg-icon-02.png" alt="">
        <p v-enter="' enterLeft'">
            我是一名前美編設計師，目前轉向前端開發<br>
            期望製作出美觀且具功能性的網站<br>
            並在過程中不斷學習新技術，提升自我能力
        </p>
        <div class="introduce-card">
            <div class="picture" v-enter="' enterLeft'">
            </div>
            <div class="txt" v-enter="' enterRight'">
                <h1>王姿雅<span>Wang Zi-Ya</span></h1>
                <ul>
                    <li>出生地： 台中</li>
                    <li>生日： 2000.08.06</li>
                    <li>學歷： 銘傳大學新媒體暨傳播管理學系</li>
                </ul>
                <a href="https://drive.google.com/file/d/1vSiguCOyJVPN-eD9gO-Luh3dA1_8LMud/view?usp=sharing" target="_blank">
                    <div class="button button-more">履歷下載</div>
                </a>
            </div>
        </div>
    </section>

    <!-- experience -->
    <section class="experience">
        <img class="bg-icon bg-icon-5" src="@/assets/images/bg-icon-05.png" alt="">
        <img class="bg-icon bg-icon-7" src="@/assets/images/bg-icon-07.png" alt="">
        <img class="timeline" src="@/assets/images/timeline.png" alt="">
        <ul>
            <li v-enter="' enterOpacity'">
                <img src="@/assets/images/icon-book.png" alt="">
                <span>2015.9<br>台中市立東山高中 普通科</span>
            </li>
            <li v-enter="' enterOpacity'">
                <img src="@/assets/images/icon-hat.png" alt="">
                <span>2018.9<br>銘傳大學 新媒體暨傳播管理學系</span>
            </li>
            <li v-enter="' enterOpacity'">
                <img src="@/assets/images/icon-bag.png" alt="">
                <span>2022.6<br>普德家電股份有限公司 美編設計師</span>
            </li>
            <li v-enter="' enterOpacity'">
                <img src="@/assets/images/icon-html2.png" alt="">
                <span>2023.11<br>學習網頁前端技術</span>
            </li>
        </ul>
    </section>

    <!-- article -->
    <section class="article">
        <img class="bg-icon bg-icon-3" src="@/assets/images/bg-icon-03.png" alt="">
        <img class="bg-icon bg-icon-4" src="@/assets/images/bg-icon-04.png" alt="">
        <div class="paragraph" v-enter="' enterBottom'">
            <h3>背景</h3>
            <p>我是王姿雅，來自台中。大學時就讀<span>新媒體暨傳播管理學系</span>，由於本科系的課程較為廣泛，在求學期間學習到非常多<span>媒體傳播</span>與<span>管理相關</span>的課程。
            </p>
            <p>大二時，我對<span>網頁設計</span>這項必修課程產生了濃厚的興趣，並與同學們合作完成了一個簡易的網站作為期末作業。在這個過程中，我學到了<span>如何與團隊進行協作</span>，不斷磨合，最終成功地完成了一個完整的專案，也獲得了極高的成績，這讓我感到非常有成就感。
            </p>
            <p>由於我並非此專業科系的學生，在學完一學期的基礎課程後，儘管我並無繼續鑽研這個領域，但對於<span>網頁製作的熱情</span>一直存在，這也成為了我未來道路的<span>契機</span>。</p>
        </div>
        <div class="paragraph" v-enter="' enterBottom'">
            <h3>工作經歷</h3>
            <p>畢業後任職第一份工作擔任<span>美編設計師</span>，於普德家電股份有限公司。主要負責產品影片拍攝與剪輯、設計與發包、<span>品牌官網運營</span>(WordPress平台)、社群經營等。
            </p>
            <p>任職期間，接觸到品牌官網的管理，不論是產品上架、上傳文章、Banner更換，還是其他頁面的管理，都讓我更熟悉一個網站的運作。我也曾站在設計人員的角度，和後台工程師討論<span>如何讓網站更具美觀與功能性</span>，這些經驗的累積不禁讓我想親自參與網頁程式碼的撰寫。
            </p>
            <p>因此，我拾起了曾經對於網頁課程的熱情，走上了<span>學習網頁前端</span>的遙遙道路，期望能運用工作上學到的經驗，在不同領域創造出不一樣的人生經歷。</p>
        </div>
        <div class="paragraph" v-enter="' enterBottom'">
            <h3>職業目標</h3>
            <p>如今我是一名熱愛網頁開發的前端工程師，並且對<span>後端技術</span>充滿好奇。我的目標是成為一名<span>網頁全端工程師</span>，能夠在前端和後端領域都有所建樹。</p>
            <p>在學習網頁開發的過程中，我深刻體會到這個領域的不斷變化與進步。隨著時代的演進，越來越多的技術被發明出來，而我相信<span>持續學習</span>是跟上這個行業步伐的關鍵。
            </p>
            <p>我的學習之路永不止步。我追求不斷鑽研新技術，並且期待在未來的工作中，能夠運用自身的能力與團隊夥伴協力，合作完成一件又一件的任務，<span>為公司創造無限的價值</span>。</p>
        </div>
        <div class="paragraph paragraph-skill" v-enter="' enterBottom'">
            <h3>技能</h3>
            <div class="skills-container">
                <ul class="tabs">
                    <li @click="tabsChange('tabs1')"
                        :style="currentTab === 'tabs1' ? 'background:#FFA969;color:white' : ''">前端技術
                    </li>
                    <li @click="tabsChange('tabs2')"
                        :style="currentTab === 'tabs2' ? 'background:#FFA969;color:white' : ''">多媒體
                    </li>
                    <li @click="tabsChange('tabs3')"
                        :style="currentTab === 'tabs3' ? 'background:#FFA969;color:white' : ''">工具應用
                    </li>
                    <li @click="tabsChange('tabs4')"
                        :style="currentTab === 'tabs4' ? 'background:#FFA969;color:white' : ''">UI框架
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
        </div>
    </section>

    <section class="award">
        <div class="paragraph">
            <h3 v-enter="' enterBottom'">在學榮譽</h3>

            <div class="award-box" v-enter="' enterLeft'">
                <a href="https://drive.google.com/file/d/1kvFY77PCC3c5ILDafZqe3tPgBPRrw_gq/view?usp=sharing"
                    target="_blank" class="img">
                    <img src="@/assets/images/award1.png" alt="">
                </a>
                <div class="txt">
                    <h4>全勤榮譽</h4>
                    <p>自國小至大學，我始終保持全勤。<br>這不僅體現了我的出色出勤紀錄，也展示了我對工作和學業的高度負責態度。</p>
                </div>
            </div>

            <div class="award-box" v-enter="' enterRight'">
                <div class="txt">
                    <h4>成績優異</h4>
                    <p>在學期間，我努力學習並保持優異的學業表現。<br>期待在未來的學習和職業生涯中繼續保持這份熱情和精神。</p>
                </div>
                <a href="https://drive.google.com/file/d/1FOrdNT4soos7uiD0qmoNYMvkrF1LvBxu/view?usp=sharing"
                    target="_blank" class="img">
                    <img src="@/assets/images/award2.png" alt="">
                </a>
            </div>

            <div>
                <h4 v-enter="' enterBottom'">比賽獲獎</h4>
                <div class="award-box winning">
                    <div v-enter="' enterOpacity'">
                        <a href="https://drive.google.com/file/d/1FA5s0nGErW73a4xbBkCOAxvkQT_5dTHe/view?usp=sharing"
                            target="_blank" class="img">
                            <img src="@/assets/images/award3.png" alt="">
                        </a>
                        <p>2020校園創意生活海報競賽</p>
                        <span>—佳作—</span>
                    </div>
                    <div v-enter="' enterOpacity'">
                        <a href="https://drive.google.com/file/d/1F_ONOxSBy1u7WmlevgrVD-Zw7jnU4Vay/view?usp=sharing"
                            target="_blank" class="img">
                            <img src="@/assets/images/award4.png" alt="">
                        </a>
                        <p>2020全國大專校院雙語創意短片競賽</p>
                        <span>—銀牌獎—</span>
                    </div>
                    <div v-enter="' enterOpacity'">
                        <a href="https://drive.google.com/file/d/13_rW62LjwSg73uLyOJlB-rR8PHir7pg2/view?usp=sharing"
                            target="_blank" class="img">
                            <img src="@/assets/images/award5.png" alt="">
                        </a>
                        <p>2020全國大專校院倫理個案分析暨微電影競賽</p>
                        <span>—佳作—</span>
                    </div>
                    <div v-enter="' enterOpacity'">
                        <a href="https://drive.google.com/file/d/1WKpRCFRsdz484Jc36qQ2OgvWUdlw07Iv/view?usp=sharing"
                            target="_blank" class="img">
                            <img src="@/assets/images/award6.png" alt="">
                        </a>
                        <p>2021校園創意生活海報競賽</p>
                        <span>—金獎—</span>
                    </div>
                </div>

            </div>

        </div>
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

// -----------
.about-introduce {
    @include flex(column, center, center);

    p {
        text-align: center;
        color: $colorBrown;
        font-weight: 500;
        letter-spacing: 3px;
        line-height: 30px;
        margin-top: 40px
    }

    .introduce-card {
        @include flex(row, center, center);
        margin: 70px 0 110px 0;
    }

    .picture {
        width: 200px;
        height: 267px;
        background: url(@/assets/images/about-picture.jpg);
        background-size: cover;
        margin-right: 50px;
        border-radius: 10px;
        box-shadow: 0px 0px 3px rgba(#a0836b, 0.6);
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
            margin: 0 0 15px 0;

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
            line-height: 25px;
            letter-spacing: 3px;
        }

        .button-more {
            position: absolute;
            margin: 40px 0;
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

// -------------
.experience {
    display: flex;
    width: 100%;
    height: 500px; //
    background: linear-gradient(to right, #FFEEE0, #FFE8E8);
    position: relative;

    .timeline {
        height: 100%;
        margin: 0 auto;
    }


    ul {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        height: 80%;
        width: 100%;
        overflow: hidden;
        @include flex(column, space-evenly, center);

        li {
            @include flex(row, center, center);
            background: rgba(white, 0.3);
            border: 3px solid white;
            border-radius: 10px;
            height: 15%;
            letter-spacing: 2px;
            padding-right: 10px;
            color: $colorBlack;

            img {
                padding: 12px;
                height: 100%;
                margin: 0 auto;
            }

            &:nth-child(1) {
                transform: translateX(61%);
            }

            &:nth-child(2) {
                transform: translateX(-60%);
            }

            &:nth-child(3) {
                transform: translateX(59%);
            }

            &:nth-child(4) {
                transform: translateX(-66%);
            }

        }
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

// article
.paragraph {
    width: 90%;
    max-width: 800px;
    margin: 50px auto;

    h3 {
        text-align: center;
        font-size: 34px;
        color: $colorPink;
        letter-spacing: 10px;
        text-indent: 10px;
        font-weight: 500;
        margin: 30px 0;

        &::before {
            content: '';
            width: 38px;
            height: 18px;
            background-image: url(@/assets/images/title-flower.png);
            background-size: cover;
            position: absolute;
            transform: translate(-55px, 16px);
        }

        &::after {
            content: '';
            width: 38px;
            height: 18px;
            background-image: url(@/assets/images/title-flower.png);
            background-size: cover;
            position: absolute;
            transform: translate(5px, 16px) scaleX(-1);
        }
    }

    p {
        text-align: left;
        color: $colorBlack;
        font-weight: 500;
        letter-spacing: 3px;
        line-height: 28px;
        margin-bottom: 20px;
        font-size: 16px;
        text-indent: 36px;

        span {
            background-color: #ffefef;
        }
    }
}

.article {
    margin: 60px 0;

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

// award
.award {
    .award-box {
        width: 100%;
        @include flex(row, space-evenly, center);
        margin-bottom: 30px;

        h4 {
            text-align: start;
            margin-bottom: 30px;

            &::after {
                content: '';
                position: absolute;
                width: 60px;
                height: 4px;
                border-radius: 2px;
                background-color: rgba($colorPink, 0.3);
                transform: translate(-130px, 55px);
            }
        }
    }

    .img {
        background: rgba(white, 0.3);
        width: 200px;
        border: 2px dashed rgba($colorPink, 0.4);
        border-radius: 15px;
        padding: 5px;
    }

    h4 {
        font-size: 28px;
        letter-spacing: 5px;
        color: $colorBrown;
        margin: 20px 0px;
        text-align: center;

        &::after {
            content: '';
            position: absolute;
            width: 60px;
            height: 4px;
            border-radius: 2px;
            background-color: rgba($colorPink, 0.3);
            transform: translate(-100px, 55px);
        }
    }

    p {
        text-indent: 0px;
        max-width: 400px;
    }

    .winning {
        flex-wrap: wrap;
        align-items: start;

        >div {
            width: 40%;
            @include flex(column, center, center);
            margin: 20px 0;

            p {
                margin-top: 10px;
                margin-bottom: 0;
                text-align: center;
            }

            span {
                color: $colorOrange;
                font-size: 20px;
                font-weight: 500;
                letter-spacing: 3px;
            }
        }
    }
}

// -----------
@media (max-width:780px) {
    .header::after {
        background-size: auto 100%;
        height: 80px;
    }

    .header h2 {
        font-size: 34px;
        margin-top: 100px;
    }

    .about-introduce {
        .introduce-card {
            flex-direction: column;
            align-items: center;
            margin: 70px 0 40px 0;

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
                    line-height: 22px;
                }

                .button-more {
                    position: relative;
                    width: 200px;
                    right: 0;
                    margin-top: 30px;

                }
            }
        }
    }

    // -----------
    .experience::before,
    .experience::after {
        height: 20px;
    }

    .experience ul li {
        font-size: 12px;
        height: 12%;
    }

    // ------------
    .article {

        p {
            position: relative;
            left: 5px;
        }
    }

    .paragraph {
        width: 95%;
    }

    .paragraph .skills-container {
        min-width: 100%;
    }

    .paragraph .skills-container .tabs li {
        font-size: 14px;
        letter-spacing: 1px;
        padding: 0px 1px 0px 1px;
        line-height: 25px;
        width: 24%;
    }

    .paragraph .skills-container .skills-box .skills-icon li span {
        font-size: 14px;
        letter-spacing: 0px;
    }

    .paragraph .skills-container .skills-box .skills-icon {
        padding: 5% 2%;
    }

    .paragraph .skills-container .skills-box {
        padding: 8px;
    }

    .paragraph .skills-container .skills-box .skills-icon li {
        width: 10%;
    }

    .paragraph .skills-container .tabs {
        padding: 0px 20px;
    }

    .paragraph h3 {
        font-size: 30px;
    }
}


@media (max-width: 650px) {
    .paragraph p {
        font-size: 14px;
        width: 93%;
        margin: 20px auto;
    }

    .about-introduce p {
        font-size: 14px;
        letter-spacing: 1px;
    }

    .experience .timeline {
        margin-left: 5%;
    }

    .experience ul {
        align-items: start;
    }

    .experience ul li {
        letter-spacing: 1px;
        img{
            max-width:34px;
            height: 25px;
            padding: 0px;
            margin: 10px;
        }
        &:nth-child(1) {
            transform: translateX(90px);
        }

        &:nth-child(2) {
            transform: translateX(50px);
        }

        &:nth-child(3) {
            transform: translateX(90px);
        }

        &:nth-child(4) {
            transform: translateX(50px);
        }
    }

    // --------award
    .award .award-box {
        h4 {
            font-size: 18px;
            text-align: center;
            margin-top: 0px;
            margin-bottom: 20px;

            &::after {
                transform: translate(-80px, 32px);
                height: 2px;
            }
        }

        p {
            font-size: 12px;
            line-height: 18px;
            // margin-left: 10px;
            letter-spacing: 1px;
        }
    }

    .award h4 {
        font-size: 18px;

        &::after {
            transform: translate(-80px, 32px);
            height: 2px;
        }
    }

    .award .winning {
        flex-direction: column;
        align-items: center;
        > div span{
            font-size: 18px;
            margin-top: 5px;
        }
    }
}
</style>