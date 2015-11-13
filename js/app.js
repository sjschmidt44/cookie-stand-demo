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

var shops = [pikePlace, seaTac, southCenter, bellevue, alki];
for (var i = 0; i < shops.length; i++) {
  shops[i].render();
}
