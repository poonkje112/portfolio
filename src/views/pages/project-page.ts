import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'
import { ProjectService } from '@/services/ProjectService';
import { router } from '@/router';
import { Project } from '@/model/Project';

@customElement('project-page')
export class ProjectPage extends LitElement {
    static styles = [
        css`
        h1 {
            font-family: var(--default-font);
            color: var(--text-color);
        }

        p {
            font-family: var(--default-font);
            color: var(--text-color);
        }

        img {
            width: 100%;
            height: auto;
        }

        section {
            width: 100%;
            height: calc(100vh - var(--navbar-height));
            background-color: var(--background-color);
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 1em;
            padding: 1em;
        }

        #imgContainer {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1em;
            padding: 1em;
            justify-content: center;
        }


        `
    ];

    private slug = '';

    private projectService = new ProjectService();
    private project: Project | undefined;

    connectedCallback() {
        super.connectedCallback();
        this.slug = router.location.params.slug as string;
        window.scrollTo(0, 0);
    }

    async firstUpdated() {
        const project = await this.projectService.getProject(this.slug);
        this.project = project;
        
        this.requestUpdate();
    }


    render() {
        return html`
        <padded-container>
            <section>
                <image-galery projectSlug="${this.slug}"></image-galery>
                <div>
                    <h1>${this.project?.title}</h1>
                    <p>${this.project?.description}</p>
                </div>
            </section>
        </padded-container>`;
    }
}
