// This script will do all the things related to the current webpage
let title = document.title;
console.log("[From Extension] Title of webpage is: ", title);

// Listen for the request from the popup to send the SEO data back
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    if (request.action === "GET_SEO_DATA") {

        // Collecting SEO data
        const seoData = {
            title: document.title
        }

        sendResponse(seoData);
    }

    return true;
})