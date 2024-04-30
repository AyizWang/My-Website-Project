<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()

</script>

<template>
    <section class="header">
        <h2 v-enter="' enterBottom'">作品集</h2>
        <h3>—Portfolio—</h3>
    </section>
    <section class="design-detail">
        <template v-if="route.params.id === 'banner'">
            <div v-enter="' enterBottom'">活動Banner</div>
            <img src="/src/assets/images/portfolio/design1_1-1.jpg" alt="">
            <img src="/src/assets/images/portfolio/design1_2-1.jpg" alt="">
            <img src="/src/assets/images/portfolio/design1_1-2.jpg" alt="">
            <img src="/src/assets/images/portfolio/design1_2-2.jpg" alt="">
            <img src="/src/assets/images/portfolio/design1_1-3.jpg" alt="">
            <img src="/src/assets/images/portfolio/design1_1-4.jpg" alt="">
        </template>

        <template v-if="route.params.id === 'dm'">
            <div v-enter="' enterBottom'">產品DM&海報</div>
            <img src="/src/assets/images/portfolio/design2_1.jpg" alt="">
            <img src="/src/assets/images/portfolio/design2_2.jpg" alt="">
            <img src="/src/assets/images/portfolio/design2_3.jpg" alt="">
            <img src="/src/assets/images/portfolio/design2_4.jpg" alt="">
            <img src="/src/assets/images/portfolio/design2_5.jpg" alt="">
            <img src="/src/assets/images/portfolio/design2_6.jpg" alt="">
        </template>

        <template v-if="route.params.id === 'socialmedia'">
            <div v-enter="' enterBottom'">社群貼文&廣告</div>
            <img src="/src/assets/images/portfolio/design3_1.jpg" alt="">
            <img src="/src/assets/images/portfolio/design3_2.jpg" alt="">
            <img src="/src/assets/images/portfolio/design3_3.jpg" alt="">
        </template>

        <template v-if="route.params.id === 'outdoor'">
            <div v-enter="' enterBottom'">看板設計</div>
            <img src="/src/assets/images/portfolio/design4_1.jpg" alt="">
            <img src="/src/assets/images/portfolio/design4_2.jpg" alt="">
            <img src="/src/assets/images/portfolio/design4_3.jpg" alt="">
        </template>

        <template v-if="route.params.id === 'billboard'">
            <div v-enter="' enterBottom'">戶外牆板</div>
            <img src="/src/assets/images/portfolio/design5_1.jpg" alt="">
            <img src="/src/assets/images/portfolio/design5_2.jpg" alt="">
            <img src="/src/assets/images/portfolio/design5_3.jpg" alt="">
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

.design-detail {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    div {
        color: $colorPink;
        width: 1000px;
        max-width: 95%;
        border-bottom: solid 2px rgba($colorPink, 0.3);
        margin: 20px auto;
        text-align: center;
        letter-spacing: 3px;
        line-height: 40px;
        font-size: 18px;
    }

    img {
        width: 700px;
        max-width: 95%;
        margin: 10px auto;
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