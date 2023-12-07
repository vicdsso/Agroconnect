// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    // Função para realizar a filtragem
    $("#filtro").on("input", function () {
        var termoFiltro = $(this).val().toLowerCase();

        // Itera sobre os itens e oculta/mostra conforme o filtro
        $(".item").each(function () {
            var tituloItem = $(this).data("titulo").toLowerCase();

            if (termoFiltro != "" && tituloItem.includes(termoFiltro)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});