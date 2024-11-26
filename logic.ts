const sprintdata = {
    sprintId: "sprint-1",
    name: "Sprint 1",
    status: "Completed",
    tasks: [
        { id: 1, name: "Task A", status: "Completed" },
        { id: 2, name: "Task B", status: "In Progress" }
    ],
};

// Summarizing Sprint Data
const summarizeSprint = (data: any) => {
    const totalTasks = data.tasks.length;
    const completedTasks = data.tasks.filter(task => task.status === "Completed").length;
    
    return {
        sprintName: data.name,
        totalTasks,
        completedTasks,
        sprintStatus: data.status,
    };
};

console.log(summarizeSprint(sprintdata));
