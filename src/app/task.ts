export enum TaskState {
    New = 'Nouveau',
    InProgress = 'En cours',
    Closed = 'Terminé'
}

export class Task {
    name?: string;
    deadline?: Date;
    description?: string;
    state = TaskState.New;
}
