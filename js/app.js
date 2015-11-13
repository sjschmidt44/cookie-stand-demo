'use strict'

var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var shops = [];

var pikePlace = {
  minCustomer: 7,
  maxCustomer: 18,
  avgCustomer: 2.5,
  hourlyCookies: [],
  dailyCookies: 0,
  shops.push(this)
  
  randCustomer: function(min, max) {
    return Math.random() * (max - min) + min;
  },

  generateHourly: function() {
    for (h in hours) {
      hourlyCookies = Math.floor(this.avgCustomer * this.randCustomer());
    }
  }
}
