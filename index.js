export default class Vertical_BookingRH {
  constructor({
    tabs = this.setDefaultTab()
  }) {
    // this.loadLibraries();
    this.init();
    this.tabs = tabs;
    this.airport = tabs['HA'].aiport ? tabs['HA'].aiport : "";
    this.hotels = {};
    this.buttons = [tabs['HA'].button && tabs['HA'].button, tabs['HO'].button && tabs['HO'].button];

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
      // this.setAirport('HO')
    } else if (tabs && tabs['HA'] && tabs['HA'].aiport) {
      this.setAirport('HA')
    }
    // else if(tabs && tabs['HO'] && tabs['HO'].aiport){
    //   this.setAirport('HO')
    // }

    //Setting whether hotels dropdown or input hidden
    if (tabs && tabs['HA'] && tabs['HA'].hotels &&
      tabs['HO'] && tabs['HO'].hotels) {
      // this.hotels = tabs['HO'].hotels;
      if (Object.keys(tabs['HA'].hotels).length > 1 &&
        Object.keys(tabs['HO'].hotels).length > 1) {
        console.log('Both with multiple hotels')
        this.setHotelDropdown('HA');
        this.setOptionTag('HA', tabs['HA'].hotels)
        this.setHotelDropdown('HO');
        this.setOptionTag('HO', tabs['HO'].hotels)
      } else if (Object.keys(tabs['HA'].hotels).length > 1 &&
        Object.keys(tabs['HO'].hotels).length === 1) {
        this.setHotelDropdown('HA');
        this.setOptionTag('HA', tabs['HA'].hotels)
        this.setHotelInput('HO', Object.keys(tabs['HO'].hotels));
      } else if (Object.keys(tabs['HA'].hotels).length === 1 &&
        Object.keys(tabs['HO'].hotels).length > 1) {
        this.setHotelDropdown('HO');
        this.setOptionTag('HO', tabs['HO'].hotels)
        this.setHotelInput('HA', Object.keys(tabs['HA'].hotels));
      } else if (Object.keys(tabs['HA'].hotels).length === 1 &&
        Object.keys(tabs['HO'].hotels).length === 1) {
        this.setHotelInput('HA', Object.keys(tabs['HA'].hotels));
        this.setHotelInput('HO', Object.keys(tabs['HO'].hotels));
      }
    } else if (tabs && tabs['HA'] && tabs['HA'].hotels) {
      this.hotels = tabs['HA'].hotels;
      console.log('second!')
      if (Object.keys(this.hotels).length > 1) {
        this.setHotelDropdown('HA');
        this.setOptionTag('HA', this.hotels)
      } else {
        this.setHotelInput('HA', Object.keys(this.hotels));
      }
    } else if (tabs && tabs['HO'] && tabs['HO'].hotels) {
      this.hotels = tabs['HO'].hotels;
      if (Object.keys(this.hotels).length > 1) {
        this.setHotelDropdown('HO');
        this.setOptionTag('HO', this.hotels)
      } else {
        this.setHotelInput('HO', Object.keys(this.hotels));
      }
    }

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
      //Validating that every button returns true
      if (this.buttons.every(e => e === true)) {
        document.querySelectorAll('#widget-rh-v .post').forEach(item => {
          item.addEventListener('click', e => {
            if (e.target.id === 'btnSubmit-HA') {
              const airport = document.getElementById('airport-hidden').value;
              if (!airport) {
                alert('Please select an airport');
                return false;
              }
              document.getElementById('myform_HA_v').submit();
            }else if (e.target.id === 'btnSubmit-HO'){
              document.getElementById('myform_HO_v').submit();
            }
          })
        });
      }
      if (this.airport) {
        new autoComplete({
          placeHolder: "Please enter your airport",
          selector: "#autoComplete",
          data: {
            src: async (query) => {
              try {
                const source = await fetch(`https://www.reservhotel.com/win/owa/ibe5.get_airport_json?p_search=${query}`);
                const airports = await source.json();
                return airports;
              } catch (error) {
                return error;
              }
            },
            keys: ["value", "label"],
            cache: false,
            filter: (list) => {
              return list;
            }
          },
          resultsList: {
            element: (list, data) => {
              if (!data.results.length) {
                // Create "No Results" message element
                const message = document.createElement("div");
                message.setAttribute("class", "no_result");
                message.innerHTML = `<span>Found No Results for "${data.query}"</span>`;
                list.prepend(message);
              }
            },
            noResults: true,
            maxResults: 15,
            tabSelect: true,
          },
          resultItem: {
            element: (item, data) => {
              // console.log('data: ', data)
              // Modify Results Item Style
              item.style = "display: flex; justify-content: space-between;";
              // Modify Results Item Content
              item.innerHTML = `
                    <span style="color:#181818; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">
                    ${data.value.label}
                    </span>
                    <span style="display: flex; align-items: center; font-size: 13px; font-weight: 100; text-transform: uppercase; color: rgba(0,0,0,.2);">
                      AIRPORT
                    </span>`;
            },
            highlight: true
          },
          events: {
            input: {
              selection: (event) => {
                // console.log(event.detail.selection.value.AI_NAME)
                const selection = event.detail.selection.value.label;
                const airport_code = event.detail.selection.value.value;
                // let store_to_hidden = document.getElementById('airport-hidden').value;
                const autoCompleteJS = document.getElementById('autoComplete');
                autoCompleteJS.value = selection;
                document.getElementById('airport-hidden').value = airport_code;
                console.log(document.getElementById('airport-hidden').value)
              }
            }
          }
        });
      }
      const setStartDate = moment(new Date()).format("D-MMM-YY");
      const setEndDate = moment(new Date()).add(1, 'days').format("D-MMM-YY");
      //setting up dates to both tabs
      if (this.tabs && this.tabs['HA'] && this.tabs['HA'].checkinout) {
        const spans_check_in_tab1 = document.getElementById('check-in-date-HA');
        const spans_check_out_tab1 = document.getElementById('check-out-date-HA');
        const checkin_hidden = document.getElementById('checkin-HA');
        const checkout_hidden = document.getElementById('checkout-HA');
        //Setting values
        spans_check_in_tab1.innerHTML = setStartDate;
        spans_check_out_tab1.innerHTML = setEndDate;
        checkin_hidden.value = setStartDate;
        checkout_hidden.value = setEndDate;
      }
      if (this.tabs && this.tabs['HO'] && this.tabs['HO'].checkinout) {
        const spans_check_in_tab2 = document.getElementById('check-in-date-HO');
        const spans_check_out_tab2 = document.getElementById('check-out-date-HO');
        const checkin_hidden = document.getElementById('checkin-HO');
        const checkout_hidden = document.getElementById('checkout-HO');
        spans_check_in_tab2.innerHTML = setStartDate;
        spans_check_out_tab2.innerHTML = setEndDate;
        checkin_hidden.value = setStartDate;
        checkout_hidden.value = setEndDate;
      }
      if (this.tabs && this.tabs['HA'] && this.tabs['HA'].checkinout) {
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
              const checkin_hidden = document.getElementById('checkin-HA');
              const checkout_hidden = document.getElementById('checkout-HA');
              checkin_hidden.value = setStartDate;
              checkout_hidden.value = setEndDate;
              document.getElementById('check-in-date-HA').innerHTML = setStartDate;
              document.getElementById('check-out-date-HA').innerHTML = setEndDate;
            });
          },
        });
        // picker.DateTime();
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
              const checkin_hidden = document.getElementById('checkin-HO');
              const checkout_hidden = document.getElementById('checkout-HO');
              checkin_hidden.value = setStartDate;
              checkout_hidden.value = setEndDate;
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
  isConstructor(func) {
    try {
      new func()
    } catch (error) {
      return false;
    }
    return true;
  }
  settingFieldSet(tabInitials, PromoCodeField = '', AgencyGroupField = '') {
    const bodytab = document.getElementById(`myform_${tabInitials}_v`);
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
      <input type="text" name="PC" class="form__field" id="promocode-${tabInitials}" placeholder="Promo Code" autocomplete="off">
      <label for="promocode" class="form__label">Promo Code</label>
    `;
    return promoCodeDiv;
  }
  setAgencyGroup(tabInitials) {
    if (!tabInitials) throw Error('Airport parameter must receive a tab initials. i.e: HO/HA')
    let promoCodeDiv = document.createElement('div');
    promoCodeDiv.className = 'form__group field col'
    promoCodeDiv.innerHTML = `
      <input type="text" name="AFF" class="form__field" id="agencygroup-${tabInitials}" placeholder="Agency/Group" autocomplete="off">
      <label for="agencygroup-${tabInitials}" class="form__label">Agency/Group</label>
    `;
    return promoCodeDiv;
  }
  setButton(tabInitials) {
    if (!tabInitials) throw Error('Airport parameter must receive a tab initials. i.e: HO/HA')
    const bodytab = document.getElementById(`myform_${tabInitials}_v`);
    let buttonDiv = document.createElement('div');
    buttonDiv.className = 'col-md-12 p-0 mt-2';
    buttonDiv.innerHTML = `
    <div class="button-container">
      <button type="button" class="post" id="btnSubmit-${tabInitials}">
        <h2 class="post-title">Find Rates</h2>
      </button>
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
      <form name="myform_HA_v" id="myform_HA_v" action="https://www.reservhotel.com/miami-united-states/test-hotel/booking-engine/ibe5.main"
        onsubmit="_gaq.push(['_linkByPost', this, true]); gotoReservHotel('HA');" style="margin:0;">
      </form>
      <div id="myModal-HA" class="modal">
        <div class="modal-content" id="modal-content-HA">
        </div>
      </div>
    `;
    bodyHO.className = 'form-input d-flex col-md-12 row m-0 body-tab-HO-v';
    bodyHO.setAttribute('id', 'body-tab-HO-v');
    bodyHO.innerHTML = `
      <form name="myform_HO_v" id="myform_HO_v" action="https://www.reservhotel.com/miami-united-states/test-hotel/booking-engine/ibe5.main"
      onsubmit="_gaq.push(['_linkByPost', this, true]); gotoReservHotel('HO');" style="margin:0;">
      </form>
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
      <form name="myform_HA_v" id="myform_HA_v" action="https://www.reservhotel.com/miami-united-states/test-hotel/booking-engine/ibe5.main"
      onsubmit="_gaq.push(['_linkByPost', this, true]); gotoReservHotel('HA');" style="margin:0;">
      </form>
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
      <form name="myform_HO_v" id="myform_HO_v" action="https://www.reservhotel.com/miami-united-states/test-hotel/booking-engine/ibe5.main"
      onsubmit="_gaq.push(['_linkByPost', this, true]); gotoReservHotel();" style="margin:0;">
      </form>
      <div id="myModal-HO" class="modal">
        <div class="modal-content" id="modal-content-HO">
        </div>
      </div>
    `;
    widget.appendChild(bodyHO);
  }
  setCheckInOut(tabInitials) {
    if (!tabInitials) throw Error('Airport parameter must receive a tab initials. i.e: HO/HA')
    const bodytab = document.getElementById(`myform_${tabInitials}_v`);
    let checkinoutDiv = document.createElement("div")
    checkinoutDiv.className = 'check-in-out col-md-12 my-3';
    checkinoutDiv.setAttribute('id', 'check-in-out');
    checkinoutDiv.innerHTML = `
      <div class="check-in">
        <span class="check-in-label">CHECK-IN</span>
        <span class="check-in-date" id="check-in-date-${tabInitials}"></span>
        <input type="hidden" name="aDate" id="checkin-${tabInitials}" value=""/>
      </div>
      <span class="check-in-out-arrow">⇌</span>
      <div class="check-out">
        <span class="check-out-label">CHECK-OUT</span>
        <span class="check-out-date" id="check-out-date-${tabInitials}"></span>
        <input type="hidden" name="dDate" id="checkout-${tabInitials}" value=""/>
      </div>
    `;
    bodytab.appendChild(checkinoutDiv);
  }
  setAdults(tabInitials) {
    if (!tabInitials) throw Error('Airport parameter must receive a tab initials. i.e: HO/HA')
    const bodytab = document.getElementById(`myform_${tabInitials}_v`);
    let adultsDiv = document.createElement("div")
    adultsDiv.className = 'dropdown__field';
    adultsDiv.innerHTML = `
    <div class="field-icon">
    <i class="fas fa-user"></i>
    </div>
    <div class="selectdiv">
      <label>
        <select name="adults" id="adults-${tabInitials}-v">
          <option selected>1</option>
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
    const bodytab = document.getElementById(`myform_${tabInitials}_v`);
    let childrenDiv = document.createElement("div")
    childrenDiv.className = "dropdown__field";
    childrenDiv.innerHTML = `
      <div class="field-icon">
        <i class="fas fa-child"></i>
      </div>
      <div class="selectdiv">
        <label>
          <select name="child" id="children-${tabInitials}-v">
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
    const bodytab = document.getElementById(`myform_${tabInitials}_v`);
    let airportDiv = document.createElement("div")
    airportDiv.className = "form__group field col-md-12 px-0"
    airportDiv.innerHTML = `
      <div class="autoComplete_wrapper">
        <input id="autoComplete" type="search" autocomplete="off">
        <input type="hidden" name="airport" id="airport-hidden"/>
      </div>
    `;
    bodytab.append(airportDiv)
  }
  setHotelDropdown(tabInitials) {
    if (!tabInitials) throw Error('Airport parameter must receive a tab initials. i.e: HO/HA')
    const bodytab = document.getElementById(`myform_${tabInitials}_v`);
    let childrenDiv = document.createElement("div")
    childrenDiv.className = "dropdown__field";
    childrenDiv.innerHTML = `
      <div class="field-icon">
        <i class="fas fa-hotel"></i>
      </div>
      <div class="selectdiv">
        <label>
          <select name="hotel" id="hotels-${tabInitials}-v">
          </select>
        </label>
      </div>
    `;
    bodytab.appendChild(childrenDiv);
  }
  setHotelInput(tabInitials, value) {
    if (!tabInitials) throw Error('Airport parameter must receive a tab initials. i.e: HO/HA')
    const hotelid = this.getParameterByName('hotel',value);
    const bodytab = document.getElementById(`myform_${tabInitials}_v`);
    let input = document.createElement("input")
    input.type = 'hidden';
    input.name = 'hotel';
    input.id = `hotels-${tabInitials}-v`;
    input.value = hotelid;
    bodytab.appendChild(input);
  }
  setOptionTag(tabInitials, hotels) {
    let hotelsTemp = hotels;
    const dropdown = document.getElementById(`hotels-${tabInitials}-v`);
    for (let url in hotelsTemp) {
      var opt = document.createElement('option');
      const hotelid = this.getParameterByName('hotel',url)
      if(hotelid){
        opt.value = hotelid;
        opt.innerHTML = hotelsTemp[url];
        dropdown.appendChild(opt);
      }else{
        try {
          throw Error(`Please select the correct hotel url in ${tabInitials}`)
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
  getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
  gotoReservHotel(tabInitials) {
    var aD, dD;
    //Arrival & departure dates
    var today = new Date();
    today.setDate(today.getDate() + 5);
    //todays date plus 5
    var AFFILIATE = "";
    //Affiliate code IATA/ARC/CLID, etc
    var HOTELONLY = false;
    // Validating checkinout
    aD = new Date();
    dD = new Date();
    let checkin = document.getElementById(`check-in-date-${tabInitials}`).value;
    let checkout = document.getElementById(`check-out-date-${tabInitials}`).value;
    let airport = document.getElementById(`airport-${tabInitials}`)
    let button = document.getElementById(`btnSubmit-${tabInitials}`);
    if (checkin && checkout) {
      var i, month, month2;
      for (i = 0; i < 12; i++) {
        if (monthname[i] == checkin.substring(3, 6)) {
          month = i;
        }
        if (monthname[i] == checkout.substring(3, 6)) {
          month2 = i;
        }
      }
      aD.setFullYear("20" + dateText.substring(7), month, dateText.substring(0, 2));
      dD.setFullYear("20" + dateText2.substring(7), month2, dateText2.substring(0, 2));
    }

    if (!checkin) {
      console.log('Select your arrival date')
    } else if (!checkout) { //Check if departure date has been selected
      // document.getElementById("error").innerHTML = "Select your departure date";
      // $("#dialog").dialog("open");
      console.log('Select your departure date')
    } else if (!tabInitials('HO') && document.getElementById("airport") && document.getElementById("airport").value == "") { //check to see if the airport has been selected
      // document.getElementById("error").innerHTML = "You must select a departing airport for hotel and air packages.";
      // $("#dialog").dialog("open");
      console.log('You must select a departing airport for hotel and air packages.')
    } else if (aD < today && (document.getElementById("airport") && HOTELONLY == false)) { //check to see packages are selected in the future
      // document.getElementById("error").innerHTML = "Packages must have be select at least 5 days from today.";
      // $("#dialog").dialog("open");
      console.log('Packages must have be select at least 5 days from today.');
    } else {
      button.submit();
    }
  }
}