//Solving problems using array functions on the rest countries' data (https://restcountries.com/v3.1/all).
//Get all the countries from the Asia continent /region using the Filter function
//Get all the countries with a population of less than 2 lakhs using Filter function
//Print the following details name, capital, flag using forEach function
//Print the total population of countries using reduce function
//Print the country which uses US Dollars as currency.

var request= new XMLHttpRequest();

request.open('GET','https://restcountries.com/v3.1/all');
request.send();
request.onload=function(){
    
}
