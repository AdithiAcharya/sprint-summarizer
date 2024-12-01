import { SprintData } from "./models";

const summarizeSprint = (data: SprintData) => {
    const totalTasks = data.tasks.length;
    const completedTasks = data.tasks.filter(task => task.status === 'Completed').length;
    const progress = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

    return {
        sprintName: data.name,
        totalTasks,
        completedTasks,
        progress: `${progress.toFixed(2)}%`,  // showing percentage
        sprintStatus: data.status
    };
};
