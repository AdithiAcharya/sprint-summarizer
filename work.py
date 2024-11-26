import requests
import json

# API URL and token
url = "https://api.devrev.ai/tags.create"  # Replace with the correct endpoint
token = "k0ybwlcSTbaegg9kGZSJpZjfamYJO_NCkdUzE7CP55cKPG9tdpGqYLfBG4G7WZxlEOK24vVJqSVS0VwNZvZqDXLUSciouWX4TBnjhgmtnFsHRU5mM5wN16QtBrML5CHWw1g"  # Replace with your actual token

# Request headers
headers = {
    "Authorization": f"Bearer {token}",
    "Content-Type": "application/json"
}

# Data to send in the request
data = {
    "title": "New Task for Sprint",  # Ensure this title is valid as per the API documentation
    "description": "This is a new task for the sprint.",
    "assignee": "john_doe",
    "status": "To Do",
    "due_date": "2024-11-30"
}

# Send the POST request
response = requests.post(url, json=data, headers=headers)

# Check the response
if response.status_code == 201:
    print("Work item created successfully.")
    print("Response:", response.json())
else:
    print("Error:", response.status_code)
    print("Response:", response.json())
