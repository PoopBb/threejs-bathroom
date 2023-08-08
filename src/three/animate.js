import * as THREE from "three";
import { gsap } from "gsap";
import camera from "./camera";
import renderer from "./renderer";
import controls from "./controls";
import scene from "./scene";
import createCube from "./mesh/cube";
import createSphere from "./mesh/sphere";

const clock = new THREE.Clock();
var mesh = createCube();
var mesh1 = createSphere();


function animate() {
  controls.update();
  scene.add(mesh, mesh1);
  renderer.render(scene, camera);
}

var animate01 = gsap.to(mesh.position, {
  x: 5,
  duration: 1,
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

window.addEventListener("dblclick", () => {
  console.log("click")
  animate01.pause;
});

function render() {
  animate();
  requestAnimationFrame(render);
}

render();

export default animate;