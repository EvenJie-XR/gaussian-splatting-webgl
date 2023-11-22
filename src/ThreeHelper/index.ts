import { Jhree } from "@even_jie/jhree"
import { Viewer } from "gaussian-splats-3d"

export class ThreeHelper {
    jhree: Jhree
    gaussianViewer: Viewer
    constructor(threeContainer: HTMLDivElement) {
        this.jhree = new Jhree(threeContainer);
        this.gaussianViewer = new Viewer({
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
        console.log(this.gaussianViewer, this.jhree.scene);
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