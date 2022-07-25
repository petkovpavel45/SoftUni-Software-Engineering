function replaceRepeatingCh(str) {
    let split = str.split("");
    let helpArr = [];
    for(let i = 0; i < split.length; i++) {
        let char = split[i];
        if(char !== split[i + 1]) {
            helpArr.push(char);
        }
    }
    console.log(helpArr.join(""));
}

replaceRepeatingCh('qqqwerqwecccwd')