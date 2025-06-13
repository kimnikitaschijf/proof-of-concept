document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

function toggleMenu() {
    const nav = document.getElementById("nav-links");
    nav.classList.toggle("open");
}

  const html = document.documentElement;
  html.classList.remove('no-js');
  html.classList.add('js');

  const dialog = document.getElementById('experimentDialog');
  const openBtn = document.getElementById('openDialogBtn');
  const closeBtn = document.getElementById('closeDialogBtn');

  dialog.removeAttribute('open');

  openBtn.addEventListener('click', () => dialog.showModal());
  closeBtn.addEventListener('click', () => dialog.close());