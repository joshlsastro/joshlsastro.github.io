function isCapitalized(string) {
  let firstChar;
  firstChar = string.charCodeAt(0);
  return (firstChar >= 'A'.charCodeAt(0)) && (firstChar <= 'Z'.charCodeAt(0));
}

function capitalize(word) {
  let firstPart, lastPart;
  firstPart = word.charAt(0);
  lastPart = word.substring(1);
  if (!isCapitalized(word)) {
    firstPart = String.fromCodePoint(word.charCodeAt(0)-32);
  }
  return firstPart + lastPart;
}

function main() {
  let history, trueHistory, words;
  history = document.getElementById('input').value;
  trueHistory = document.getElementById('conspiracyword').value;
  words = history.split(' ');
  let i;
  for (i=0; i<words.length; i++) {
    if (isCapitalized(words[i])) {
      words[i] = capitalize(trueHistory);
    }
  }
  document.getElementById('output').innerHTML = words.join(' ');
}
