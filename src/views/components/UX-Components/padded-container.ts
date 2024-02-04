import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('padded-container')
export class PaddedContainer extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }

            div {
                padding: 0 0;
            }

            @media(min-width: 1000px) {
            div {
                padding: 0 15vw;
            }
        }
        `
    ];

    render() {
        return html`
        <div>
            <slot></slot>
        </div>
        `;
    }
}
