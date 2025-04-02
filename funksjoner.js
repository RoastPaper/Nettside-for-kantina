let menuOpen = false; // Dette er for å sjekke om hovr menuet er lukket eller ikke. Jeg bruker let for å endre koden videre.

function menuFunction() {
    const dropdownEl = document.getElementById("dropdownID");
    const mainEl = document.getElementById("main"); 
    const titleEl = document.getElementById("title");

    if (menuOpen) { // Her er når menuet er lukket. Jeg har puttet menuOpen i paranteser for å si at det er koblet fra en tidligere variabel utenfor function som er lik false.
        dropdownEl.style.width = "0"; // Gjør at width bli null som gjør at alt innhold bli borte.
        mainEl.style.marginLeft = "0";  // Gjør at området som er på main bli dyttet mot høyre når man klikker på knappen, men det er på 0 som gjør at det er normalt som css sier hva det skal gjøre.
        titleEl.style.marginLeft = "0"; // Samme som de forrige, men er på sdien uten å klikke på menuen.

    } else {
        dropdownEl.style.width = "220px"; // Her bygger det menyet når brukeren klikker på menuet knappen på toppen av venstre hver av sidene. 
        mainEl.style.marginLeft = "250px"; // Her dytter det som inneholder i bildet for hjemisden til høyre.
        titleEl.style.marginLeft = "150px"; // Dytter frem og tilbake når klikker på menuen eller når går av menuet.
    }
    menuOpen = !menuOpen; // dette gjør at hvis menuOpen er true vil det bli motsatte som er false. Dette gjør vi når skal åpne menuen for eksempel du klikker på det og de vil det bli true som betyr at det hopper over if og til else og kjører programmet. Da vil menuOpen = !menuOpen bli til true etter gjort if fuksjonene.
}

// Programmet under her gjør at du kan klikke hvor på nettsiden bortsatt fra menuen, av å klikke på nettsiden vil det lukkes. 
document.addEventListener("click", function(event) {   // Laget en addEventListener for at brukeren kan klikke ved å taste inn 'click' og lage en ny funksjonen med event. 
    const dropdownEl = document.getElementById("dropdownID"); // Henter Id fra HTML.
    const menuButton = document.getElementById("menu"); // Henter id fra HTML.

    if (menuOpen && !dropdownEl.contains(event.target) && !menuButton.contains(event.target)) { // En if funksjonen sjekker om det er true eller false for å lukke menuen.
        menuFunction();
    }
});

// Den nederste er for menye og kanskje også for varer.html hvis jeg trenger det.

function tableFunction() {
    const dropdown = document.getElementById("dropsideId");
    const tableEl = document.getElementById("table");
    const title = document.getElementById("titleid");

    if (menuOpen) {
        dropdown.style.width = "0";
        title.style.marginLeft = "0";
        tableEl.style.marginLeft = "50px";

    } else {
        dropdown.style.width = "220px";
        title.style.marginLeft = "150px";
        tableEl.style.marginLeft = "230px"; 
    }
    menuOpen = !menuOpen;
}

document.addEventListener("click", function(event) { 
    const dropdown = document.getElementById("dropsideId"); 
    const menubutton = document.getElementById("menuid");

    if (menuOpen && !dropdown.contains(event.target) && !menubutton.contains(event.target)) {
        tableFunction();
    }
});


// Funksjonen for å ha et random måltid for uke dagene fra mandag til fredag.

