import { Task, TaskState } from "src/app/task";

export const tasks: Task[] = [
    {
        name: 'installer NodeJS',
        deadline: new Date('2022-04-04'),
        description: 'Nécessaire à l\'environnement',
        state: TaskState.InProgress
    },
    {
        name: 'installer un éditeur',
        deadline: undefined,
        description: 'Pour le développeur',
        state: TaskState.New
    },
    {
        name: 'npm install -g @angular/cli',
        deadline: undefined,
        description: 'Le couteau suisse d\'Angular',
        state: TaskState.New
    },
    {
        name: 'ng new my-project',
        deadline: new Date('2022-04-06'),
        description: 'Le projet lui-même',
        state: TaskState.New
    },
]
