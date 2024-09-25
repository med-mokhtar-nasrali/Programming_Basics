function howMuchLeftOverCake(numberOfPieces,numberOfPeople){

    var leftovers = numberOfPieces - numberOfPeople;

if(leftovers <= 0){
    console.log("No leftovers for you!") //this will print No leftovers for you! if the leftovers == 0
}else if (leftovers <= 2){
    
    console.log("You have some leftovers") // this will print You have some leftovers if there is leftovers between 1 and 2
    console.log("number of leftovers",leftovers)

}else if (leftovers <=5){
    console.log("number of leftovers",leftovers)
    console.log("You have leftovers to share") // this will print You have leftovers to share if there is leftovers between 3 and 5
}else{
    (numberOfPieces >= 5)
    console.log("number of leftovers",leftovers)
    console.log("Hold another party!")
}
    return leftovers; //this will save the leftovers value for later
}
howMuchLeftOverCake(12,5);// this will put variables
