//创建物体组件
import scene from './scene';
// import helper from '@/three/mesh/plane'
import ground from './mesh/ground';
import createCube from './mesh/cube';
import createSphere from './mesh/sphere';

// import createCube from './mesh/cube';
export default function createMesh() {
  scene.add(createCube, createSphere, ground);
}
