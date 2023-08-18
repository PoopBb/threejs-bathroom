//环境光
// 环境光会均匀的照亮场景中的所有物体。
// 环境光不能用来投射阴影，因为它没有方向。

import * as THREE from "three";
import scene from "../scene";

export default function createAmbientLight(){
    const ambitionLight = new THREE.AmbientLight( 0xffffff , 2); // soft white light
    console.log("环境光被加入");
    scene.add( ambitionLight );
}