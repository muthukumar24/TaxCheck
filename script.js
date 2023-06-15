function employeeTax()
{
 let eName = document.getElementById("name").value;
 let eCitizenship = document.getElementById("citizenship").value;
 let eSalary = Number(document.getElementById("salary").value);

 if(eCitizenship == "Indian" || eCitizenship == "indian" )
 {
    if(eSalary > 0 && eSalary <= 250000)
    {
      alert("You have no Tax to be paid")
    }
    else if(eSalary > 250000 && eSalary <= 500000)
    {
        alert("Your Tax rate is 5%")
    }
    else if(eSalary > 500000 && eSalary <= 750000)
    {
        alert("Your Tax rate is 10%")
    }
    else if(eSalary > 750000 && eSalary <= 1000000)
    {
        alert("Your Tax rate is 15%")
    }
    else if(eSalary > 100000 && eSalary <= 1250000)
    {
        alert("Your Tax rate is 20%")
    }
    else if(eSalary > 1250000 && eSalary <= 1500000)
    {
        alert("Your Tax rate is 25%")
    }
    else if(eSalary > 1500000)
    {
        alert("Your Tax rate is 30%")
    }
 }
 else
 {
    alert("Your Tax rate is 50%")
 }
}