import { Component } from "./component";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export class MainSection extends Component {
  private isUserInteracting: boolean = false;
  private model: THREE.Object3D | null = null;

  render(): string {
    const sectionHtml = /*html*/ `
      <main>
        <div class="banner-container">
          <div class="banner banner-left">
            <h1>OUR.MISSION</h1>
            <p>Our mission is to ensure that the remnants 
            of humanity thrive in a world dominated by 
            endless architecture and hostile entities.</p>
          </div>

          <div class="banner banner-right">
            <div>
              <h2>Application Procedure</h2>

              <img src="/assets/icons/caret-double-up.svg" alt="Join Icon"/>
            </div>
            <p>Submit your application through the official network terminal. Applications are reviewed by our automated Safeguard overseers. Be prepared for immediate deployment should you meet our qualifications. </p>
          </div>
        </div>

        <div class="promo-container">
          <p>今すぐ参加して重力ビームエミッターを受け取りましょう</p>
        </div>

        <div class="details-container">
          <img src="/assets/details-right.svg" alt="Right Details Image"/>
          <img src="/assets/details-left.svg" alt="Left Details Image"/>          
        </div>

        <div id="three-canvas">
          <h3 id="overlay-text">Join Now</h3>
        </div>        

        <div class="summary-container">
          <p>
          For centuries, The City Administration has worked in the shadows, maintaining order across the infinite layers of The Megastructure. We govern what little remains of human civilization, battling rogue AIs, uncontrollable human elements, and the ever-present threat of The Safeguard system. In these dark times, we seek the brightest minds to join our ranks and restore humanity’s rightful place in The City.
          </p>
        </div>

        <div class="banner-image"></div>
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
    renderer.setClearColor(0x000000, 0);

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
      "./assets/3d_models/gravitational_beam_emitter_blame/scene.gltf",
      (gltf) => {
        this.model = gltf.scene;
        this.model.scale.set(3, 3, 3);
        this.model.position.y += 30;
        scene.add(this.model);

        const animate = () => {
          requestAnimationFrame(animate);

          if (!this.isUserInteracting && this.model) {
            this.model.rotation.y += 0.008;
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
