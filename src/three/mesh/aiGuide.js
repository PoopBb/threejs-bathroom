//测试模型
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import loadingAnimation from "../loadingAnimation";
import scene from "../scene";


export default function createAI() {
    const object = new THREE.Object3D();
  
    const loader = new GLTFLoader();
    loader.load("/models/scifi_girl/scene.gltf", (gltf) => {
      console.log(gltf);
      const model1Button = document.getElementById("model1Button");
      const handleModel1Click = () => {
        console.log("Model 1按钮被点击了");
        // 在此处执行与Model 1相关的操作
      };
      model1Button.addEventListener("click", handleModel1Click);
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
  
    object.position.set(-8, 0, 4);
    object.rotateY = Math.PI / 2;
    object.scale.set(3,3,3)
    object.receiveShadows = true;
    object.castShadow = true;

    scene.add(object);
  
    return object;
  }