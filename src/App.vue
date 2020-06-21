<template>
    <div id="app">
        <!--    <img alt="Vue logo" src="./assets/logo.png">-->
        <div class="balloon-wrap">
            <Balloon />
        </div>
        <div class="title"><Cards type="title"></Cards></div>
        <div class="list first-list"><a href="#"><Cards type="welcomeBack"></Cards></a></div>
        <div class="list"><a href="/lottery"><Cards type="lottery"></Cards></a></div>
        <div class="list"><a href="/keywords"><Cards type="keywords"></Cards></a></div>
        <div class="list"><a href="https://kuoluo.applinzi.com/jike/BestNine/"><Cards type="bestNine"></Cards></a></div>
        <div class="list"><a href="https://www.coolapk.com/apk/com.bruce3x.friday"><Cards type="friday"></Cards></a></div>
        <div class="list"><a href="/mail"><Cards type="mail"></Cards></a></div>
        <div class="list disabled"><a href="#"><Cards type="guoguo"></Cards></a></div>
        <div class="divider">— 以下内容暂不可用 —</div>
        <div class="list disabled"><a href="#"><Cards type="lovejike"></Cards></a></div>
        <div class="list disabled"><a href="#"><Cards type="macos"></Cards></a></div>
        <div class="list disabled"><a href="#"><Cards type="bag"></Cards></a></div>
        <div class="copyright"><img src="./assets/copyright.png" alt="copyright"/></div>

        <Confetti />
    </div>
</template>

<script>
    import Balloon from "@/components/Balloon";
    import Confetti from "@/components/Confetti"
    import Cards from "@/components/Cards";
    export default {
        name: 'App',
        components: {
            Balloon,
            Confetti,
            Cards
        }
    }
</script>

<style>
    body {
        background: #f9f9f9;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .first-list {
        position: relative;
    }
    .title {
        text-align: center;
        width: 100%;
        margin: -116px auto 40px;
        position: relative;
    }
    .title svg {
        width: 200px;
    }
    .balloon-wrap {
        margin: -20px auto 0;
        z-index: 0;
        position: relative;
    }

    .list {
        text-align: center;
        width: 100%;
        margin: 0 auto 18px;
        transition: .3s ease;
        max-width: 500px;

    }

    .list svg {
        margin: 0 auto;
        width: 95%;
        max-width: 500px;
    }

    .disabled {
        opacity: 0.6;
    }

    .disabled svg::before{
        content: "暂不可用";
    }
    .list:active {
        transform: scale(0.95);
        opacity: 0.8;
        transition: .3s ease;
    }

    .divider{
        text-align: center;
        width: 100%;
        margin-top: 40px;
        margin-bottom: 40px;
        font-weight: 400;
        color: #868686;
        opacity: 0.4;
    }
    .copyright {
        text-align: center;
        width: 100%;
        margin: 70px auto 20px;
    }

    .copyright img{
        width: 180px;
    }

</style>
