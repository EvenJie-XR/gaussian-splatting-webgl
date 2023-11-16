<template>
    <div class="yizi-container">
        <div class="three-container" ref="threeContainer"></div>
    </div>
</template>
<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from "vue"
import { ThreeHelper } from "../ThreeHelper/index"

const threeContainer = ref();
onMounted(() => {
    const threeHelper = new ThreeHelper(threeContainer.value);
    threeHelper.loadGaussianSplattingFile('datas/splat/garden_high.splat');
    threeHelper.jhree.helperManager.enableStatus(true, threeContainer.value);
    threeHelper.jhree.controlsManager.switchTrackballControls();
    onBeforeUnmount(() => {
        threeHelper.destory();
    })
})
</script>

<style lang="scss" scoped>
.yizi-container {
    width: 100%;
    height: 100%;
    .three-container {
        width: 100%;
        height: 100%;
    }
}
</style>
