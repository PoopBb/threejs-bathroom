//测试球体
import * as THREE from "three";

export default function createSphere() {
    const sphere = new THREE.Mesh(
        new THREE.SphereGeometry( 1, 32, 16 ),
        new THREE.MeshLambertMaterial( { color: 0xdddddd } ) ,
    )
    sphere.position.set(2,0.5,5);
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    
    return sphere;
}