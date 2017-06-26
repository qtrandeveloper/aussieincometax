function calculateTax(gross, deduction) {
var gross = document.getElementById("gross").value;
var deduction = document.getElementById("deduction").value;
var diff;
var tax;

  if (gross <= 18200) {
    tax = 0;
  }

  else if (gross >= 18201 && gross <= 37000) {
    tax = ((gross - 18200)*0.19) - deduction;
  }

  else if (gross >= 37001 && gross <= 87000) {
    tax = (3572 + (gross - 37000)*0.325) - deduction;
  }

  else if (gross >= 87001 && gross <= 180000) {
    tax = (19822 + (gross - 87000)*0.37) - deduction;
  }

  else if (gross >= 180001) {
    tax = (54232 + (gross - 180000)*0.45) - deduction;
  }
tax = "$" + tax.toFixed(2);
return document.getElementById("tax").innerHTML = tax;
}
