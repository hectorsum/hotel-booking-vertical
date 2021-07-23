export default class Vertical_BookingRH {
  constructor({
    tabs = this.setDefaultTab()
  }) {
    // this.loadLibraries();
    this.init();
    this.tabs = tabs;
    //Setting up the tabs
    if (this.tabs) {
      if (this.tabs['HA'] && this.tabs['HO']) {
        this.setBothTabs();
      } else if (this.tabs['HA'] && !this.tabs['HO']) {
        this.setHATab();
      } else if (!this.tabs['HA'] && this.tabs['HO']) {
        this.setHOTab()
      } else {
        this.setDefaultTab()
      }
    }

    //Setting up airport field
    if (tabs && tabs['HA'] && tabs['HA'].aiport &&
      tabs['HO'] && tabs['HO'].aiport) {
      this.setAirport('HA')
      this.setAirport('HO')
    } else if (tabs && tabs['HA'] && tabs['HA'].aiport) {
      this.setAirport('HA')
    }
    // else if(tabs && tabs['HO'] && tabs['HO'].aiport){
    //   this.setAirport('HO')
    // }

    //Setting up checkinout
    if (tabs && tabs['HA'] && tabs['HA'].checkinout &&
      tabs['HO'] && tabs['HO'].checkinout) {
      this.setCheckInOut('HA')
      this.setCheckInOut('HO')
    } else if (tabs && tabs['HA'] && tabs['HA'].checkinout) {
      this.setCheckInOut('HA')
    } else if (tabs && tabs['HO'] && tabs['HO'].checkinout) {
      this.setCheckInOut('HO')
    }

    //Setting up children field
    if (tabs && tabs['HA'] && tabs['HA'].children &&
      tabs['HO'] && tabs['HO'].children) {
      this.setChildren('HA')
      this.setChildren('HO')
    } else if (tabs && tabs['HA'] && tabs['HA'].children) {
      this.setChildren('HA')
    } else if (tabs && tabs['HO'] && tabs['HO'].children) {
      console.log('setting airport')
      this.setChildren('HO')
    }
    //Setting up adults field
    if (tabs && tabs['HA'] && tabs['HA'].adults &&
      tabs['HO'] && tabs['HO'].adults) {
      this.setAdults('HA')
      this.setAdults('HO')
    } else if (tabs && tabs['HA'] && tabs['HA'].adults) {
      console.log('setting airport')
      this.setAdults('HA')
    } else if (tabs && tabs['HO'] && tabs['HO'].adults) {
      console.log('setting airport')
      this.setAdults('HO')
    }

    //Setting up Promo Code
    if (tabs && tabs['HA'] && tabs['HA'].promocode && tabs['HA'].agencygroup &&
      tabs['HO'] && tabs['HO'].promocode && tabs['HO'].agencygroup) { //if promocode and agency is set up in both tabs
      console.log('ZERO')
      this.settingFieldSet('HA', this.setPromoCode('HA'), this.setAgencyGroup('HA'))
      this.settingFieldSet('HO', this.setPromoCode('HO'), this.setAgencyGroup('HO'))
    } else if (tabs && tabs['HA'] && tabs['HA'].promocode &&
      !tabs['HA'].agencygroup &&
      tabs['HO'].promocode &&
      tabs['HO'].agencygroup) {
      console.log('1st')
      this.settingFieldSet('HA', this.setPromoCode('HA'), undefined)
      this.settingFieldSet('HO', this.setPromoCode('HO'), this.setAgencyGroup('HO'))
    } else if (tabs && tabs['HA'] && !tabs['HA'].promocode &&
      tabs['HA'].agencygroup &&
      tabs['HO'].promocode &&
      tabs['HO'].agencygroup) {
      console.log('2nd')
      this.settingFieldSet('HA', undefined, this.setAgencyGroup('HA'))
      this.settingFieldSet('HO', this.setPromoCode('HO'), this.setAgencyGroup('HO'))
    } else if (tabs && tabs['HA'] && tabs['HA'].promocode &&
      tabs['HA'].agencygroup &&
      !tabs['HO'].promocode &&
      tabs['HO'].agencygroup) {
      console.log('3rd')
      this.settingFieldSet('HA', this.setPromoCode('HA'), this.setAgencyGroup('HA'))
      this.settingFieldSet('HO', undefined, this.setAgencyGroup('HO'))
    } else if (tabs && tabs['HA'] && tabs['HA'].promocode &&
      tabs['HA'].agencygroup &&
      tabs['HO'].promocode &&
      !tabs['HO'].agencygroup) {
      console.log('4th')
      this.settingFieldSet('HA', this.setPromoCode('HA'), this.setAgencyGroup('HA'))
      this.settingFieldSet('HO', this.setPromoCode('HO'), undefined)
    } else if (tabs && tabs['HA'] && !tabs['HA'].promocode &&
      tabs['HA'].agencygroup &&
      !tabs['HO'].promocode &&
      tabs['HO'].agencygroup) {
      console.log('5th')
      this.settingFieldSet('HA', undefined, this.setAgencyGroup('HA'))
      this.settingFieldSet('HO', undefined, this.setAgencyGroup('HO'))
    } else if (tabs && tabs['HA'] && tabs['HA'].promocode &&
      !tabs['HA'].agencygroup &&
      tabs['HO'].promocode &&
      !tabs['HO'].agencygroup) {
      console.log('5th.2')
      this.settingFieldSet('HA', this.setPromoCode('HA'), undefined)
      this.settingFieldSet('HO', this.setPromoCode('HO'), undefined)
    } else if (tabs && tabs['HA'] && !tabs['HA'].promocode //F
      &&
      tabs['HA'].agencygroup //T
      &&
      tabs['HO'].promocode //T
      &&
      !tabs['HO'].agencygroup) { //F
      console.log('7th')
      this.settingFieldSet('HA', undefined, this.setAgencyGroup('HA'))
      this.settingFieldSet('HO', this.setPromoCode('HO'), undefined)
    } else if (tabs && tabs['HA'] && !tabs['HA'].promocode //F
      &&
      tabs['HA'].agencygroup //T
      &&
      tabs['HO'].promocode //T
      &&
      !tabs['HO'].agencygroup) { //F
      console.log('8th')
      this.settingFieldSet('HA', this.setPromoCode('HA'), undefined)
      this.settingFieldSet('HO', undefined, this.setAgencyGroup('HO'))
    } else if (tabs && tabs['HO'] && tabs['HO'].promocode &&
      tabs['HO'].agencygroup) {
      console.log('entering')
      this.settingFieldSet('HO', this.setPromoCode('HO'), this.setAgencyGroup('HO'))
    } else if (tabs && tabs['HA'] && tabs['HA'].promocode &&
      tabs['HA'].agencygroup) {
      console.log('entering2')
      this.settingFieldSet('HA', this.setPromoCode('HA'), this.setAgencyGroup('HA'))
    } else if (tabs && tabs['HA'] && tabs['HA'].promocode &&
      !tabs['HA'].agencygroup) {
      console.log('entering3')
      this.settingFieldSet('HA', this.setPromoCode('HA'), undefined)
    } else if (tabs && tabs['HO'] && tabs['HO'].promocode &&
      !tabs['HO'].agencygroup) {
      console.log('entering4')
      this.settingFieldSet('HO', this.setPromoCode('HO'), undefined)
    } else if (tabs && tabs['HA'] && tabs['HA'].agencygroup &&
      !tabs['HA'].promocode) {
      console.log('entering5')
      this.settingFieldSet('HA', undefined, this.setAgencyGroup('HA'))
    } else if (tabs && tabs['HO'] && tabs['HO'].agencygroup &&
      !tabs['HO'].promocode) {
      console.log('entering6')
      this.settingFieldSet('HO', undefined, this.setAgencyGroup('HO'))
    }

    //Setting up button
    if (tabs && tabs['HA'] && tabs['HA'].button &&
      tabs['HO'] && tabs['HO'].button) {
      this.setButton('HA')
      this.setButton('HO')
    } else if (tabs && tabs['HA'] && tabs['HA'].button) {
      this.setButton('HA')
    } else if (tabs && tabs['HO'] && tabs['HO'].button) {
      this.setButton('HO')
    }
  }

  init() {
    //Set this when DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
      // Setting Active Tabs
      let tabs = document.querySelectorAll(".tabs-rh-v li a");
      tabs.forEach((elem, idx) => {
        elem.addEventListener('click', () => {
          if (elem.classList.contains('active-tab-rh-V')) return false;
          elem.className += ' active-tab-rh-V';
          if (elem.classList.contains('tab1')) {
            document.getElementById('body-tab-HA-v').className += ' show-active-tab-v';
            document.getElementById('body-tab-HO-v').classList.remove('show-active-tab-v');
          } else if (elem.classList.contains('tab2')) {
            document.getElementById('body-tab-HO-v').className += ' show-active-tab-v';
            document.getElementById('body-tab-HA-v').classList.remove('show-active-tab-v');
          }
          tabs.forEach((ell, idy) => {
            if (idx !== idy) {
              ell.classList.remove('active-tab-rh-V');
            }
          })
        })
      })
      const setStartDate = moment(new Date()).format("D-MMM-YY");
      const setEndDate = moment(new Date()).add(1, 'days').format("D-MMM-YY");
      //setting up dates to both tabs
      if (this.tabs && this.tabs['HA'].checkinout) {
        const spans_check_in_tab1 = document.getElementById('check-in-date-HA');
        const spans_check_out_tab1 = document.getElementById('check-out-date-HA');
        spans_check_in_tab1.innerHTML = setStartDate;
        spans_check_out_tab1.innerHTML = setEndDate;
      }
      if (this.tabs && this.tabs['HO'].checkinout) {
        const spans_check_in_tab2 = document.getElementById('check-in-date-HO');
        const spans_check_out_tab2 = document.getElementById('check-out-date-HO');
        spans_check_in_tab2.innerHTML = setStartDate;
        spans_check_out_tab2.innerHTML = setEndDate;
      }
      if (this.tabs && this.tabs['HA'].checkinout) {
        console.log('entering!!')
        // DatePicker
        const popup1 = document.getElementById('myModal-HA');
        const btncheckinout = document.getElementById('check-in-out');
        const picker = new Litepicker({
          element: document.getElementById('modal-content-HA'),
          singleMode: false,
          tooltipText: {
            one: 'night',
            other: 'nights'
          },
          numberOfColumns: 2,
          numberOfMonths: 2,
          tooltipNumber: (totalDays) => {
            return totalDays - 1;
          },
          setup: (picker) => {
            picker.on('selected', () => {
              const {
                dateInstance: datestart
              } = picker.getStartDate()
              const {
                dateInstance: dateend
              } = picker.getEndDate()
              popup1.style.display = "none"; //closing popup
              const setStartDate = moment(datestart).format("D-MMM-YY");
              const setEndDate = moment(dateend).format("D-MMM-YY");
              document.getElementById('check-in-date-HA').innerHTML = setStartDate;
              document.getElementById('check-out-date-HA').innerHTML = setEndDate;
            });
          },
        });
        // picker.DateTime();
        console.log('picker: ',picker)
        // Popup - TAB1
        
        btncheckinout.addEventListener('click', () => {
          console.log('clicked')
          popup1.style.display = "block";
          picker.show();
        });
  
        window.addEventListener('click', (e) => {
          if (e.target == popup1) {
            popup1.style.display = "none";
          }
        })
      }
      if (this.tabs && this.tabs['HO'].checkinout) {
        // Popup - TAB2
        const popup2 = document.getElementById('myModal-HO');
        const btncheckinout2 = document.querySelector('.body-tab-HO-v .check-in-out');
  
        // DatePicker
        const picker2 = new Litepicker({
          element: document.getElementById('modal-content-HO'),
          singleMode: false,
          tooltipText: {
            one: 'night',
            other: 'nights'
          },
          numberOfColumns: 2,
          numberOfMonths: 2,
          tooltipNumber: (totalDays) => {
            return totalDays - 1;
          },
          setup: (picker) => {
            picker.on('selected', () => {
              const {
                dateInstance: datestart
              } = picker.getStartDate()
              const {
                dateInstance: dateend
              } = picker.getEndDate()
              popup2.style.display = "none"; //closing popup
              const setStartDate = moment(datestart).format("D-MMM-YY");
              const setEndDate = moment(dateend).format("D-MMM-YY");
              document.getElementById('check-in-date-HO').innerHTML = setStartDate;
              document.getElementById('check-out-date-HO').innerHTML = setEndDate;
            });
          },
        });
        // picker.DateTime();
        btncheckinout2.addEventListener('click', () => {
          popup2.style.display = "block";
          picker2.show();
        });
        window.addEventListener('click', (e) => {
          if (e.target == popup2) {
            popup2.style.display = "none";
          }
        })
      }
    })
  }
  settingFieldSet(tabInitials, PromoCodeField = '', AgencyGroupField = '') {
    const bodytab = document.getElementById(`body-tab-${tabInitials}-v`);
    console.log({
      tabInitials,
      PromoCodeField,
      AgencyGroupField
    })
    let fieldset = document.createElement('fieldset');
    fieldset.innerHTML = `
      <legend>OPTIONAL</legend>
      <div class="col-md-12 row m-0 p-0">
        ${PromoCodeField && PromoCodeField.outerHTML}
        ${AgencyGroupField && AgencyGroupField.outerHTML}
      </div>
    `;
    bodytab.appendChild(fieldset);
  }
  setPromoCode(tabInitials) {
    if (!tabInitials) throw Error('Airport parameter must receive a tab initials. i.e: HO/HA')
    let promoCodeDiv = document.createElement('div');
    promoCodeDiv.className = 'form__group field col'
    promoCodeDiv.innerHTML = `
      <input type="text" class="form__field" id="promocode-${tabInitials}" placeholder="Promo Code" autocomplete="off">
      <label for="promocode-${tabInitials}" class="form__label">Promo Code</label>
    `;
    return promoCodeDiv;
  }
  setAgencyGroup(tabInitials) {
    if (!tabInitials) throw Error('Airport parameter must receive a tab initials. i.e: HO/HA')
    let promoCodeDiv = document.createElement('div');
    promoCodeDiv.className = 'form__group field col'
    promoCodeDiv.innerHTML = `
      <input type="text" class="form__field" id="agencygroup-${tabInitials}" placeholder="Agency/Group" autocomplete="off">
      <label for="agencygroup-${tabInitials}" class="form__label">Agency/Group</label>
    `;
    return promoCodeDiv;
  }
  setButton(tabInitials) {
    if (!tabInitials) throw Error('Airport parameter must receive a tab initials. i.e: HO/HA')
    const bodytab = document.getElementById(`body-tab-${tabInitials}-v`);
    let buttonDiv = document.createElement('div');
    buttonDiv.className = 'col-md-12 p-0 mt-2';
    buttonDiv.innerHTML = `
    <div class="button-container">
      <a class="post" href="#">
        <h2 class="post-title">Find Rates</h2>
      </a>
    </div>
    `;
    bodytab.appendChild(buttonDiv);
  }
  setDefaultTab() {
    const widget = document.getElementById('widget-rh-v');
    let tabDiv = document.createElement('ul');
    tabDiv.className = 'tabs-rh-v';
    tabDiv.innerHTML = `
      <li>
        <a class="tab1 active-tab-rh-V" href="#">HOTEL + AIR</a>
      </li>
    `;
    widget.appendChild(tabDiv);
  }
  setBothTabs() {
    const widget = document.getElementById('widget-rh-v');
    let tabDiv = document.createElement('ul');
    console.log('TABS CREATED')
    tabDiv.className = 'tabs-rh-v';
    tabDiv.innerHTML = `
    <li>
      <a class="tab1 active-tab-rh-V" href="#">HOTEL + AIR</a>
    </li>
    <li>
      <a class="tab2" href="#">HOTEL ONLY</a>
    </li>
    `;
    widget.appendChild(tabDiv);
    let bodyHA = document.createElement('div');
    let bodyHO = document.createElement('div');
    bodyHA.className = 'form-input d-flex col-md-12 row m-0 body-tab-HA-v show-active-tab-v';
    bodyHA.setAttribute('id', 'body-tab-HA-v');
    bodyHA.innerHTML = `
      <div id="myModal-HA" class="modal">
        <div class="modal-content" id="modal-content-HA">
        </div>
      </div>
    `;
    bodyHO.className = 'form-input d-flex col-md-12 row m-0 body-tab-HO-v';
    bodyHO.setAttribute('id', 'body-tab-HO-v');
    bodyHO.innerHTML = `
      <div id="myModal-HO" class="modal">
        <div class="modal-content" id="modal-content-HO">
        </div>
      </div>
    `;
    widget.appendChild(bodyHA);
    widget.appendChild(bodyHO);
  }
  setHATab() {
    const widget = document.getElementById('widget-rh-v');
    let tabDiv = document.createElement('ul');
    tabDiv.className = 'tabs-rh-v';
    tabDiv.innerHTML = `
    <li>
      <a class="tab1 active-tab-rh-V" href="#">HOTEL + AIR</a>
    </li>
    `;
    widget.appendChild(tabDiv);
    let bodyHA = document.createElement('div');
    bodyHA.setAttribute('id', 'body-tab-HA-v');
    bodyHA.className = 'form-input d-flex col-md-12 row m-0 body-tab-HA-v show-active-tab-v';
    //setting up the modal which is related to the datepicker
    bodyHA.innerHTML = `
      <div id="myModal-HA" class="modal">
        <div class="modal-content" id="modal-content-HA">
        </div>
      </div>
    `;
    widget.appendChild(bodyHA);
  }
  setHOTab() {
    const widget = document.getElementById('widget-rh-v');
    let tabDiv = document.createElement('ul');
    tabDiv.className = 'tabs-rh-v';
    tabDiv.innerHTML = `
    <li>
      <a class="tab2 active-tab-rh-V" href="#">HOTEL ONLY</a>
    </li>
    `;
    widget.appendChild(tabDiv);
    let bodyHO = document.createElement('div');
    bodyHO.setAttribute('id', 'body-tab-HO-v');
    bodyHO.className = 'form-input d-flex col-md-12 row m-0 body-tab-HA-v show-active-tab-v';
    //setting up the modal which is related to the datepicker
    bodyHO.innerHTML = `
      <div id="myModal-HO" class="modal">
        <div class="modal-content" id="modal-content-HO">
        </div>
      </div>
    `;
    widget.appendChild(bodyHO);
  }
  setCheckInOut(tabInitials) {
    if (!tabInitials) throw Error('Airport parameter must receive a tab initials. i.e: HO/HA')
    const bodytab = document.getElementById(`body-tab-${tabInitials}-v`);
    let checkinoutDiv = document.createElement("div")
    checkinoutDiv.className = 'check-in-out col-md-12 my-3';
    checkinoutDiv.setAttribute('id', 'check-in-out');
    checkinoutDiv.innerHTML = `
      <div class="check-in">
        <span class="check-in-label">CHECK-IN</span>
        <span class="check-in-date" id="check-in-date-${tabInitials}"></span>
      </div>
      <span class="check-in-out-arrow">⇌</span>
      <div class="check-out">
        <span class="check-out-label">CHECK-OUT</span>
        <span class="check-out-date" id="check-out-date-${tabInitials}"></span>
      </div>
    `;
    bodytab.appendChild(checkinoutDiv);
  }
  setAdults(tabInitials) {
    if (!tabInitials) throw Error('Airport parameter must receive a tab initials. i.e: HO/HA')
    const bodytab = document.getElementById(`body-tab-${tabInitials}-v`);
    let adultsDiv = document.createElement("div")
    adultsDiv.className = 'dropdown__field';
    adultsDiv.innerHTML = `
    <div class="field-icon">
    <i class="fas fa-user"></i>
    </div>
    <div class="selectdiv">
      <label>
        <select name="" id="">
          <option selected>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </label>
    </div>
    `;
    bodytab.appendChild(adultsDiv);
  }
  setChildren(tabInitials) {
    if (!tabInitials) throw Error('Airport parameter must receive a tab initials. i.e: HO/HA')
    const bodytab = document.getElementById(`body-tab-${tabInitials}-v`);
    let childrenDiv = document.createElement("div")
    childrenDiv.className = "dropdown__field";
    childrenDiv.innerHTML = `
      <div class="field-icon">
        <i class="fas fa-child"></i>
      </div>
      <div class="selectdiv">
        <label>
          <select name="" id="">
            <option selected>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </label>
      </div>
    `;
    bodytab.appendChild(childrenDiv);
  }
  setAirport(tabInitials = 'HA') {
    if (!tabInitials) throw Error('Airport parameter must receive a tab initials. i.e: HO/HA')
    const bodytab = document.getElementById(`body-tab-${tabInitials}-v`);
    let airportDiv = document.createElement("div")
    airportDiv.className = "form__group field col-md-12 px-0"
    airportDiv.innerHTML = `
      <input type="text" class="form__field" id="airport-${bodytab}" placeholder="Please enter your airport" autocomplete="off" required>
      <label for="airport-${bodytab}" class="form__label">Please enter your airport</label>
    `;
    bodytab.append(airportDiv)
  }
}

