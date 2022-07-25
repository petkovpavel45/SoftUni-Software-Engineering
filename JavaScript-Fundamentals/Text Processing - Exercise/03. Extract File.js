function extractFiles(text) {
  let splitWord = text.split("\\").pop().split(".");
  let extension = splitWord.pop();
  let fileName = splitWord.join(".");


  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
}

extractFiles("C:\\Projects\\Data-Structures\\LinkedList.bak.cs");
