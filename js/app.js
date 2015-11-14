'use strict'

var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var shops = [];

function CookieShop(name, minCustomer, maxCustomer, avgCustomer) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCustomer = avgCustomer;
  this.hourlyCookies = [];
  this.dailyCookies = 0;
  shops.push(this);

  this.generateHourly();  
}

CookieShop.prototype.generateRandom = function(min, max) {
  return Math.random() * (max - min) + min;
};

CookieShop.prototype.generateHourly = function() {
  for (var i = 0; i < hours.length; i++) {
    var cookie = Math.floor(this.avgCustomer * this.generateRandom(this.minCustomer, this.maxCustomer));
    this.hourlyCookies.push(cookie);
    this.dailyCookies += cookie;
  }
};


function render() {
  console.log(this);

  var tbl = document.createElement('table');
  var trEl_one = document.createElement('tr');

  for (var i = 0; i < hours.length; i++) {
    var thEl_one = document.createElement('th');
    thEl_one.textContent = hours[i];
    trEl_one.appendChild(thEl_one);
  }
  tbl.appendChild(trEl_one);

  for (var i = 0; i < shops.length; i++) {
    var trEl_two = document.createElement('tr');
    var thEl_two = document.createElement('th');
    thEl_two.textContent = shops[i].name;
    trEl_two.appendChild(thEl_two);

    for (var j = 0; j < hours.length; j++) {
      var tdEl_one = document.createElement('td');
      tdEl_one.textContent = shops[i].hourlyCookies[j];
      trEl_two.appendChild(tdEl_one);
    }
    tbl.appendChild(trEl_two);
  }

  document.getElementById('store_data').appendChild(tbl);
};

var pikePlace = new CookieShop('Pike Place', 17, 88, 5.2);
var seaTac = new CookieShop('SeaTac Airport', 6, 44, 1.2);
var southCenter = new CookieShop('Southcenter Mall', 11, 38, 1.9);
var bellevue = new CookieShop('Bellevue Square', 20, 48, 3.3);
var alki = new CookieShop('Alki', 3, 24, 2.6);

render();
