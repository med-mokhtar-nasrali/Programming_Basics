
function greetsomebody(person){
    if(person == "Amin"){
        var time = 10 

            console.log("Good Day Amin!",time);
    }else{
        if(person != "Amin")
            console.log("I'm coming for you, Dooku!")
    }
    
}
greetsomebody("Amin")//this will print Good Day Amin! with the time
greetsomebody("Dooku")//this will print I'm coming for you, Dooku!