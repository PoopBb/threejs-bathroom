import * as THREE from "three";
import { gsap } from "gsap";
import camera from "./camera";
import renderer from "./renderer";
import controls from "./controls";
import scene from "./scene";
import createMesh from "./createMesh";

const clock = new THREE.Clock();
var mesh = createMesh().createCube();
var mesh1 = createMesh().createSphere();

// 控制帧数的变量
const targetFPS = 160;
const frameDelay = 1000 / targetFPS;
let lastFrameTime = 0;

// 动画帧渲染  ==================================
function animate(currentTime) {
  const elapsedTime = currentTime - lastFrameTime;

  if (elapsedTime > frameDelay) {
    controls.update();
    scene.add(mesh, mesh1);
    renderer.render(scene, camera);

    lastFrameTime = currentTime;
  }

  requestAnimationFrame(animate);
}
// =============================================

// 双击暂停动画  ================================
window.addEventListener("dblclick", () => {
  // if(animate01.isActive()) {
  //   animate01.pause();
  // } else {
  //   animate01.resume();
  // }
  const fullscreenElement = document.fullscreenElement;
  if(!fullscreenElement) {
    renderer.domElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});
// =============================================

// cube 位移动画 ================================
var animate01 = gsap.to(mesh.position, {
  x: 5,
  duration: 2,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true,
  delay: 2,
  onComplete: () => {
    console.log("动画完成")
  },
  onStart: () => {
    console.log("动画开始")
  },
});
// =============================================

// cube 旋转动画 ================================
var animate02 = gsap.to(mesh.rotation, {
  y: 5,
  duration: 2,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true,
  delay: 2,
  onComplete: () => {
    console.log("动画完成")
  },
  onStart: () => {
    console.log("动画开始")
  },
});
// =============================================

// mesh 渲染函数 ================================
function render() {
  animate();
  requestAnimationFrame(render);
}
// =============================================

render();

export default animate;