function lunchBreak(input){

    let tvShowName = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchTime = breakDuration / 8;
    let restTime = breakDuration / 4;
    let timeForTVShow = breakDuration - lunchTime - restTime;
    let diff = Math.abs(timeForTVShow - episodeDuration);
    if (timeForTVShow >= episodeDuration){
        console.log(`You have enough time to watch ${tvShowName} and left with ${Math.ceil(diff)} minutes free time.`);
    }else {
        console.log(`You don't have enough time to watch ${tvShowName}, you need ${Math.ceil(diff)} more minutes.`)
    }

}
lunchBreak(["Game of Thrones", "60", "96"])