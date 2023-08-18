//测试模型
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import loadingAnimation from "../loadingAnimation";
import scene from "../scene";


export default function createBathTube() {
    const object = new THREE.Object3D();
  
    const loader = new GLTFLoader();
    loader.load("/models/porsche_911_turbo/scene.gltf", (gltf) => {
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
  
    object.position.set(0, 0, 0);
    object.scale.set(3,3,3)
    object.receiveShadows = true;
    object.castShadow = true;
  
    return object;
  }