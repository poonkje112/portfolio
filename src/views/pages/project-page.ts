import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'
import { ProjectService } from '@/services/ProjectService';
import { ImageService } from '@/services/ImageService';
import { router } from '@/router';
import { Project } from '@/model/Project';
import { Image } from '@/model/Image';

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
        `
    ];

    private slug = '';

    private projectService = new ProjectService();
    private imageService = new ImageService();

    private images: Image[] = [];
    private project: Project | undefined;

    connectedCallback() {
        super.connectedCallback();
        this.slug = router.location.params.slug as string;
    }

    async firstUpdated() {
        const project = await this.projectService.getProject(this.slug);
        const allImages = await this.imageService.getAllImages(this.slug);

        this.project = project;
        this.images = allImages;

        // Set the cover image as the first image
        const coverImage = allImages.find((image: Image) => image.isCover);
        if(coverImage) {
            this.images = [coverImage, ...allImages.filter((image: Image) => !image.isCover)];
        }
        
        this.requestUpdate();
    }


    render() {
        return html`
        <section>
            <div>
                <h1>${this.project?.title}</h1>
                <p>${this.project?.description}</p>
            </div>
            <div>
                ${this.images.map((image: Image) => html`<img src="${image.path}" />`)}
            </div>
        </section>`;
    }
}
