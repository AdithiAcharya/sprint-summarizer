// models.ts
export interface Task {
    id: number;
    name: string;
    status: 'Completed' | 'In Progress' | 'Not Started';
}

export interface SprintData {
    sprintId: string;
    name: string;
    status: 'Completed' | 'In Progress' | 'Not Started';
    tasks: Task[];
}
