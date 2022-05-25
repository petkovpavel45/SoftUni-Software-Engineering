function login(input) {
  let username = input.shift();
  let pass = username.split("").reverse().join("");
  let count = 1;

  while (true) {
    let enterPass = input.shift();
    if (count === 4) {
      console.log(`User ${username} blocked!`);
      break;
    }
    if (enterPass === pass) {
      console.log(`User ${username} logged in.`);
      break;
    } else {
      console.log("Incorrect password. Try again.");
    }
    count++;
  }
}
login(["Acer", "login", "go", "let me in", "recA"]);
console.log("-----");
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
