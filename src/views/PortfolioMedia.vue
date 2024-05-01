<template>
    <div class="design-box">
        <router-link to="/Personal-Website/portfolio/media/video">
            <div class="design-item" v-enter="' enterBottom'">
                <img src="@/assets/images/portfolio/media1.jpg" alt="">
                <span>產品介紹影片製作</span>
            </div>
        </router-link>
        <router-link to="/Personal-Website/portfolio/media/animation">
            <div class="design-item" v-enter="' enterBottom'">
                <img src="@/assets/images/portfolio/media2.jpg" alt="">
                <span>動畫製作</span>
            </div>
        </router-link>
    </div>
</template>

<style scoped lang="scss">
.design-box {
    @include flex(row, flex-start, center);
    flex-wrap: wrap;
    width: 810px;
    margin: 0 auto;
    margin-bottom: 30px;

    .design-item {
        @include flex(column, center, center);
        @include shadow;
        width: 250px;
        background: white;
        margin: 0 10px 20px 10px;
        border-radius: 10px;
        padding: 20px;
        padding-bottom: 10px;
        transition-duration: 0.5s;

        &:hover {
            transform: scale(1.05);
        }

        img {
            width: 250px;
            @include shadow;
        }

        span {
            color: $colorPink;
            letter-spacing: 3px;
            text-indent: 3px;
            text-align: center;
            margin-top: 10px;
        }
    }
}

//M
@media (max-width: 991px) {
    .design-box {
        width: 540px;
    }
}

//S
@media (max-width:650px) {
    .design-box {
        width: 270px;

        .design-item {
            span {
                font-size: 14px;
            }
        }
    }
}
</style>