const frokost = [ // Her listen for frokost. 
    {navn: "Havregrøt med Banan og Kanel", beskrivelse: "Varm havregrøt laget med melk eller vann, toppet med skiver av banan og et dryss kanel for smak.", pris: "35kr", bilder: "bilder/IMG_1635.JPG"},
    {navn: "Gresk Yoghurt med Bær og Honning", beskrivelse: "Kremet gresk yoghurt servert med friske bær og et snev av honning. Høyt proteininnhold og naturlig søtt.", pris: "40kr", bilder: ""},
    {navn: "Smoothie med Frukt og Spinat", beskrivelse: "En sunn smoothie laget med banan, bær, spinat og yoghurt. En enkel måte å få i seg vitaminer på.", pris: "45kr", bilder: ""},
    {navn: "Avokadotoast på Grovbrød", beskrivelse: "Ristet grovbrød med most avokado, toppet med tomatskiver og et dryss havsalt. Fyller godt og gir sunne fettsyrer.", pris: "45kr", bilder: ""},
    {navn: "Chiapudding med Kokosmelk og Frukt", beskrivelse: "Chiakrøtter blandet med kokosmelk, servert med sesongens frukt. En god kilde til omega-3 fettsyrer.", pris: "40kr", bilder: ""},
    {navn: "Fullkornsbagel med Kremost og Laks", beskrivelse: "Grov bagel med kremost og røkt laks, toppet med agurk og dill. Smakfull og mettende frokost.", pris: "55kr", bilder: "bilder/170803-Matpakke_122-920x535.webp"},
    {navn: "Egg og Grønnsaksmuffins", beskrivelse: "Små muffins laget med egg, spinat, paprika og ost. Perfekt som en håndholdt frokost.", pris: "40kr", bilder: ""},
    {navn: "Fruktsalat med Nøtter", beskrivelse: "En frisk blanding av epler, bananer, druer og appelsiner, toppet med hakkede nøtter for ekstra crunch.", pris: "35kr", bilder: ""},
    {navn: "Omelett med Tomat og Fetaost", beskrivelse: "Lett omelett fylt med tomater, fetaost og urter. En god kilde til proteiner og sunne fettstoffer.", pris: "50kr", bilder: "bilder/php7netuk.jpg"},
    {navn: "Granola med Melk eller Yoghurt", beskrivelse: "Hjemmelaget granola servert med melk eller yoghurt og friske bær. Energirik frokost.", pris: "40kr", bilder: ""},
    {navn: "Proteinshake med Banan og Havre", beskrivelse: "En næringsrik shake laget med proteinpulver, banan, havregryn og melk. Perfekt for å starte dagen.", pris: "45kr", bilder: ""},
    {navn: "Rugbrød med Hummus og Grønnsaker", beskrivelse: "Grovt rugbrød med hummus, agurk og gulrot. Lett og smakfull frokost med fiber.", pris: "40kr", bilder: ""},
    {navn: "Müsli med Tørket Frukt og Nøtter", beskrivelse: "Müsli blandet med tørket frukt og nøtter, servert med melk eller yoghurt.", pris: "45kr", bilder: ""},
    {navn: "Kyllingwrap med Salat og Avokado", beskrivelse: "Fullkornswrap fylt med grillet kylling, avokado og ferske grønnsaker. Praktisk og mettende.", pris: "60kr", bilder: "bilder/19-062-21x1x.jpg"},
    {navn: "Havrepannekaker med Bær", beskrivelse: "Pannekaker laget med havremel, servert med friske bær og en klatt yoghurt. En sunn vri på frokost.", pris: "50kr", bilder: ""},
    {navn: "Eggesalat på Grovbrød", beskrivelse: "Kremet eggesalat med hardkokte egg, majones og urter, servert på grovt brød.", pris: "45kr", bilder: ""},
    {navn: "Kikertsalat med Tomat og Avokado", beskrivelse: "En frisk salat med kikerter, tomat, agurk, avokado og sitronsaft. Næringsrikt og mettende.", pris: "55kr", bilder: ""},
    {navn: "Søtpotet- og Spinatsalat", beskrivelse: "Ovnsbakt søtpotet med spinat, fetaost og en sitronvinaigrette. En sunn og smakfull kombinasjon.", pris: "60kr", bilder: ""},
    {navn: "Bananpannekaker", beskrivelse: "Pannekaker laget med most banan og egg, servert med bær. En sunnere pannekakeoppskrift.", pris: "40kr", bilder: "bilder/large.webp"},
    {navn: "Kokosnøtt- og Havresmoothie", beskrivelse: "Smoothie laget med havregryn, kokosmelk, banan og litt honning. En god måte å få energi på.", pris: "45kr", bilder: ""}
]

