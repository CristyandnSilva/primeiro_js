document.addEventListener("DOMContentLoaded", function () {
    // Configura os botões para navegar entre páginas
    document.getElementById("btnInicio")?.addEventListener("click", function () {
        window.location.href = "index.html";
    });

    document.getElementById("btnPagina3")?.addEventListener("click", function () {
        window.location.href = "pagina_03.html";
    });

    document.getElementById("btnPagina4")?.addEventListener("click", function () {
        window.location.href = "pagina_04.html";
    });
    document.getElementById("btnPagina2")?.addEventListener("click", function () {
        window.location.href = "pagina_02.html";
    });
});