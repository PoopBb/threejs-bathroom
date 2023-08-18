// import camera from "./camera";
// import renderer from "./renderer";
// import controls from "./controls";
// import scene from "./scene";
// import createMesh from "./createMesh";
// import { gsap } from "gsap";
// import * as dat from "dat.gui";


// var mesh = createMesh().createCube();
// var bath001 = createMesh().createBathTube();
// var AI = createMesh().createAI();

// // 控制帧数的变量
// const targetFPS = 160;
// const frameDelay = 1000 / targetFPS;
// let lastFrameTime = 0;

// //创建gui对象
// const gui = new dat.GUI();

// let animation; // 声明变量在 animateStart() 函数之外
// let index = 0;

// const params = {
//   color: "#ffffff",
//   animateStart: () => {
//     if (animation == null || index %2 == 0) {
//     animation = gsap.to(bath001.rotation, {
//       y: Math.PI * 2,
//       duration: 30,
//       ease: "Power1.easeInOut",
//       repeat: -1,
//       yoyo: true,
//       delay: 2,
//       onComplete: () => {
//         console.log("动画完成");
//       },
//       onStart: () => {
//         console.log("动画开始");
//       },
//     });
//     index++;
//   } else {
//     animation.pause();
//     console.log("动画已暂停");
//     index++;
//   }
//     // =============================================
//   },
// };
  
// // GUI 折叠筐 
// var floder = gui.addFolder("设置方块");

// floder.add(mesh.material, "wireframe").name("设置线框");

// floder
//   .add(mesh.position, "x")
//   .min(0)
//   .max(5)
//   .step(0.01)
//   .name("x位置")
// floder
//   .add(mesh.position, "y")
//   .min(0)
//   .max(5)
//   .step(0.01)
//   .name("y位置")
// floder
//   .add(mesh.position, "z")
//   .min(0)
//   .max(5)
//   .step(0.01)
//   .name("z位置")

// //物体大小 setting
// floder
//   .add(mesh.scale, "x")
//   .min(0)
//   .max(5)
//   .step(0.01)
//   .name("x大小")
// floder
//   .add(mesh.scale, "y")
//   .min(0)
//   .max(5)
//   .step(0.01)
//   .name("y大小")
// floder
//   .add(mesh.scale, "z")
//   .min(0)
//   .max(5)
//   .step(0.01)
//   .name("z大小")

// //物体颜色 setting
// floder.addColor(params, "color").onFinishChange((value) => {
//   mesh.material.color.set(value);
// })

// //物体显示 setting
// floder.add(mesh, "visible").name("显示方块").setValue(false);

// //物体运动 setting
// floder.add(params, "animateStart").name("方块运动");

// // 动画帧渲染  ==================================
// function animate(currentTime) {
//   const elapsedTime = currentTime - lastFrameTime;

//   if (elapsedTime > frameDelay) {
//     controls.update();
//     scene.add(mesh, bath001);
//     renderer.render(scene, camera);

//     lastFrameTime = currentTime;
//   }

//   requestAnimationFrame(animate);
// }
// // =============================================

// // 双击暂停动画  ================================
// window.addEventListener("dblclick", () => {
//   // if(animate01.isActive()) {
//   //   animate01.pause();
//   // } else {
//   //   animate01.resume();
//   // }
//   const fullscreenElement = document.fullscreenElement;
//   if(!fullscreenElement) {
//     renderer.domElement.requestFullscreen();
//   } else {
//     document.exitFullscreen();
//   }
// });

// // mesh 渲染函数 ================================
// function render() {
//   animate();
//   requestAnimationFrame(render);
// }
// // =============================================

// render ();

// export default animate;

import camera from "./camera";
import renderer from "./renderer";
import controls from "./controls";
import scene from "./scene";
import createMesh from "./createMesh";
// import { gsap } from "gsap";//动画控制
import * as dat from "dat.gui";//界面控制

var AI = createMesh().createAI();
var mesh = createMesh().createCube();
console.log(mesh);

//创建gui对象
const gui = new dat.GUI();

// GUI 功能模块 ================================================
// GUI 折叠筐 
var floder = gui.addFolder("设置方块");
//物体显示 setting
floder.add(mesh, "visible").name("显示方块").setValue(true);
//物体位置 setting
floder
  .add(AI.position, "x")
  .min(0)
  .max(50)
  .step(0.01)
  .name("x位置")
floder
  .add(AI.position, "y")
  .min(0)
  .max(5)
  .step(0.01)
  .name("y位置")
floder
  .add(AI.position, "z")
  .min(0)
  .max(50)
  .step(0.01)
  .name("z位置")

//物体大小 setting
floder
  .add(AI.scale, "x")
  .min(0)
  .max(5)
  .step(0.01)
  .name("x大小")
floder
  .add(AI.scale, "y")
  .min(0)
  .max(5)
  .step(0.01)
  .name("y大小")
floder
  .add(AI.scale, "z")
  .min(0)
  .max(5)
  .step(0.01)
  .name("z大小")

//物体旋转 setting
floder
  .add(AI.rotation, "y", 0, Math.PI * 2)
  .step(0.1)
  .name("旋转")


// 控制帧数的变量
const targetFPS = 120;
const frameDelay = 1000 / targetFPS;
let lastFrameTime = 0;

// 动画帧渲染  ==================================
function animate(currentTime) {
  const elapsedTime = currentTime - lastFrameTime;

  if (elapsedTime > frameDelay) {
    controls.update();
    scene.add(mesh, AI);
    renderer.render(scene, camera);

    lastFrameTime = currentTime;
  }

  requestAnimationFrame(animate);
}
// =============================================

// mesh 渲染函数 ================================
function render() {
  animate();
  requestAnimationFrame(render);
}
// =============================================

render();

export default animate;