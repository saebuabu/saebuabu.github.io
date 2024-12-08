<template>
    <div class="dummy"></div>
</template>
<script>
import Hydra from 'hydra-synth'

export default {
    name: 'HydraBox',
    setup() {
        /* Create a canvas element only if there is no canvas yet on the page */
        if (!document.querySelector('canvas')) {
            const canvas = document.createElement('canvas');
            canvas.style.width = '100vw';
            canvas.style.height = '100vh';
            canvas.style.margin = '0';
            canvas.style.padding = '0';
            canvas.style.overflow = 'hidden';

            const h = new Hydra({
                makeGlobal: false,
                detectAudio: false,
                canvas: canvas
            }).synth


            /*h.osc(10, 0.1, 0.8)
                .color(0.5, 0.8, 1)
                .rotate(0.1)
                .kaleid(3)
                .pixelate(100, 100)
                .out();
            */
            h.voronoi(20, 0.3, .2).shift(0.1, 0.9, 0.3).scroll(
                () => -h.mouse.x / h.width,
                () => -h.mouse.y / h.height)
                .kaleid(3)
                .scale(1.01)
                .rotate(0.1)
                .out();


            document.querySelector("#app").appendChild(canvas);

            return { hydra: h }
        }
        else {
            return { hydra: null }
        }
    }
}
</script>
<style scoped>
#app {
    height: 84px !important;
}

canvas {
    width: 100vw;
    height: calc(100vh - 84px);
    margin: 0;
    padding: 0;
    overflow: hidden;
}
</style>
