module.exports =  function (number){

    //Check if value was entered
    if(!number){
        return "You entered an empty value";
    }

    //Check if value is not a number
    if(isNaN(number)){
        return "The value you entered is not a number";
    }


    let outputString = "";

    //Check if number is divisible by 3, 5, or 7, if not, return number as string
    if(number % 3 === 0 || number % 5 === 0 || number % 7 === 0){
        if(number % 3 === 0){
            outputString += "Pling";
        }
        if(number % 5 === 0){
            outputString += "Plang";
        }
        if(number % 7 === 0){
            outputString += "Plong";
        }
    }else{
        outputString = number.toString();
    }
    
    return outputString;
}
