// utils.ts
import { SprintData, Task } from './models';

export const summarizeSprint = (data: SprintData) => {
    const totalTasks = data.tasks.length;
    const completedTasks = data.tasks.filter((task) => task.status === "Completed").length;
    
    return {
        sprintName: data.name,
        totalTasks,
        completedTasks,
        sprintStatus: data.status,
    };
};

// Function to add a task
export const addTaskToSprint = (sprintData: SprintData, newTask: Task): void => {
    sprintData.tasks.push(newTask);
};

// Function to update the status of a task
export const updateTaskStatus = (sprintData: SprintData, taskId: number, newStatus: Task['status']): void => {
    const task = sprintData.tasks.find(task => task.id === taskId);
    if (task) {
        task.status = newStatus;
    }
};
