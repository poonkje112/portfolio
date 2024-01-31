import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('navbar-component')
export class NavbarComponent extends LitElement {
    static styles = [
        css`
        `
    ];

    render() {
        return html`
            <nav>
                <h1>Navbar</h1>
                <slot></slot>
            </nav>
            `;
    }
}
