function youClickedMe() {
    alert("You clicked me!");
}

function showTable() {
    const animal = "Tiikeri";
    const habitat = "Metsä";
    const diet = "Liha";

    const animal2 = "Norsu";
    const habitat2 = "Savanni";
    const diet2 = "Kasvit";

    const tableHTML = `
        <table border="1">
            <tr>
                <th>Eläin</th>
                <th>Elinympäristö</th>
                <th>Ruokavalio</th>
            </tr>
            <tr>
                <td>${animal}</td>
                <td>${habitat}</td>
                <td>${diet}</td>
            </tr>
            <tr>
                <td>${animal2}</td>
                <td>${habitat2}</td>
                <td>${diet2}</td>
            </tr>
        </table>
    `;

    const container = document.querySelector("#tableContainer");
    container.innerHTML = tableHTML;
}

