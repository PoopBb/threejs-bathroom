//测试模型
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import loadingAnimation from "../loadingAnimation";
import scene from "../scene";


export default function createAI() {
    const object = new THREE.Object3D();
    const loader = new GLTFLoader();

    // loader.load("/models/Xbot.glb", (gltf) => {
    loader.load("/models/anita_-_female_character/scene.gltf", (gltf) => {
    // loader.load("/models/scifi_girl/scene.gltf", (gltf) => {
      console.log(gltf);
      addEventListener
      // 模型加载完成后，移除加载动画
      scene.remove(loadingAnimation);
      const model = gltf.scene;

      // 遍历模型的所有材质
      model.traverse((node) => {
        if (node.isMesh) {
          const material = node.material;

          // 设置自发光属性
          material.emissive = new THREE.Color(0xffffff); // 设置自发光颜色
          material.emissiveIntensity = 0.1; // 设置自发光强度
          material.emissiveMap = null; // 设置自发光贴图（可选）

          // 更新材质
          material.needsUpdate = true;
        }
      });

      object.add(model);
    });
  
    object.position.set(-10, 5, 4);
    object.rotation.set(0, 1, 0);
    object.scale.set(5,5,5)
    object.receiveShadows = true;
    object.castShadow = true;

    scene.add(object);
  
    
    return object;
  }