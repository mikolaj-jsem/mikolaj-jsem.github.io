//
//
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);

var quotes = [
  "Wstęga Mobiusa",
  "Butelka Kleina",
  "Prezydent Kuba Trojgo",
  "Londyn",
  "Kuba pisze list do Jackowskiego",
  "Bazyliszek",
  "Wierzba",
  "Sesja",
  "diagram ryby",
  "Szisza",
  "Koronaparty",
  "Honoratka",
  "Prosta",
  "Iloczyn skalarny",
  "Wielomian interpolacyjny Lagrange'a",
  "Sigma ciało",
  "Zdaje Się Główniejsza Konwersacja",
  "Suchar",
  "Pola Mokotowskie",
  "Twierdzenie Banacha o Punkcie Stałym",
  "Goldman Sachs",
  "Wydział Nauk Ekonomicznych",
  "Teodor Nguyen",
];

// global variable for auto-refresh timeout
let nIntervID;

// call the printQuote function to display a random quote in the browser
printQuote();

function getRandomQuote(numberOfQuotes) {
  // generate a random number between 0 and "the number of quotes -1"
  var randomNumber = Math.floor(Math.random() * numberOfQuotes);
  // return the corresponding array element
  return quotes[randomNumber];
}

function printQuote() {
  // create a variable by calling getRandomQuote and passing to it
  // the number of quotes in the array
  var selectedQuote = getRandomQuote(quotes.length);
  var quoteString = "";
  quoteString += '<p class="quote">' + selectedQuote + "</p>";
  quoteString += "</p>";
  // assign quoteString to the innerHTML of the "quote-box" div
  document.getElementById("quote-box").innerHTML = quoteString;
  // call the function to randomly change the background color
  changeBackgroundColor();
}

function changeBackgroundColor() {
  var backgroundColor =
    "rgb(" +
    randomNumberForRGB() +
    "," +
    randomNumberForRGB() +
    "," +
    randomNumberForRGB() +
    ")";
  document.body.style.backgroundColor = backgroundColor;
}

function randomNumberForRGB() {
  return Math.floor(Math.random() * 256);
}

// function to auto-refresh the browser window every 10 seconds
// with a new quote if the button has not been clicked
function autoRefresh() {
  clearInterval(nIntervID);
  nIntervID = window.setInterval(printQuote, 10000);
}
