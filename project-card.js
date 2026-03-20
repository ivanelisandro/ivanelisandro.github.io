const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');

class ProjectCard extends HTMLElement {
    connectedCallback() {
        const data = JSON.parse(this.getAttribute("data"));

        this.innerHTML = `
                    <article class="project-card">
                        <div class="image-wrapper">
                            <img src="${data.image}" alt="${data.image_alt}">
                        </div>
                        <h3>${data.title}</h3>
                        <p>${data.description}</p>
                        <a href="${data.url}" target="_blank" rel="noopener noreferrer">View more</a>
                    </article>
                    `;

        // Opens the lightbox when clicking the project image. Added during card creation.
        const img = this.querySelector("img");
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.classList.add('show');
            lightbox.style.display = 'flex';
        });
    }
}

customElements.define("project-card", ProjectCard);

// Closes the lightbox when clicking on the overlay. Only need to define this once. Not for each item.
lightbox.addEventListener('click', () => {
    lightbox.classList.remove('show');
    lightbox.style.display = 'none';
});