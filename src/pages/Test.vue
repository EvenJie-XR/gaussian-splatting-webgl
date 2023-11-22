<template>
    <div class="yizi-container">
        <div class="three-container" ref="threeContainer"></div>
        <div class="btn">
            <el-button class="btn-item" @click="handleClickVideoBtn">查看拍摄的视频</el-button>
            <el-button class="btn-item" @click="handleClickMenuBtn">返回目录</el-button>
        </div>
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
import video from "../assets/video/yizi.mp4"
import { router } from "../routes/index"
import gsap from "gsap"

const threeContainer = ref();
const table = ref(false)
const handleClickVideoBtn = () => {
    table.value = true;
}
const handleClickMenuBtn = () => {
    router.push("/");
}
onMounted(() => {
    const threeHelper = new ThreeHelper(threeContainer.value);
    threeHelper.loadGaussianSplattingFile('datas/splat/yizi.splat');
    threeHelper.jhree.helperManager.enableStatus(true, threeContainer.value);
    threeHelper.jhree.controlsManager.switchTrackballControls();
    onBeforeUnmount(() => {
        threeHelper.destory();
    })
    
    gsap.to(threeHelper.jhree.camera.position, {
        duration: 2,
        x: 2,
        ease: "power2.inOut"
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
    .btn {
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        .btn-item {
            margin-bottom: 10px;
        }
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
