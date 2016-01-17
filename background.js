// Copyright (c) 2016 H@mdi.

if( storage == null){
var storage = chrome.storage.local;

var state = 'state';

var obj= {};

obj[state] = true;

storage.set(obj);

storage.get(state,function(result){
  console.log('hamdi');
  //console output = myVariableKeyName {myTestVar:'my test var'}
});}


storage.get(state,function(result){
  if(result.state == true){
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
});}
});



chrome.browserAction.onClicked.addListener(function(tab) {

storage.get(state,function(result){
  if(result.state == true){

chrome.browserAction.setIcon({path:"icon/disabled.png"});  
obj[state] = false;
storage.set(obj);
}else{

chrome.browserAction.setIcon({path:"icon/enabled.png"});
obj[state] = true;
storage.set(obj);}

   
});

});