function ukeFrokost() {
    const måltid1El = document.querySelectorAll("#måltid1"); // Jeg har prøvd med getElementById, men fungerte ikke så jeg brute querySelectorAll som fungerte veldig bra.
    const beskrivelse1El = document.querySelectorAll("#beskrivelse1");
    const pris1El = document.querySelectorAll("#koster1");
    const bilder1El = document.querySelectorAll("#bilder1");

    for (let i = 0; i < måltid1El.length; i++) { // Her er for løkken i Javascript
        const randomMåltid1 = frokost[Math.floor(Math.random() * frokost.length)];

    måltid1El[i].innerHTML = randomMåltid1.navn;
    beskrivelse1El[i].innerHTML = randomMåltid1.beskrivelse;
    pris1El[i].innerHTML = randomMåltid1.pris;
    bilder1El[i].innerHTML = `<img src="${randomMåltid1.bilder}" width="100px">`;
    }
}

console.log(ukeFrokost)

const lunsj = [ // Her er listen for lunsj. Jeg bruker dette type Array som lagres objektene som bli laget i Arrayen, jeg bruke dette for å bruke mindre plass enn å lage for hvert av objektene en varibal.
    {navn: "Kyllingwrap med salat og dressing", beskrivelse: "Den fantastiske kombinasjonen kylling, kremost, pesto og friske grønnsaker vil garantert få frem smil, tilleg med salat og dressing", pris: "100kr", bilder: "bilder/grillet-kylling-wraps-med-karridressing.webp"},
    {navn: "Kyllingsalat med Fullkornspasta", beskrivelse: "Mettende salat med fullkornspasta, grillet kylling, friske grønnsaker som agurk, tomat, paprika, og en lett urtedressing.", pris: "70kr", bilder: ""},
    {navn: "Falafelwrap med Hummus og Grønnsaker", beskrivelse: "Fullkornswrap fylt med falafel, hummus, salat, agurk og tomat. Et godt plantebasert alternativ.", pris: "55kr", bilder: ""},
    {navn: "Pokébowl med Laks og Grønnsaker", beskrivelse: "Pokébowl med ris, rå laks, avokado, gulrot og edamamebønner, toppet med en sesamdressing.", pris: "75kr", bilder: ""},
    {navn: "Fullkornsbagel med Kalkun og Ost", beskrivelse: "Grov bagel fylt med kalkun, salat, tomat, agurk og en skive ost. Mettende og proteinrik.", pris: "55kr", bilder: ""},
    {navn: "Tacosalat med Bønner og Avokado", beskrivelse: "Salat med krydrede bønner, mais, tomat, salatblader, avokado og en liten klatt rømme på toppen.", pris: "65kr", bilder: "bilder/1-05-IMG_5387.jpg"},
    {navn: "Søtpotet- og Kikertebowl", beskrivelse: "Varm bowl med ovnsbakt søtpotet, kikerter, quinoa, og spinat, toppet med en tahinidressing.", pris: "70kr", bilder: ""},
    {navn: "Tunfisksalat med Egg og Grønnsaker", beskrivelse: "Blandede grønnsaker, tunfisk, kokt egg, mais og cherrytomater. Lett, proteinrik og full av smak.", pris: "65kr", bilder: ""},
    {navn: "Vegetarbowl med Quinoa og Grønnsaker", beskrivelse: "En blanding av quinoa, agurk, tomat, paprika, fetaost og en sitronvinaigrette. Full av fiber og protein.", pris: "60kr", bilder: ""},
    {navn: "Grovt Smørbrød med Avokado og Eggerøre", beskrivelse: "Ristet fullkornsbrød med most avokado og en porsjon eggerøre på toppen. Sunt fett og proteiner.", pris: "45kr", bilder: "bilder/Avokado-toast-med-smilende-egg-no026153_2021-03-09-081457.jpg"},
    {navn: "Linse- og Grønnsaksuppe", beskrivelse: "En varmende suppe laget med linser, gulrøtter, tomater og krydder. Perfekt på kalde dager.", pris: "50kr", bilder: ""},
    {navn: "Kylling- og Grønnsakssuppe", beskrivelse: "Kyllingsuppe med ferske grønnsaker som gulrot, selleri og poteter. Lett og smakfull.", pris: "50kr", bilder: ""},
    {navn: "Egg- og Spinatomelett", beskrivelse: "Omelett med spinat og tomater, servert med en skive grovt brød. Full av proteiner og vitaminer.", pris: "50kr", bilder: ""},
    {navn: "Fullkornsbaguette med Mozzarella og Tomat", beskrivelse: "Fullkornsbaguette fylt med mozzarella, tomat, basilikum og en dråpe balsamico.", pris: "55kr", bilder: ""},
    {navn: "Sushi-meny med Grønnsaker og Laks", beskrivelse: "En liten porsjon sushi med maki- og nigiriruller fylt med laks og grønnsaker. Lett og mettende.", pris: "70kr", bilder: "bilder/premium-sushi-fra-meny.jpeg"},
    {navn: "Grillet Grønnsakssandwich på Grovbrød", beskrivelse: "Sandwich med grillet paprika, aubergine, squash og litt pesto. Smaksrik og fiberrik.", pris: "55kr", bilder: ""},
    {navn: "Bulgursalat med Grillet Kylling", beskrivelse: "Bulgur med grillet kylling, grønnsaker og en urtedressing. Et sunt alternativ med mye fiber.", pris: "65kr", bilder: ""},
    {navn: "Tofu-salat med Grønnsaker og Sesamfrø", beskrivelse: "Salat med tofu, blandede grønnsaker og sesamfrø, toppet med en lett soya- og ingefærsaus.", pris: "60kr", bilder: ""},
    {navn: "Kikertwrap med Grønnsaker og Hummus", beskrivelse: "Fullkornswrap med hummus, krydrede kikerter, tomat og salat. Smakfull og mettende.", pris: "55kr", bilder: ""},
    {navn: "Ratatouille med Fullkornris", beskrivelse: "En grønnsaksrett laget med paprika, aubergine og squash i en tomatsaus, servert med fullkornris.", pris: "65kr", bilder: ""}
]

