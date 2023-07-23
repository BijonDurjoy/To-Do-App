 document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:7070/getAll')
    .then(response => response.json())
    .then(data => console.log(data));
    loadHtmlTable([]);
});

function loadHtmlTable(data) {
    const table = document.querySelector('table tbody');


    if (data.length === 0) {
        table.innerHTML = "<tr><td class = 'no-data' colspan='5'>No Data</td></tr>";
    }
}