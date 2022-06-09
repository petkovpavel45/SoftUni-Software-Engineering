function addAndRemove(input) {
    let newArray = [];

    for (let i = 0; i < input.length; i++) {
        let command = input[i];
        if (command === 'add') {
            newArray.push(i + 1);
        } else if (command === 'remove') {
            newArray.pop();
        }
    }
    if (newArray.length === 0) {
        console.log("Empty");
    } else {
        console.log(newArray.join(" "));
    }
}
addAndRemove(['remove', 'remove', 'remove'])