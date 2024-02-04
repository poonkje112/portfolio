import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('not-found-page')
export class NotFoundPage extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
            <h1>404 Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            `;
    }
}
