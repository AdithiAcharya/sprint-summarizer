import requests

url = "https://api.devrev.ai/internal/vistas.list"
headers = {
    "Authorization": "Bearer " #enter api token
}
payload = {
    "flavor": ["sprint_board"],
    "limit": 50
}

response = requests.post(url, json=payload, headers=headers)

if response.status_code == 200:
    print("Sprint Boards:")
    print(response.json())
else:
    print("Error:", response.status_code, response.text)
