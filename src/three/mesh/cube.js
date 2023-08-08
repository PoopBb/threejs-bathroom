//测试方块
import * as THREE from "three";

export default function createCube() {
    const cube = new THREE.Mesh(
        new THREE.BoxGeometry(5, 5, 5),
        new THREE.MeshLambertMaterial(
            { color: 0xdddddd }
    ),
    )
    cube.position.set(0,0,0);
    cube.receiveShadow = true;
    cube.castShadow = true;

    return cube;
}