<template>
    <div class="dummy"></div>
    <div id="audio" class="audio"></div>
</template>
<script>
import Hydra from 'hydra-synth'

 /* eslint-disable */
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
                makeGlobal: true,
                detectAudio: false,
                canvas: canvas
            }).synth;

            s0.initCam();
            src(s0).mult(noise(10),0.1).add(voronoi(30,0.6,.2).shift(0.1,0.9,0.3))
            .scroll(
                () => -h.mouse.x / h.width,
                () => -h.mouse.y / h.height)
            .out()
            
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
