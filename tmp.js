function removePunctuation(inputString) {
  //   var s = "This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation";
  let punctuationless = inputString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  let finalString = punctuationless.replace(/\s{2,}/g, " ");

  return finalString;
}

function processImageTitles(title) {
  let punctuationless = removePunctuation(title);
  const length = 36; // limit the length of the file name to 36 words
  return punctuationless.slice(0, length).split(" ").join("-");
}

console.log(
  processImageTitles(
    "How to write CSS like a professional. Best techniques to get from idea to polished result. | by Nick Haralampopoulos | Medium"
  )
);
