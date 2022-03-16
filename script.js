let lastUrl = location.href; 

let short_url = 'https://www.youtube.com/shorts/'
let video_url = 'https://www.youtube.com/watch?v='

const onUrlChange = () =>{
  if(location.href.startsWith(short_url))
    window.location.replace(location.href.replace(short_url,video_url)) 
}


new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    onUrlChange();
  }
}).observe(document, {subtree: true, childList: true});
 
 

