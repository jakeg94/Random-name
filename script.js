//const tubeLine = ["Northern","Central","District","Picadilly","Victoria","DLR","Metropolitan","Circle","Hammersmith&City","Waterloo&City"];
//will pick a underground line 
//const getRandomNumber = (max) => Math.floor(Math.random() * max);

//const getRandomLine = () => 
//`${tubeLine[getRandomNumber(tubeLine.length)]}`;

//console.log(getRandomLine());
//const setRandomLine = () => {
    //var random_line = document.getElementById('random_line').innerText = getRandomLine();
//}

//document.getElementById('generate')
   // .addEventListener("click", setRandomLine);

    //will pick a station 
    const tubeData = {
        Central: ['North Acton','East Acton','White City','Shepherds Bush','Holland Park','Notting Hill Gate','Queensway','Lancaster Gate','Marble Arch','Bond Steet','Oxford Circus','Tottenham Court Road','Holborn','Chancery Lane','St.Pauls','Bank','Liverpool Street','Bethnal Green','Mile End','Stratford'],
        District: ['Wimbledon','Wimbledon Park','Sothfields','Putney East','Putney Bridge','Parsons Green','Fulham Broadway','West Brompton','Richmond','Kew Gardens','Kew Gardens','Gunnersbury','Ealing Broadway','Ealing Common','Acton Town','Chiswick Park','Turnham Green','Stamford Brook','Ravenscourt Park','Hammersmith','Barons Court','West Kensington','Earls Court','Gloucester Road','South Kensington','Sloane Square','Victoria','St.James Park','Westminster','Embankment','Temple','Balckfriars','Mansion House','Cannon Street','Monument','Tower Hill','Aldgate East','Whitechapel','Stepney Green','Mile End','Bow Road'],
        Northern: [],
        Picadilly: ['Earls Court','Gloucester Road','South Kensington','Knightsbridge'],
        Victoria: ['Brixton','Stockwell','Vauxhall','Pimlico','Victoria','Green Park','Oxford Circus','Warren Street','Euston','Kings Cross','Highbury & Islington','Finsbury Park'],
        DLR: [],
        Metropolitan: [],
        Circle: [],
        HammersmithCity: [],
        WaterlooCity: ['Waterloo', 'Bank'],

    };

    const tubeLines = Object.keys(tubeData);

    function getRandomStation(line) {
        const station = tubeData[line];
        const randomIndex = Math.floor(Math.random() * station.length);
        return station[randomIndex];
    }

    function getRandomLine() {
        const randomLine = tubeLines[Math.floor(Math.random() * tubeLines.length)];
        const randomStation = getRandomStation(randomLine);
        return `${randomStation}, ${randomLine}`;
    }

    function generateResult() {
        const randomTubeLine = getRandomLine();
        document.getElementById('random_line').textContent = randomTubeLine;
    }

    document.getElementById('generate').addEventListener('click', generateResult);

