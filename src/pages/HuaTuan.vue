<template>
    <div class="yizi-container">
        <div class="three-container" ref="threeContainer"></div>
        <el-button class="video-btn" @click="handleClickVideoBtn">查看拍摄的视频</el-button>
        <el-drawer
            v-model="table"
            direction="rtl"
            size="100%"
            class="drawer"
        >
            <strong>原视频</strong>
            <video :src="video" controls autoplay muted class="video"></video>
        </el-drawer>
    </div>
</template>
<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from "vue"
import { ThreeHelper } from "../ThreeHelper/index"
import video from "../assets/video/huatuan.mp4"

const threeContainer = ref();
const table = ref(false)
const handleClickVideoBtn = () => {
    table.value = true;
}
onMounted(() => {
    const threeHelper = new ThreeHelper(threeContainer.value);
    threeHelper.loadGaussianSplattingFile('datas/splat/huatuan-2fps.splat');
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
    .video-btn {
        position: absolute;
        right: 0;
        top: 0;
    }
    .drawer {
        z-index: 99999;
        .video {
            width: 98%;
            height: 96%;
        }
    }
}
</style>
