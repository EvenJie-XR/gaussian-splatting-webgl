import * as THREE from "three"
// @ts-ignore 引入threejs渲染gaussian-splatting的第三方库
import * as GaussianSplats3D from "../../public/libs/gaussian-splatting/gaussian-splats-3d.module.min.js"
import { Jhree } from "@even_jie/jhree"


export class ThreeHelper {
    jhree: Jhree
    gaussianViewer: GaussianSplats3D.Viewer
    constructor(threeContainer: HTMLDivElement) {
        this.jhree = new Jhree(threeContainer);
        this.gaussianViewer = new GaussianSplats3D.Viewer({
            'scene': this.jhree.scene,
            'renderer': this.jhree.renderer,
            'camera': this.jhree.camera,
            'rootElement': threeContainer,
            'useBuiltInControls': false,
            'cameraUp': [0,0,1],
            'initialCameraPosition': [0,1,0],
            'initialCameraLookAt': [1,0,0],
            'ignoreDevicePixelRatio': false
        });
        console.log(this.gaussianViewer);
    }
    loadGaussianSplattingFile(filepath: String) {
        this.gaussianViewer.loadFile(filepath, {
            'halfPrecisionCovariancesOnGPU': true
        })
        .then(() => {
            this.gaussianViewer.start();
        });
    }
    destory() {
        this.gaussianViewer.stop();
        this.jhree.destory();
    }
}