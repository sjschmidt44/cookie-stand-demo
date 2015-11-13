'use strict'

var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var shops = [pikePlace];

var pikePlace = {
  name: 'Pike Place',
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
      this.hourlyCookies.push(cookie);
      this.dailyCookies += cookie;
    }
  },

  render: function() {
    this.generateHourly();

    var ulEl = document.createElement('ul');
    ulEl.appendChild(document.createTextNode(this.name));
    var sectionEl = document.getElementById('store_data').appendChild(ulEl);

    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ": " + this.hourlyCookies[i];
      ulEl.appendChild(liEl);
    }
  }
}
