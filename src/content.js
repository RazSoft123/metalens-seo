// This script will do all the things related to the current webpage
let title = document.title;
console.log("[From Extension] Title of webpage is: ", title);

// Listen for the request from the popup to send the SEO data back
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    if (request.action === "GET_SEO_DATA") {

        // Collecting SEO data
        let title = document.title;
        let description = document.querySelector(`meta[name="description"]`)?.content || "missing";
        let themeColor = document.querySelector(`meta[name="theme-color"]`)?.content || "missing";
        let keywords = document.querySelector(`meta[name="keywords"]`)?.content || "missing";
        let robots = document.querySelector(`meta[name="robots"]`)?.content || "missing";

        const seoData = {
            title: title,
            description: description,
            themeColor: themeColor,
            keywords: keywords,
            robots: robots
        }

        sendResponse(seoData);
    }

    return true;
})