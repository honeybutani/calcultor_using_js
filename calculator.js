let cal = false;
let memory;
/*
insert value and show in input form
value exist then append value 
*/
function insert(num) {
  var text = document.tabform.textinput.value;
  document.tabform.textinput.value = text + num;
}
/*
using eval evaluates or executes an argument like  +,-,/,*,** 
and clear the output form. 
*/
function calculate() {
  var text = document.tabform.textinput.value;
  document.tab1form.textinput.value = eval(text);
  cal = true;
  cleardata(cal);
}
/*
clear whole data and on output form show 0
*/
function clean() {
  document.tabform.textinput.value = "";
  document.tab1form.textinput.value = 0;
}
/*
clear only last elememt using slice where -1 indicate last element
*/
function back() {
  const deleteone = document.tabform.textinput.value;
  document.tabform.textinput.value = deleteone.slice(0, -1);
}
/*
trignometric functions check from dropdown and perform execution
*/
function gettrignometricOption() {
  selectElement = document.querySelector("#trignometric");
  output = selectElement.options[selectElement.selectedIndex].value;
  if (output == "sin") {
    document.tabform.textinput.value = Math.sin(
      document.tabform.textinput.value
    );
  } else if (output == "cos") {
    document.tabform.textinput.value = Math.cos(
      document.tabform.textinput.value
    );
  } else if (output == "tan") {
    document.tabform.textinput.value = Math.tan(
      document.tabform.textinput.value
    );
  }
}
/*
 functions check from dropdown and perform execution
*/
function getfunctionOption() {
  selectElement = document.querySelector("#function");
  output = selectElement.options[selectElement.selectedIndex].value;
  if (output == "random") {
    document.tabform.textinput.value = Math.random(
      document.tabform.textinput.value
    );
  } else if (output == "ceil") {
    document.tabform.textinput.value = Math.ceil(
      document.tabform.textinput.value
    );
  } else if (output == "floor") {
    document.tabform.textinput.value = Math.floor(
      document.tabform.textinput.value
    );
  }
}

function cleardata() {
  const selectElement = document.querySelectorAll(".numb");
  selectElement.forEach((el) =>
    el.addEventListener("click", (event) => {
      if (cal == true) {
        let num = document.tabform.textinput.value;
        document.tabform.textinput.value = num.slice(-1);
        document.tab1form.textinput.value = 0;
        cal = false;
      } else {
        return false;
      }
    })
  );
}
/*
on click 2nd button value change of button then check which function to execute. 
execute x2 and x3
*/
function square() {
  let newname = document.getElementById("xsquare").innerHTML;
  if (newname == "x²") {
    document.tab1form.textinput.value = Math.pow(
      document.tabform.textinput.value,
      2
    );
  } else {
    document.tab1form.textinput.value = Math.pow(
      document.tabform.textinput.value,
      3
    );
  }
}
/*
on click 2nd button value change of button then check which function to execute. 
execute 10^x  and 2^x
*/
function baseten() {
  let newname = document.getElementById("tenx").innerHTML;
  if (newname == "10<sup>x</sup>") {
    document.tab1form.textinput.value = Math.pow(
      10,
      document.tabform.textinput.value
    );
  } else {
    document.tab1form.textinput.value = Math.pow(
      2,
      document.tabform.textinput.value
    );
  }
}
/*
on click 2nd button value change of button then check which function to execute. 
execute √ and ∛
*/
function sqrt2() {
  let newname = document.getElementById("squareroot").innerHTML;
  if (newname == "√") {
    document.tab1form.textinput.value = Math.pow(
      document.tabform.textinput.value,
      1 / 2
    );
  } else {
    document.tab1form.textinput.value = Math.pow(
      document.tabform.textinput.value,
      1 / 3
    );
  }
}

