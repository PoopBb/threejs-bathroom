//阴影地面
import * as THREE from "three";

const groundGeo = new THREE.PlaneGeometry(20, 20);
const groundMat = new THREE.MeshStandardMaterial(
    {
        opacity: 0.5
    }
);
groundMat.side = THREE.DoubleSide;
const ground = new THREE.Mesh(groundGeo, groundMat);

ground.position.set(0,-2,0);
ground.rotation.x = Math.PI / 2;
ground.receiveShadow = true;

console.log("平面被添加");

export default ground;