function getParam(){
	var params=location.search.substr(location.search.indexOf("?")+1);
	var val = "";
	temp = params.split("=");
	val = temp[1];
	return val;
}

function largest_prime_factor(n) {

  var factors = [];

  for (i = 0; i < n; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }

  for (i = 0; i < factors.length -1; i++) {
    if (factors[factors.length -1] % factors[i] === 0) {
      factors.pop();
      i = 0;
    }
  }
  return factors[factors.length-1];
};


var express = require('express');
var app = express();

app.get('/', function (req, res) {
	var number = getParam();

	var result = largest_prime_factor(number);

	res.send(result);
});

