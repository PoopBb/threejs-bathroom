//创建物体组件
import createCube from './mesh/cube';
import createSphere from './mesh/sphere';
import plane from '@/three/mesh/plane'
import scene from './scene';
// import createCube from './mesh/cube';
export default function createMesh() {
  scene.add(createCube, plane, createSphere);
}
