import { BrowseEvent } from '@/events';
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('navbar-button')
export class NavbarButton extends LitElement {
    static styles = [
        css`

        button {
            width: 100%;
            height: 100%;
            background-color: var(--navbar-bg-color);
            color: var(--text-color);
            border: none;
            cursor: pointer;
            border-bottom: 1px solid var(--text-color);
        }
        `
    ];

    @property({ type: String }) 
    href = '#';

    @property({ type: String })
    label = 'Sample';

    handleClick() {
        this.dispatchEvent(new BrowseEvent(this.href));
    }

    render() {
        return html`
        <button @click="${this.handleClick}" aria-label="${this.label}">
            <p>${this.label}</p>
        </button>
        `;
    }
}
