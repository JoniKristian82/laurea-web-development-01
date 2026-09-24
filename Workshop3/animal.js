function showTable() {
  const animals = [
    { animal: "Tiger", habitat: "Forest", diet: "Carnivore" },
    { animal: "Elephant", habitat: "Savanna", diet: "Herbivore" }
  ];

  let rows = "";
  for (const { animal, habitat, diet } of animals) {
    rows += `
      <tr>
        <td>${animal}</td>
        <td>${habitat}</td>
        <td>${diet}</td>
      </tr>`;
  }

  const table = `
    <table border="1">
      <tr>
        <th>Animal</th>
        <th>Habitat</th>
        <th>Diet</th>
      </tr>
      ${rows}
    </table>`;

  document.querySelector("#tableContainer").innerHTML = table;
}

const ex2 = document.querySelector("#exercise2");

ex2.addEventListener("mouseover", function() {
    console.log("Stepped over me with a mouse!");
});

const ex1 = document.querySelector("#exercise1");

ex1.addEventListener("click", function() {
    ex1.style.color = "red";
    ex1.innerHTML = "Bye bye mouse!";
});