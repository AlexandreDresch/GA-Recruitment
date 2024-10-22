import { Component } from "./component";

export class Header extends Component {
  render(): string {
    return /*html*/ `
      <header>
        <nav aria-label="Main navigation">
          <a href="/" class="logo-container glitch-button group" data-text="01010100 01000011 01000001" aria-label="The City Administration - Home">
            <img src="./assets/logo.svg" alt="The City Administration - Home" class="group-hover:hidden" />
          </a>

          <ul class="desktop-menu" role="menu">
            <li role="menuitem"><a class="glitch-button" href="#system" data-text="THE SYSTEM">THE SYSTEM</a></li>
            <li role="menuitem"><a class="glitch-button" href="#archive" data-text="ARCHIVE">ARCHIVE</a></li>
            <li role="menuitem"><a class="glitch-button" href="#operatives" data-text="OPERATIVES">OPERATIVES</a></li>
            <li role="menuitem"><a class="cta glitch-button" href="#join-us" data-text="JOIN">JOIN</a></li>
          </ul>

          <button aria-label="Open menu" aria-expanded="false" class="hamburger glitch-button" data-text="01101101 01100101 01101110 01110101" id="hamburger" aria-controls="menu">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul id="menu" class="mobile-menu" aria-hidden="true" role="menu">
            <li role="menuitem"><a href="#system" aria-label="About the System">THE SYSTEM</a></li>
            <li role="menuitem"><a href="#archive" aria-label="View Archive">ARCHIVE</a></li>
            <li role="menuitem"><a href="#operatives" aria-label="View Operatives">OPERATIVES</a></li>
            <li role="menuitem"><a href="#blame-section" aria-label="View Blame!">BLAME!</a></li>
            <li role="menuitem"><a class="cta" href="#join-us" aria-label="Join Us">JOIN</a></li>
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

  const toggleMenu = () => {
    const isMenuOpen = menu.classList.toggle("show");
    menu.setAttribute("aria-hidden", (!isMenuOpen).toString());
    hamburger.setAttribute("aria-expanded", isMenuOpen.toString());
  };

  hamburger.addEventListener("click", toggleMenu);
  
  hamburger.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleMenu();
    }
  });

  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      menu.classList.remove("show");
      menu.setAttribute("aria-hidden", "true");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
});
