import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';


// HTML Canvas
const canvas = document.querySelector('.webgl');

const size = {
    width: window.innerWidth,
    height: window.innerHeight
};

// Camera
const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1, 500);
camera.position.set(0,3,30);
camera.rotation.x = -15 * Math.PI / 180;

// Scene
const scene = new THREE.Scene();
scene.add(camera);

// Renderer
const renderer = new THREE.WebGL1Renderer({ canvas: canvas });
renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;

// Lights
const light = new THREE.PointLight('#fff',0.8,100);
light.position.set(10,10,10);
scene.add(light);

const lightHelper = new THREE.PointLightHelper( light, 1 );
scene.add( lightHelper );

const ambientLight = new THREE.AmbientLight('#fff',0.05,100);
ambientLight.position.set(-3,-10,3);
scene.add(ambientLight);

const backLight = new THREE.PointLight('#fff',0.1,100);
backLight.position.set(-5,-5,-10);
scene.add(backLight);

const backLightHelper = new THREE.PointLightHelper( backLight, 1 );
scene.add( backLightHelper );


// Geometry
const geometry = new THREE.IcosahedronGeometry(3);
const material = new THREE.MeshStandardMaterial({color:'#0ff', roughness: 0.4, metalness:0.4});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);


// Animation
function animate() {
    mesh.rotation.y += 0.01;
    mesh.rotation.z += 0.01;
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

