// background.js

// Listen for changes to tab content (when the tab is updated)
browser.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  // Ensure the tab has finished loading and the URL matches YouTube Shorts
  if (changeInfo.status === 'complete' && tab.url && tab.url.startsWith("https://www.youtube.com/shorts/")) {
    // Redirect to YouTube homepage
    browser.tabs.update(tabId, { url: "https://www.youtube.com" });
  }
});
