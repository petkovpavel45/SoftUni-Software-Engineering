function weatherForecast (input){
    let weatherGuess = input[0];

    if(weatherGuess === "sunny" ){
        console.log("It's warm outside!")
    }else{
        console.log("It's cold outside!")
    }
}
weatherForecast(["sunny"])