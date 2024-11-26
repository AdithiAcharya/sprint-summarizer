var sprintdata = {
    sprintId: "sprint-1",
    name: "Sprint 1",
    status: "Completed",
    tasks: [
        { id: 1, name: "Task A", status: "Completed" },
        { id: 2, name: "Task B", status: "In Progress" }
    ],
};
// Summarizing Sprint Data
var summarizeSprint = function (data) {
    var totalTasks = data.tasks.length;
    var completedTasks = data.tasks.filter(function (task) { return task.status === "Completed"; }).length;
    return {
        sprintName: data.name,
        totalTasks: totalTasks,
        completedTasks: completedTasks,
        sprintStatus: data.status,
    };
};
console.log(summarizeSprint(sprintdata));
