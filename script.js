
// func for moving cursor to the input box
function setFocusToTextBox() {
    document.getElementById("principal").focus();
}

// func for updating the rete
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=`${rateval}%`;
}

function compute() {
    // if principal is correct then calculation starts
    if (document.getElementById("principal").value > 0) {
        let principal = document.getElementById("principal").value;
        let rate = document.getElementById("rate").value;
        let years = document.getElementById("years").value;
        let interest = principal * years * rate / 100;
        let year = new Date().getFullYear() + parseInt(years);
        document.getElementById("result").innerHTML = "If you deposit " + principal + ",\<br\>at an interest rate of " + rate + "%\<br\>You will receive an amount of " + interest + ",\<br\>in the year " + year + "\<br\>";
    } else {
        alert('Enter a positive number');
        document.getElementById("result").innerHTML = "";
        // go back to the input if principal was not correct
        setFocusToTextBox();
    };

    
}