// //Set this when DOM is loaded
// const setStartDate = moment(new Date()).format("D-MMM-YY");
// const setEndDate = moment(new Date()).add(1, 'days').format("D-MMM-YY");
// console.log({setStartDate, setEndDate})
// document.addEventListener('DOMContentLoaded', () => {
//   //setting up dates to both tabs
//   const spans_check_in_tab1 = document.getElementById('check-in-date-HA');
//   const spans_check_out_tab1 = document.getElementById('check-out-date-HA');
//   const spans_check_in_tab2 = document.getElementById('check-in-date-HO');
//   const spans_check_out_tab2 = document.getElementById('check-out-date-HO');
//   if(spans_check_in_tab1 && spans_check_out_tab1 || spans_check_in_tab2 && spans_check_out_tab2){
//     spans_check_in_tab1.innerHTML = setStartDate;
//     spans_check_out_tab1.innerHTML = setEndDate;
//     spans_check_in_tab2.innerHTML = setStartDate;
//     spans_check_out_tab2.innerHTML = setEndDate;
//   }
// })
// // Setting Active Tabs
// let tabs = document.querySelectorAll(".tabs-rh-v li a");
// tabs.forEach((elem, idx) => {
//   elem.addEventListener('click', () => {
//     if (elem.classList.contains('active-tab-rh-V')) return false;
//     elem.className += ' active-tab-rh-V';
//     if (elem.classList.contains('tab1')) {
//       document.getElementById('body-tab-HA-v').className += ' show-active-tab-v';
//       document.getElementById('body-tab-HO-v').classList.remove('show-active-tab-v');
//     } else if (elem.classList.contains('tab2')) {
//       document.getElementById('body-tab-HO-v').className += ' show-active-tab-v';
//       document.getElementById('body-tab-HA-v').classList.remove('show-active-tab-v');
//     }
//     tabs.forEach((ell, idy) => {
//       if (idx !== idy) {
//         ell.classList.remove('active-tab-rh-V');
//       }
//     })
//   })
// })

