import * as THREE from "three";
import { gsap } from "gsap";
import camera from "./camera";
import renderer from "./renderer";
import controls from "./controls";
import scene from "./scene";
import createCube from "./mesh/cube";
import createSphere from "./mesh/sphere";

const clock = new THREE.Clock();
const mesh = createCube();
const mesh1 = createSphere();


function animate() {
  controls.update();
  renderer.render(scene, camera);

  // Animate the mesh position along the x-axis using GSAP
  
    gsap.to(mesh.position, {
      x: -20,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  window.addEventListener("dblclick", ()=>{
    console.log(mesh);
    mesh.pause();
  })
  
  console.log(mesh.position)
  scene.add(mesh, mesh1);
}

function render() {
  animate();
  requestAnimationFrame(render);
}

render();

export default animate;