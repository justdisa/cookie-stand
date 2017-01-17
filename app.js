'use strict';

//declare variables//
var times = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', 'Total: '];
var storesList = [];

//constructor function//
function Store(storeName, minCustHr, maxCustHr, avgCookies) {
  this.storeName = storeName;
  this.minCustHr = minCustHr;
  this.maxCustHr = maxCustHr;
  this.avgCookies = avgCookies;
  this.cookiesHr = [];
  this.cookiesDay = 0;
  storesList.push(this);
  //random number creator//
  this.custCalc = function () {
    return Math.floor(Math.random() * (this.maxCustHr - this.MinCustHr + 1)) + this.minCustHr;
  };

  this.calcCookiesHr = function () {
    for (var i = 0; i < times.length; i++) {
      this.cookiesHr.push(Math.floor(this.avgCookies * this.custCalc()));
      this.cookiesDay += this.cookiesHr[i];
    }
    console.log(this.cookiesHr);
  };
  this.displayData = function () {
    this.calcCookiesHr();

    var tableCreate = document.getElementById('cookie-sales-table');
    var row = document.createElement('tr');
    var location = document.createElement('th');
    location.textContent = this.storeName;
    row.appendChild(location);

    console.log(this.cookiesHr);

    for(var i = 0; i < times.length; i++){
      var cookieNum = document.createElement('td');
      cookieNum.textContent = this.cookiesHr[i];
      row.appendChild(cookieNum);
    }

    var cookieTotal = document.createElement('td');
    cookieTotal.setAttribute('class','total');//change quotes back//
    cookieTotal.textContent = this.cookiesDay;
    row.appendChild(cookieTotal);

    tableCreate.appendChild(row);
  };
};

var firstAndPike = new Store ('First and Pike', 23, 65, 6.3);
var seatacAirport = new Store ('Seatac Airport', 3, 24, 1.2);
var seattleCenter = new Store ('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store ('Capitol Hill', 20, 38, 2.3);
var alkiBeach = new Store ('Alki Beach', 2, 16, 4.6);

// var emptyCell = document.createElement('td');
// emptyCell.setAttribute('class','empty');//change quotes back//
// headerRow.appendChild(emptyCell);

// for (var i = 0; i < times.length; i++) {
//   var td = document.createElement('td');
//   td.setAttribute('td','cell'); //change quotes back//
//   td.setAttribute('td','times'); //change quotes back//
//   td.makeHTML = times[i];
//   headerRow.appendChild(td);
// };
// var cookiesDay = document.createElement('th');
// cookiesDay.textContent = 'Total';//change quotes back//
// headerRow.appendChild(cookiesDay);
// tbl.appendChild(headerRow);

function displayAllStores(){
  for (var i = 0; i < storesList.length; i++) {
    storesList[i].displayData();
  }
}
displayAllStores();
// document.body.appendChild(tbl);

var newForm = document.getElementById('addstore');//change quotes back//
var handlerEvent = function(event) {
  event.preventDefault();

  if(!event.target.storesList.value || !event.target.min.value || !event.target.max.value || !event.target.avg.value) {
    return alert('Please complete all fields');
  }

  var location = event.target.location.value;
  var min = event.target.min.value;
  var max = event.target.max.value;
  var avg = event.target.avg.value;

  var addstore = new Store(storeName, min, max, avg);

  event.target.storeList.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.avg.value = null;

  storeList.push(addstore);
  addstore.displayData();
};

// newForm.addEventListener('submit', handlerEvent);
