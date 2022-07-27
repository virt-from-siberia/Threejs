var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 5;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener("resize", function () {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshLambertMaterial({
  color: 0xffcc00,
});
var mash = new THREE.Mesh(geometry, material);

scene.add(mash);

var light = new THREE.PointLight(0xffffff, 1, 500);
light.position.set(10, 0, 25);
scene.add(light);

// renderer.render(scene, camera);
var render = function () {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
};

render();

this.tl = new TimelineMax();
this.tl.to(this.mesh.scale, 1, {
  x: 2,
  ease: Expo.easeOut,
});
this.tl.to(this.mesh.scale, 0.5, {
  x: 2,
  ease: Expo.easeOut,
});
this.tl.to(this.mesh.position, 0.5, {
  x: 2,
  ease: Expo.easeOut,
});
this.tl.to(this.mesh.rotation, 0.5, {
  x: Math.PI * 0.5,
  ease: Expo.easeOut,
});
