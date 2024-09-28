import { Component } from "./component";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export class MainSection extends Component {
  render(): string {
    const sectionHtml = `
      <main>
        <div id="three-canvas"></div>
      </main>
    `;

    setTimeout(() => {
      this.initThreeJS();
    }, 0);

    return sectionHtml;
  }

  initThreeJS(): void {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);

    const canvasDiv = document.getElementById("three-canvas");
    if (canvasDiv) {
      canvasDiv.appendChild(renderer.domElement);
    }

    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    camera.position.z = 70;

    const loader = new GLTFLoader();
    loader.load(
      "/public/assets/3d_models/gravitational_beam_emitter_blame/scene.gltf",
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(2, 2, 2);
        scene.add(model);

        const animate = () => {
          requestAnimationFrame(animate);

          model.rotation.y += 0.01;

          renderer.render(scene, camera);
        };

        animate();
      },
      undefined,
      (error) => {
        console.error("An error occurred while loading the model:", error);
      }
    );
  }
}
