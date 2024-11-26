const axios = require('axios');

const API_TOKEN = "eyJhbGciOiJSUzI1NiIsImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXZyZXYuYWkvIiwia2lkIjoic3RzX2tpZF9yc2EiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiamFudXMiXSwiYXpwIjoiZG9uOmlkZW50aXR5OmR2cnYtaW4tMTpkZXZvLzI0RmtOaGZmb286ZGV2dS8xIiwiZXhwIjoxODI3MDI5ODU1LCJodHRwOi8vZGV2cmV2LmFpL2F1dGgwX3VpZCI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by9zdXBlcjphdXRoMF91c2VyL2xpbmtlZGlufHphRy1UNHVPMTkiLCJodHRwOi8vZGV2cmV2LmFpL2F1dGgwX3VzZXJfaWQiOiJsaW5rZWRpbnx6YUctVDR1TzE5IiwiaHR0cDovL2RldnJldi5haS9kZXZvX2RvbiI6ImRvbjppZGVudGl0eTpkdnJ2LWluLTE6ZGV2by8yNEZrTmhmZm9vIiwiaHR0cDovL2RldnJldi5haS9kZXZvaWQiOiJERVYtMjRGa05oZmZvbyIsImh0dHA6Ly9kZXZyZXYuYWkvZGV2dWlkIjoiREVWVS0xIiwiaHR0cDovL2RldnJldi5haS9kaXNwbGF5bmFtZSI6ImFkaXRoaWFjaGFyeWE1NiIsImh0dHA6Ly9kZXZyZXYuYWkvZW1haWwiOiJhZGl0aGlhY2hhcnlhNTZAZ21haWwuY29tIiwiaHR0cDovL2RldnJldi5haS9mdWxsbmFtZSI6IkFkaXRoaSBBY2hhcnlhIiwiaHR0cDovL2RldnJldi5haS9pc192ZXJpZmllZCI6dHJ1ZSwiaHR0cDovL2RldnJldi5haS90b2tlbnR5cGUiOiJ1cm46ZGV2cmV2OnBhcmFtczpvYXV0aDp0b2tlbi10eXBlOnBhdCIsImlhdCI6MTczMjQyMTg1NSwiaXNzIjoiaHR0cHM6Ly9hdXRoLXRva2VuLmRldnJldi5haS8iLCJqdGkiOiJkb246aWRlbnRpdHk6ZHZydi1pbi0xOmRldm8vMjRGa05oZmZvbzp0b2tlbi8xNTlScVJYd0kiLCJvcmdfaWQiOiJvcmdfaDd4NWQyT3BKc1pKU1AyZSIsInN1YiI6ImRvbjppZGVudGl0eTpkdnJ2LWluLTE6ZGV2by8yNEZrTmhmZm9vOmRldnUvMSJ9.jCNWU1kFOgwmEh3SD6fKDbf7G9mBnb5-mZSr-AZxWVwI9yjH-GaLbpEmAypQkWY5KqpLrrj4hDUBeSljRgjtEcHJHBTzgcRSLobvM0IuDKI0Y3TuCzECQMB5TxbT15010CKxVccLq0_h4hgc1gLri20LnVKCzAHTyNPaHubtywwiuCHidvxXcb8Ls6jyF3V4cK3V18VSHLs52qDK0N-k0ybwlcSTbaegg9kGZSJpZjfamYJO_NCkdUzE7CP55cKPG9tdpGqYLfBG4G7WZxlEOK24vVJqSVS0VwNZvZqDXLUSciouWX4TBnjhgmtnFsHRU5mM5wN16QtBrML5CHWw1g"; // Replace with your actual token

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
