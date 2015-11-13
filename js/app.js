'use strict'

var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var shops = [pikePlace];

var pikePlace = {
  minCustomer: 7,
  maxCustomer: 18,
  avgCustomer: 2.5,
  hourlyCookies: [],
  dailyCookies: 0,
  
  randCustomer: function(min, max) {
    return Math.random() * (max - min) + min;
  },

  generateHourly: function() {
    for (var i = 0; i < hours.length; i++) {
      var cookie = Math.floor(this.avgCustomer * this.randCustomer(this.minCustomer, this.maxCustomer));
      this.hourlyCookies = cookie;
      this.dailyCookies += cookie;
    }
  }
}
