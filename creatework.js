const axios = require('axios');

const API_TOKEN = ""//enter the api oken
axios.post(
    'https://api.devrev.ai/works.create',
    {
        title: 'New work item!',
        applies_to_part: 'PROD-1',
        owned_by: ['DEVU-1'],
        type: 'issue',
        priority: 'p1', // Set a priority like p1, p2, etc.
        tags: ['urgent', 'frontend'], // Add tags for categorization
    },
    {
        headers: {
            'Content-Type': 'application/json',
            'X-Devrev-Scope': 'beta',
            Authorization: `Bearer ${API_TOKEN}`, // Correct Authorization header
        },
    }
)
    .then((response) => console.log(response.data))
    .catch((error) => console.error(error));
