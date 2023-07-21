import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';


// HTML Canvas
const canvas = document.querySelector('.webgl');

const size = {
    width: window.innerWidth,
    height: window.innerHeight
};

// Camera
const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1, 500);
camera.position.set(0,1,2);

// Scene
const scene = new THREE.Scene();
scene.add(camera);

// Renderer
const renderer = new THREE.WebGL1Renderer({ canvas: canvas });
renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

// Geometry
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color:'#0f0'});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

