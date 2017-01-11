'use strict';

var times = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', 'Total: '];

var results = [];

function cookiesSum() {
  var sum = 0;
  for (var j = 0; j < this.results.length; j++) {
    sum = sum + this.results[j];
  }
  this.results.push(sum);
  console.log(sum);
}

function cookiesPerHour() {
  for(var i = 0; i < times.length - 1; i++){
    var randomNumber = Math.floor(Math.random() * (this.maxCustomers - minCustomers) + minCustomers);
    console.log(randomNumber);
    var numCookies = Math.floor (randomNumber * this.avgCookies);
    console.log(numCookies);
    results.push(numCookies);
  }
}

function Store(name, minCustomers, maxCustomers, avgCookies, results, cookiesPerHour){
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.results = results;
  this.cookiesPerHour = cookiesPerHour;
}

var firstAndPike = new Store ('First and Pike', 23, 65, 6.3, results, cookiesPerHour);
var seatacAirport = new Store ('Seatac Airport', 3, 24, 1.2, results, cookiesPerHour);
var seattleCenter = new Store ('Seattle Center', 11, 38, 3.7, results, cookiesPerHour);
var capitolHill = new Store ('Capitol Hill', 20, 38, 2.3, results, cookiesPerHour);
var alki = new Store ('Alki', 2, 16, 4.6, results, cookiesPerHour);

console.log(firstAndPike);
console.log(seatacAirport);
console.log(seattleCenter);
console.log(capitolHill);
console.log(alki);
//
//
// var alki = {
//   minCustomers: 2,
//   maxCustomers: 16,
//   avgCookies: 4.6,
//   results: [],
//   cookiesPerHour: function() {
//     for(var i = 0; i < times.length - 1; i++){
//       var randomNumber = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
//       console.log(randomNumber);
//       var numCookies = Math.floor (randomNumber * this.avgCookies);
//       console.log(numCookies);
//       this.results.push(numCookies);
//     }
//   },
//   cookiesSum: function () {
//     var sum = 0;
//     for (var j = 0; j < this.results.length; j++) {
//       sum = sum + this.results[j];
//     }
//     this.results.push(sum);
//     console.log(sum);
//   }
// };
//
// //calling objects, functions, and DOM code by store//
// //firstAndPike store
// firstAndPike.cookiesPerHour();
// firstAndPike.cookiesSum();
//
// var myList = document.getElementById('firstandpike');
// myList.setAttribute('class', 'cookie-list');
//
// for (var i = 0; i < firstAndPike.results.length; i++){
//   var listEl = document.createElement('li');
//   listEl.textContent = times[i] + ' ' + firstAndPike.results[i];
//   if (i === firstAndPike.results.length - 1){
//     listEl.setAttribute('class', 'cookie-total');
//   }
//   myList.appendChild(listEl);
// }
//
// //seatacAirport store
// seatacAirport.cookiesPerHour();
// seatacAirport.cookiesSum();
//
// var myList = document.getElementById('seatacairport');
// myList.setAttribute('class', 'cookie-list');
//
// for (var i = 0; i < seatacAirport.results.length; i++){
//   var listEl = document.createElement('li');
//   listEl.textContent = times[i] + ' ' + seatacAirport.results[i];
//   if (i === seatacAirport.results.length - 1){
//     listEl.setAttribute('class', 'cookie-total');
//   }
//   myList.appendChild(listEl);
// }
//
// //seattleCenter store
// seattleCenter.cookiesPerHour();
// seattleCenter.cookiesSum();
//
// var myList = document.getElementById('seattlecenter');
// myList.setAttribute('class', 'cookie-list');
//
// for (var i = 0; i < seattleCenter.results.length; i++){
//   var listEl = document.createElement('li');
//   listEl.textContent = times[i] + ' ' + seattleCenter.results[i];
//   if (i === seattleCenter.results.length - 1){
//     listEl.setAttribute('class', 'cookie-total');
//   }
//   myList.appendChild(listEl);
// }
//
// //capitolHill store
// capitolHill.cookiesPerHour();
// capitolHill.cookiesSum();
//
// var myList = document.getElementById('capitolhill');
// myList.setAttribute('class', 'cookie-list');
//
// for (var i = 0; i < capitolHill.results.length; i++){
//   var listEl = document.createElement('li');
//   listEl.textContent = times[i] + ' ' + capitolHill.results[i];
//   if (i === capitolHill.results.length - 1){
//     listEl.setAttribute('class', 'cookie-total');
//   }
//   myList.appendChild(listEl);
// }
//
// //alki store
// alki.cookiesPerHour();
// alki.cookiesSum();
//
// var myList = document.getElementById('alki');
// myList.setAttribute('class', 'cookie-list');
//
// for (var i = 0; i < alki.results.length; i++){
//   var listEl = document.createElement('li');
//   listEl.textContent = times[i] + ' ' + alki.results[i];
//   if (i === alki.results.length - 1){
//     listEl.setAttribute('class', 'cookie-total');
//   }
//   myList.appendChild(listEl);
// }
//
////Better.
