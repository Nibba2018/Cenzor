console.log("Running......");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab)
{
    let msg = { text: "recieved"}
    chrome.tabs.sendMessage(tab.id, msg);
}