
//Challenge 1:

var arr = ["Up", "You", "Give", "To", "Going", "Never"];
for(var i = arr.length-1; i >= 0; i = i - 1) {
    console.log(arr[i]);
}
i = 5
//print "Never" i =5
//print "Going" i = 4
//print "TP" i =3
//print "Give" i=2
//print "You" i=1
//print "Up" i=0


////////////////////////////////////

//Challenge 2:


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
for(var i = 1; i < arr.length; i = i + 2) {
    sum = sum + arr[i];
    console.log(arr[i]);
    console.log(sum);
}

i=1
//print 1,2,3,4,5,6,7,8,9
//print total of 1,2,3,4,5,6,7,8,9



///////////////////////////////////

//Challenge 3:

var arr = [8, 2, 0, 6, 12, 4, 3];
for(var i = 0; i < arr.length; i++){
    if(arr[i] >= 6) {
        console.log(true);
    }
}

i=0
arr.length=7

//print True , True , True , 