function moving(input) {
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let h = Number(input[index]);
    index++;
    let size = w * l * h;
    let isFreeSpace = true;

    let command = input[index];
    index++;

    while (command !== "Done") {
        let box = Number(command);

        size -= box;

        if(size < 0) {
            isFreeSpace = false;
            break;
        }
        command = input[index];
        index++;
    }

    if (isFreeSpace) {
        console.log(`${size} Cubic meters left.`);
    }else{
        console.log(`No more free space! You need ${Math.abs(size)} Cubic meters more.`);
    }

}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])
