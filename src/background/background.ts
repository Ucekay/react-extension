chrome.runtime.onMessage.addListener((meg, sender, sendResponse) => {
  console.log(meg);
  console.log(sender);
  sendResponse('From the background');
});
