import requests

def test_api():
    response = requests.get("https://jsonplaceholder.typicode.com/posts/1")
    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.json()}")

test_api()
