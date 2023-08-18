//相机组件
import * as THREE from "three";
// 创建透视相机
const camera = new THREE.PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  0.10,
  10000.00
);
// 设置相机位置
// object3d具有position，属性是1个3维的向量
camera.position.set(5, 10, 15);
camera.fov = 75;

export default camera;
