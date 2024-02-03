import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('navbar-component')
export class NavbarComponent extends LitElement {
    static styles = [
        css`
            section {
                width: 100%;
                height: var(--navbar-height);
                top: 0;
                background-color: var(--navbar-bg-color);
                align-items: center;
            }

            ul {
                position: fixed;
                width: 100%;
                height: 100%;
                z-index: 100;
                top: var(--navbar-height);
                background-color: var(--navbar-bg-color);
            }

            ul {
                list-style: none;
                padding: 0;
                margin: 0;
                width: 100%; /* Make the list full width */
            }

            li {
                width: 100%; /* Make all list items full width */
            }

            h1 {
                text-align: left; /* Center the text within h1 */
                color: var(--text-color);
            }

            /* Center the theme switcher */
            theme-switcher {
                width: 100%;
                display: flex;
                padding-top: 1em;
                justify-content: right;
            }

            .head {
                width: 100%;
                display: flex;
                justify-content: space-between;
            }

            .head icon-component {
                cursor: pointer;
                -webkit-user-select: none; /* Safari */
                -ms-user-select: none; /* IE 10 and IE 11 */
                user-select: none; /* Standard syntax */
            }
        `,
    ];

    onHamburgerMenuClick() {
        this.icon = this.icon === 'menu' ? 'close' : 'menu';
    }

    @property({ type: String })
    icon = 'menu';

    render() {
        return html`
            <nav>
                <section class="head">
                    <h1>Aaron Knoop</h1>
                    <icon-component icon="${this.icon}" color="var(--text-color);" @click="${this.onHamburgerMenuClick}"></icon-component>
                </section>
                <ul style="display: ${this.icon === "close" ? "block" : "none"};">
                    <li><navbar-button label="Test1" href="Lorem"></navbar-button></li>
                    <li><navbar-button label="Test2" href="Lorem"></navbar-button></li>
                    <li><navbar-button label="Test3" href="Lorem"></navbar-button></li>
                    <li><theme-switcher></theme-switcher></li>
                </ul>
            </nav>
        `;
    }
}
