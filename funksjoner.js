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

const måltid = [
    {name: "Kyllingwrap med salat og dressing", descripton: ""}
]