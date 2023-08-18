//点光源
//从一个点向各个方向发射的光源。一个常见的例子是模拟一个灯泡发出的光。

import * as THREE from "three";
import scene from "../scene";

export default function createPointLight(){
    let pointStr = 1;
    const pointLight1 = new THREE.PointLight( 0xffffff, pointStr);
	pointLight1.position.set( 8, 10, 6 )
    console.log("点光源被加入");			
	scene.add( pointLight1 );

    const pointLight2 = new THREE.PointLight( 0xffffff, pointStr);
	pointLight2.position.set( -8, 10, 6 )
	scene.add( pointLight2 );

    const pointLight3 = new THREE.PointLight( 0xffffff, pointStr);
	pointLight3.position.set( 8, 10, -6 )
	scene.add( pointLight3 );

    const pointLight4 = new THREE.PointLight( 0xffffff, pointStr);
	pointLight4.position.set( -8, 10, -6 )
	scene.add( pointLight4 );

    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    // const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    // const cube1 = new THREE.Mesh(geometry, material);
    // const cube2 = new THREE.Mesh(geometry, material);
    // const cube3 = new THREE.Mesh(geometry, material);
    // const cube4 = new THREE.Mesh(geometry, material);
    
    // cube1.position.copy(pointLight1.position);  // 替换pointLight1为你的点光源变量
    // cube2.position.copy(pointLight2.position);  // 替换pointLight1为你的点光源变量
    // cube3.position.copy(pointLight3.position);  // 替换pointLight1为你的点光源变量
    // cube4.position.copy(pointLight4.position);  // 替换pointLight1为你的点光源变量
    
    // scene.add(cube1,cube2,cube3,cube4);
}