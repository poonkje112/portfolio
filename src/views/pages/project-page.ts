import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'
import { ProjectService } from '@/services/ProjectService';
import { router } from '@/router';
import { Project } from '@/model/Project';
import { Tag } from '@/model/Tag';

@customElement('project-page')
export class ProjectPage extends LitElement {
    static styles = [
        css`
        * {
            font-family: var(--default-font);
            color: var(--text-color);

        }

        img {
            width: 100%;
            height: auto;
        }

        #rootContainer {
            display: grid;
            gap: 1em;
            padding-top: 1em;
        }


        #imgContainer {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1em;
            padding: 1em;
            justify-content: center;
        }

        #tech-stack {
            display: flex;
            flex-direction: column;
            gap: 1%;
            text-align: center;
        }

        #stack {
            display: grid;
            grid-template-columns: auto auto;
            grid-auto-rows: 40px;
            margin: 0;
            padding: 0;
        }

        iframe {
            width: 100%;
            height: 315px;
        }

        #links {
            width: 100%;
            display: flex;
            justify-content: space-evenly;    
            padding-top: 1em;
        }

        a {
            color: var(--text-link-color);    
        }

        .link {
            font-size: 1.5em;
        }

        .link:hover  {
            text-decoration: underline;
        }

        .disabled-link {
            color: var(--text-link-color-disabled);
            text-decoration: line-through !important;
            cursor: not-allowed;
            font-size: 1.5em;
        }

        .member {
            list-style-type: none;
        }

        @media (min-width: 1000px) {

            #rootContainer {
                width: 100%;
                height: calc(100vh - var(--navbar-height));
                background-color: var(--background-color);
                grid-template-columns: 1fr 2fr;
                gap: 1em;
                padding: 1em;
            }

            #tech-stack {
                flex-direction: row;
                gap: 5%;
            }

            #stack {
                grid-template-columns: auto auto auto;
            }

            iframe {
                height: 315px;
            }

            #links {
                justify-content: space-between;
            }
        }

        `
    ];

    private slug = '';

    private projectService = new ProjectService();
    private project: Project = Project.empty();

    private techStack: Tag[] = [];

    connectedCallback() {
        super.connectedCallback();
        this.slug = router.location.params.slug as string;
        window.scrollTo(0, 0);
    }

    async firstUpdated() {
        const project = await this.projectService.getProject(this.slug);
        this.project = project ?? Project.empty();

        this.techStack = project.tags;
        
        this.requestUpdate();
    }


    render() {
        return html`
        <padded-container>
            <section id="rootContainer">
                <image-galery projectSlug="${this.slug}"></image-galery>
                <div>
                    <h1>${this.project.title}</h1>
                    <p>${this.project.description}</p>
                    ${
                        this.project.youtube ?
                        html`<iframe src="https://www.youtube.com/embed/${this.project?.youtube}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` :
                        html``
                    }
                    <section id="tech-stack">
                        <h2>Tech Stack</h2>
                        <ul id="stack">
                            ${this.techStack.map(tag => html`<tag-component tagName="${tag.name}"></tag-component>`)}
                        </ul>
                    </section>
                    ${
                        this.project.members.length > 0 ?
                        html`
                        <section id="members">
                            <h2>Members</h2>
                            <ul id="stack">
                                ${this.project.members.map((member) => {
                                    if(member.portfolioUrl) {
                                        return html`<li class="member"><a href="${member.portfolioUrl}">${member.name}</a></li>`
                                    } else {
                                        return html`<li class="member">${member.name}</li>`
                                    }
                                })}
                            </ul>
                        </section>
                            ` :
                        html``
                    }
                    <section id="links">
                        ${
                            this.project.git ?
                            html`<a href="${this.project.git}" class="link">Source Code</a>` :
                            html`<a class="disabled-link" class="link">Source Code</a>`
                        }
                        ${
                            this.project.live ?
                            html`<a href="${this.project.live}">Live</a>` :
                            html`<a class="disabled-link">Live</a>`
                        }
                    </section>
                </div>
            </section>
        </padded-container>`;
    }
}
