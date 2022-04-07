import { Task, TaskState } from "src/app/task";

export const tasksMock: Task[] = [
    {
        id: 1,
        name: 'installer NodeJS',
        deadline: new Date('2022-04-04'),
        description: 'Nécessaire à l\'environnement',
        state: TaskState.InProgress
    },
    {
        id: 2,
        name: 'installer un éditeur',
        deadline: undefined,
        description: 'Pour le développeur',
        state: TaskState.New
    },
    {
        id: 3,
        name: 'npm install -g @angular/cli',
        deadline: undefined,
        description: 'Le couteau suisse d\'Angular',
        state: TaskState.New
    },
    {
        id: 4,
        name: 'ng new my-project',
        deadline: new Date('2022-04-06'),
        description: 'Le projet lui-même',
        state: TaskState.New
    },
]
