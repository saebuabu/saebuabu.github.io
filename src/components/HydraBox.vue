<template>
    <div class="dummy"></div>
    <div id="audio" class="audio"></div>
</template>
<script>
import Hydra from 'hydra-synth'
import { onBeforeUnmount, ref } from 'vue'

/* eslint-disable */
export default {
    name: 'HydraBox',
    setup() {
        const canvasRef = ref(null);
        const intervalRef = ref(null);
        const hydraRef = ref(null);

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

            canvasRef.value = canvas;
            hydraRef.value = h;

            const hydra1 = () => {
                s0.initCam();
                src(s0).add(voronoi(1, 0.1, 3)).shift(1, 0.9, 0.3)
                    .modulate(osc(8.219, -0.816, 39.394, () => h.a.fft[0] * 2))
                    .scale([0.1, 0.5, 0.75, 1, 1.5, 2].fast(0.25))
                    .scroll(
                        () => -h.mouse.x / h.width,
                        () => -h.mouse.y / h.height)
                    .out()
                h.bmp = 30
            }

            const hydra2 = () => {
                osc(13, 0, 1)
                    .kaleid()
                    .mask(shape(4, 0.3, 1))
                    .modulateRotate(shape(4, 0.1, 1))
                    .modulateRotate(shape(4, 0.1, 0.9))
                    .modulateRotate(shape(4, 0.1, 0.8))
                    .scale(0.3)
                    .add(shape(4, 0.2, 1).color(0.3, 1, 1, 0.5))
                    .rotate(() => time)
                    .out()
            }

            const hydra3 = () => {
                osc(100, -0.01245, 1).pixelate(50).kaleid(() => (Math.sin(time / 8) * 9 + 3)).rotate(0, 0.125)
                    .modulateRotate(shape(3).scale(() => (Math.cos(time) * 2)).rotate(0, -0.25)).diff(src(o0).brightness(0.3))
                    .out()
            }

            const hydraFunctions = [hydra1, hydra2, hydra3] // Add more hydra functions here
            intervalRef.value = setInterval(() => {
                const randomHydraFunction = hydraFunctions[Math.floor(Math.random() * hydraFunctions.length)]
                randomHydraFunction()
            }, 5000)

            document.querySelector("#app").appendChild(canvas);

            // Cleanup when component unmounts
            onBeforeUnmount(() => {
                // Clear the interval
                if (intervalRef.value) {
                    clearInterval(intervalRef.value);
                }

                // Remove the canvas element from DOM
                if (canvasRef.value && canvasRef.value.parentNode) {
                    canvasRef.value.parentNode.removeChild(canvasRef.value);
                }

                // Clear Hydra instance
                if (hydraRef.value && hydraRef.value.hush) {
                    hydraRef.value.hush();
                }
            });

            return { hydra: h, ...hydraFunctions }
        }
        else {
            return { hydra: null, hydra1: null, hydra2: null, hydra3: null }
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
