function openTab(evt, tabName) {
    // 1. Declarar variables
    var i, tabContent, tabBtns;

    // 2. Ocultar todos los elementos con la clase "tab-content"
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
        tabContent[i].classList.remove("active");
    }

    // 3. Quitar la clase "active" de todos los botones
    tabBtns = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove("active");
    }

    // 4. Mostrar la pestaña actual y añadir la clase "active" al botón que la abrió
    const selectedTab = document.getElementById(tabName);
    selectedTab.style.display = "block";
    setTimeout(() => {
        selectedTab.classList.add("active");
    }, 10);
    
    evt.currentTarget.classList.add("active");
}

// Función para desplegar/ocultar submenús
function toggleSubmenu(evt, submenuId) {
    evt.stopPropagation();
    const submenu = document.getElementById(submenuId);
    submenu.classList.toggle("active");
}

// Iniciar en la primera pestaña al cargar
document.addEventListener("DOMContentLoaded", function() {
    // Simula un clic en el primer botón si es necesario o ya está definido en el HTML
});