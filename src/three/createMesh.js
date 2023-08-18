//创建物体组件
import scene from './scene';
// import helper from '@/three/mesh/plane'
import ground from './mesh/ground';
import createCube from './mesh/cube';
import createBathTube from './mesh/bathtub';
import createAI from './mesh/aiGuide';

// import createCube from './mesh/cube';
export default function createMesh() {
  scene.add(ground);
  return {
    createAI,
    createCube, 
    createBathTube, 
  }
}
