let menuOpen = false // Viser at det menuOpen er false som betyr når det er lukket.

function menuFunction() {
    const dropdownEl = document.getElementById("dropdownID");
    const mainEl = document.getElementById("main"); 

    if (menuOpen) { // Her er når menuet er lukket 
        dropdownEl.style.width = "0"; // Gjør at width bli null som gjør at bli borte.
        mainEl.style.marginLeft = "0";  // Gjør at området som er på main bli dyttet mot høyre når man klikker på knappen, men det er på 0 som gjør at det er normalt.
    } else {
        dropdownEl.style.width = "220px"; // Her bygger det menyet når brukeren klikker på menuet. 
        mainEl.style.marginLeft = "250px"; // Her dytter det som inneholder i bildet for hjemisden til høyre.
    }
    menuOpen = !menuOpen; 
}

document.addEventListener("click", function(event) {
    const dropdownEl = document.getElementById("dropdownID");
    const menuButton = document.querySelector(".menu");

    if (menuOpen && !dropdownEl.contains(event.target) && !menuButton.contains(event.target)) {
        menuFunction();
    }
});