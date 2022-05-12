function gameOfIntervals(input) {
    let moves = Number(input[0]);
    let index = 1;
    let points = 0
    let From0to9 = 0
    let From10to19 = 0
    let From20to29 = 0
    let From30to39 = 0
    let From40to50 = 0
    let invalid = 0
 
    for (let i = 1; i <= moves; i++) {
        let num = Number(input[index])
        index++;
        if (num >= 0 && num <= 9) {
            points += num * 0.2
            From0to9 += 1
        } else if (num >= 10 && num <= 19) {
            points += num * 0.3
            From10to19 += 1
        } else if (num >= 20 && num <= 29) {
            points += num * 0.4
            From20to29 += 1
        } else if (num >= 30 && num <= 39) {
            points += 50
            From30to39 += 1
        } else if (num >= 40 && num <= 50) {
            points += 100
            From40to50 += 1
        } else {
            points = points / 2
            invalid += 1
        }
    }
    let p1 = From0to9 / moves * 100
    let p2 = From10to19 / moves * 100
    let p3 = From20to29 / moves * 100
    let p4 = From30to39 / moves * 100
    let p5 = From40to50 / moves * 100
    let p6 = invalid / moves * 100
    console.log(points.toFixed(2))
    console.log(`From 0 to 9: ${p1.toFixed(2)}%`)
    console.log(`From 10 to 19: ${p2.toFixed(2)}%`)
    console.log(`From 20 to 29: ${p3.toFixed(2)}%`)
    console.log(`From 30 to 39: ${p4.toFixed(2)}%`)
    console.log(`From 40 to 50: ${p5.toFixed(2)}%`)
    console.log(`Invalid numbers: ${p6.toFixed(2)}%`)
 
}
gameOfIntervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"])