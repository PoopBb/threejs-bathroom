/* eslint-disable no-unused-vars */
import * as THREE from "three";
import camera from "./camera";
import renderer from "./renderer";
import controls from "./controls";
import scene from "./scene";
import createCube from "./mesh/cube";
import createSphere from "./mesh/sphere";

const clock = new THREE.Clock();
const mesh = createCube();
const mesh1 = createSphere();

const time = clock.getElapsedTime();


function animate(t) {
  controls.update();
  renderer.render(scene,camera);//执行渲染操作

  // mesh.rotateX(0.01);
  mesh.rotateY(0.001);
  mesh1.rotateY(0.01);
  // mesh.rotateZ(0.01);
  scene.add(mesh, mesh1);
  // 使用渲染器渲染相机看这个场景的内容渲染出来
  // mesh.rotateY(0.01);//每次绕y轴旋转0.01弧度
}

//间隔20ms周期性调用函数fun,20ms也就是刷新频率是50FPS(1s/20ms)，每秒渲染50次
setInterval(function () {animate();}, time)

export default animate;
