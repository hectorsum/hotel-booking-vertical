import Vertical_BookingRH from './index.js';
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
      hotels:{
        '555':'Hotel 01',
        // 'ABC':'Hotel 02',
        // 'DSG':'Hotel 03',
      }
    },
    HO: { //Hotel Only
      aiport: false,
      checkinout: true,
      children: true,
      adults: true,
      promocode: false,
      agencygroup: false,
      button: true,
      hotels:{
        '555':'Hotel 01',
        // 'ABC':'Hotel 02',
        // 'DSG':'Hotel 03',
      }
    },
  }
});