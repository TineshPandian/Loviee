var popupoverlay = document.querySelector(".popup-overlay")
var popupboox = document.querySelector(".popup-box")

function checks(){
    //getting input for your date
    const day1 = document.getElementById("day1").value.padStart(2,'0')
    const month1 = document.getElementById("month1").value.padStart(2, '0')
    const year1 = document.getElementById("year1").value
    //getting input for partner date
    const day2 = document.getElementById("day2").value.padStart(2,'0')
    const month2 = document.getElementById("month2").value.padStart(2, '0')
    const year2 = document.getElementById("year2").value
    // checking for dates
    if(day1 > 31 || month1 > 12 || year1 > 9999 || day2 > 31 || month2 > 12 || year2 > 9999)
    {
        document.getElementById("result").textContent = "Invalid Dates"
    }
    else{
        const total1 = parseInt(`${day1}${month1}${year1}`, 10);
        const total2 = parseInt(`${day2}${month2}${year2}`, 10);
        var sum = total1 + total2;
        //calculator algorithm
        var strsum = sum.toString()
        while(strsum.length > 2)
        {
            var left = 0
            var right = strsum.length-1
            var insert = ''
            while(left<=right)
            {
                var total = parseInt(strsum[left]) + parseInt(strsum[right])
                if(left == right)
                    total -= parseInt(strsum[left])
                insert += total.toString()
                left++
                right--
            }
            strsum = insert
        }
        document.getElementById("result").textContent = strsum + "%"
        
    }
 
    popupoverlay.style.display="block"
    popupboox.style.display="block"

}
function backs(){
    popupoverlay.style.display="none"
    popupboox.style.display="none"
}