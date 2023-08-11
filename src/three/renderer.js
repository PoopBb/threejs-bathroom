//渲染器组件
import * as THREE from "three";
// 初始化渲染器
const renderer = new THREE.WebGLRenderer({
  // 抗锯齿
  antialias: true,
  // logarithmicDepthBuffer: true,
});
renderer.physicallyCorrectLights = true;
// renderer.setPixelRatio( window.devicePixelRatio * 2);
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.gammaOutput = true;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
export default renderer;
