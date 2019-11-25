var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9]
document.write("Array value:" + arr1 + "<br>");
var unique = [...new set(arr1)];
document.write("Remove all Duplicate:" + unique + "<br>");
unique.sort();
document.write("value sorted :" + unique);