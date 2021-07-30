(function(doc,tag,i){
  let headTag = doc.getElementsByTagName(tag)[0], 
      customCSS = doc.createElement('link'),
      faCSS = doc.createElement('link'), 
      scriptMomentJS = doc.createElement('script'), 
      scriptLitePicker = doc.createElement('script'), 
      scriptLitePicker2 = doc.createElement('script'),
      autocompleteScript = doc.createElement('script'),
      autocompleteCSS = doc.createElement('link');
  //Custom CSS
  customCSS.rel = 'stylesheet';
  customCSS.href = 'https://cdn.jsdelivr.net/gh/hectorsum/hotel-booking-vertical@rh-v1.0.5/index.css'
  //Font Awesome
  faCSS.rel = 'stylesheet';
  // linkTag.referrerPolicy = 'no-referrer';
  faCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
  //MomentJS
  scriptMomentJS.src = 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js';
  //LitePicker
  scriptLitePicker.src = 'https://cdn.jsdelivr.net/npm/litepicker-polyfills-ie11/dist/index.js';
  scriptLitePicker2.src = 'https://cdn.jsdelivr.net/npm/litepicker/dist/litepicker.js';
  //Autocomplete
  autocompleteCSS.href = 'https://cdn.jsdelivr.net/npm/@tarekraafat/autocomplete.js@10.2.6/dist/css/autoComplete.min.css';
  autocompleteCSS.rel = 'stylesheet';
  
  autocompleteScript.src = 'https://cdn.jsdelivr.net/npm/@tarekraafat/autocomplete.js@10.2.6/dist/autoComplete.min.js';

  document.head.appendChild(customCSS);
  document.head.appendChild(autocompleteCSS);
  document.head.appendChild(faCSS);
  document.head.appendChild(scriptMomentJS);
  console.log(document.body.lastChild)
  document.body.insertBefore(autocompleteScript,document.body.lastChild)
  document.body.insertBefore(scriptLitePicker,document.body.lastChild)
  document.body.insertBefore(scriptLitePicker2,document.body.lastChild)
  // headTag.appendChild(scriptLitePicker);
  // headTag.appendChild(scriptLitePicker2);
  // headTag.appendChild(scriptJS);

  // let momentjs = 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js';
  // let litepicker1 = 'https://cdn.jsdelivr.net/npm/litepicker-polyfills-ie11/dist/index.js';
  // let litepicker2 = 'https://cdn.jsdelivr.net/npm/litepicker/dist/litepicker.js';
  // let fontawesome = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
  // let custom = 'https://cdn.jsdelivr.net/gh/hectorsum/hotel-booking-vertical@rh-v1.0.5/index.css';
  // eval(document.write(`<link ref="stylesheet" href=${fontawesome}></link>`))
  // eval(document.write(`<link ref="stylesheet" href=${custom}></link>`))
  // eval(document.write(`<script src=${momentjs} type="text/javascript" async></script>`))
  // eval(document.write(`<script src=${litepicker1} type="text/javascript" async></script>`))
  // eval(document.write(`<script src=${litepicker2} type="text/javascript" async></script>`))
  
})(document,'head','');