'use strict';

//declare and initialize variables//
var storesList = [];
var times = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', 'Total: '];
var salesGrandTotal = 0;
var salesTableNode;
var salesTodayTotal = [];
for (var i = 0; i < times.length - 1; i++) {
  salesTodayTotal[i] = 0;
}

function Store(name, timeOpen, timeClosed, minCustomers, maxCustomers, avgCookies, result, cookiesPerHour, cookiesSoldTotal) {
  this.name = name;
  this.timeOpen = timeOpen;
  this.timeClosed = timeClosed;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.result = result;
  this.cookiesPerHour = cookiesPerHour();
  this.cookiesSoldTotal = cookiesSoldTotal();
};

Store.prototype.checkSales = function () {
  var hoursOpen = this.timeClosed - this.timeOpen;
  console.log('Open for ' + hoursOpen + ' hours today.');
  for (var i = 0; i < hoursOpen; i++) {
    console.log('Hours elapsed: ' + i);
    var result = Math.ceil(this.randomCustomers() * this.averageCookiesPerSale);
    console.log('At ' + (i + this.timeOpen) + '.00' + result + ' cookies were sold.');
    this.cookiesSoldToday += result;
    this.cookiesSoldHourly.push[result];
    console.log('Hourly breakdown: ' + this.cookiesSoldHourly);
    console.log('Cookies sold in all stores this hour: ' + this.cookiesSoldHourly);
    salesTodayTotal[i] += result; // you are adding result in a lot of places. Where do you need it? what is salesTodayTotal[i]?//
    console.log('Total cookies sold so far today: ' + salesGrandTotal); // what type is salesGrandTotal? What are you trying to print here? //
  }
};

var firstAndPike = new Store ('First and Pike', 23, 65, 6.3, result, cookiesPerHour);
var seatacAirport = new Store ('Seatac Airport', 3, 24, 1.2, result, cookiesPerHour);
var seattleCenter = new Store ('Seattle Center', 11, 38, 3.7, result, cookiesPerHour);
var capitolHill = new Store ('Capitol Hill', 20, 38, 2.3, result, cookiesPerHour);
var alki = new Store ('Alki', 2, 16, 4.6, result, cookiesPerHour);

function tableCreate() {
//body reference
  var body = document.getElementsByTagName('body')[0];
// create elements <table> and a <tbody>
  var tbl     = document.createElement('table');
  var tblBody = document.createElement('tbody');

        // cells creation
  for (var i = 0; i < result.length; i++) { // how many times do you want to repeat this? // //like that?// you want a row for each result? //
            // table row creation
    var row = document.createElement('tr');

    for (var j = 0; j < storesList.length; j++) { // how many times do you want ot repeat this?
        // create element <td> and text node
        //Make text node the contents of <td> element
        // put <td> at end of the table row
      var cell = document.createElement('td');
      var cellText = document.createTextNode('cell is row ' + j + ', column ' + i); //what do you want your text to be? //

      cell.appendChild(cellText);
      row.appendChild(cell);
    }
            //row added to end of table body
    tblBody.appendChild(row);
  }
        // append the <tbody> inside the <table>
  tbl.appendChild(tblBody);
        // put <table> in the <body>
  body.appendChild(tbl);
        // tbl border attribute to
  tbl.setAttribute('border', '2');
}

//dmDiana--code comes in pretty colors.//
//dmI need to have a number randomize in one place//
//coding is all pretty. Don't know what is happening here//
