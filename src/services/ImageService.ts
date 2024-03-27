import { BASE_URL } from "@/constants";
import { Image } from "@/model/Image";

export class ImageService {
    public async getAllImages(projectSlug: string): Promise<Image[]> {
        const response = await fetch(`${BASE_URL}/images/project/${projectSlug}`);
        const images = await response.json();


        return images.map((image: any) => {
            return new Image(image.id, image.is_cover);
        });
    }
}