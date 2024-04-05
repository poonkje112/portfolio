import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('unavailable-component')
export class UnavailableComponent extends LitElement {
    static styles = [
        css`
        p {
            font-family: var(--default-font);
            color: var(--text-color);
        }
        `
    ];

    render() {
        return html`<p>Service is unavailable</p>`;
    }
}
