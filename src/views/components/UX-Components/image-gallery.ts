import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { ImageService } from '@/services/ImageService';
import { Image } from '@/model/Image';

@customElement('image-galery')
export class ImageGallery extends LitElement {
    static styles = [
        css`
        section {
            width: 100%;
            background-color: var(--background-color);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: .5rem;            
        }

        img {
            aspect-ratio: 16/9;
            width: 100%;
        }

        #focusedImg {
            width: 100%;
            max-height: 50vh;
        }

        #imgList {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
            gap: 1rem;
        }

        #imgList img {
            aspect-ratio: 1;
            width: 100%;
            cursor: pointer;
            filter: grayscale(100%);
        }

        #imgList img.focused {
            filter: grayscale(0%);
        }
        `
    ];

    @property({type: String}) 
    projectSlug = '';

    private imageService = new ImageService();
    private images: Image[] = [];

    async firstUpdated() {
        const allImages = await this.imageService.getAllImages(this.projectSlug);
        this.images = allImages;
        // Set the cover image as the first image
        const coverImage = allImages.find((image: Image) => image.isCover);
        if(coverImage) {
            this.images = [coverImage, ...allImages.filter((image: Image) => !image.isCover)];
        }
        
        this.requestUpdate();
    }

    focusThisImage(imagePath: string) {
        return () => {
            const focusedImg = this.shadowRoot?.getElementById('focusedImg');
            if(focusedImg) {
                focusedImg.innerHTML = `<img src="${imagePath}" alt="${imagePath}" />`;
            }

            const imgList = this.shadowRoot?.getElementById('imgList');
            if(imgList) {

                const images = imgList.getElementsByTagName('img');

                for(let i = 0; i < images.length; i++) {
                    images[i].classList.remove('focused');
                }

                const focusedImg = imgList.querySelector(`img[data-path="${imagePath}"]`);
                if(focusedImg) {
                    focusedImg.classList.add('focused');
                }
            }
        }
    }

    render() {
        return html`
            <section>
                <div id="focusedImg">
                    ${this.images.length > 0 ? html`<img src="${this.images[0].path}" alt="${this.images[0].path}" />` : ''}
                </div>
                <div id="imgList">
                        ${this.images.map((image: Image) => html`
                            <img src="${image.path}" alt="${image.path}" @click="${this.focusThisImage(image.path)}" data-path="${image.path}" class="${this.images[0].path === image.path ? 'focused' : ''}" />
                        `)}
                </div>   
            </section>`;
    }
}
