import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('tag-component')
export class TagComponent extends LitElement {
    static styles = [
        css`
        li {
            display: inline-block;
            padding: 0.5em;
            background-color: var(--navbar-bg-color);
            border-radius: 5px;
            text-align: center;
            width: 125px;
            height: 16px;
            margin-right: 10px;
            font-size: .75rem;
        }
        `
    ];

    @property({type: String})
    tag = '';

    render() {
        return html`
        <li>${this.tag}</li>
        `;
    }
}
