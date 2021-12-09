
function Tablefunction(){  //startiing a function that is called whem button is clicked
  let num1 = document.getElementById('num1').value;//set a varible as num1 id input
  let num2 = document.getElementById('num2').value;//set a varible as num2 id input
  let num3 = document.getElementById('num3').value;//set a varible as num3 id input
  let num4 = document.getElementById('num4').value;//set a varible as num4 id input
  let num5 = document.getElementById('num5').value;//set a varible as num5 id input
  let numA = document.getElementById('numA').value;//set a varible as numA id input
  let numB = document.getElementById('numB').value;//set a varible as numB id input
  let numC = document.getElementById('numC').value;//set a varible as numC id input
  let numD = document.getElementById('numD').value;//set a varible as numD id input


// to set inputs num1 - num5 as the first table row
  document.getElementById('number1').innerHTML = num1;
  document.getElementById('number2').innerHTML = num2;
  document.getElementById('number3').innerHTML = num3;
  document.getElementById('number4').innerHTML = num4;
  document.getElementById('number5').innerHTML = num5;

//to set numA-numD as the first column of the table
  document.getElementById('numberA').innerHTML = numA;
  document.getElementById('numberB').innerHTML = numB;
  document.getElementById('numberC').innerHTML = numC;
  document.getElementById('numberD').innerHTML = numD;

// to multiply the first row of the table with numA
  document.getElementById('2a').innerHTML = num1*numA;
  document.getElementById('3a').innerHTML = num2*numA;
  document.getElementById('4a').innerHTML = num3*numA;
  document.getElementById('5a').innerHTML = num4*numA;
  document.getElementById('6a').innerHTML = num5*numA;

// to multiply the first row of the table with numB
  document.getElementById('2b').innerHTML = num1*numB;
  document.getElementById('3b').innerHTML = num2*numB;
  document.getElementById('4b').innerHTML = num3*numB;
  document.getElementById('5b').innerHTML = num4*numB;
  document.getElementById('6b').innerHTML = num5*numB;

// to multiply the first row of the table with numC
  document.getElementById('2c').innerHTML = num1*numC;
  document.getElementById('3c').innerHTML = num2*numC;
  document.getElementById('4c').innerHTML = num3*numC;
  document.getElementById('5c').innerHTML = num4*numC;
  document.getElementById('6c').innerHTML = num5*numC;

// to multiply the first row of the table with numD
  document.getElementById('2d').innerHTML = num1*numD;
  document.getElementById('3d').innerHTML = num2*numD;
  document.getElementById('4d').innerHTML = num3*numD;
  document.getElementById('5d').innerHTML = num4*numD;
  document.getElementById('6d').innerHTML = num5*numD;

  //to show the multiplicatin table after button is clicked
  document.getElementById("table").style.display="block";
