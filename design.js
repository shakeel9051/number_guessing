var num = (Math.ceil(Math.random()*100));
var count=1;
console.log(num);
function checkOff()
{
    var numUser = parseInt(document.getElementById("num").value);
    if(numUser == num)
    {
        document.getElementById("line").textContent = "Congratulations!!! You guessed the number in "+count+" tries.";
    }
    else if(numUser > num)
    {
        document.getElementById("line").textContent = "Try with the smaller number";
    }
    else
    {
        document.getElementById("line").textContent = "Try with the greater number";
    }
    document.getElementById("tries").textContent = count;
    count++;
}





