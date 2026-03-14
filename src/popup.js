// The script will use to manage all the things related to popup.

window.onload = async () => {

    // Get current active tab 
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.tabs.sendMessage(tab.id, { action: "GET_SEO_DATA" }, (response) => {
        const display = document.getElementById("title");

        if (chrome.runtime.lastError) {
            display.innerText = "ERROR: Plese refresh the page to see the seo Data";
            return;
        }

        if (response) {
            display.innerText = response.title;
        }
    })

}