function ukeLunsj() {
    const måltidEl = document.querySelectorAll("#måltid"); // Bruker querySelectorAll enn getElementById fordi jeg skal hente flere elementer som har id="måltid".
    const beskrivelseEl = document.querySelectorAll("#beskrivelse");
    const prisEl = document.querySelectorAll("#koster");
    const bilderEl = document.querySelectorAll("#bilder");

    for (let i = 0; i < måltidEl.length; i++) { // Her er for løkken i Javascript
        const randomMåltid = lunsj[Math.floor(Math.random() * lunsj.length)]; // Her kobler jeg randomMåltif med lunsj ogog bruker math.random for en random number som er innefor lengden til lunsj. Jeg bruker Mat.floor for å gjør det til en hel tall.

    måltidEl[i].innerHTML = randomMåltid.navn; // Her bruker jeg randomMåltid enn lunsj fordi jeg koblet det i for løkken. 
    beskrivelseEl[i].innerHTML = randomMåltid.beskrivelse;
    prisEl[i].innerHTML = randomMåltid.pris;
    bilderEl[i].innerHTML = `<img src="${randomMåltid.bilder}" width="100px">`; //Her må jeg gjøre litt annerledes, ifølge en kilde jeg fant jeg kan bruke noe som er kalt Template Literals som gjør jeg kan bruke varabler og uttrykk dirkete inni strengen uten må bruke + tegn. For å lage et template literal må jeg bruke `´ og ${}.
    }
}
console.log(ukeLunsj) // Tester alt fungeres om det skal

window.onload = ukeFrokost();

window.onload = ukeLunsj(); // Gjør at det loader nye ting på menyet når du klikker på linket eller refresher siden.