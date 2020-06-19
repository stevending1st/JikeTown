<template>
    <lottie class="confetti" :options="defaultOptions" v-on:animCreated="handleAnimation"/>
</template>

<script>
    import Lottie from './Lottie.vue';
    import * as confettiData from '@/assets/confetti.json';

    export default {
        name: "Confetti",
        components: {
            'lottie': Lottie
        },
        data() {
            return {
                defaultOptions: {
                    animationData: confettiData.default,
                    renderer: 'canvas',
                    loop: false,
                    rendererSettings: {preserveAspectRatio: "xMidYMax slice"},
                },
                animationSpeed: 1
            }

        },
        methods: {
            handleAnimation: function (anim) {
                this.anim = anim;
            },
            stop: function () {
                this.anim.stop();
            },
            play: function () {
                this.anim.play();
            },
            pause: function () {
                this.anim.pause();
            },
            onSpeedChange: function () {
                this.anim.setSpeed(this.animationSpeed);
            }
        }
    }
</script>

<style scoped>
    .confetti {
        height: 100vh;
        width: 100vw;
        margin: auto 0;
        display: block;
        position: fixed;
        z-index: -1;
        top: 0;
        left: -10px;
    }
</style>
