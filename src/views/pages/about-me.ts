import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'
import selfPortrait from '@/assets/me.jpg';
import { TagService } from '@/services/TagService';

@customElement('about-me')
export class AboutMe extends LitElement {

    private tagService = new TagService();

    static styles = [
        css`

        #container {
            font-family: var(--default-font);
        }
        
        section {
            width: 100%;

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
                height: 45vh;
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
                            I'm a software developer major with a passion for creating and breaking applications. I have experience with a variety of technologies and I'm always looking to learn more. <br />
                            I tend to focus on the back-end of applications but I also like to create games in my free time.<br />
                            My ultimate goal is to make the internet a more accessible place for everyone, including the metaverse. <br />
                            I'm always open to new opportunities, so feel free to reach out to me. <br />
                        </p>
                        </p>
                        <a href="#"><icon-component icon="description"></icon-component><p>Download resume</p></a>
                        <section id="tech-stack">
                            <h2>My Tech Stack</h2>
                            <ul id="stack">
                                ${this.techStack.map(tag => html`<tag-component tagName="${tag}"></tag-component>`)}
                            </ul>
                        </section>
                    </div>
                </div>
            </section>
        </padded-container>
        `;
    }
}
