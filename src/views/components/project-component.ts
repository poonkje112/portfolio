import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'
import { ProjectService } from '@/services/ProjectService';
import { Project } from '@/model/Project';
import { Service } from '@/services/Service';

@customElement('project-component')
export class ProjectComponent extends LitElement {
    static styles = [
        css`
        section {
            width: 100%;
            height: calc(100vh - var(--navbar-height));
            background-color: var(--background-color);
        }

        h2 {
            padding-top: 1em;
            margin-top: 0;
            text-align: center;
            font-family: var(--default-font);
            font-size: 2rem;
            color: var(--text-color);
        }

        div {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1em;
            padding: 1em;
            justify-content: center;
        }
        `
    ];

    private projects: Project[] = [];

    public async firstUpdated() {
        if(!await Service.isServiceAvailable()) {
            this.shadowRoot?.querySelector('div')?.appendChild(document.createElement('unavailable-component'));
        }

        const projectService = new ProjectService();
        const projects = await projectService.getProjects();
        this.projects = projects;

        this.requestUpdate();
    }

    render() {
        return html`
        <padded-container>
        <section>
            <h2>Projects</h2>
            <div>
                ${this.projects.map(project => html`
                    <project-card
                        title="${project.title}"
                        description="${project.description}"
                        coverImage="${project.coverImage}"
                        slug="${project.slug}"
                    ></project-card>
                `)}
            </div>
        </section>
        </padded-container>`;
    }
}
