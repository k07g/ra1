fetch("https://wings.msn.to/tmp/it/fetch.php")
  .then((response) => response.text())
  .then((text) => console.log(text));
