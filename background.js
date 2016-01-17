// Copyright (c) 2016 H@mdi.
function initializeDefaultValues()
{
  console.log("value : " + localStorage.getItem('state'));
  if (localStorage.getItem('state'))
  {
    return;
  }
  // set default values for your variable here
  localStorage.setItem('state', 1);
  chrome.browserAction.setTitle(
  {
    title: "Sci-trick [enabled]"
  });
}
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab)
{
  if (localStorage.getItem('state') == 1)
  {
    console.log('bareUrl' + tab.url);
    origin_url = tab.url;
    var arr = origin_url.split('/');
    if ((arr[2].indexOf('ieeexplore.ieee') >= 0 || arr[2].indexOf('link.springer') >= 0 || arr[2].indexOf('sciencedirect') >= 0 || arr[2].indexOf('dl.acm') >= 0) && arr[2].indexOf('sci-hub') == -1 && changeInfo.status == "loading")
    {
      arr[2] = arr[2] + ".sci-hub.io";
      var new_url = arr.join('/');
      console.log('Redirecting ' + tab.url + ' to ' + new_url);
      chrome.tabs.update(tab.id
      , {
        url: new_url
      });
    }
  }
});
chrome.browserAction.onClicked.addListener(function (tab)
{
  initializeDefaultValues();
  if (localStorage.getItem('state') == 0)
  {
    chrome.browserAction.setIcon(
    {
      path: "icon/enabled.png"
    });
    localStorage.setItem('state', 1);
    chrome.browserAction.setTitle(
    {
      title: "Sci-trick [enabled]"
    });
  }
  else
  {
    chrome.browserAction.setTitle(
    {
      title: "Sci-trick [disabled]"
    });
    chrome.browserAction.setIcon(
    {
      path: "icon/disabled.png"
    });
    localStorage.setItem('state', 0);
  }
});