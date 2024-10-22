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
      <section id="operatives" aria-labelledby="operatives-title">
        <h2 id="operatives-title" class="section-title" data-text="OPERATIVES">Operatives</h2>

        <p class="overview">
        A comprehensive database of active and former operatives within The City Administration. Profiles include detailed analysis of their capabilities, mission history, and current status. Engage with caution, as some operatives have been reported missing or are deemed highly dangerous.
        </p>

        <div class="operatives-list">
          <div class="swiper" role="region" aria-label="Operatives Profiles">
            <div class="swiper-wrapper">
              ${this.props.operatives
                .map(
                  (operative: Operative) => `
                  <div class="swiper-slide operative-item" role="group" aria-labelledby="operative-${operative.name}">
                    <div class="swiper-item-details">
                      <div>
                        <h3 id="operative-${operative.name}" class="section-subtitle">${operative.name}</h3>
                        <p class="operative-rank" aria-label="Operative rank">${operative.accessLevel}</p>
                        <img class="operative-image" src="${operative.image}" alt="${operative.name}'s profile picture">
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

            <div class="swiper-pagination" aria-label="Operatives profiles pagination"></div>

            <div class="prev-next-container">
              <button class="swiper-button-prev" aria-label="Previous profile" tabindex="0"></button>
              <button class="swiper-button-next" aria-label="Next profile" tabindex="0"></button>
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

    document.querySelector(".swiper-button-next")?.setAttribute("tabindex", "0");
    document.querySelector(".swiper-button-prev")?.setAttribute("tabindex", "0");
  }
}
