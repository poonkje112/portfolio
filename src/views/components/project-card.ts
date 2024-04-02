import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('project-card')
export class ProjectCard extends LitElement {
    static styles = [
        css`
        article {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: var(--navbar-bg-color);
            aspect-ratio: 16/9;

            cursor: pointer;
        }

        h2 {
            font-family: var(--default-font);
            color: var(--text-color);
        }

        p {
            font-family: var(--default-font);
            color: var(--text-color);
        }

        img {
            aspect-ratio: 16/9;
            width: 100%;
        }
        `
    ];

    @property({ type: String })
    title = '';

    @property({ type: String })
    description = '';

    @property({ type: String })
    coverImage = '';

    @property({ type: String })
    slug = '';

    goToProject() {
        const browseEvent = new CustomEvent('browse', {
            detail: {
                target: `/project/${this.slug}`
            }
        });

        document.dispatchEvent(browseEvent);
    }

    render() {
        return html`
        <article @click="${this.goToProject}">
            <img src="${this.coverImage}" alt="${this.title}" />
            <h2>${this.title}</h2>
            <p>${
                this.description.length > 100
                    ? this.description.substring(0, 100) + '...'
                    : this.description
            }</p>
        </article>
        `;
    }
}
