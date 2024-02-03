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

        @media (min-width: 1000px) {
            button {
                background-color: var(--navbar-bg-color);
                color: var(--text-color);
                border: none;
                cursor: pointer;
                min-height: 10%;
                width: 100%;
                height: 100%;
                transition: all 0.2s ease-out;
                align-items: center;
                justify-content: center;
                position: relative;
                margin: 0 10px 0 0;
                padding: 0;

                &::before {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background-color: var(--text-color);
                    transform: scaleX(0);
                    transition: transform 0.2s ease-out;
                }
            }

            button:hover::before {
                transform: scaleX(1);
            }
        }
        `
    ];

    @property({ type: String }) 
    href = '#';

    @property({ type: String })
    label = '';

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
