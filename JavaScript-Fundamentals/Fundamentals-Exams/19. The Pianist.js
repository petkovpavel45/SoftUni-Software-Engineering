function solve(input) {
  let numberPieces = Number(input.shift());
  let playlist = {};

  for (let index = 0; index < numberPieces; index++) {
    let [piece, composer, key] = input.shift().split("|");
    if (!playlist[piece]) {
      playlist[piece] = {};
    }
    playlist[piece].composer = composer;
    playlist[piece].key = key;
  }
  while (input[0] !== "Stop") {
    let tokens = input.shift().split("|");
    let command = tokens[0];
    let piece = tokens[1];
    if (command === "Add") {
      let composer = tokens[2];
      let key = tokens[3];
      if (!playlist.hasOwnProperty(piece)) {
        playlist[piece] = {
          composer,
          key,
        };
        console.log(
          `${piece} by ${composer} in ${key} added to the collection!`
        );
      } else {
        console.log(`${piece} is already in the collection!`);
      }
    } else if (command === "Remove") {
      if (playlist.hasOwnProperty(piece)) {
        delete playlist[piece];
        console.log(`Successfully removed ${piece}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    } else if (command === "ChangeKey") {
      let newKey = tokens[2];
      if (playlist.hasOwnProperty(piece)) {
        playlist[piece].key = newKey;
        console.log(`Changed the key of ${piece} to ${newKey}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    }
  }
  for (let pieces of Object.entries(playlist)) {
    console.log(
      `${pieces[0]} -> Composer: ${pieces[1].composer}, Key: ${pieces[1].key}`
    );
  }
}

solve([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
