function hospital(input) {
    let index = 1;
    let days = Number(input[0]);
    let doctors = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;
    for(let i = 1; i <= days; i++) {
        let patients = Number(input[index]);
        index++;
        if(treatedPatients < untreatedPatients && i % 3 === 0){
            doctors += 1;
        }
        if(doctors >= patients) {
            treatedPatients += patients;
        } else {
            untreatedPatients += patients - doctors;
            treatedPatients += doctors;
        }
    }
    console.log(treatedPatients);
    console.log(untreatedPatients);
}
hospital(["4", "7", "27", "9", "1"])