(function(doc,tag,i){
  let headTag = doc.getElementsByTagName(tag)[0], 
      linkCss = doc.createElement('link'),
      linkTag = doc.createElement('link'), 
      scriptTag = doc.createElement('script'), 
      scriptLitePicker = doc.createElement('script'), 
      scriptLitePicker2 = doc.createElement('script'),
      scriptJS = doc.createElement('script');
  //Custom CSS
  linkCss.rel = 'stylesheet';
  linkCss.href = 'https://cdn.jsdelivr.net/gh/hectorsum/hotel-booking-vertical@test/index.css'
  //Font Awesome
  linkTag.rel = 'stylesheet';
  linkTag.referrerPolicy = 'no-referrer';
  linkTag.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
  //MomentJS
  scriptTag.src = 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js';
  scriptTag.integrity = 'sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ==';
  scriptTag.crossOrigin = 'anonymous';
  scriptTag.referrerPolicy = 'no-referrer';
  //LitePicker
  scriptLitePicker.src = 'https://cdn.jsdelivr.net/npm/litepicker-polyfills-ie11/dist/index.js';
  scriptLitePicker2.src = 'https://cdn.jsdelivr.net/npm/litepicker/dist/litepicker.js';
  //Custom JS
  // scriptJS.src = 'https://cdn.jsdelivr.net/gh/hectorsum/hotel-booking-vertical@master/index.js';

  document.head.appendChild(scriptTag);
  headTag.appendChild(linkTag);
  headTag.appendChild(linkCss);
  document.body.insertBefore(scriptLitePicker,document.body.firstChild)
  document.body.insertBefore(scriptLitePicker2,document.body.firstChild)
  // headTag.appendChild(scriptLitePicker);
  // headTag.appendChild(scriptLitePicker2);
  // headTag.appendChild(scriptJS);
})(document,'head','');