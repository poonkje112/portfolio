import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('navbar-button')
export class NavbarButton extends LitElement {
    static styles = [
        css`
        `
    ];

    @property({ type: String }) 
    href = '#';

    @property({ type: String })
    label = '';

    render() {
        return html`
            <a href="${this.href}" aria-label="${this.label}">${this.label}</a>
        `;
    }
}
