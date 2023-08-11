//阴影地面
import * as THREE from "three";

const groundGeo = new THREE.PlaneGeometry(5000, 5000);
let groundMat = new THREE.MeshPhongMaterial({
    color: 0xeeeeee,
    shininess: 0,
  });
groundMat.side = THREE.DoubleSide;
const ground = new THREE.Mesh(groundGeo, groundMat);

ground.position.set(0,0,0);
ground.rotation.x = Math.PI / 2;
ground.receiveShadow = true;

console.log("平面被添加");

export default ground;