import * as THREE from "three";
import scene from "./scene";

// 创建加载中动画
function createLoadingAnimation() {
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    var cube = new THREE.Mesh(geometry, material);

    cube.position.set(0, 5, 0)

    // 动画更新函数
    function updateAnimation() {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        cube.rotation.z += 0.01;
    }

    // 将动画更新函数添加到渲染循环中
    function animate() {
        updateAnimation();
        requestAnimationFrame(animate);
    }
    animate();

    return cube;
}

var loadingAnimation = createLoadingAnimation();

// 将加载中动画添加到场景中
scene.add(loadingAnimation);

export default loadingAnimation;