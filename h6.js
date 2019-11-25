var aCities = ["Karachi","Lahore","Islamabad","Faisalabad"];
var obj = ["th","st","nd","rd"];
obj.splice(0, 1);

var count = 0;

for (let s = 0; s < obj.length; s++){
    count ++;
    document.write(count + obj[s]+ "choice is" + aCities[s] + "<br>");
}

