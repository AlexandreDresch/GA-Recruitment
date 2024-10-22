import { ControlArea, HierarchyItem, TheSystemProps } from "../types";
import { Component } from "./component";

export class SystemSection extends Component {
  constructor(props: TheSystemProps) {
    super(props);
  }

  render(): string {
    return /*html*/ `
      <section id="system" aria-labelledby="system-title">
        <h2 id="system-title" class="section-title" data-text="THE SYSTEM">The System</h2>

        <p class="overview">
          The City Administration governs all aspects of the megastructure’s operations. Its reach extends beyond sectors and boundaries, ensuring that all functions proceed as designed and any anomalies are swiftly neutralized.
        </p>

        <div class="system-list-container">
          <div>
            <div>
              <h3 class="section-subtitle" id="hierarchy-title">Hierarchy of Control</h3>
              <ul class="hierarchy-list" aria-labelledby="hierarchy-title">
                ${this.props.hierarchy
                  .map(
                    (item: HierarchyItem) => `
                      <li>
                        <strong>${item.title}</strong><br>
                        <em>Purpose</em>: ${item.purpose}<br>
                        <span class="access-level">Access Level: ${item.accessLevel}</span>
                      </li>
                  `
                  )
                  .join("")}
              </ul>
            </div>

            <div>
              <h3 class="section-subtitle" id="control-title">Control Over the Megastructure</h3>
              <p class="overview-small">
                The City Administration’s influence is all-encompassing within the megastructure. The system extends to every corner, ensuring structural integrity, information flow, and regulation of population levels.
              </p>

              <div class="key-control-areas">
                <h4 class="section-inner-subtitle" id="control-areas-title">Key Control Areas</h4>
                <ul aria-labelledby="control-areas-title">
                  ${this.props.controlAreas
                    .map(
                      (area: ControlArea) => `
                      <li>
                        <strong>${area.title}</strong>: ${area.description}
                      </li>
                    `
                    )
                    .join("")}
                </ul>
              </div>
            </div>

            <div>
              <h3 class="section-subtitle" id="protocol-compliance-title">Protocol Compliance</h3>
              <p class="overview-small">
                Failure to comply with system directives will result in immediate termination. Every action is logged, every failure scrutinized. Operatives must maintain unwavering loyalty to the System.
              </p>
            </div>
          </div>
          
          <div class="lateral-panel-image" aria-hidden="true" role="img" alt="Decorative panel image related to system control"></div>
        </div>
      </section>
    `;
  }
}
