import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('project-component')
export class ProjectComponent extends LitElement {
    static styles = [
        css`
        section {
            width: 100%;
            height: calc(100vh - var(--navbar-height));
            background-color: var(--background-color);
        }

        h2 {
            padding-top: 1em;
            margin-top: 0;
            text-align: center;
            font-family: var(--default-font);
            font-size: 2rem;
            color: var(--text-color);
        }
        `
    ];

    render() {
        return html`
        <section>
            <h2>Projects</h2>
        </section>`;
    }
}
