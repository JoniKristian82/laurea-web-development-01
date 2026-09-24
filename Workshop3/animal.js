function showTable() {
    const animal = "Tiger";
    const habitat = "Forest";
    const diet = "Carnivore";

    const animal2 = "Elephant";
    const habitat2 = "Savanna";
    const diet2 = "Herbivore";

    const tableHTML = `
        <table border="1">
            <tr>
                <th>Animal</th>
                <th>Habitat</th>
                <th>Diet</th>
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