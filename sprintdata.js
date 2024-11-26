// mockSprintData.ts
// Mock data representing sprint details
var mockSprintData = {
    sprintId: "sprint-1",
    name: "Sprint 1",
    status: "Completed",
    tasks: [{ id: 1, name: "Task A" }, { id: 2, name: "Task B" }],
};
// You can now use mockSprintData as if it was fetched from the API
console.log(mockSprintData);
// Example usage: Accessing sprint name
console.log("Sprint Name:", mockSprintData.name);
