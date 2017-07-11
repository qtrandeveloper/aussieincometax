function calculateTax() {
  let gross = document.getElementById("gross").value;
  let deduction = document.getElementById("deduction").value;
  let tax;
  let net;

  if (gross <= 18200) {
    tax = 0;
  }

  else if (gross >= 18201 && gross <= 37000) {
    tax = ((gross - 18200)*0.19) - deduction;
    net = gross - tax;
  }

  else if (gross >= 37001 && gross <= 87000) {
    tax = (3572 + (gross - 37000)*0.325) - deduction;
    net = gross - tax;
  }

  else if (gross >= 87001 && gross <= 180000) {
    tax = (19822 + (gross - 87000)*0.37) - deduction;
    net = gross - tax;
  }

  else if (gross >= 180001) {
    tax = (54232 + (gross - 180000)*0.45) - deduction;
    net = gross - tax;
  }
 document.getElementById("tax").innerHTML = "You will owe " + "$" + tax.toFixed(2) + " " + "after deductions.";
 document.getElementById("net").innerHTML = "You will have " + "$" + net.toFixed(2) + " " + "after taxes";
}
