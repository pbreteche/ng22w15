import { Project } from "./project";

export enum TaskState {
    New = 'Nouveau',
    InProgress = 'En cours',
    Closed = 'Terminé'
}

export class Task {
    id?: number;
    name?: string;
    deadline?: Date;
    description?: string;
    state = TaskState.New;
    project?: Project|number;
}
