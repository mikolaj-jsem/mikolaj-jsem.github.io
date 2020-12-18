var score = 0;
var TIMELIMIT = 30;
var cardOnHand = false;
var timeleft = 0;
var timer;

var quotes = [
  "Wstęga Mobiusa",
  "Butelka Kleina",
  "Prezydent Kuba Trojgo",
  "Londyn",
  "Kuba pisze mail do Jackowskiego",
  "Bazyliszek",
  "Wierzba",
  "Sesja",
  "Diagram ryby",
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
  "Jak się nie golisz, to masz wąs.",
  "Upić się jak szpadel.",
  "The Emirates",
];


function getRandomQuote(numberOfQuotes) {
  var randomNumber = Math.floor(Math.random() * numberOfQuotes);
  return quotes[randomNumber];
}

function printString(string) {
    var quoteString = "";
    quoteString += '<p class="quote">' + string + "</p>";
    quoteString += "</p>";
    document.getElementById("quote-box").innerHTML = quoteString;
}

function printQuote() {
  var selectedQuote = getRandomQuote(quotes.length);
  printString(selectedQuote);
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


function updateTimer(timeleft_){
    timeleft = timeleft_
    let min = String(Math.floor(timeleft / 60)).padStart(1, '0');
    let sec = String(timeleft % 60).padStart(2, '0');
    document.getElementById("timer-value").innerHTML = min + ":" + sec;
}

function setTimer(timelimit){
    timeleft = timelimit;

    updateTimer(timeleft);
    timer = setInterval(function () {
        --timeleft;
        if (timeleft < 0) {
            printString("");
            clearInterval(timer);
        } else {
            updateTimer(timeleft);
        }
    }, 1000);
}

function nextCard() {
    if (cardOnHand == false) {
        resetWarning();
        setTimer(TIMELIMIT);
        printQuote();
        cardOnHand = true;
    } else {
        printWarning("Halo. Nie dostaniesz nowej karty zanim nie podasz wyniku rundy!");
    }
}

function failedCard(){
    if (cardOnHand) {
        resetWarning();
        score -= 1;
        cardOnHand = false;
        updateTimer(0);
        clearInterval(timer);
        document.getElementById("score-value").innerHTML = String(score);
    } else {
        printWarning("No ej. Już zadecydowałeś o wyniku tej rundy. Weź nową kartę.");
    }
}

function guessedCard(){
    if (cardOnHand) {
        resetWarning();
        score += 1;
        cardOnHand = false;
        updateTimer(0);
        clearInterval(timer);
        document.getElementById("score-value").innerHTML = String(score);
    } else {
        printWarning("No ej. Już zadecydowałeś o wyniku tej rundy. Weź nową kartę.");
    }
}

function printWarning(warning_msg) {
    var quoteString = "";
    quoteString += '<p>' + warning_msg + "</p>";
    quoteString += "</p>";
    document.getElementById("warning-box").innerHTML = quoteString;
}


function resetWarning() {
    document.getElementById("warning-box").innerHTML = "";
}