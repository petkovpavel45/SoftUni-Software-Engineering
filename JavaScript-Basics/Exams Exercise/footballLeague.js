function footballLeague(input) {
    let index = 0;
    let capacity = Number(input[index]);
    index++
    let allFans = Number(input[index]);
    index++;

    let aFans = 0;
    let bFans = 0;
    let vFans = 0;
    let gFans = 0;

    for(let i = 0; i <= allFans; i++){
        let sector = input[index];
        index++;

        switch(sector){
            case "A":
                aFans++;
                break;
            case "B":
                bFans++;
                break;
            case "V":
                vFans++;
                break;
            case "G":
                gFans++;
                break;
        }
    }
    let aFansPr = aFans / allFans * 100;
    let bFansPr = bFans / allFans * 100;
    let vFansPr = vFans / allFans * 100;
    let gFansPr = gFans / allFans * 100;
    let allFansPr = allFans / capacity * 100;

    console.log(aFansPr.toFixed(2) + "%");
    console.log(bFansPr.toFixed(2) + "%");
    console.log(vFansPr.toFixed(2) + "%");
    console.log(gFansPr.toFixed(2) + "%");
    console.log(allFansPr.toFixed(2) + "%");
}
footballLeague(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"])