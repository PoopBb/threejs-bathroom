import * as THREE from "three";
import { gsap } from "gsap";
import camera from "./camera";
import renderer from "./renderer";
import controls from "./controls";
import scene from "./scene";
import createMesh from "./createMesh";
import * as dat from "dat.gui"


const gui = new dat.GUI();
var mesh = createMesh().createCube();
var mesh1 = createMesh().createSphere();
var bath001 = createMesh().createBathTube();

const params = {
  color: "#ffffff",
  animateStart:() => {
    // // cube 位移动画 ================================
    gsap.to(mesh.position, {
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
    // // =============================================

    // cube 旋转动画 ================================
    gsap.to(mesh.rotation, {
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
  },
  // animatePause:() => {
  //   window.addEventListener("dblclick", () => {
  //     if(animate01.isActive()) {
  //       animate01.pause();
  //     } else {
  //       animate01.resume();
  //     }
  //   });
  // }
};

// GUI 折叠筐
var floder = gui.addFolder("设置方块");
floder.add(mesh.material, "wireframe").name("设置线框");

//物体位置 setting
floder
  .add(mesh.position, "x")
  .min(0)
  .max(5)
  .step(0.01)
  .name("x位置")
floder
  .add(mesh.position, "y")
  .min(0)
  .max(5)
  .step(0.01)
  .name("y位置")
floder
  .add(mesh.position, "z")
  .min(0)
  .max(5)
  .step(0.01)
  .name("z位置")

//物体大小 setting
floder
  .add(mesh.scale, "x")
  .min(0)
  .max(5)
  .step(0.01)
  .name("x大小")
floder
  .add(mesh.scale, "y")
  .min(0)
  .max(5)
  .step(0.01)
  .name("y大小")
floder
  .add(mesh.scale, "z")
  .min(0)
  .max(5)
  .step(0.01)
  .name("z大小")

//物体颜色 setting
floder.addColor(params, "color").onFinishChange((value) => {
  mesh.material.color.set(value);
})

//物体显示 setting
floder.add(mesh, "visible").name("显示方块");

//物体运动 setting
floder.add(params, "animateStart").name("方块运动");




// 控制帧数的变量
const targetFPS = 160;
const frameDelay = 1000 / targetFPS;
let lastFrameTime = 0;

// 动画帧渲染  ==================================
function animate(currentTime) {
  const elapsedTime = currentTime - lastFrameTime;

  if (elapsedTime > frameDelay) {
    controls.update();
    scene.add(mesh, bath001);
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

// mesh 渲染函数 ================================
function render() {
  animate();
  requestAnimationFrame(render);
}
// =============================================

render ();

export default animate;