<template>
    <section class="header">
        <h2 v-enter="' enterBottom'">聯絡資訊</h2>
        <h3>—Contact—</h3>
    </section>

    <section class="contact-box">
        <img class="bg-icon bg-icon-3" src="@/assets/images/bg-icon-03.png" alt="">
        <img class="bg-icon bg-icon-4" src="@/assets/images/bg-icon-04.png" alt="">
        <span v-enter="' enterOpacity'">以下為本人聯絡方式<br>若有任何問題請隨時聯繫<br>感謝您</span>
        <div v-enter="' enterBottom'">
            <p>☎︎ Phone：<br>0972-733-433</p>
            <p>✉ Email：<br>ziyawang0806@gmail.com</p>
            <img src="@/assets/images/LINE-QRcode.jpg" alt="">
            <a href="https://line.me/ti/p/KfC6y_RhJG" target="_blank"><u>https://line.me/ti/p/KfC6y_RhJG</u></a>
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

.contact-box {
    margin: 0 auto;
    text-align: center;
    width: 90%;
    span{
        color:$colorBlack;
        letter-spacing: 4px;
        line-height: 30px;
    }
    div {
        @include shadow;
        border-radius: 10px;
        background: white;
        width: 450px;
        margin: 40px auto;
        padding: 30px 20px 40px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
            letter-spacing: 2px;
            line-height: 25px;
            margin-bottom: 20px;
        }

        a {
            color: $colorBlack;
            font-family: 'Noto Sans TC';
            letter-spacing: 1px;
            font-size: 14px;
        }

        img {
            width: 200px;
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
    .contact-box{
        span{
            font-size: 14px;
        }
        div{
            width: 90%;
            p{
                font-size: 14px;
                letter-spacing: 1px;
            }
        }
    }
}
</style>