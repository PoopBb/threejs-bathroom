//半球光
// 光源直接放置于场景之上，光照颜色从天空光线颜色渐变到地面光线颜色。
// 半球光不能投射阴影。
import * as THREE from "three";
import scene from "../scene";

export default function createHemiLight() {
    let hemiLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1 );
    hemiLight.position.set(0, 50, 0);
    // Add hemisphere light to scene
    scene.add(hemiLight);
}