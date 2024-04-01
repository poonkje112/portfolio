import { Tag } from "@/model/Tag";
import { BASE_URL } from "@/constants";

export class TagService {
    private tagUrl = `${BASE_URL}/tags`;

    async getTags(): Promise<Tag[]> {
            const response = await fetch(this.tagUrl).catch((error) => {
                console.error(error);
            });
            
            if (response === undefined || !response.ok) {
                console.error('Failed to fetch tags');
                return [];
            }

            // Loop through the response, create new Tag objects and return them in an array
            const tags = await response.json();
            return tags.map((tag: any) => new Tag(tag.name));
    }
}