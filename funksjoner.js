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
    menuOpen = !menuOpen; // dette gjør at hvis menuOpen er true vil det bli motsatte som er false. Dette gjør vi når skal opne menuen for eksempel du klikker på det og de vil det bli true som betyr at det hopper over if og til else og kjører programmet. Da vil menuOpen = !menuOpen bli til true etter gjort if fuksjonene.
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
    {navn1: "", beskrivelse1: "", pris1: "", bilder1: ""},
]

function ukeFrokost() {
    const måltid1El = document.querySelectorAll("#måltid1"); // Jeg har prøvd med getElementById, men fungerte ikke så jeg brute querySelectorAll som fungerte veldig bra.
    const beskrivelse1El = document.querySelectorAll("#beskrivelse1");
    const pris1El = document.querySelectorAll("#koster1");
    const bilder1El = document.querySelectorAll("#bilder1");

    for (let i = 0; i < måltid1El.length; i++) { // Her er for løkken i Javascript
        const randomMåltid1 = frokost[Math.floor(Math.random() * frokost.length)];

    måltid1El[i].innerText = randomMåltid1.navn1;
    beskrivelse1El[i].innerText = randomMåltid1.beskrivelse1;
    pris1El[i].innerText = randomMåltid1.pris1;
    bilder1El[i].innerHTML = `<img src="${randomMåltid1.bilder1}" width="100px">`;
    }
}

window.onload = ukeFrokost;




const lunsj = [ // Her er listen for lunsj. Jeg bruker dette type Array som lagres objektene som bli laget i Arrayen, jeg bruke dette for å bruke mindre plass enn å lage for hvert av objektene en varibal.
    {navn: "Kyllingwrap med salat og dressing", beskrivelse: "Den fantastiske kombinasjonen kylling, kremost, pesto og friske grønnsaker vil garantert få frem smil, tilleg med salat og dressing", pris: "100 kr", bilder: ""},
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

window.onload = ukeLunsj; // Gjør at det loader nye ting på menyet når du klikker på linket eller refresher siden.