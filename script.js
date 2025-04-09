document.addEventListener('DOMContentLoaded', function () {
    // Inicialitza DataTables a la taula
    const taula = document.querySelector('table');
    if (taula) {
        new DataTable(taula);
    }
});
