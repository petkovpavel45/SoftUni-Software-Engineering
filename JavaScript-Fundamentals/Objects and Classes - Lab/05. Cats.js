function parseCats(catsAsStrings) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }
  let arrayCats = [];
  for (let catAsStrings of catsAsStrings) {
    let tokens = catAsStrings.split(" ");
    let cat = new Cat(tokens[0], Number(tokens[1]));
    arrayCats.push(cat);
    console.log(arrayCats);
  }

  for (let cat of arrayCats) {
    cat.meow();
  }
}
parseCats(["Mellow 2", "Tom 5"]);
