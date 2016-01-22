(function() {
  'use strict'

  var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

  var pikePlace = {
    name: 'Pike Place',
    minCustomer: 17,
    maxCustomer: 88,
    avgCustomer: 5.2,
    hourlyCookies: [],
    dailyCookies: 0,

    randCustomer: function(min, max) {
      return Math.random() * (max - min) + min;
    },

    generateHourly: function() {
      for (var i = 0; i < hours.length; i++) {
        var cookie = Math.floor(this.avgCustomer * this.randCustomer(this.minCustomer, this.maxCustomer));
        this.hourlyCookies.push(hours[i] + ': ' + cookie);
        this.dailyCookies += cookie;
      }
    },
  }

  var seaTac = {
    name: 'SeaTac Airport',
    minCustomer: 6,
    maxCustomer: 44,
    avgCustomer: 1.2,
    hourlyCookies: [],
    dailyCookies: 0,

    randCustomer: function(min, max) {
      return Math.random() * (max - min) + min;
    },

    generateHourly: function() {
      for (var i = 0; i < hours.length; i++) {
        var cookie = Math.floor(this.avgCustomer * this.randCustomer(this.minCustomer, this.maxCustomer));
        this.hourlyCookies.push(hours[i] + ': ' + cookie);
        this.dailyCookies += cookie;
      }
    },
  }

  var southCenter = {
    name: 'Southcenter Mall',
    minCustomer: 11,
    maxCustomer: 38,
    avgCustomer: 1.9,
    hourlyCookies: [],
    dailyCookies: 0,

    randCustomer: function(min, max) {
      return Math.random() * (max - min) + min;
    },

    generateHourly: function() {
      for (var i = 0; i < hours.length; i++) {
        var cookie = Math.floor(this.avgCustomer * this.randCustomer(this.minCustomer, this.maxCustomer));
        this.hourlyCookies.push(hours[i] + ': ' + cookie);
        this.dailyCookies += cookie;
      }
    },
  }

  var bellevue = {
    name: 'Bellevue Square',
    minCustomer: 20,
    maxCustomer: 48,
    avgCustomer: 3.3,
    hourlyCookies: [],
    dailyCookies: 0,

    randCustomer: function(min, max) {
      return Math.random() * (max - min) + min;
    },

    generateHourly: function() {
      for (var i = 0; i < hours.length; i++) {
        var cookie = Math.floor(this.avgCustomer * this.randCustomer(this.minCustomer, this.maxCustomer));
        this.hourlyCookies.push(hours[i] + ': ' + cookie);
        this.dailyCookies += cookie;
      }
    },
  }

  var alki = {
    name: 'Alki',
    minCustomer: 3,
    maxCustomer: 24,
    avgCustomer: 2.6,
    hourlyCookies: [],
    dailyCookies: 0,

    randCustomer: function(min, max) {
      return Math.random() * (max - min) + min;
    },

    generateHourly: function() {
      for (var i = 0; i < hours.length; i++) {
        var cookie = Math.floor(this.avgCustomer * this.randCustomer(this.minCustomer, this.maxCustomer));
        this.hourlyCookies.push(hours[i] + ': ' + cookie);
        this.dailyCookies += cookie;
      }
    },
  }

  var shops = [pikePlace, seaTac, bellevue, alki, southCenter]

  var template = Handlebars.compile(document.getElementById('store_template').innerHTML);
  document.getElementById('store_data').innerHTML = template(shops);
})()
