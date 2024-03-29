let btnEl = document.getElementById("btn");
let quoteEl = document.getElementById("quote");
let authorEl = document.getElementById("author");
const apiURL = "https://api.quotable.io/random";

async function getQuote() {
    try {
        btnEl.innerText = "Loading...";
        btnEl.disabled = true;
        quoteEl.innerText = "Updating...";
        authorEl.innerText = "Updating...";
        let response = await fetch(apiURL);
        let data = await response.json();
        let quoteContent = data.content;
        let quoteAuthor = data.author;
        quoteEl.innerText = quoteContent;
        authorEl.innerText = "~ " + quoteAuthor;
        btnEl.innerText = "Get a quote";
        btnEl.disabled = false;
        
    } catch (error) {
        console.log(error);
        quoteEl.innerText = "An error happened, try again later.";
        authorEl.innerText = "Error";
        btnEl.innerText = "Get a quote";
        btnEl.disabled = false;
    }


}

getQuote();
btnEl.addEventListener("click", getQuote);
