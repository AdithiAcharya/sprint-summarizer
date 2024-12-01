// logic.ts
import { SprintData, Task } from './models';

// Sample Sprint Data
const sprintData: SprintData = {
    sprintId: "sprint-1",
    name: "Sprint 1",
    status: "Completed",
    tasks: [
        { id: 1, name: "Task A", status: "Completed" },
        { id: 2, name: "Task B", status: "In Progress" },
        { id: 3, name: "Task C", status: "Not Started" }
    ]
};

// Function to Summarize Sprint Data
const summarizeSprint = (data: SprintData) => {
    const totalTasks = data.tasks.length;
    const completedTasks = data.tasks.filter(task => task.status === 'Completed').length;
    return {
        sprintName: data.name,
        totalTasks,
        completedTasks,
        sprintStatus: data.status
    };
};

// Output the summary of the sprint
const sprintSummary = summarizeSprint(sprintData);
console.log("Sprint Summary:");
console.log(sprintSummary);
