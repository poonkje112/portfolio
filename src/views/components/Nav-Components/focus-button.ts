import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('focus-button')
export class FocusButton extends LitElement {
    static styles = [
        css`
        button {
            background-color: var(--navbar-bg-color);
            border: none;
            border-radius: 50%;
            cursor: pointer;
        }
        `
    ];

    @property({ type: String })
    scrollPercentage = '100';

    focusElement() {
        // Smooth scroll to the target scroll percentage
        window.scrollTo({
            top: document.body.scrollHeight * (parseInt(this.scrollPercentage) / 100),
            behavior: 'smooth'
        });
    }

    render() {
        return html`
        <button @click="${this.focusElement}"><icon-component icon="keyboard_arrow_down"></icon-component></button>
        `;
    }
}
