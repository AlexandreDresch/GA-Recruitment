import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Operative, OperativesProps } from "../types";
import { Component } from "./component";

export class OperativesSection extends Component {
  swiper!: Swiper; // Use definite assignment assertion

  constructor(props: OperativesProps) {
    super(props);
  }

  render(): string {
    return /*html*/ `
      <section id="operatives">
        <h2 class="section-title">Operatives</h2>
        <div class="operatives-list">
          <div class="swiper">
            <div class="swiper-wrapper">
              ${this.props.operatives
                .map(
                  (operative: Operative) => `
                  <div class="swiper-slide operative-item">
                    <h3 class="operative-name">${operative.name}</h3>
                    <img class="operative-image" src="${operative.image}" alt="${operative.name}">
                    <span class="operative-rank">${operative.accessLevel}</span>
                    <p class="operative-description">${operative.description}</p>
                  </div>
                `
                )
                .join("")}
            </div>

            <div class="swiper-pagination"></div>

            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
      </section>
    `;
  }

  mount(parent: HTMLElement): void {
    parent.insertAdjacentHTML('beforeend', this.render());
    this.swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}
