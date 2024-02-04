import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('navbar-component')
export class NavbarComponent extends LitElement {
    static styles = [
        css`
        nav {
            background-color: var(--navbar-bg-color);
        }
            section {
                width: 100%;
                height: var(--navbar-height);
                top: 0;
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
                display: var(--navbar-display);
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
                font: normal 35px/1.4 var(--default-font);
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

            @media (min-width: 1000px) {
                .head icon-component {
                    display: none;
                }

                .navbar-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                ul {
                    display: flex;
                    position: relative;
                    gap: 10px;
                    top: 0;
                }

                theme-switcher {
                    padding-top: 0;
                }
            }
        `,
    ];


    @property({ type: String })
    icon = 'menu';

    @property({ type: String })
    navbarDisplay = 'none';

    constructor() {
        super();
        this.style.setProperty("--navbar-display", this.navbarDisplay);
    }

    onHamburgerMenuClick() {
        this.icon = this.icon === 'menu' ? 'close' : 'menu';
        this.navbarDisplay = this.navbarDisplay == 'none' ? 'block' : 'none'
        this.style.setProperty("--navbar-display", this.navbarDisplay);
    }

    onButtonClick(e: Event) {
        // Set all buttons to inactive
        const buttons = this.shadowRoot?.querySelectorAll('navbar-button');
        buttons?.forEach(button => {
            button.setAttribute('active', 'false');
        });

        // Set the active button to true
        const btn = e.target as Element;
        btn.setAttribute('active', 'true');
    }

    render() {
        return html`
            <nav>
                <padded-container>
                    <div class="navbar-container">
                        <section class="head">
                            <h1>Aaron Knoop</h1>
                            <icon-component icon="${this.icon}" color="var(--text-color);" @click="${this.onHamburgerMenuClick}"></icon-component>
                        </section>
                        <ul>
                            <li><navbar-button label="Home" href="/" @click="${((e: Event) => this.onButtonClick(e))}"></navbar-button></li>
                            <li><navbar-button label="About me" href="/about" @click="${((e: Event) => this.onButtonClick(e))}"></navbar-button></li>
                            <li><navbar-button label="Contact" href="/contact" @click="${((e: Event) => this.onButtonClick(e))}"></navbar-button></li>
                            <li><theme-switcher></theme-switcher></li>
                        </ul>
                    </div>
                </padded-container>
            </nav>
        `;
    }
}
