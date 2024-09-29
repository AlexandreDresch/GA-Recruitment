import { Component } from "./component";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export class MainSection extends Component {
  private isUserInteracting: boolean = false;
  private model: THREE.Object3D | null = null;

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

    const light = new THREE.DirectionalLight(0xffffff, 3);
    light.position.set(4, 4, 20);
    light.target.position.set(0, 0, 0);
    scene.add(light);
    scene.add(light.target);

    camera.position.set(0, 0, 90);

    const controls = new OrbitControls(camera, renderer.domElement);

    const loader = new GLTFLoader();
    loader.load(
      "/public/assets/3d_models/gravitational_beam_emitter_blame/scene.gltf",
      (gltf) => {
        this.model = gltf.scene;
        this.model.scale.set(2.5, 2.5, 2.5);
        this.model.position.y += 20;
        scene.add(this.model);

        const animate = () => {
          requestAnimationFrame(animate);

          if (!this.isUserInteracting && this.model) {
            this.model.rotation.y += 0.01;
          }

          controls.update();
          renderer.render(scene, camera);
        };

        animate();
      },
      undefined,
      (error) => {
        console.error("An error occurred while loading the model:", error);
      }
    );

    window.addEventListener("mousedown", () => {
      this.isUserInteracting = true;
    });

    window.addEventListener("mouseup", () => {
      this.isUserInteracting = false;
    });
  }
}
