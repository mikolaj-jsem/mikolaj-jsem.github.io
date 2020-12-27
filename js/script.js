var score = 0;
var TIMELIMIT = 120;
var cardOnHand = false;
var timeleft = 0;
var timer;
var audio = new Audio('koniec.mp3');

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
  '***** ***',
    'Lwów',
    'Oktoberfest',
    'Juwenalia',
    'Ekonomia Eksperymentalna',
    'Piwo pszeniczne',
    'Piwo',
    'IKEA',
    'Pies z głową w dół',
    '12 groszy',
    'Na głowie kwietny ma wianek, w ręku zielony badylek, a przed nią bieży baranek, a nad nią lata motylek.',
    'Elitarny MIMUW',
    'Godzina policyjna',
    'Stok narciarski',
    'Miłości nie ma. Jest matematyka.',
    'Olek',
    'Twitter',
    'Nasza cywilizacja. Nasze zasady.',
    'Baranek',
    'Pula',
    'Stanisław Łaniewski',
    'Torus',
    'Linijka',
    'Równanie kwadratowe',
    'Kafefajka',
    'Lambda',
    'Połowinki z WZ',
    'Gruszki na wierzbie',
    'Mycie naczyń',
    'Mateusz Macias',
    'Dzielenie przez zero',
    'Śnieg z deszczem',
    'Twarz',
    'Metro',
    'Czy leci z nami pilot?',
    'Domek z kart',
    'Piwo z popcornem za 5zł',
    'Żubrówka',
    'Wurst',
    'Biesiadowo',
    'Krzywa użyteczności',
    'Karaoke',
    'Kings',
    'Cytrynówka',
    'Maseczka',
    'Szczepionka',
    'Jacek Sasin',
    'Epsilon',
    'Otrzęsiny',
    'Wideopiwo',
    'Pierogi z kapustą i grzybami',
    'Pierogi ruskie',
    'Kwarantanna',
    'Święty mikołaj',
    'Kalambury',
    'Kiełbasa',
    'Bigos',
    'Barszcz z uszkami',
    'Tofu',
    'Prasować koszule',
    'Magisterka',
    'Wczasy w Egipcie',
    'Miłość nad Bałtykiem',
    'Czajkowski',
    'Model torusa Jackowskiego',
    'Bojanowska & Jackowski',
    'Przestrzeń topologiczna',
    'Metryka rzeka',
    'Skrypt z AM Strzeleckiego',
    'GAL',
    'Grupa',
    'Kalashnikov',
    'Goldstein',
    'Łąki Łan',
    'Zbiór',
    'Delta',
    'Aksjomat',
    'Centralne Twierdzenie Graniczne',
    'USOS',
    'JSEM',
    'Otto',
    'Kurczak w cieście chrupko',
    'Dystans społeczny',
    'Żel antybakteryjny',
    'Koronawirus',
    'Nietoperz z Wuhan',
    'Telekonsultacja',
    'Korpo',
    'Prawo wielkich liczb',
    'Mekong naprzeciwko WNE',
    'Piwo w Bazyliszku przed wykładem z Mikro',
    'Hodowla pszczół Czajkowskiego',
    '007',
    'Pszczółki w Pijalni wódki i piwa',
    'Szoty za dwa złote',
    'Ulubiona',
    'Van Binh',
    'BUW dla sów',
    'Konsultacje z Olkiem',
    'Przestrzeń Hausdorffa',
    'Supremum',
    'Zbiór domknięty',
    'Zbiór zwarty',
    'Wigilia JSEM',
    'Tuluza',
    'Monachium',
    'Wieczorki u Wasa',
    'Jackowski z torusem pod pachą',
    'Przeksztalcenie kubka w torus',
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
            if (cardOnHand) {
               audio.play();
            }
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

function updateScore(scoreAdded) {
    score += scoreAdded;
    document.getElementById("score-value").innerHTML = String(score);
}

function buttonAction(scoreAdded, finishRound){
    if (finishRound) {
        if (cardOnHand) {
            resetWarning();
            updateTimer(0);
            cardOnHand = false;
            clearInterval(timer);
            updateScore(scoreAdded);
        } else {
            printWarning("No ej. Już zadecydowałeś o wyniku tej rundy albo jeszcze nie zacząłeś. Weź nową kartę.");
        }
    }
    else {
        if (cardOnHand) {
           printWarning("Jesteś pewien, że nie Ty teraz rysujesz? Podaj wynik swojej rundy.");
        } else {
           printWarning("Pamiętaj, że rozliczysz się w swoim sumieniu ze swoich oszustw.")
           updateScore(scoreAdded);
        }
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