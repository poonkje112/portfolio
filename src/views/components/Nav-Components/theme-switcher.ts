import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('theme-switcher')
export class ThemeSwitcher extends LitElement {
    static styles = [
        css`
            :host {
                display: inline-block;
            }

            input[type="checkbox"] {
                display: none;
            }

            label {
                display: flex;
                align-items: center;
                cursor: pointer;
                color: var(--text-color)
            }

            .switch {
                position: relative;
                width: 60px;
                height: 30px;
                border-radius: 15px;
                padding: 3px;
                margin-right: 10px;
            }

            .slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: var(--theme-slider-bg);
                transition: 0.4s;
                border-radius: 15px;
            }

            input:checked + .slider {
                background-color: var(--theme-slider-bg);
            }

            .slider:before {
                position: absolute;
                content: "";
                height: 24px;
                width: 24px;
                left: 4px;
                bottom: 16%;
                background-color: var(--theme-knob);
                transition: 0.4s;
                border-radius: 50%;
            }

            input:checked + .slider:before {
                transform: translateX(30px);
            }
        `
    ];

    constructor() {
        super();

        const theme = localStorage.getItem('theme') || 'light';

        if (theme) {
            document.documentElement.setAttribute('data-theme', theme);
        }
    }

    onChange() {
        const theme = document.documentElement.getAttribute('data-theme');
        document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark');
        localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
    }

    render() {
        return html`
            <div class="switch">
                <input type="checkbox" id="theme-switcher" @change="${this.onChange}" />
                <label for="theme-switcher" class="slider"></label>
            </div>
            <label for="theme-switcher">Switch theme</label>
        `;
    }
}
