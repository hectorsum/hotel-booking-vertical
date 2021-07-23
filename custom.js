import Vertical_BookingRH from './index.js';

(function(doc,tag,i){
  let headTag = doc.getElementsByTagName(tag)[0], 
      linkCss = doc.createElement('link'),
      linkTag = doc.createElement('link');
  //Custom CSS
  linkCss.rel = 'stylesheet';
  linkCss.href = 'https://cdn.jsdelivr.net/gh/hectorsum/hotel-booking-vertical@master/index.css'
  //Font Awesome
  linkTag.rel = 'stylesheet';
  linkTag.referrerPolicy = 'no-referrer';
  linkTag.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
  headTag.appendChild(linkTag);
  headTag.appendChild(linkCss);
})(document,'head','');

new Vertical_BookingRH({
  tabs: {
    HA: { //Hotel + Airport
      aiport: true,
      checkinout: true,
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