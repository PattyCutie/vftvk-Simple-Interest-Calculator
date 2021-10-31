function compute()
{ //create vars and assign values.

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years); // year in the future.
      
    //conditional validation check alert box and focus input field.
    if (principal >= 1) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        document.getElementById("result").innerHTML=""
        // Get reference to element "result" after click compute function. 
    }
    else if (principal == "") {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        document.getElementById("result").innerHTML=""
        // Get reference to element "result" after click compute function. 
    }
    else {
        document.getElementById("principal").focus();
        document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>.\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
        // Get reference to element "result" after click compute function.
    }
      
}
// fucntion reads the value of the range slider by input.
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        
