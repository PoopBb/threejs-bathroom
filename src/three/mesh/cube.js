//测试方块
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import loadingAnimation from "../loadingAnimation";
import scene from "../scene";

export default function createCube() {
    const object = new THREE.Object3D();
    const loader = new GLTFLoader();

    //加载动画
    loader.load("/models/bathtub/scene.gltf", (gltf) => {
        const model = gltf.scene;
        console.log(gltf);
        addEventListener
        // 遍历模型的所有材质
        model.traverse((node) => {
            if (node.isMesh) {
            const material = node.material;

            // 设置自发光属性
            material.emissive = new THREE.Color(0xffffff); // 设置自发光颜色
            material.emissiveIntensity = 0.05; // 设置自发光强度
            material.emissiveMap = null; // 设置自发光贴图（可选）

            // 更新材质
            material.needsUpdate = true;
            }
        });
        // 模型加载完成后，移除加载动画
        scene.remove(loadingAnimation);
        object.add(model);

    });
    object.position.set(0,0,0);
    object.scale.set(0.1,0.1,0.1)

    return object;
}