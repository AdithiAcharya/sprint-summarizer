import { WebClient } from '@slack/web-api';
import dotenv from 'dotenv';

dotenv.config(); // Load .env variables

const slackToken = ""; // Slack Bot Token
const channel = "C082M7MKAG1"; // Replace with actual channel ID

const web = new WebClient(slackToken);

async function postMessage(text: string) {
  try {
    await web.chat.postMessage({
      channel: channel,
      text: text,
    });
    console.log('Message sent successfully!');
  } catch (error) {
    console.error('Error posting message:', error);
  }
}

postMessage('Sprint Summary: Completed 5 tasks.');
