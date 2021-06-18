


function menu() {
    const btn = document.querySelector('.btn_menu_mobile'),
        i = JSON.parse(btn.getAttribute('aria-expanded')),
        nav = document.querySelector('.list_row_nav'),
        menu = document.querySelector('.img_menu_nav_change');
    if (i) {
        nav.style.display = "none"
        menu.src = "./assets/burger.svg"
        menu.alt = "bouton d'ouveture du menu"
    } else {
        nav.style.position = "absolute"
        nav.style.right = "2%";
        nav.style.display = "flex"
        menu.src = "./assets/close.svg"
        menu.alt = "bouton de fermeture du menu"
    }
    btn.setAttribute('aria-expanded',!i)
}