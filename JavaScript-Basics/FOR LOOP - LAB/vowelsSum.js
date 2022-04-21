function vowelsSum(input) {

    let text = input[0];
    let res = 0;
    for(let i = 0; i < text.length; i++){
        switch(text.charAt(i)) {
            case "a": res += 1;break;
            case "e": res += 2;break;
            case "i": res += 3;break;
            case "o": res += 4;break;
            case "u": res += 5;break;
        }
    }
    console.log(res);
}
vowelsSum(["hi"])