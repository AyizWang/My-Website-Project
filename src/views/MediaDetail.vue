<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const title = ref({
    'video': '產品介紹影片製作',
    'animation': '動畫製作',
})
</script>

<template>
    <section class="header">
        <h2 v-enter="' enterBottom'">作品集</h2>
        <h3>—Portfolio—</h3>
    </section>
    <section class="media-detail">
        <div class="media-detail-title" v-enter="' enterBottom'">{{ title[route.params.id] }}</div>

        <template v-if="route.params.id === 'video'">
            <div class="media-detail-item">
                <iframe width="400" height="225" src="https://www.youtube.com/embed/48EAIp370k8?si=X2B4K59gfMdz9H3Z"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div v-enter="' enterRight'">
                    <span>製作流程</span>
                    <p>腳本發想、拍攝、剪輯、動畫、發布。全流程皆參與，除拍攝外其餘皆由本人獨立製作。（另有全英文版）</p>
                    <span>使用軟體</span>
                    <p>Adobe Premiere、Adobe Effects、Adobe Illustrator。</p>
                </div>
            </div>
            <div class="media-detail-item">
                <iframe width="400" height="225" src="https://www.youtube.com/embed/sSIltSrgAWs?si=tY0yTO1dU0mgxr3v"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div v-enter="' enterRight'">
                    <span>製作流程</span>
                    <p>腳本發想、拍攝、剪輯、動畫、發布。全流程皆參與，除拍攝外其餘皆由本人獨立製作。（另有全英文版）</p>
                    <span>使用軟體</span>
                    <p>Adobe Premiere、Adobe Effects、Adobe Illustrator。</p>
                </div>
            </div>
            <div class="media-detail-item">
                <iframe width="400" height="225" src="https://www.youtube.com/embed/0Qj5jYxmKn8?si=L88u1LQuY9IbjjVE"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div v-enter="' enterRight'">
                    <span>製作流程</span>
                    <p>腳本發想、拍攝、剪輯、動畫、發布。全流程皆參與，除拍攝外其餘皆由本人獨立製作。</p>
                    <span>使用軟體</span>
                    <p>Adobe Premiere、Adobe Effects、Adobe Illustrator。</p>
                </div>
            </div>
        </template>
        
        <template v-else>
            <div class="media-detail-item">
                <iframe width="400" height="225" src="https://www.youtube.com/embed/oCjaoU3Zo5o?si=zrsitaiVikitQCbu"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div v-enter="' enterRight'">
                    <span>製作流程</span>
                    <p>腳本發想、素材繪製、動畫、發布。全流程皆由本人獨立製作。（另有全英文版）</p>
                    <span>使用軟體</span>
                    <p>Adobe Effects、Adobe Illustrator。</p>
                </div>
            </div>
            <div class="media-detail-item">
                <iframe width="400" height="225" src="https://www.youtube.com/embed/KxYEhjdkMVE?si=aVpnazJcPs7pVeg9"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div v-enter="' enterRight'">
                    <p>此為在校實習作品。</p>
                    <span>製作流程</span>
                    <p>腳本分鏡、素材繪製、動畫製作、音效。本人參與90%動畫製作。</p>
                    <span>使用軟體</span>
                    <p>Adobe Effects、Adobe Illustrator。</p>
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

.media-detail {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    .media-detail-title {
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

    .media-detail-item {
        @include flex(row, center, center);
        width:90%;
        max-width: 1000px;
        margin: 30px auto;

        iframe {
            width: 400px;
        }

        div {
            text-align: left;
            margin-left: 20px;
            line-height: 30px;
            width: 50%;

            span {
                background: rgba($colorOrange, 0.3);
                border-radius: 5px;
                padding: 2px 8px;
                letter-spacing: 2px;
                font-size: 14px;
            }

            p {
                margin-bottom: 10px;
                margin-left: 5px;
                letter-spacing: 1px;
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
@media (max-width:650px){
    .media-detail .media-detail-item{
        flex-direction: column;
        margin-bottom: 10px;
        iframe{
            max-width: 98%;
        }
        div{
            margin-left: 0;
            margin-top: 20px;
            font-size: 14px;
            width:auto;
            max-width: 95%;
            p{
                margin-left: 0px;
                letter-spacing: 0px;
            }
        }
    }
}
</style>