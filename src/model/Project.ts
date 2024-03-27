import { Member } from "./Member";
import { Tag } from "./Tag";
import { BASE_URL } from "@/constants";

export class Project {

    public title: string;
    public description: string;
    public slug: string;
    public tags: Tag[];
    public members: Member[];
    public coverImage: string;

    constructor(title: string, description: string, slug: string, tags: Tag[], members: Member[]) {
        this.title = title;
        this.description = description;
        this.slug = slug;
        this.tags = tags;
        this.members = members;
        this.coverImage = `${BASE_URL}/images/project/${slug}/cover`;
    }
}