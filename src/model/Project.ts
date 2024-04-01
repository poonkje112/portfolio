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
    public git: string = '';
    public live: string = '';
    public youtube: string = '';

    constructor(title: string, description: string, slug: string, tags: Tag[], members: Member[], git: string, live: string, youtube: string) {
        this.title = title;
        this.description = description;
        this.slug = slug;
        this.tags = tags;
        this.members = members;
        this.coverImage = `${BASE_URL}/images/project/${slug}/cover`;
        this.git = git;
        this.live = live;
        this.youtube = youtube;
    }

    public static empty(): Project {
        return new Project('', '', '', [], [], '', '', '');
    }
}