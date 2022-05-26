function rounding (a, b) {
    if (b > 15) {
        b = 15;
    }
    a = a.toFixed(b);
    console.log(parseFloat(a));
}
rounding(10.5, 3)