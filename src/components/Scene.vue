<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable no-unused-vars -->

<template>
  <div class="scene" ref="sceneDiv">
    <!-- <button id="model1Button">Model 1</button>
    <button id="model2Button">Model 2</button> -->
  </div>
</template>

<script setup>

import { onMounted, ref} from 'vue';
//导入场景
import scene from "@/three/scene";
//导入相机
import camera from "@/three/camera";
//导入渲染器
import renderer from "@/three/renderer";
//导入每一帧执行函数
import animate from "@/three/animate";
//导入坐标轴
import axesHelper from "@/three/axesHelper";
//导入初始化调整屏幕
import "@/three/init";
// //导入控制器
// import controls from "@/three/controls";
//导入物体
import createMesh from "@/three/createMesh";
//导入灯光
import createLight from '@/three/createLight';
//gasp动画库
import createGUI from '@/three/gui';

//场景元素div
let sceneDiv = ref(null);

//添加相机
scene.add(camera);
//添加辅助坐标轴
// scene.add(axesHelper);
//添加物体
createMesh();
//添加灯光
createLight();

onMounted(()=>{
  sceneDiv.value.appendChild(renderer.domElement);
  animate();
})

</script>

<style>
.scene {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 0;
  left: 0;
  top: 0;
}

.gui-container {
  position: relative;
  z-index: 1;
}
</style>
