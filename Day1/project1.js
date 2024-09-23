// Situation 1
var kidHeight = 42;
if (kidHeight >= 42) 
{
    console.log("Get On That ride kiddo!");

}
else {
    console.log("Sorry kiddo maybe next year!")
}
//this will show ""Get On That ride kiddo!"" because he met the requirements


// Situation 2
var kidHeight = 42;
var age = 11;
if (kidHeight >= 42) 
if (age >= 10)   
{
    console.log("Get On That ride kiddo!");

}
else {
    console.log("Sorry kiddo maybe next year!")

}
//this will show ""Get On That ride kiddo!"" because he met the requirements


// Situation 3
var kidHeight = 42;
var age = 11;
if (kidHeight >= 42) 
{
    console.log("Get On That ride kiddo!");
}   
{ 
else if (age >= 10)
    console.log("Get On That ride kiddo!");

}
else {
    console.log("Sorry kiddo maybe next year!")
} 