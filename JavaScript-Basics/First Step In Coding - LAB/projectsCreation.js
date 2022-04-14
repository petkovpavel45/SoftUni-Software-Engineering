function projectsCreation(input){

    let architectName = (input[0]);
    let countProjects = Number(input[1]);

    let neededHours = countProjects * 3;
    console.log(`The architect ${architectName} will need ${neededHours} hours to complete ${countProjects} project/s.`);

}
projectsCreation(["George", "4"])