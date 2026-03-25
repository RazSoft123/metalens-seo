// The script will use to manage all the things related to popup.

window.onload = async () => {

    // Get current active tab 
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.tabs.sendMessage(tab.id, { action: "GET_SEO_DATA" }, (response) => {
        // Basic metadata elements
        const displayTitle = document.getElementById("title");
        const displayDescription = document.getElementById("description");
        const themeColor = document.getElementById("theme-color");
        const keywords = document.getElementById("keywords");
        const robots = document.getElementById("robots");

        // Open Graph elements
        const ogTitle = document.getElementById("og-title");
        const ogDescription = document.getElementById("og-description");
        const ogImage = document.getElementById("og-image");
        const ogImageAlt = document.getElementById("og-image-alt");
        const ogUrl = document.getElementById("og-url");
        const ogType = document.getElementById("og-type");

        // Twitter elements
        const twitterTitle = document.getElementById("twitter-title");
        const twitterDescription = document.getElementById("twitter-description");
        const twitterImage = document.getElementById("twitter-image");
        const twitterImageAlt = document.getElementById("twitter-image-alt");
        const twitterSite = document.getElementById("twitter-site");
        const twitterUrl = document.getElementById("twitter-url");

        if (chrome.runtime.lastError) {
            displayTitle.innerText = "ERROR: Please refresh the page to see the SEO Data";
            return;
        }

        if (response) {
            // Display basic metadata
            displayTitle.innerText = response.title;
            displayDescription.innerText = response.description;
            themeColor.innerText = response.themeColor;
            keywords.innerText = response.keywords;
            robots.innerText = response.robots;

            // Display Open Graph information
            ogTitle.innerText = response.og.title;
            ogDescription.innerText = response.og.description;
            ogImage.innerText = response.og.image;
            ogImageAlt.innerText = response.og.imageAlt;
            ogUrl.innerText = response.og.url;
            ogType.innerText = response.og.type;

            // Display Twitter information
            twitterTitle.innerText = response.twitter.title;
            twitterDescription.innerText = response.twitter.description;
            twitterImage.innerText = response.twitter.image;
            twitterImageAlt.innerText = response.twitter.imageAlt;
            twitterSite.innerText = response.twitter.site;
            twitterUrl.innerText = response.twitter.url;
        }
    })

}