  var i,j;
        var list = document.getElementById("list");
function swap(arr, index1, index2){
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2]= temp;
}
function swapCards(arr){
for(i=0; i<arr.length-1; i++){
    for (j=0; j<arr.length-1; j++){
        if(arr[j]>arr[j+1]){
            swap(arr, j, j+1)
        }
    }
}
return arr;
}
list.innerHTML=swapCards(["Home", 11 , 7 , 4 , 1 , 6 , 13 , 10 , 8 , 9]);
