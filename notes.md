For a long time I've been wanting to incorporate the advice from all these great articles and resources on the internet. With the intention of becoming a better developer.

However saying and doing is a totally different thing. The first steps I'm going to assume is saving those resources.

Sat, Apr 30, 2022 10:59:52 AM

What I want to do now is work on getting the image file names processed to skeletal case.

```js
// * default arugments
// * JavaScript switch-case
function processTitles(inputString, format = "skeletal") {
  const length = 36; // length of the image file name.
  switch (format) {
    case "skeletal":
      format = format.slice(0, length).split(" ").join("-");
  }
  return format;
}
```

I also want to remove the punctioation, and the whitespace it leaves behind.

# https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex

```js
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
```

Sat, Apr 30, 2022 11:14:18 AM

### Create unique image file names -> handler

To create the unique images we can use the above two functions removePunctuation(inputString) and ProcessImageTitle().
Which leads to the question of where are we getting the input string

```js

const url, path;

url = 'https://www.google.com/';
path = '/Users/ptrn158/Documents/ripoff-ejs/public/img/';

const getImages = async (url, title) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({
    path: `${path}${processImageTitles(title)}.png`,
    fullPage: true,
  });

  await browser.close();
};

getImages(url, processImageTitles(title));
```

Sat, Apr 30, 2022 12:52:42 PM

Now that we have a unique file name for each image, we can start collecting our images!
