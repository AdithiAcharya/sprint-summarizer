import { client, betaSDK } from "@devrev/typescript-sdk";

// Setup the beta SDK
const devrevBetaSDK = client.setupBeta({
    endpoint: "https://api.devrev.ai",
    token: ""//enter api Stoken
});

async function testBetaSDK() {
    try {
        const response = await devrevBetaSDK.worksCreate({
            title: "New work item!",
            applies_to_part: "PROD-1",
            owned_by: ["DEVU-1"],
            type: betaSDK.WorkType.Issue,
        });
        console.log("Beta SDK Response:", response);
    } catch (error) {
        console.error("Error with Beta SDK:", error);
    }
}

testBetaSDK();
