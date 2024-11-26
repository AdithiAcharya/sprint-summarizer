import axios from 'axios';
import { WebClient } from '@slack/web-api';

// Hard-coded credentials and settings
const devRevAPIKey: string = "eyJhbGciOiJSUzI1NiIsImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXZyZXYuYWkvIiwia2lkIjoic3RzX2tpZF9yc2EiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiamFudXMiXSwiYXpwIjoiZG9uOmlkZW50aXR5OmR2cnYtaW4tMTpkZXZvLzI0RmtOaGZmb286ZGV2dS8xIiwiZXhwIjoxODI3MDI5ODU1LCJodHRwOi8vZGV2cmV2LmFpL2F1dGgwX3VpZCI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by9zdXBlcjphdXRoMF91c2VyL2xpbmtlZGlufHphRy1UNHVPMTkiLCJodHRwOi8vZGV2cmV2LmFpL2F1dGgwX3VzZXJfaWQiOiJsaW5rZWRpbnx6YUctVDR1TzE5IiwiaHR0cDovL2RldnJldi5haS9kZXZvX2RvbiI6ImRvbjppZGVudGl0eTpkdnJ2LWluLTE6ZGV2by8yNEZrTmhmZm9vIiwiaHR0cDovL2RldnJldi5haS9kZXZvaWQiOiJERVYtMjRGa05oZmZvbyIsImh0dHA6Ly9kZXZyZXYuYWkvZGV2dWlkIjoiREVWVS0xIiwiaHR0cDovL2RldnJldi5haS9kaXNwbGF5bmFtZSI6ImFkaXRoaWFjaGFyeWE1NiIsImh0dHA6Ly9kZXZyZXYuYWkvZW1haWwiOiJhZGl0aGlhY2hhcnlhNTZAZ21haWwuY29tIiwiaHR0cDovL2RldnJldi5haS9mdWxsbmFtZSI6IkFkaXRoaSBBY2hhcnlhIiwiaHR0cDovL2RldnJldi5haS9pc192ZXJpZmllZCI6dHJ1ZSwiaHR0cDovL2RldnJldi5haS90b2tlbnR5cGUiOiJ1cm46ZGV2cmV2OnBhcmFtczpvYXV0aDp0b2tlbi10eXBlOnBhdCIsImlhdCI6MTczMjQyMTg1NSwiaXNzIjoiaHR0cHM6Ly9hdXRoLXRva2VuLmRldnJldi5haS8iLCJqdGkiOiJkb246aWRlbnRpdHk6ZHZydi1pbi0xOmRldm8vMjRGa05oZmZvbzp0b2tlbi8xNTlScVJYd0kiLCJvcmdfaWQiOiJvcmdfaDd4NWQyT3BKc1pKU1AyZSIsInN1YiI6ImRvbjppZGVudGl0eTpkdnJ2LWluLTE6ZGV2by8yNEZrTmhmZm9vOmRldnUvMSJ9.jCNWU1kFOgwmEh3SD6fKDbf7G9mBnb5-mZSr-AZxWVwI9yjH-GaLbpEmAypQkWY5KqpLrrj4hDUBeSljRgjtEcHJHBTzgcRSLobvM0IuDKI0Y3TuCzECQMB5TxbT15010CKxVccLq0_h4hgc1gLri20LnVKCzAHTyNPaHubtywwiuCHidvxXcb8Ls6jyF3V4cK3V18VSHLs52qDK0N-k0ybwlcSTbaegg9kGZSJpZjfamYJO_NCkdUzE7CP55cKPG9tdpGqYLfBG4G7WZxlEOK24vVJqSVS0VwNZvZqDXLUSciouWX4TBnjhgmtnFsHRU5mM5wN16QtBrML5CHWw1g";  // Replace with your actual DevRev API key
const slackToken: string = "xoxb-8099119085904-8076384600178-WCKfkkCpWJ5cSVSwdFra8pSv";  // Replace with your actual Slack OAuth token
const slackChannel: string = "C082M7MKAG1";
// DevRev API call to fetch sprint data
const fetchSprintData = async (): Promise<any> => {
  try {
    const response = await axios.get('https://api.devrev.ai/internal/vistas.list', {
      headers: { 'Authorization': `Bearer ${devRevAPIKey}` }
    });
    console.log('Fetched sprint data:', response.data);  // Log the fetched sprint data
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching sprint data:', error.message);
      console.error('Response:', error.response?.data);  // Log response if any
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
};

// Slack API call to post summary
const postSummaryToSlack = async (summary: string): Promise<void> => {
  const slack = new WebClient(slackToken);
  try {
    console.log('Posting message to Slack...');
    await slack.chat.postMessage({
      channel: slackChannel,
      text: summary,
    });
    console.log('Message posted to Slack');
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error posting to Slack:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
};

// Generate and post the sprint summary
// Generate and post the sprint summary
const generateAndPostSummary = async (): Promise<void> => {
    try {
      console.log('Script Started');  // Confirm that the function is called
      const sprintData = await fetchSprintData();
      console.log('Fetched Sprint Data:', sprintData);  // Log sprint data for debugging
      const summary: string = `Sprint Summary: ${sprintData.vistas.length} tasks completed`;
      console.log('Generated Summary:', summary);  // Log summary for debugging
      await postSummaryToSlack(summary);
    } catch (error) {
      console.error('Failed to generate and post summary:', error);
    }
  };
  

// Call the function to generate and post the summary
generateAndPostSummary();
