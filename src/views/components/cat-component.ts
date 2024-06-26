import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('cat-component')
export class CatComponent extends LitElement {
    static styles = [
        css`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&family=Poppins:wght@300;400;500;600;700&display=swap');

        h1 {
                font-family: 'Open Sans', sans-serif;
                font-size: 3rem;
                color: var(--text-color);
                text-align: center;
                margin-top: 0;
                width: 100%;
                text-transform: uppercase;
            }

            section {
                width: 100%;
                height: 100vh;
                background-color: var(--background-color);

                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                position: relative;
            }

            padded-container {
                width: 100%;
            }

            focus-button {
            position: absolute;
            bottom: 10%;
            left: calc(50% - 24px);
        }

        @media (min-width: 1000px) {
            section {
                background-image: var(--cat-image);
                background-attachment: fixed;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
            }

            h1 {
                text-align: left;
            }
        }
        `
    ];

    render() {
        return html`
        <section>
            <padded-container>
                <h1>
                    <div>I build and</div>
                    <div>break applications</div>
                </h1>
                <focus-button></focus-button>
            </padded-container>
        </section>
            `;
    }
}
