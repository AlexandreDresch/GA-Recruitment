import { Component } from "./component";

export class Header extends Component {
  render(): string {
    /*html*/
    return `
      <header>
        <nav>
          <a href="/" class="logo" ></a>

          <ul>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#testimonials">TESTIMONIALS</a></li>
            <li><a class="cta" href="#join">JOIN</a></li>
          </ul>

          <div class="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>


          <ul id="menu" class="hidden">
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#testimonials">TESTIMONIALS</a></li>
            <li><a class="cta" href="#join">JOIN</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger")!;
  const menu = document.getElementById("menu")!;

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
});
