import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('home-page')
export class HomePage extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
        <cat-component></cat-component>
        `;
    }
}
