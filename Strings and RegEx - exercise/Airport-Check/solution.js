function solve() {

    let string = document.getElementById('str');
    let outputElement = document.getElementById('result');

    let [text, wantedInfo] = string.value.split(', ');
    let message;

    let namePattern = / ([A-Z]([A-Za-z]*)?)(-[A-Z][A-Za-z]*\.)?-([A-Z][A-Za-z]*)? /g;
    let airportPattern = / [A-Z]{3}\/[A-Z]{3} /g;
    let flightNumberPattern = / [A-Z]{1,3}[0-9]{1,5} /g;
    let companyPattern = / - [A-Z][A-Za-z]*?\*[A-Z][A-Za-z]*? /g;

    let matchInfo = text.match(namePattern)[0];
    let name = matchInfo.trim().replace(/\-/g, ' ');
    let airport = text.match(airportPattern)[0].split('/').map((e) => e.trim());
    let flightNumber = text.match(flightNumberPattern)[0].trim();
    let company = text.match(companyPattern)[0].trim().replace(/\*/g, ' ').substr(2);

    if (wantedInfo === 'name') {

        outputElement.textContent = `Mr/Ms, ${name}, have a nice flight!`;
    } else if (wantedInfo === "flight") {

        outputElement.textContent = `Your flight number ${flightNumber} is from ${airport[0]} to ${airport[1]}.`;
    } else if (wantedInfo === 'company') {

        outputElement.textContent = `Have a nice flight with ${company}.`;
    } else if (wantedInfo === 'all') {

        outputElement.textContent = `Mr/Ms, ${name}, your flight number ${flightNumber} is from ${airport[0]} to ${airport[1]}. Have a nice flight with ${company}.`;
    }
}