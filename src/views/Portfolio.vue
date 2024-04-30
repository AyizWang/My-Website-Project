<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
    <section class="header">
        <h2 v-enter="' enterBottom'">作品集</h2>
        <h3>—Portfolio—</h3>
    </section>
    <section class="portfolio-tabs">
        <img class="bg-icon bg-icon-3" src="@/assets/images/bg-icon-03.png" alt="">
        <img class="bg-icon bg-icon-4" src="@/assets/images/bg-icon-04.png" alt="">
        <ul>
            <router-link to="/portfolio/project"><li :style="route.path==='/portfolio/project'?'color:white;background-color:#FFA969':''">專案作品</li></router-link>
            <router-link to="/portfolio/design"><li :style="route.path==='/portfolio/design'?'color:white;background-color:#FFA969':''">設 計</li></router-link>
            <router-link to="/portfolio/media"><li :style="route.path==='/portfolio/media'?'color:white;background-color:#FFA969':''">影音/動畫</li></router-link>
        </ul>
    </section>

    <router-view></router-view>
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

.portfolio-tabs {
    margin: 50px 0;
    width: 100%;

    ul {
        width: 80%;
        max-width: 600px;
        margin: 0 auto;
        @include flex(row, space-evenly, center);

        li {
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

    .portfolio-tabs ul{
        width: 100%;
        li{
            font-size: 14px;
            letter-spacing: 1px;
        }
    }
}
</style>