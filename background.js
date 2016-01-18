// Copyright (c) 2016 H@mdi & K8.
initializeDefaultValues();
var Website = ["ieeexplore.iee", "link.springer", "sciencedirect", "dl.acm","onlinelibrary.wiley"];
var Button_state = ["Sci-trick [enabled]", "Sci-trick [disabled]", "icon/enabled.png", "icon/disabled.png"]

function CheckWebsite(tab, changeInfo)
{
  var arr = tab.url.split('/');
  for (i = 0; i < Website.length; i++)
  {
    if (arr[2].indexOf(Website[i]) >= 0 && arr[2].indexOf('sci-hub') == -1 && changeInfo.status == "loading")
    {
      return true;
    }
  }
}

function initializeDefaultValues()
{
  console.log("value : " + localStorage.getItem('state'));
  if (localStorage.getItem('state'))
  {
    return;
  }
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
    //console.log('bareUrl ' + tab.url);
    origin_url = tab.url;
    var arr = origin_url.split('/');
    if (CheckWebsite(tab, changeInfo))
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
  
  if (localStorage.getItem('state') == 0)
  {
    localStorage.setItem('state', 1);
    chrome.browserAction.setIcon(
    {
      path: Button_state[2]
    });
    chrome.browserAction.setTitle(
    {
      title: Button_state[0]
    });
  }
  else
  {
    localStorage.setItem('state', 0);
    chrome.browserAction.setIcon(
    {
      path: Button_state[3]
    });
    chrome.browserAction.setTitle(
    {
      title: Button_state[1]
    });
  }
});
