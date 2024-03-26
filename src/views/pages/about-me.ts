import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'
import selfPortrait from '@/assets/me.jpg';
import { TagService } from '@/services/TagService';

@customElement('about-me')
export class AboutMe extends LitElement {

    private tagService = new TagService();

    static styles = [
        css`
        
        section {
            width: 100%;
            height: calc(95vh - var(--navbar-height));

            color: var(--text-color);

            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2%;

            padding-top: 5vh;
        }

        img {
            aspect-ratio: 1/1;
            height: 45vh;
            border-radius: 50%;
        }

        #container {
            width: 100%;
        }

        padded-container {
            background-color: var(--background-color);
        }

        a {
            display: flex;
            text-decoration: none;
            color: var(--text-color);
            width: fit-content;
        }

        a:hover {
            color: var(--active-color);
            transition: color 0.2s;
        }

        #tech-stack {
            display: flex;
            flex-direction: column;
            gap: 1%;
        }

        #stack {
            display: grid;
            grid-template-columns: auto auto;
            grid-auto-rows: 40px;
            margin: 0;
            padding: 0;
        }

        #stack li {
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

        @media (min-width: 1000px) {
            #tech-stack {
                flex-direction: row;
                gap: 5%;
            }

            #stack {
                grid-template-columns: auto auto auto;
            }

            section {
                display: flex;
                flex-direction: row;
                gap: 5%;
                align-items: normal;

                padding-top: 5vh;
            }

            img {
                height: 75%;
                border-radius: 3%;
            }

            #container {
                height: 75%;

                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }


        }
        `
    ];

    private techStack: string[] = []; // Initialize techStack array

    async firstUpdated() {
        const tags = await this.tagService.getTags(); // Wait for tags to be fetched
        this.techStack = tags.map(tag => tag.name); // Map fetched tags to techStack array
        this.requestUpdate(); // Request an update to render the new tech stack
    }

    render() {
        return html`
        <padded-container>
            <section>
                <img src="${selfPortrait}" alt="A self portrait of Aaron Knoop" />
                <div id="container">
                    <div>
                        <h1>About Me</h1>
                        <p>
                            I am a full-stack developer with a passion for creating software that is both beautiful and functional. I am currently working as a software developer at a small company in the midwest. I have experience with a wide variety of technologies and am always looking to learn more.
                        </p>
                        <a href="#"><icon-component icon="description"></icon-component><p>Download resume</p></a>
                        <section id="tech-stack">
                            <h2>My Tech Stack</h2>
                            <ul id="stack">
                            ${this.techStack.map(tag => html`<li>${tag}</li>`)}
                        </ul>
                        </section>
                    </div>
                </div>
            </section>
        </padded-container>
        `;
    }
}
