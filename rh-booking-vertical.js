  // let headTag = document.getElementsByTagName('head')[0], 
  //     customCSS = document.createElement('link'),
  //     faCSS = document.createElement('link'), 
  //     scriptMomentJS = document.createElement('script'), 
  //     scriptLitePicker = document.createElement('script'), 
  //     scriptLitePicker2 = document.createElement('script'),
  //     autocompleteScript = document.createElement('script'),
  //     autocompleteCSS = document.createElement('link');
  // customCSS.rel = 'stylesheet';
  // customCSS.href = 'https://cdn.jsdelivr.net/gh/hectorsum/hotel-booking-vertical@rh-v1.0.5/index.css'
  // faCSS.rel = 'stylesheet';
  // faCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
  // scriptMomentJS.src = 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js';
  // scriptLitePicker.src = 'https://cdn.jsdelivr.net/npm/litepicker-polyfills-ie11/dist/index.js';
  // scriptLitePicker2.src = 'https://cdn.jsdelivr.net/npm/litepicker/dist/litepicker.js';
  // autocompleteCSS.href = 'https://cdn.jsdelivr.net/npm/@tarekraafat/autocomplete.js@10.2.6/dist/css/autoComplete.min.css';
  // autocompleteCSS.rel = 'stylesheet';
  // autocompleteScript.src = 'https://cdn.jsdelivr.net/npm/@tarekraafat/autocomplete.js@10.2.6/dist/autoComplete.min.js';
  // document.head.appendChild(customCSS);
  // document.head.appendChild(autocompleteCSS);
  // document.head.appendChild(faCSS);
  // document.head.appendChild(scriptMomentJS);
  // document.head.appendChild(autocompleteScript)
  // document.head.appendChild(scriptLitePicker)
  // document.head.appendChild(scriptLitePicker2)
  
  // headTag.appendChild(scriptLitePicker);
  // headTag.appendChild(scriptLitePicker2);
  // headTag.appendChild(scriptJS);

  let momentjs = 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js';
  let litepicker1 = 'https://cdn.jsdelivr.net/npm/litepicker-polyfills-ie11/dist/index.js';
  let litepicker2 = 'https://cdn.jsdelivr.net/npm/litepicker/dist/litepicker.js';
  let autocomplete = 'https://cdn.jsdelivr.net/npm/@tarekraafat/autocomplete.js@10.2.6/dist/autoComplete.min.js';
  let autocompleteCSS = 'https://cdn.jsdelivr.net/npm/@tarekraafat/autocomplete.js@10.2.6/dist/css/autoComplete.min.css';
  let fontawesome = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
  let custom = 'https://cdn.jsdelivr.net/gh/hectorsum/hotel-booking-vertical@rh-v1.0.5/index.css';
  document.write(`<link rel="stylesheet" href="${fontawesome}">`)
  document.write(`<link rel="stylesheet" href="${autocompleteCSS}">`)
  document.write(`<link rel="stylesheet" href="${custom}"/>`)
  document.write(`<script src=${momentjs}></script>`)
  document.write(`<script src=${litepicker1}></script>`)
  document.write(`<script src=${litepicker2}></script>`)
  document.write(`<script src=${autocomplete} async></script>`)


  // var scripts = [
  //   "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js",
  //   "https://cdn.jsdelivr.net/npm/@tarekraafat/autocomplete.js@10.2.6/dist/autoComplete.min.js",
  //   "https://cdn.jsdelivr.net/npm/litepicker-polyfills-ie11/dist/index.js",
  //   "https://cdn.jsdelivr.net/npm/litepicker/dist/litepicker.js",
  // ];
  // var src;
  // var script;
  // var pendingScripts = [];
  // var firstScript = document.scripts[0];
  
  // // Watch scripts load in IE
  // function stateChange() {
  //   // Execute as many scripts in order as we can
  //   var pendingScript;
  //   while (pendingScripts[0] && pendingScripts[0].readyState == 'loaded') {
  //     pendingScript = pendingScripts.shift();
  //     // avoid future loading events from this script (eg, if src changes)
  //     pendingScript.onreadystatechange = null;
  //     // can't just appendChild, old IE bug if element isn't closed
  //     firstScript.parentNode.insertBefore(pendingScript, firstScript);
  //   }
  // }
  
  // // loop through our script urls
  // while (src = scripts.shift()) {
  //   if ('async' in firstScript) { // modern browsers
  //     script = document.createElement('script');
  //     script.defer = false;
  //     script.src = src;
  //     script.async = true;
  //     document.head.appendChild(script);
  //   }
  //   else if (firstScript.readyState) { // IE<10
  //     // create a script and add it to our todo pile
  //     script = document.createElement('script');
  //     pendingScripts.push(script);
  //     // listen for state changes
  //     script.onreadystatechange = stateChange;
  //     // must set src AFTER adding onreadystatechange listener
  //     // else we’ll miss the loaded event for cached scripts
  //     script.src = src;
  //   }
  //   else { // fall back to defer
  //     document.write('<script src="' + src + '" defer></'+'script>');
  //   }
  // }


// [
//  "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js",
//  "https://cdn.jsdelivr.net/npm/@tarekraafat/autocomplete.js@10.2.6/dist/autoComplete.min.js",
//  "https://cdn.jsdelivr.net/npm/litepicker-polyfills-ie11/dist/index.js",
//  "https://cdn.jsdelivr.net/npm/litepicker/dist/litepicker.js",
// ].forEach(load_script);