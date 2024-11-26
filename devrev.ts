import { client, betaSDK } from "@devrev/typescript-sdk";

const devrevBetaSDK = client.setupBeta({
    endpoint: "https://api.devrev.ai",
    token: process.env.DEVREV_TOKEN,
});

async function test() {
    const response = await devrevBetaSDK.worksCreate({
        title: "New work item!",
        applies_to_part: "PROD-1",
        owned_by: ["DEVU-1"],
        type: betaSDK.WorkType.Issue,
    });
    console.log(response);
}

test();
