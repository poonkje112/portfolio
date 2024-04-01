import { Project } from "@/model/Project";
import { BASE_URL } from "@/constants";
import { Tag } from "@/model/Tag";
import { Member } from "@/model/Member";

export class ProjectService {
    public async getProject(slug: string) {
        const response = await fetch(`${BASE_URL}/projects/${slug}`);
        const project = await response.json();

        return this.buildProject(project);
    }

    public async getProjects(): Promise<Project[]> {
        const response = await fetch(`${BASE_URL}/projects`);
        const projects = await response.json();

        return projects.map((project: any) => {
            return this.buildProject(project);
        });
    }

    private buildProject(project: any): Project {
        let tags: Tag[] = [];
        let members: Member[] = [];

        if(project.tags !== undefined) {
            tags = project.tags.map((tag: any) => new Tag(tag.name));
        }

        if(project.members !== undefined) {
            members = project.members.map((member: any) => new Member(member.name, member.portfolio));
        }

        return new Project(
            project.title,
            project.description,
            project.slug,
            tags,
            members,
            project.git,
            project.live,
            project.youtube
        );
    }
}