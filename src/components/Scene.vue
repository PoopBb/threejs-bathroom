<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable no-unused-vars -->

<template>
  <div class="scene" ref="sceneDiv"></div>
</template>

<script setup>

import { onMounted, ref} from 'vue';
//导入场景
import scene from "@/three/scene";
//导入相机
import camera from "@/three/camera";
// 导入GUI
import gui from "@/three/gui";
//导入渲染器
import renderer from "@/three/renderer";
//导入每一帧执行函数
import animate from "@/three/animate";
//导入坐标轴
import axesHelper from "@/three/axesHelper";
//导入初始化调整屏幕
import "@/three/init";
//导入控制器
import controls from "@/three/controls";
//导入物体
import createMesh from "@/three/createMesh";
//导入灯光
import createLight from '@/three/createLight';

//场景元素div
let sceneDiv = ref(null);
//添加相机
scene.add(camera);
//添加辅助坐标轴
scene.add(axesHelper);
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
  z-index: 100;
  left: 0;
  top: 0;
}
</style>
