import { Component } from "./component";

export class Header extends Component {
  render(): string {
    /*html*/
    return `
      <header>
        <nav>
          <a href="/" class="logo-container glitch-button group" data-text="01010100 01000011 01000001">
            <img src="./assets/logo.svg" alt="The City Administration - Home" class="group-hover:hidden"/>
          </a>

          <ul>
            <li><a class="glitch-button" href="#system" data-text="THE SYSTEM">THE SYSTEM</a></li>
            <li><a class="glitch-button" href="#archive" data-text="ARCHIVE">ARCHIVE</a></li>
            <li><a class="glitch-button" href="#operatives" data-text="OPERATIVES">OPERATIVES</a></li>
            <li><a class="cta glitch-button" data-text="JOIN" href="#join-us">JOIN</a></li>
          </ul>

          <div class="hamburger glitch-button" data-text="01101101 01100101 01101110 01110101" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul id="menu" class="hidden">
            <li><a href="#system">ABOUT</a></li>
            <li><a href="#archive">ARCHIVE</a></li>
            <li><a href="#operatives">OPERATIVES</a></li>
            <li><a class="cta" href="#join-us">JOIN</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger")!;
  const menu = document.getElementById("menu")!;
  const menuItems = menu.querySelectorAll("li a");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      menu.classList.remove("show");
    });
  });
});
