async function fetchSprintData(sprintId: string): Promise<any> {
    try {
        // Replace this URL with the actual DevRev API endpoint
        const response = await fetch(`https://api.devrev.ai/oasis.data.stream/sprints/${sprintId}/tasks`, {
            method: 'GET', // Adjust to 'POST' if the endpoint requires it
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXZyZXYuYWkvIiwia2lkIjoic3RzX2tpZF9yc2EiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiamFudXMiXSwiYXpwIjoiZG9uOmlkZW50aXR5OmR2cnYtaW4tMTpkZXZvLzI0RmtOaGZmb286ZGV2dS8xIiwiZXhwIjoxODI3MDI5ODU1LCJodHRwOi8vZGV2cmV2LmFpL2F1dGgwX3VpZCI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by9zdXBlcjphdXRoMF91c2VyL2xpbmtlZGlufHphRy1UNHVPMTkiLCJodHRwOi8vZGV2cmV2LmFpL2F1dGgwX3VzZXJfaWQiOiJsaW5rZWRpbnx6YUctVDR1TzE5IiwiaHR0cDovL2RldnJldi5haS9kZXZvX2RvbiI6ImRvbjppZGVudGl0eTpkdnJ2LWluLTE6ZGV2by8yNEZrTmhmZm9vIiwiaHR0cDovL2RldnJldi5haS9kZXZvaWQiOiJERVYtMjRGa05oZmZvbyIsImh0dHA6Ly9kZXZyZXYuYWkvZGV2dWlkIjoiREVWVS0xIiwiaHR0cDovL2RldnJldi5haS9kaXNwbGF5bmFtZSI6ImFkaXRoaWFjaGFyeWE1NiIsImh0dHA6Ly9kZXZyZXYuYWkvZW1haWwiOiJhZGl0aGlhY2hhcnlhNTZAZ21haWwuY29tIiwiaHR0cDovL2RldnJldi5haS9mdWxsbmFtZSI6IkFkaXRoaSBBY2hhcnlhIiwiaHR0cDovL2RldnJldi5haS9pc192ZXJpZmllZCI6dHJ1ZSwiaHR0cDovL2RldnJldi5haS90b2tlbnR5cGUiOiJ1cm46ZGV2cmV2OnBhcmFtczpvYXV0aDp0b2tlbi10eXBlOnBhdCIsImlhdCI6MTczMjQyMTg1NSwiaXNzIjoiaHR0cHM6Ly9hdXRoLXRva2VuLmRldnJldi5haS8iLCJqdGkiOiJkb246aWRlbnRpdHk6ZHZydi1pbi0xOmRldm8vMjRGa05oZmZvbzp0b2tlbi8xNTlScVJYd0kiLCJvcmdfaWQiOiJvcmdfaDd4NWQyT3BKc1pKU1AyZSIsInN1YiI6ImRvbjppZGVudGl0eTpkdnJ2LWluLTE6ZGV2by8yNEZrTmhmZm9vOmRldnUvMSJ9.jCNWU1kFOgwmEh3SD6fKDbf7G9mBnb5-mZSr-AZxWVwI9yjH-GaLbpEmAypQkWY5KqpLrrj4hDUBeSljRgjtEcHJHBTzgcRSLobvM0IuDKI0Y3TuCzECQMB5TxbT15010CKxVccLq0_h4hgc1gLri20LnVKCzAHTyNPaHubtywwiuCHidvxXcb8Ls6jyF3V4cK3V18VSHLs52qDK0N-k0ybwlcSTbaegg9kGZSJpZjfamYJO_NCkdUzE7CP55cKPG9tdpGqYLfBG4G7WZxlEOK24vVJqSVS0VwNZvZqDXLUSciouWX4TBnjhgmtnFsHRU5mM5wN16QtBrML5CHWw1g', // Replace with your actual token
                'Content-Type': 'application/json', // Necessary for JSON APIs
            },
        });

        // Check for success response
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse and return the JSON response
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error("Error fetching sprint data:", error);
        return null; // Handle errors gracefully
    }
}

// Example usage
const sprintId = "example-sprint-id"; // Replace with a valid Sprint ID
fetchSprintData(sprintId).then(data => {
    if (data) {
        console.log("Sprint Data:", data);
    } else {
        console.log("Failed to fetch sprint data.");
    }
});
