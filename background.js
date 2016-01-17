// Copyright (c) 2016 H@mdi.


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  console.log('bareUrl' + tab.url);
 	origin_url = tab.url;
  var arr = origin_url.split('/');
    if((arr[2].indexOf('ieeexplore.ieee') >= 0
      || arr[2].indexOf('link.springer')>=0
      || arr[2].indexOf('sciencedirect')>=0
      || arr[2].indexOf('dl.acm')>=0
 )
     && arr[2].indexOf('sci-hub') == -1 && changeInfo.status == "loading") {
       arr[2] = arr[2] + ".sci-hub.io";
       var new_url = arr.join('/');

      console.log('Redirecting ' + tab.url + ' to ' + new_url);

      chrome.tabs.update(tab.id, {url: new_url});

    }
});


chrome.browserAction.onClicked.addListener(function(tab) {
  var arr = tab.url.split('/');
  arr[2] = arr[2] + ".sci-hub.io";
  var new_url = arr.join('/');

  console.log('Redirecting ' + tab.url + ' to ' + new_url);

  chrome.tabs.update(tab.id, {url: new_url});
});
