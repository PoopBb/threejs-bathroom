//点光源
//从一个点向各个方向发射的光源。一个常见的例子是模拟一个灯泡发出的光。

import * as THREE from "three";
import scene from "../scene";

export default function createPointLight(){
    const pointLight = new THREE.PointLight( 0xffffff, 1 );
	pointLight.position.x = 0.0;
	pointLight.position.y = 20.0;
	pointLight.position.z = 20.0;	

	pointLight.castShadow = true;
	pointLight.shadow.radius = 10
    console.log("点光源被加入");			
	scene.add( pointLight );

	const pointLightCameraHelper = new THREE.CameraHelper(pointLight.shadow.camera)
    scene.add(pointLightCameraHelper)

}