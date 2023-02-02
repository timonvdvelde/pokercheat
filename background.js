"use strict";

function sendMessageToTabs(tabs) {
    for (const tab of tabs) {
        browser.tabs.sendMessage(tab.id, {})
    }
}

function toggleCheat() {
    browser
        .tabs
        .query({currentWindow: true, active: true})
        .then(sendMessageToTabs);
}

browser.browserAction.onClicked.addListener(toggleCheat);

