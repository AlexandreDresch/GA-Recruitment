interface ComponentProps {
  [key: string]: any;
}

export class Component {
  props: ComponentProps;
  element: HTMLElement;

  constructor(props: ComponentProps = {}) {
    this.props = props;
    this.element = document.createElement('div'); // Cria um elemento base
  }

  render(): string {
    return "";
  }

  mount(target: HTMLElement): void {
    this.element.innerHTML = this.render(); // Renderiza o conteúdo
    target.appendChild(this.element); // Adiciona o elemento ao alvo
  }
}
