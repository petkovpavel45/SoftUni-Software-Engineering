function solve(input) {
  let patternWord = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/g;
  let n = Number(input.shift());
  for (let index = 0; index < n; index++) {
    let barcode = input.shift();
    let match = patternWord.exec(barcode);

    if (match !== null) {
      let productGroup = "";
      let product = match[1];
      for (let ch of product) {
        let isNum = Number(ch);
        if (isNum * 1 === isNum) {
          productGroup += ch;
        }
      }
      if (productGroup === "") {
        productGroup = "00";
      }
      console.log(`Product group: ${productGroup}`);
    } else {
      console.log("Invalid barcode");
    }
    match = patternWord.exec(barcode);
  }
}

solve(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
console.log("------");
solve([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#",
]);
