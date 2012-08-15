chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
  if (tab.url.match(/^https?:\/\/(www\.)?dailymail\.co\.uk/)) {
    chrome.tabs.update(tabId, {
      url: 'http://www.instapaper.com/text?u=' + encodeURIComponent(tab.url)
    });
  }
});
