if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/uv.sw-handler.js', { scope: __uv$config.prefix })
}

function fullscreen() {
  var elem = document.getElementById('ifr')
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
function changeFavicon(f) {
  var link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.href = f;
}
window.onload = () => {
  if(localStorage.getItem('title')) {
    document.title = localStorage.getItem('title')
  }
  if(localStorage.getItem('favicon')) {
    changeFavicon(localStorage.getItem('favicon'))
  }
}
/*document.addEventListener("visibilitychange", () => {
  var l = localStorage.getItem('autoCloak')
  if(!l) return;
  if (document.visibilityState === 'hidden') {
    switch (l) {
      case 'low':
        changeFavicon('https://google.com/favicon.ico')
        document.title = 'Google'
      case 'high':
        document.location.href = 'https://google.com'
    }
  } else if (document.visibilityState === 'visible') {
    changeFavicon(localStorage.getItem('favicon'))
    document.title = localStorage.getItem('title')
  } else{ console.log('Visibility Change: ' + document.visibilityState) }
});*/