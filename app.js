'use strict';

var stores = ['Beacon Hill', 'Columbia City', 'SoDo', 'Ballard', 'Alki', 'Shoreline'];
var sales = [328.45, 99.04, 12.11, 176.19, 180.76, 85.22];
var customers = [412, 7, 2, 70, 112, 36];

var storeList = document.getElementById('my-list');

for(var index = 0; index < stores.length; index++){
  console.log(stores[index]);
  var listElement = document.createElement('li');
  listElement.setAttribute('class', 'storeList-item');
  listElement.textContent = stores[index] + ' ~ Customers Served: ' + customers[index] + '; Total Sales: $' + sales[index] + '; Sales per Customer: $' + (sales[index] / customers[index]).toFixed(2);
  storeList.appendChild(listElement);
}
// I haven't violated too many assignment rules. Revisiting in class.//
