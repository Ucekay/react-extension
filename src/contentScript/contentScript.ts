chrome.runtime.sendMessage('From the contentScript').then((response) => {
  console.log(response);
});
