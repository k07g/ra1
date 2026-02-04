async function fetchData() {
    const response = await fetch('https://wings.msn.to/tmp/it/fetch.php');
    if (!response.ok) {throw new Error(response.statusText);    }
    const text = await response.text();
    console.log(text);
}

fetchData();
