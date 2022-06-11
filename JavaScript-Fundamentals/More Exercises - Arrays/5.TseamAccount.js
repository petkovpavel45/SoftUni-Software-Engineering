function tseamAccount(input) {
  let games = input.shift().split(" ");

  while (input[0] !== "Play!") {
    let tokens = input.shift().split(" ");
    let commands = tokens[0];
    let game = tokens[1];

    switch (commands) {
      case "Install":
        if (!games.includes(game)) {
          games.push(game);
        }
        break;
      case "Uninstall":
        if (games.includes(game)) {
          games.splice(games.indexOf(game), 1);
        }
        break;
      case "Update":
        if (games.includes(game)) {
          games.splice(games.indexOf(game), 1);
          games.push(game);
        }
        break;
      case "Expansion":
        let splitGame = game.split("-");
        let gameExp = splitGame[0];
        let expansion = splitGame[1];
        if (games.includes(gameExp)) {
          games.splice(
            games.indexOf(gameExp) + 1,
            0,
            `${gameExp}:${expansion}`
          );
        }
        break;
    }
  }
  console.log(games.join(" "));
}
tseamAccount([
  "CS WoW Diablo",
  "Uninstall XCOM",
  "Update PeshoGame",
  "Update WoW",
  "Expansion Civ-V",
  "Play!",
]);
