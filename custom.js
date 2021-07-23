(function(doc,tag,i){
  let headTag = doc.getElementsByTagName(tag)[0], 
      linkTag = doc.createElement('link'), 
      scriptTag = doc.createElement('script'), 
      scriptLitePicker = doc.createElement('script'), 
      scriptLitePicker2 = doc.createElement('script');
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

  headTag.appendChild(linkTag);
  headTag.appendChild(scriptTag);
  // headTag.nextElementSibling.appendChild(scriptLitePicker)
  // headTag.nextElementSibling.appendChild(scriptLitePicker2)
})(document,'head','');


new Vertical_BookingRH({
  tabs: {
    HA: { //Hotel + Airport
      aiport: true,
      checkinout: false,
      children: true,
      adults: true,
      promocode: true,
      agencygroup: false,
      button: true,
    },
    HO: { //Hotel Only
      aiport: false,
      checkinout: true,
      children: true,
      adults: true,
      promocode: false,
      agencygroup: false,
      button: true
    },
  }
});