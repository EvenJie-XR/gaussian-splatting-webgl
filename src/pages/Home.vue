<template>
    <div class="home-container">
        <el-card :body-style="{ padding: '0px' }" @click="o.clickCallback" class="card" v-for="(o) in exampleList" :key="o.title">
            <img :src="o.previewImgPath"
                class="image" />
            <div style="padding: 14px">
                <strong>{{ o.title }}</strong>
                <br/>
                <span class="description">{{ o.description }}</span>
            </div>
        </el-card>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import yiziImg from "../assets/img/splat-preview/yizi.png"
import { router } from "../routes/index"
import gardenImg from "../assets/img/splat-preview/garden.png"
import jiaoshiyiziImg from "../assets/img/splat-preview/jiaoshiyizi.png"
import jiaoshiImg from "../assets/img/splat-preview/jiaoshi.png"
import huatuanImg from "../assets/img/splat-preview/huatuan.png"
import shubiaoImg from "../assets/img/splat-preview/shubiao.png"
import diyidierpaiImg from "../assets/img/splat-preview/diyidierpai.png"
import loudaoImg from "../assets/img/splat-preview/loudao.png"

const exampleList = ref([
    {
        previewImgPath: yiziImg,
        description: '2fps裁切视频,简单外围围绕椅子拍摄',
        title: '寝室椅子',
        clickCallback: () => {
            router.push("/yizi");
        }
    },
    {
        previewImgPath: gardenImg,
        description: '官方拍摄的案例数据',
        title: '【官方案例数据】花园',
        clickCallback: () => {
            router.push("/garden");
        }
    },
    {
        previewImgPath: jiaoshiyiziImg,
        title: '教室椅子',
        description: '2fps裁切视频,详细拍摄椅子外围和椅子细节',
        clickCallback: () => {
            router.push("/jiaoshiyizi");
        }
    },
    {
        previewImgPath: jiaoshiImg,
        title: '教室',
        description: '2fps裁切视频,简单外围围绕教室拍摄',
        clickCallback: () => {
            router.push("/jiaoshi");
        }
    },
    {
        previewImgPath: huatuanImg,
        title: '花团',
        description: '2fps裁切视频,简单外围围绕数院花团拍摄',
        clickCallback: () => {
            router.push("/huatuan");
        }
    },
    {
        previewImgPath: shubiaoImg,
        title: '鼠标',
        description: '2fps裁切视频,详细多角度多远近距离的拍摄鼠标',
        clickCallback: () => {
            router.push("/shubiao");
        }
    },
    {
        previewImgPath: diyidierpaiImg,
        title: '教室的第一第二排',
        description: '2fps裁切视频,详细多角度多远近距离的拍摄教室的第一第二排',
        clickCallback: () => {
            router.push("/diyidierpai");
        }
    },
    {
        previewImgPath: loudaoImg,
        title: '在较黑暗的环境拍摄楼道',
        description: '2fps裁切视频,详细多角度的拍摄较暗的楼道',
        clickCallback: () => {
            router.push("/loudao");
        }
    }
])
</script>

<style lang="scss" scoped>
.home-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: flex-start;

    .time {
        font-size: 12px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .button {
        padding: 0;
        min-height: auto;
    }

    .image {
        width: 100%;
        display: block;
    }
    .card {
        cursor: pointer;
        width: 400px;
        height: 300px;
        margin-bottom: 10px;
        .description {
            font-size: 14px;
        }
    }
}
</style>
