document.addEventListener('DOMContentLoaded', function () {
    // Busquem la taula
    var taula = doument.querySelector("#taula");
    
    // DataTable -> parametres: taula, idioma català, pagnig, searching, ordering, pageLength, lengthMenu, initComplete.
    const table = new DataTable(taula, {
        language: {
            url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/ca.json'
        },
        paging: true,
        searching: true,
        ordering: true,
        pageLength: 5,
        lengthMenu: [5, 10, 25, 50, 100],
        initComplete: function () {
            // Filtres per columna (a <tfoot>)
            const api = this.api();
            api.columns().every(function () {
                const column = this;
                const input = column.footer().querySelector('input');
                if (input) {
                    input.addEventListener('keyup', function () {
                        column.search(this.value).draw();
                    });
                }
            });
        }
    });
});
