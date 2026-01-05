const levels = [
    { name: "Silent Mav Challenge", creator: "Woolooz", verifier: "Woolooz", diff: "Extreme Demon" },
    { name: "Void Collapse", creator: "Player2", verifier: "ProGamer", diff: "Insane Demon" },
    { name: "Shadow Rift", creator: "Player3", verifier: "Speedrun", diff: "Hard Demon" }
];

const tbody = document.querySelector("#list tbody");

levels.forEach((lvl, i) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${i + 1}</td>
        <td>${lvl.name}</td>
        <td>${lvl.creator}</td>
        <td>${lvl.verifier}</td>
        <td>${lvl.diff}</td>
    `;
    tbody.appendChild(row);
});
