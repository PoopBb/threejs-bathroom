//平行光
// 平行光是沿着特定方向发射的光。
// 这种光的表现像是无限远,从它发出的光线都是平行的。
// 常常用平行光来模拟太阳光 的效果;

// 太阳足够远，因此我们可以认为太阳的位置是无限远，
// 所以我们认为从太阳发出的光线也都是平行的。

import * as THREE from "three";
import scene from "../scene";

export default function createDirectionalLight() {
    const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.125);
    directionalLight.position.x = -40;
    directionalLight.position.y = 20;
    directionalLight.position.z = 13;
                    
    directionalLight.position.normalize();
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024; // 设置阴影贴图的大小
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.camera.near = 100; // 设置阴影摄像机的近距离和远距离
    directionalLight.shadow.camera.far = 1000;
    console.log("平行光被加入")
    scene.add( directionalLight );
    
    const helper = new THREE.PointLightHelper(directionalLight);
    console.log("辅助器被加入")
    scene.add(helper);
}	
