//平行光
// 平行光是沿着特定方向发射的光。
// 这种光的表现像是无限远,从它发出的光线都是平行的。
// 常常用平行光来模拟太阳光 的效果;

// 太阳足够远，因此我们可以认为太阳的位置是无限远，
// 所以我们认为从太阳发出的光线也都是平行的。

import * as THREE from "three";
import scene from "../scene";

export default function createDirectionalLight() {
    
    const lightStr = 1;
    const light1 = new THREE.DirectionalLight( 0xffffff, lightStr);
    light1.position.set(-5, 10, 10);
                    
    light1.position.normalize();
    light1.castShadow = false;
    light1.shadow.mapSize.width = 1024; // 设置阴影贴图的大小
    light1.shadow.mapSize.height = 1024;
    light1.shadow.camera.near = 0.1; // 设置阴影摄像机的近距离和远距离
    light1.shadow.camera.far = 1000;
    console.log("平行光被加入")
    scene.add( light1 );

    const light2 = new THREE.DirectionalLight( 0xffffff, lightStr);
    light2.position.set(-5, 10, -10);
                    
    light2.position.normalize();
    light2.castShadow = false;
    light2.shadow.mapSize.width = 1024; // 设置阴影贴图的大小
    light2.shadow.mapSize.height = 1024;
    light2.shadow.camera.near = 0.1; // 设置阴影摄像机的近距离和远距离
    light2.shadow.camera.far = 1000;
    scene.add( light2 );

    const light3 = new THREE.DirectionalLight( 0xffffff, lightStr);
    light3.position.set(5, 10, 10);
                    
    light3.position.normalize();
    light3.castShadow = false;
    light3.shadow.mapSize.width = 1024; // 设置阴影贴图的大小
    light3.shadow.mapSize.height = 1024;
    light3.shadow.camera.near = 0.1; // 设置阴影摄像机的近距离和远距离
    light3.shadow.camera.far = 1000;
    scene.add( light3 );

    const light4 = new THREE.DirectionalLight( 0xffffff, lightStr);
    light4.position.set(5, 10, -10);
                    
    light4.position.normalize();
    light4.castShadow = false;
    light4.shadow.mapSize.width = 1024; // 设置阴影贴图的大小
    light4.shadow.mapSize.height = 1024;
    light4.shadow.camera.near = 0.1; // 设置阴影摄像机的近距离和远距离
    light4.shadow.camera.far = 1000;
    scene.add( light4 );
    
    const light5 = new THREE.DirectionalLight( 0xffffff, lightStr);
    light5.position.set(-5, 0, 10);         
    light5.position.normalize();
    light5.castShadow = false;
    light5.shadow.mapSize.width = 1024; // 设置阴影贴图的大小
    light5.shadow.mapSize.height = 1024;
    light5.shadow.camera.near = 0.1; // 设置阴影摄像机的近距离和远距离
    light5.shadow.camera.far = 1000;
    scene.add( light5 );

    const light6 = new THREE.DirectionalLight( 0xffffff, lightStr);
    light6.position.set(-5, 0, -10);               
    light6.position.normalize();
    light6.castShadow = false;
    light6.shadow.mapSize.width = 1024; // 设置阴影贴图的大小
    light6.shadow.mapSize.height = 1024;
    light6.shadow.camera.near = 0.1; // 设置阴影摄像机的近距离和远距离
    light6.shadow.camera.far = 1000;
    scene.add( light6 );

    const light7 = new THREE.DirectionalLight( 0xffffff, lightStr);
    light7.position.set(5, 0, 10);        
    light7.position.normalize();
    light7.castShadow = false;
    light7.shadow.mapSize.width = 1024; // 设置阴影贴图的大小
    light7.shadow.mapSize.height = 1024;
    light7.shadow.camera.near = 0.1; // 设置阴影摄像机的近距离和远距离
    light7.shadow.camera.far = 1000;
    scene.add( light7 );

    const light8 = new THREE.DirectionalLight( 0xffffff, lightStr);
    light8.position.set(5, 0, -10);    
    light8.position.normalize();
    light8.castShadow = false;
    light8.shadow.mapSize.width = 1024; // 设置阴影贴图的大小
    light8.shadow.mapSize.height = 1024;
    light8.shadow.camera.near = 0.1; // 设置阴影摄像机的近距离和远距离
    light8.shadow.camera.far = 1000;
    scene.add( light8 );

    const light9 = new THREE.DirectionalLight( 0xffffff, 2);
    light9.position.set(0, 10, 0);    
    light9.position.normalize();
    light9.castShadow = false;
    light9.shadow.mapSize.width = 1024; // 设置阴影贴图的大小
    light9.shadow.mapSize.height = 1024;
    light9.shadow.camera.near = 0.1; // 设置阴影摄像机的近距离和远距离
    light9.shadow.camera.far = 1000;
    scene.add( light9 );
}	
