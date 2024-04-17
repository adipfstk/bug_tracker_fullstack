import { Project } from "./project.model";

export class ProjectDto extends Project {
    usernames!: string[];
}