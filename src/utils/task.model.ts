export type Task = {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
}
export enum TaskStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}
export type UpdateTask = {
    title: string;
    description: string;
    status: TaskStatus;
}
