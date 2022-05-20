function weatherForecastPart2 (input){
    let a = Number(input[0]);
    if(a <= 11.9){
        console.log("Cold");
    }else if(a <= 14.9){
        console.log("Cool");
    }else if (a <= 20.00){
        console.log("Mild");
    }else if (a <= 25.9){
        console.log("Warm");
    }else if (a <= 35.00){
        console.log("Hot");
    }else{
        console.log("unknown")
    }
}
weatherForecastPart2(["16.5"])