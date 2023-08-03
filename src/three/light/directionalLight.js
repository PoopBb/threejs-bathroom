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
    directionalLight.position.x = -0.04;
    directionalLight.position.y = 0.22;
    directionalLight.position.z = 0.13;
                    
    directionalLight.position.normalize();

    console.log("平行光被加入")
    scene.add( directionalLight );	
}	