// // Popup - TAB1
// const popup1 = document.getElementById('myModal-HA');
// const btncheckinout = document.getElementById('check-in-out');

// // DatePicker
// const picker = new Litepicker({
//   element: document.getElementById('modal-content-HA'),
//   singleMode: false,
//   tooltipText: {
//     one: 'night',
//     other: 'nights'
//   },
//   numberOfColumns: 2,
//   numberOfMonths: 2,
//   tooltipNumber: (totalDays) => {
//     return totalDays - 1;
//   },
//   setup: (picker) => {
//     picker.on('selected', () => {
//       const {
//         dateInstance: datestart
//       } = picker.getStartDate()
//       const {
//         dateInstance: dateend
//       } = picker.getEndDate()
//       popup1.style.display = "none"; //closing popup
//       const setStartDate = moment(datestart).format("D-MMM-YY");
//       const setEndDate = moment(dateend).format("D-MMM-YY");
//       document.getElementById('check-in-date-HA').innerHTML = setStartDate;
//       document.getElementById('check-out-date-HA').innerHTML = setEndDate;
//     });
//   },
// });
// // picker.DateTime();
// btncheckinout && btncheckinout.addEventListener('click', () => {
//   popup1.style.display = "block";
//   picker.show();
// });

// window.addEventListener('click', (e) => {
//   if (e.target == popup1) {
//     popup1.style.display = "none";
//   }
// })

