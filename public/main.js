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