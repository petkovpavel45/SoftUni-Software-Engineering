function sortAnArray(array) {
    let sortedAlphabeticaly = array.sort();  
    let sortedByLength = sortedAlphabeticaly.sort((a,b) => a.length - b.length)
    console.log(sortedByLength.join(`\n`))
}
sortAnArray(["Deny", "omen", "test","Default"]);
