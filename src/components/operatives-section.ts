import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Operative, OperativesProps } from "../types";
import { Component } from "./component";

export class OperativesSection extends Component {
  swiper!: Swiper;

  constructor(props: OperativesProps) {
    super(props);
  }

  render(): string {
    return /*html*/ `
      <section id="operatives">
        <h2 class="section-title" data-text="OPERATIVES" >Operatives</h2>

        <p class="overview">
        A comprehensive database of active and former operatives within The City Administration. Profiles include detailed analysis of their capabilities, mission history, and current status. Only those with proper clearance can access the full dossiers of operatives involved in classified operations. Engage with caution, as some operatives have been reported missing or are deemed highly dangerous.
        </p>

        <div class="operatives-list">
          <div class="swiper">
            <div class="swiper-wrapper">
              ${this.props.operatives
                .map(
                  (operative: Operative) => `
                  <div class="swiper-slide operative-item">
                    <div class="swiper-item-details">
                    <div>
                      <h3 class="section-subtitle">${operative.name}</h3>
                    <p class="operative-rank">${operative.accessLevel}</p>
                      <img class="operative-image" src="${operative.image}" alt="${operative.name}">
                    </div>
                    <div class="operative-details-container">
                    <p class="operative-description">${operative.description}</p>
                    </div>
                    </div>
                  </div>
                `
                )
                .join("")}
            </div>

            <div class="swiper-pagination"></div>

            <div class="prev-next-container">
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  mount(parent: HTMLElement): void {
    parent.insertAdjacentHTML("beforeend", this.render());
    this.swiper = new Swiper(".swiper", {
      modules: [Navigation, Pagination],
      loop: true,
      slidesPerView: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}
