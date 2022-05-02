function numberPyramid(input) {
    let n = Number(input[0]);
    let current = 1;
    let isBigger = false;
    let res = "";

    for(let rows = 1; rows <= n; rows++){
        for(let cols = 1; cols <= rows; cols++){
            if(current > n){
                isBigger= true;
                break;
            }
            res += current + " ";
            current++;
        }
        console.log(res);
        res = "";
        if(isBigger){
            break;
        }
    }
}
numberPyramid(["7"])