// // Popup - TAB2
// const popup2 = document.getElementById('myModal-HO');
// const btncheckinout2 = document.querySelector('.body-tab-HO-v .check-in-out');

// // DatePicker
// const picker2 = new Litepicker({
//   element: document.getElementById('modal-content-HO') || " ",
//   singleMode: false,
//   tooltipText: {
//     one: 'night',
//     other: 'nights'
//   },
//   numberOfColumns: 2,
//   numberOfMonths: 2,
//   tooltipNumber: (totalDays) => {
//     return totalDays - 1;
//   },
//   setup: (picker) => {
//     picker.on('selected', () => {
//       const {
//         dateInstance: datestart
//       } = picker.getStartDate()
//       const {
//         dateInstance: dateend
//       } = picker.getEndDate()
//       popup2.style.display = "none"; //closing popup
//       const setStartDate = moment(datestart).format("D-MMM-YY");
//       const setEndDate = moment(dateend).format("D-MMM-YY");
//       document.getElementById('check-in-date-HO').innerHTML = setStartDate;
//       document.getElementById('check-out-date-HO').innerHTML = setEndDate;
//     });
//   },
// });
// // picker.DateTime();
// btncheckinout2.addEventListener('click', () => {
//   popup2.style.display = "block";
//   picker2.show();
// });

// window.addEventListener('click', (e) => {
//   if (e.target == popup2) {
//     popup2.style.display = "none";
//   }
// })