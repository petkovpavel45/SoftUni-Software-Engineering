function areaOfFigures(input) {
    let shape = (input[0]);
    if (shape === "square") {
        let squareSide = Number(input[1]);
        let area = squareSide * squareSide;
        console.log(area.toFixed(3));
    } else if (shape === "rectangle") {
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        let area = sideA * sideB;
        console.log(area.toFixed(3));
    } else if (shape === "circle") {
        let radius = Number(input[1]);
        let area = Math.PI * radius * radius;
        console.log(area.toFixed(3));
    } else if (shape === "triangle") {
        let side = Number(input[1]);
        let heightSide = Number(input[2]);
        let area = (side * heightSide) / 2;
        console.log(area.toFixed(3));
    }
}
areaOfFigures(["square", "5"])