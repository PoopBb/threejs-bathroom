//点光源
//从一个点向各个方向发射的光源。一个常见的例子是模拟一个灯泡发出的光。

import * as THREE from "three";
import scene from "../scene";

export default function createPointLight(){
    const pointLight = new THREE.PointLight( 0xffffff, 1, 100);
	pointLight.position.set( 0, 10, 4 )

	pointLight.castShadow = true;
	pointLight.shadow.radius = 10
    console.log("点光源被加入");			
	scene.add( pointLight );

	const pointLightCameraHelper = new THREE.CameraHelper(pointLight.shadow.camera)
    scene.add(pointLightCameraHelper)

	pointLight.shadow.mapSize.width = 512 * 2; 
	pointLight.shadow.mapSize.height = 512 * 2; 
	pointLight.shadow.bias = 0.05;
	pointLight.shadow.normalBias = 0.05;
	pointLight.shadow.camera.near = 0.5; 
	pointLight.shadow.camera.far = 500; 
}