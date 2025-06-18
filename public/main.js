// Classes for whole document
document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

// Nav menu on mobile
function toggleMenu() {
    const nav = document.getElementById("nav-links");
    nav.classList.toggle("open");
}

// JS for dialog open function 
const dialog = document.getElementById('experimentDialog');
const openBtn = document.getElementById('openDialogBtn');
const closeBtn = document.getElementById('closeDialogBtn');

// Open button (add button)
openBtn.addEventListener('click', () => {
    dialog.showModal();
});

// Close button
closeBtn.addEventListener('click', () => {
    dialog.close();
});


const kleuren = [
  180, // primary (blauwgroen)
  135, // secondary (groen)
  210, // secondary background (lichtblauw)
  54,  // highlight (geel)
  260, // accent (paars)
  0,   // complementair rood
  330  // complementair roze
];

function partyPopper() {
    let container = document.getElementById("confetti-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "confetti-container";
        container.style.position = "fixed";
        container.style.top = "0";
        container.style.left = "0";
        container.style.width = "100%";
        container.style.height = "100%";
        container.style.pointerEvents = "none";
        container.style.zIndex = "100000";
        document.body.appendChild(container);
    }

    for (let i = 0; i < 100; i++) {
        const confetto = document.createElement("div");
        confetto.classList.add("confetto-style");

        const posX = Math.random();
        const delay = Math.random();
        const size = 0.3 + Math.random() * 0.7;
        const duration = Math.random();
        const turn = Math.random();
        const rotateX = Math.random();
        const rotateY = Math.random();
        const rotateZ = Math.random();

        // Kies willekeurig kleur uit array
        const kleurHue = kleuren[Math.floor(Math.random() * kleuren.length)];

        confetto.style.setProperty("--posX", posX);
        confetto.style.setProperty("--delay", delay);
        confetto.style.setProperty("--color", kleurHue); // nu een hue i.p.v. 0..1
        confetto.style.setProperty("--size", size);
        confetto.style.setProperty("--duration", duration);
        confetto.style.setProperty("--turn", turn);
        confetto.style.setProperty("--rotateX", rotateX);
        confetto.style.setProperty("--rotateY", rotateY);
        confetto.style.setProperty("--rotateZ", rotateZ);

        confetto.addEventListener("animationend", () => {
            confetto.classList.add("fade-out");
            setTimeout(() => confetto.remove(), 500);
        });

        container.appendChild(confetto);
    }
}



