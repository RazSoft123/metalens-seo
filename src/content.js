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

        // Collecting Open Graph data
        let ogTitle = document.querySelector(`meta[property="og:title"]`)?.content || "missing";
        let ogDescription = document.querySelector(`meta[property="og:description"]`)?.content || "missing";
        let ogImage = document.querySelector(`meta[property="og:image"]`)?.content || "missing";
        let ogImageAlt = document.querySelector(`meta[property="og:image:alt"]`)?.content || "missing";
        let ogUrl = document.querySelector(`meta[property="og:url"]`)?.content || "missing";
        let ogType = document.querySelector(`meta[property="og:type"]`)?.content || "missing";

        // Collecting Twitter data
        let twitterTitle = document.querySelector(`meta[name="twitter:title"]`)?.content || "missing";
        let twitterDescription = document.querySelector(`meta[name="twitter:description"]`)?.content || "missing";
        let twitterImage = document.querySelector(`meta[name="twitter:image"]`)?.content || "missing";
        let twitterImageAlt = document.querySelector(`meta[name="twitter:image:alt"]`)?.content || "missing";
        let twitterSite = document.querySelector(`meta[name="twitter:site"]`)?.content || "missing";
        let twitterUrl = document.querySelector(`meta[name="twitter:url"]`)?.content || "missing";

        const seoData = {
            title: title,
            description: description,
            themeColor: themeColor,
            keywords: keywords,
            robots: robots,
            og: {
                title: ogTitle,
                description: ogDescription,
                image: ogImage,
                imageAlt: ogImageAlt,
                url: ogUrl,
                type: ogType
            },
            twitter: {
                title: twitterTitle,
                description: twitterDescription,
                image: twitterImage,
                imageAlt: twitterImageAlt,
                site: twitterSite,
                url: twitterUrl
            }
        }

        sendResponse(seoData);
    }

    return true;
})