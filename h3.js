var colorNames = ["Red","Green","Blue"];
document.write("Array Elements:)"+ colorNames +"<br>");
var a = prompt("What color want to add a beginning!");
colorNames.unshift(a);
document.write("Add some to beginning Array :"+ colorNames + "<br>");
var b= prompt("What color want to add end of array!");
colorNames.push(b);
document.write("Add some value to end of array :"+ colorNames + "<br>");
var color01 = prompt("Color 01. ");
var color02 = prompt("Color 02. ");
colorNames.unshift(color01 , color02);
document.write("Add two more colors to beginning :"+ colorNames+ "<br>");
colorNames.shift();
document.write("Delete first color in Array :"+ colorNames + "<br>");
colorNames.pop();
document.write("Delete last color in Array : "+ colorNames + "<br>");
var Position = prompt("Enter Array Index you want to add value!");
var Index = prompt("Enter a color name you want to add an Array!");

colorNames.splice(Position, 0, Index);
document.write("Add some value in define index range :" + colorNames + "<br>");
var inpIndex = prompt("Please enter a Index");
var inpPosition = prompt("Please enter a Position you want to remove");

colorNames.splice(inpIndex, inpPosition);
document.write("Delete some value in define Position!"+ colorNames + "<br>");