var a = [24,53,78,91,12];
function findlargestNum(arr){
    var biggestNum = 0;
    for (var i=0; i< arr.length; i++){
        if(arr[i]> biggestNum){
            biggestNum = arr[i];
        }
    }
    return biggestNum;
}
document.write(findlargestNum([24,53,78,91,12]));

