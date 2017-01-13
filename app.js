'use strict';

var storesList = [];
var grandTotalSales = 0;
var salesTableNode;
var totalSalesToday = [];
for (var i = 0; i < 14; i++) {
  totalSalesToday[i];
};

Store.prototype.checkSales = function () {
  var hoursOpen = this.timeClosing - this.timeOpening;
  console.log('Open for ' + hoursOpen + ' hours today.');
  for (var i = 0; i < hoursOpen; i++) {
    console.log('Hours elapsed: ' + i);
    var result = Math.ceil(this.randomCustomers() * this.averageCookiesPerSale);
    console.log('At ' + (i + this.timeOpening) + ':00, ' + result + 'cookies were sold.');
    this.cookiesSoldToday += result;
    this.cookiesSoldHourly.push(result);
    console.log('Hourly breakdown: ' + this.cookiesSoldHourly);
    console.log('Cookies sold in all stores this hour: ' + this.cookiesSoldHourly);
    totalSalesToday[i] += result;
    console.log(totalSalesToday[i]);
    grandTotalSales += result;
    console.log('Total cookies sold so far today: ' + grandTotalSales);
  }
};
Store.prototype.randomCustomers = function () {
  var hoursOpen = this.timeClosing - this.timeOpening;
  console.log('Open for ' + hoursOpen + ' hours today.');
  for (var i = 0; i < hoursOpen; i++) {
    console.log('Hours elapsed: ' + i);
    var result = Math.ceil(this.randomCustomers() * this.averageCookiesPerSale);
    console.log('At ' + (i + this.timeOpening) + ':00, ' + result + 'cookies were sold.');
    this.cookiesSoldToday += result;
    this.cookiesSoldHourly.push(result);
    console.log('Hourly breakdown: ' + this.cookiesSoldHourly);
    totalSalesToday[i] += result;
    console.log(totalSalesToday[i]);
    grandTotalSales += result;
    console.log('Total cookies sold so far today: ' + grandTotalSales);
  }
};
Store.prototype.randomCustomers = function () {
  var result = Math.floor(Math.random() * (this.maxHourlyCustomers + this.minHourlyCustomers) + this.minHourlyCustomers);
  console.log('Customers this hour: ' + result);
  return result;
};

Store.prototype.render = function () {
  this.checkSales();
  var elTableRow = document.createElement('tr');
  elTableRow.setAttribute('id', 'store', + this.storeNumber);
  salesTableNode.appendChild(TableRow);
  var elTableData = document.createElement('th');
  elTableData.setAttribute('class', 'store_location');
  elTableData.textContent = this.location;
  elTableRow.appendChild(elTableData);
  for (var i = 0; 1 < this.cookiesSoldHourly.length; i++) {
    var elTableData = document.createElement('td');
    var results = this.cookiesSoldHourly[i];
    elTableData.textContent = results;
    elTableData.appendChild(elTableData);
  }
  var elTableData = document.createElement('td');
  elTableData.setAttribute('class', 'store_total');
  elTableData.textContent = this.cookiesSoldToday;
  elTableRow.appendChild(elTableData);
};

var store1 = new Store('1st & Pike', 6, 20, 23, 65, 6.3);
var store2 = new Store('SeaTac Airport', 6, 20, 3, 24, 1.2);
var store3 = new Store('Seattle Center', 6, 20, 17, 38, 3.7);
var store4 = new Store('Capitol Hill', 6, 20, 20, 38, 2.3);
var store5 = new Store('Alki', 6, 20, 2, 16, 4,6);
for(var i = 1; i < 6; i++) {
  eval('addStore (store' + i + ');');
}
var dailyReport = document.getElementById('sales_report');
console.log(dailyReport);
salesTableNode = document.createElement('table');
salesTableNode.setAttribute('id', 'sales_report_table');
dailyReport.appendChild(salesTableNode);

salesReportHeader();
for (var i = 0; i < storesList.length; i++)
///////////*******MISSING CODE*********************************//////////

function Store(location, timeOpening, timeClosing, minHourlyCustomers, maxHourlyCustomers, averageCookiesPerSale, cookiesSoldHourly, cookiesSoldToday) {
  this.location = location;
  this.timeOpening = timeOpening;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.averageCookiesPerSale = averageCookiesPerSale;
  this.cookiesSoldHourly = [];
  this.cookiesSoldToday = 0;
}
//function to add new store to stores list//

function addStore(store) {
  storesList.push(store);
  store.storeNumber = storesList.length;
}// //Better.
