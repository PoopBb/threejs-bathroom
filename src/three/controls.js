import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import camera from "./camera";
import renderer from "./renderer";




// 初始化控制器
const controls = new OrbitControls(camera, renderer.domElement);
// 设置控制器阻尼
controls.enableDamping = true;
// 设置自动旋转
// controls.autoRotate = true;
// 设置相机焦点
controls.target.set(0, 1, 0);

// 设置相机角度
controls.maxPolarAngle = Math.PI / 2.1; // 或任何其他适当的角度

// 设置相机缩放尺度
controls.minDistance = 2; // 设置相机的最小缩放距离
controls.maxDistance = 50; // 设置相机的最大缩放距离


export default controls;

