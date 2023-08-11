// 聚光灯
// 光线从一个点沿一个方向射出，随着光线照射的变远，光线圆锥体的尺寸也逐渐增大。

import * as THREE from "three";
import scene from "../scene";
import createMesh from "../createMesh";

export default function createSpotLight() {
    const spotlight = new THREE.SpotLight(0xffffff, 2);
    spotlight.position.set(2, 2, 2); // 设置聚光灯的位置
    spotlight.target = createMesh().createBathTube(); // 设置聚光灯的目标为立方体
    
    // scene.add(spotlight);
}