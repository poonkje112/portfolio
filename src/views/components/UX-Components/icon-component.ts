import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('icon-component')
export class IconComponent extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }

            .material-symbols-outlined {
                font-size: 48px;
                color: black;
                display: block;
                margin: 0 auto;
                
                font-variation-settings:
                'FILL' 0,
                'wght' 400,
                'GRAD' 0,
                'opsz' 48px
            }
        `
    ];

    @property({ type: String })
    icon = '';

    @property({ type: String })
    color = 'black';

    @property({ type: String })
    fontSize = '48px';


    render() {
        return html`
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <span class="material-symbols-outlined" aria-hidden="true" style="color: ${this.color}; font-size: ${this.fontSize};">
            ${this.icon}
        </span>
        `;
    }
}
