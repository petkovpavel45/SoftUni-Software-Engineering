function fishTank(input){
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3]);

    let volume = (lenght * width * height) * 0.001;
    let extraSpace = volume * (percentage / 100);
    let totalVolume = volume - extraSpace;

    console.log(totalVolume)
}
fishTank(["85", "75", "47", "17"])