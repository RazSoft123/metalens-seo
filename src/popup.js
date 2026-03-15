// The script will use to manage all the things related to popup.

window.onload = async () => {

    // Get current active tab 
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.tabs.sendMessage(tab.id, { action: "GET_SEO_DATA" }, (response) => {
        const displayTitle = document.getElementById("title");
        const displayDescription = document.getElementById("description");
        const themeColor = document.getElementById("theme-color");
        const keywords = document.getElementById("keywords");
        const robots = document.getElementById("robots");

        if (chrome.runtime.lastError) {
            displayTitle.innerText = "ERROR: Plese refresh the page to see the seo Data";
            return;
        }

        if (response) {
            displayTitle.innerText = response.title;
            displayDescription.innerText = response.description;
            themeColor.innerText = response.themeColor;
            keywords.innerText = response.keywords;
            robots.innerText = response.robots;
        }
    })

}