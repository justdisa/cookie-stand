'use strict';
var times = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', 'Total: '];

//big clunky objects
var firstAndPike = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  results: [],
  cookiesPerHour: function() {
    for(var i = 0; i < times.length - 1; i++){
      var randomNumber = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
      console.log(randomNumber);
      var numCookies = Math.floor (randomNumber * this.avgCookies);
      console.log(numCookies);
      this.results.push(numCookies);
    }
  },
  cookiesSum: function () {
    var sum = 0;
    for (var j = 0; j < this.results.length; j++) {
      sum = sum + this.results[j];
    }
    this.results.push(sum);
    console.log(sum);
  }
};

var seatacAirport = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,
  results: [],
  cookiesPerHour: function() {
    for(var i = 0; i < times.length - 1; i++){
      var randomNumber = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
      console.log(randomNumber);
      var numCookies = Math.floor (randomNumber * this.avgCookies);
      console.log(numCookies);
      this.results.push(numCookies);
    }
  },
  cookiesSum: function () {
    var sum = 0;
    for (var j = 0; j < this.results.length; j++) {
      sum = sum + this.results[j];
    }
    this.results.push(sum);
    console.log(sum);
  }
};

var seattleCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
  results: [],
  cookiesPerHour: function() {
    for(var i = 0; i < times.length - 1; i++){
      var randomNumber = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
      console.log(randomNumber);
      var numCookies = Math.floor (randomNumber * this.avgCookies);
      console.log(numCookies);
      this.results.push(numCookies);
    }
  },
  cookiesSum: function () {
    var sum = 0;
    for (var j = 0; j < this.results.length; j++) {
      sum = sum + this.results[j];
    }
    this.results.push(sum);
    console.log(sum);
  }
};

var capitolHill = {
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3,
  results: [],
  cookiesPerHour: function() {
    for(var i = 0; i < times.length - 1; i++){
      var randomNumber = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
      console.log(randomNumber);
      var numCookies = Math.floor (randomNumber * this.avgCookies);
      console.log(numCookies);
      this.results.push(numCookies);
    }
  },
  cookiesSum: function () {
    var sum = 0;
    for (var j = 0; j < this.results.length; j++) {
      sum = sum + this.results[j];
    }
    this.results.push(sum);
    console.log(sum);
  }
};

var alki = {
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6,
  results: [],
  cookiesPerHour: function() {
    for(var i = 0; i < times.length - 1; i++){
      var randomNumber = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
      console.log(randomNumber);
      var numCookies = Math.floor (randomNumber * this.avgCookies);
      console.log(numCookies);
      this.results.push(numCookies);
    }
  },
  cookiesSum: function () {
    var sum = 0;
    for (var j = 0; j < this.results.length; j++) {
      sum = sum + this.results[j];
    }
    this.results.push(sum);
    console.log(sum);
  }
};

//code by store//
//firstAndPike
firstAndPike.cookiesPerHour();
firstAndPike.cookiesSum();

var mylist = document.getElementById('firstandpike');

for (var i = 0; 1 < firstAndPike.results.length; i++){
  var listEl = document.createElement('li');
  listEl.textContent = times[i] + ' ' + firstAndPike.results[i];
  myList.appendChild(listEl);
}

//seatacAirport

seatacAirport.cookiesPerHour();
seatacAirport.cookiesSum();

var mylist = document.getElementById('seatacairport');

for (var i = 0; 1 < seatacAirport.results.length; i++){
  var listEl = document.createElement('li');
  listEl.textContent = times[i] + ' ' + seatacAirport.results[i];
  myList.appendChild(listEl);
}

//seattleCenter

seattleCenter.cookiesPerHour();
seattleCenter.cookiesSum();

var mylist = document.getElementById('seattlecenter');

for (var i = 0; 1 < seattleCenter.results.length; i++){
  var listEl = document.createElement('li');
  listEl.textContent = times[i] + ' ' + seattleCenter.results[i];
  myList.appendChild(listEl);
}

//capitolHill

capitolHill.cookiesPerHour();
capitolHill.cookiesSum();

var mylist = document.getElementById('capitolhill');

for (var i = 0; 1 < capitolHill.results.length; i++){
  var listEl = document.createElement('li');
  listEl.textContent = times[i] + ' ' + capitolHill.results[i];
  myList.appendChild(listEl);
}

//alki

firstAndPike.cookiesPerHour();
firstAndPike.cookiesSum();

var mylist = document.getElementById('firstandpike');

for (var i = 0; 1 < firstAndPike.results.length; i++){
  var listEl = document.createElement('li');
  listEl.textContent = times[i] + ' ' + firstAndPike.results[i];
  myList.appendChild(listEl);
}

//Better.//
