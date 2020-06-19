<template>
    <lottie class="balloon" :options="defaultOptions" :height="280" v-on:animCreated="handleAnimation"/>
</template>

<script>
    import Lottie from './Lottie.vue';
    import * as balloonData from '@/assets/balloon.json';

    export default {
        name: "Balloon",
        components: {
            'lottie': Lottie
        },
        data() {
            return {
                defaultOptions: {
                    animationData: balloonData.default,
                    renderer: 'svg',
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
    .balloon {
        height: 280px;
        margin: auto;
        z-index: -1;
    }
</style>
