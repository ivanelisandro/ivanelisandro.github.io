fetch("projects.json")
    .then(r => r.json())
    .then(items => {
        const projects = document.getElementById("projects");

        items.forEach(item => {
            const card = document.createElement("project-card");
            card.setAttribute("data", JSON.stringify(item));
            projects.appendChild(card);
        });
    });

function filterProjects(search) {
    const term = search.toLowerCase().trim();
    const cards = document.querySelectorAll('#projects .project-card');

    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        const matches = text.includes(term);

        card.style.display = matches ? 'block' : 'none';
    });
}


