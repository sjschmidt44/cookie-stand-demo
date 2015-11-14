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

CookieShop.prototype.render = function() {
  console.log(this);
  this.generateHourly();

  var ulEl = document.createElement('ul');
  ulEl.appendChild(document.createTextNode(this.name));
  var sectionEl = document.getElementById('store_data').appendChild(ulEl);

  for (var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = hours[i] + ": " + this.hourlyCookies[i];
    ulEl.appendChild(liEl);
  }

  var liEl_two = document.createElement('li');
  liEl_two.textContent = 'Total: ' + this.dailyCookies;
  ulEl.appendChild(liEl_two);
};

var pikePlace = new CookieShop('Pike Place', 17, 88, 5.2);
var seaTac = new CookieShop('SeaTac Airport', 6, 44, 1.2);
var southCenter = new CookieShop('Southcenter Mall', 11, 38, 1.9);
var bellevue = new CookieShop('Bellevue Square', 20, 48, 3.3);
var alki = new CookieShop('Alki', 3, 24, 2.6);

(function runRender() {
  for (var i = 0; i < shops.length; i++) {
    shops[i].render();
  }
})()
