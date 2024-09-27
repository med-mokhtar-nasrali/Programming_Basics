// Debug the following code that removes negative values from an array

function removeNegatives(arr) {
    for(var i=0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = arr.pop();
            i--;
        }
    }
    return arr;
}

var result = removeNegatives([3, 7, -23, 0, 2.5, -4]);
console.log(result);

//fixed function paremeters
//fixed i =< arr.length to i < arr.length so it loop all the array
//fixed the if condition from taking out the 0 and wil remove only the negative numbers from arr[i] <= 0 to arr[i] < 0
//fixed arr[j] to arr[i] so it pop 
//fixed the return from array to arr to match the function parameters