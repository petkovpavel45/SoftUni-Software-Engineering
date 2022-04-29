function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for(let i = floors; i > 0; i--) {
        let res = "";
        for(let j = 0; j < rooms; j++){

            if(i === floors){
                res += "L" + i + j + " ";
            }else if(i % 2 === 0) {
                res += "O" + i + j + " ";
            }else {
                res += "A" + i + j + " ";
            }
        }
        console.log(res);
    }
}
building(["6", "4"])