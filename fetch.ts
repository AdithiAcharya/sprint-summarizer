fetch('https://app.devrev.ai/sprint-summariser/vistas/vista-27', {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer ',//enter api token 
        'Content-Type': 'application/json',
    },
})
.then(response => response.json())
.then(data => console.log(data))  // Check the list of sprints/slugs
.catch(error => console.error('Error fetching sprint list:', error));
