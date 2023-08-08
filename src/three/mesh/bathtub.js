//测试模型
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


export default function createBathTube() {
    const object = new THREE.Object3D();
  
    const loader = new GLTFLoader();
    loader.load("/models/bath001.glb", (gltf) => {
      const model = gltf.scene;
      object.add(model);
    });
  
    object.position.set(0, 0, 0);
    object.receiveShadows = true;
    object.castShadow = true;
  
    return object;
  }