function dividenumber(num) {
  let text = document.tabform.textinput.value;
  document.tabform.textinput.value = text + "(" + num + ")";
  document.tab1form.textinput.value = 1 / text;
}
/*
on click 2nd button value change of button then check which function to execute. 
execute log base 10 and log base 2
*/
function logfunction(num) {
  let text = document.tabform.textinput.value;
  let newname = document.getElementById("logten").innerHTML;
  if (newname == "log") {
    document.tabform.textinput.value = text + "(" + num + ")";
    document.tab1form.textinput.value = Math.log10(text);
  } else {
    document.tabform.textinput.value = `${text} (log2)`;
    document.tab1form.textinput.value = Math.log2(text);
  }
}
/*
on click 2nd button value change of button then check which function to execute. 
execute ln and e^x
*/
function lnfunction(num) {
  let text = document.tabform.textinput.value;
  let newname = document.getElementById("lnx").innerHTML;
  if (newname == "log") {
    document.tabform.textinput.value = num + "(" + text + ")";
    document.tab1form.textinput.value = Math.log(text);
  } else {
    document.tabform.textinput.value = `${text} (e)`;
    document.tab1form.textinput.value = Math.exp(2);
  }
}
function expfunction(num) {
  let text = document.tabform.textinput.value;
  document.tabform.textinput.value = num + "(" + text + ")";
  document.tab1form.textinput.value = Math.exp(text);
}
function factorial(n) {
  let num = document.tabform.textinput.value;
  let output = 1;
  //base case
  if (num == 0 || num == 1) {
    output = 1;
    //recursive case
  } else {
    for (let i = num; i >= 1; i--) {
      output = output * i;
    }
  }
  document.tabform.textinput.value = n + "!(" + num + ")";
  document.tab1form.textinput.value = output;
}
/*
check if negative then multiply -1 and get positive number and if postive show that
*/
function modes() {
  let num = document.tabform.textinput.value;
  document.tabform.textinput.value = num;
  document.tab1form.textinput.value = num < 0 ? num * -1 : num;
}
/*
degree to radian and radian to degree
*/
function degreefunction() {
  let elem = document.getElementById("degree");
  if (elem.innerHTML == "DEG") {
    let num = document.tab1form.textinput.value;
    var pi = Math.PI;
    document.tab1form.textinput.value = num * (180 / pi);
    elem.innerHTML = "RAD";
  } else {
    let num = document.tab1form.textinput.value;
    var pi = Math.PI;
    document.tab1form.textinput.value = num * (pi / 180);
    elem.innerHTML = "DEG";
  }
}
/*
on click 2nd function get all the element  byclassname and by switch case change value and again toggle by checking if condition 
*/
function changefunction() {
  let elem = document.getElementById("functionchange");
  let btns = document.getElementsByClassName("changebuttonclass");
  console.log(btns);

  if (elem.innerHTML == "2<sup>nd</sup>") {
    for (item of btns) {
      let name = item.innerHTML;
      switch (name) {
        case "x²":
          item.innerHTML = "x<sup>3</sup>";
          break;
        case "√":
          item.innerHTML = "∛";
          break;
        case "10<sup>x</sup>":
          item.innerHTML = "2<sup>x</sup>";
          break;
        case "log":
          item.innerHTML = "log<sub>2</sub>";
          break;
        case "ln":
          item.innerHTML = "e<sup>x</sup>";
          break;
      }
    }
    elem.innerHTML = "1<sup>st</sup>";
  } else {
    for (item of btns) {
      let name = item.innerHTML;
      switch (name) {
        case "x<sup>3</sup>":
          item.innerHTML = "x²";
          break;
        case "∛":
          item.innerHTML = "√";
          break;
        case "2<sup>x</sup>":
          item.innerHTML = "10<sup>x</sup>";
          break;
        case "log<sub>2</sub>":
          item.innerHTML = "log";
          break;
        case "e<sup>x</sup>":
          item.innerHTML = "ln";
          break;
      }
    }

    elem.innerHTML = "2<sup>nd</sup>";
  }
}
/*
if input value postive then multiply by -1 and get negative value and if negative multiply by -1 get positive value 
*/
function checksign() {
  let num = document.tabform.textinput.value;
  document.tabform.textinput.value = num;
  document.tab1form.textinput.value = num * -1;
}

function farnaiatefunction() {
  let num = parseInt(document.tabform.textinput.value);
  document.tabform.textinput.value = `F-E(${num})`;
  document.tab1form.textinput.value = num.toExponential();
}
/*
intially MC , MR is disable but on click on MS they got activated and store value in memory variable 
*/
function memorysavefunction() {
  document.getElementById("memoryclear").disabled = false;
  document.getElementById("memoryread").disabled = false;
  memory = document.tab1form.textinput.value;
}
/*
stored value - given value
*/
function memoryminusfunction() {
  num = parseInt(document.tabform.textinput.value);
  document.tabform.textinput.value = `${parseInt(memory)} - ${num} `;
  memory = parseInt(memory) - num;
  document.tab1form.textinput.value = memory;
}
/*
stored value + given value
*/                                                   
function memoryplusfunction() {
  num = parseInt(document.tabform.textinput.value);
  document.tabform.textinput.value = `${parseInt(memory)} + ${num} `;
  memory = parseInt(memory) + num;
  document.tab1form.textinput.value = memory;
}
/*
intially MC , MR is disable but on click on MS they got activated and store value in memory variable 
*/
function memoryreadfunction() {
  document.tab1form.textinput.value = memory;
}
/*
intially MC , MR is disable but on click on MS they got activated and store value in memory variable 
*/
function memoryclearfunction() {
  memory = " ";
  document.tab1form.textinput.value = memory;
}
