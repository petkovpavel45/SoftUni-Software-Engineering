function housePainting (input){
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let sideWall = x * y;
    let window = 1.5 * 1.5;
    let twoSideWalls = (2 * sideWall) - (2 * window);
    let backWall = x * x;
    let entrence = 1.2 * 2;
    let BackAndFrontWall = (2 * backWall) - 2.4;
    let totalArea = twoSideWalls + BackAndFrontWall;
    let greenPaint = totalArea / 3.4;

    let twoRectangle = 2 * (x * y);
    let twoTriangles = 2 * (x * h / 2);
    let totalAreaRoof = twoRectangle + twoTriangles;
    let redPaint = totalAreaRoof / 4.3;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
}
housePainting(["10.25", "15.45", "8.88"])