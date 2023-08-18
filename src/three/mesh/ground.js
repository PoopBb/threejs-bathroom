import * as THREE from "three";

const groundGeo = new THREE.PlaneGeometry(100, 100);
let groundMat = new THREE.MeshStandardMaterial({
  // map: new THREE.TextureLoader().load("/textures/Tiles052_2K-JPG/Tiles052_2K_Color.jpg"),
  roughness: 1, // 设置粗糙度
  metalness: 0, // 设置金属度
});

// // 添加贴图
const colorTexture = new THREE.TextureLoader().load("/textures/Tiles052_2K-JPG/Tiles052_2K_Color.jpg");
groundMat.map = colorTexture;


// 添加法线贴图
const normalTexture = new THREE.TextureLoader().load("/textures/Tiles052_2K-JPG/Tiles052_2K_NormalDX.jpg");
groundMat.normalMap = normalTexture;

// 添加粗糙度贴图
const roughnessTexture = new THREE.TextureLoader().load("/textures/Tiles052_2K-JPG/Tiles052_2K_Roughness.jpg");
groundMat.roughnessMap = roughnessTexture;

// 添加其他贴图属性，比如环境贴图、光泽度贴图等等

groundMat.side = THREE.DoubleSide;
const ground = new THREE.Mesh(groundGeo, groundMat);

ground.position.set(0, -0.1, 0);
ground.rotation.x = Math.PI / 2;
ground.receiveShadow = true;

console.log("平面被添加");

export default ground;