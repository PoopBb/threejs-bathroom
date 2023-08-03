//场景组件
import * as THREE from "three";
import { Color } from "three";

// 初始化场景
const scene = new THREE.Scene();

// 场景天空盒
// const textureCubeLoader = new THREE.CubeTextureLoader().setPath("./textures/");
// const textureCube = textureCubeLoader.load([
//   "1.jpg",
//   "2.jpg",
//   "3.jpg",
//   "4.jpg",
//   "5.jpg",
//   "6.jpg",
// ]);

const bc = new Color("black");
scene.background = bc;
// scene.background = textureCube;
// scene.environment = textureCube;


export default scene;