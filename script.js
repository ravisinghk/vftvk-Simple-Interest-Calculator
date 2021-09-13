function range() {
    document.getElementById("rate_val").innerHTML = document.getElementById("rate").value+`%`;
}

function compute()
{
    let principal = document.getElementById("principal").value;
    let years = document.getElementById("years").value;
    let rate = document.getElementById("rate").value;  
    let interest = principal*years*rate/100;
    let year = new Date().getFullYear()+parseInt(years);


    if (principal <= 0 ) {
        alert("Enter a Positive Number ");
        document.getElementById("principal").focus();
        return false;
      }

    document.getElementById("result").innerHTML=`If you deposit <span style="background-color:yellow">${principal}</span>,<br>
                                                at an interest rate of <span style="background-color:yellow">${rate}%</span><br>
                                                You will receive an amount of <span style="background-color:yellow">${interest}</span>,<br>
                                                in the year <span style="background-color:yellow">${year}</span><br>`;

}

let c = document.querySelector(".smalldiv").children;

Array.from(c).forEach(element => {
    console.log(element);
    element.style.margin = "10px 5px 10px 0px";
});

    