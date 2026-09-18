
import { education, experiences, profile, projects, skills } from './data.js';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const navbar = document.querySelector('#navbar');
const navbarToggle = document.querySelector('.navbar__toggle');
const navbarLinks = document.querySelectorAll('.navbar_btn');

function closeMobileMenu() {
    if (!navbar || !navbarToggle) {
        return;
    }

    navbar.classList.remove('is-open');
    navbarToggle.setAttribute('aria-expanded', 'false');
    navbarToggle.setAttribute('aria-label', 'Ouvrir le menu');
}

if (navbar && navbarToggle) {
    navbarToggle.addEventListener('click', () => {
        const isOpen = navbar.classList.toggle('is-open');
        navbarToggle.setAttribute('aria-expanded', String(isOpen));
        navbarToggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
    });

    navbarLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

    document.addEventListener('click', event => {
        if (!navbar.contains(event.target)) {
            closeMobileMenu();
        }
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            closeMobileMenu();
        }
    });
}


/* ############################################
            Generation automatique HTML
    ############################################
*/

const projectsContainer = document.getElementById('projects-container');
if (projectsContainer) {
    const cardsHTML = projects.map((project, index) => {
        const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        const dialogId = `project-dialog-${index}`;
        const projectLinksHTML = [
            project.github ? `<a href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>` : '',
            project.demo ? `<a href="${project.demo}" target="_blank" rel="noreferrer">Démo</a>` : ''
        ].filter(Boolean).join('');
        const imageHTML = project.img_link
            ? `<img class="img_projet" src="${project.img_link}" alt="Illustration du projet ${project.title}"/>`
            : '';

        return `
            <article class="projet__card" tabindex="0" role="button" aria-haspopup="dialog" aria-controls="${dialogId}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tags-container">
                    ${tagsHTML}
            </div>
                <div class="project__links">${projectLinksHTML}</div>
            <div class="projet__more">Voir plus ...</div>

            <dialog class="projet__dialog" id="${dialogId}" aria-modal="true" aria-labelledby="${dialogId}-title">
                <button class="projet__dialog-close" type="button" aria-label="Fermer">&times;</button>
                <h3 id="${dialogId}-title">${project.title}</h3>
                <p>${project.description}</p>
                <div class="tags-container">
                    ${tagsHTML}
                </div>
                <div class="project__links">${projectLinksHTML}</div>
                ${imageHTML}
            </dialog>
            </article>
        `;
    }).join('');
    projectsContainer.innerHTML = cardsHTML;


    // Script qui observe l'apparition des project cards
    const projectCards = document.querySelectorAll('.projet__card');

    if (reduceMotion) {
        projectCards.forEach(card => card.classList.add('visible'));
    } else {
        const cardObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        });

        projectCards.forEach(card => cardObserver.observe(card));
    }
}

const projectsCarousel = document.querySelector('.projects__grid');
const projectNavigationButtons = document.querySelectorAll('.projects__nav');
const previousProjectsButton = document.querySelector('.projects__nav--previous');
const nextProjectsButton = document.querySelector('.projects__nav--next');
const projectCards = document.querySelectorAll('.projet__card');
let activeProjectIndex = 0;

function updateActiveProject() {
    if (!projectsCarousel || !previousProjectsButton || !nextProjectsButton || projectCards.length === 0) {
        return;
    }

    const carouselCenter = projectsCarousel.getBoundingClientRect().left + projectsCarousel.clientWidth / 2;
    let closestCardIndex = 0;
    let closestDistance = Infinity;

    projectCards.forEach((card, index) => {
        const cardCenter = card.getBoundingClientRect().left + card.offsetWidth / 2;
        const distance = Math.abs(carouselCenter - cardCenter);

        if (distance < closestDistance) {
            closestDistance = distance;
            closestCardIndex = index;
        }
    });

    activeProjectIndex = closestCardIndex;
    projectCards.forEach((card, index) => card.classList.toggle('is-active', index === activeProjectIndex));
    previousProjectsButton.disabled = activeProjectIndex === 0;
    nextProjectsButton.disabled = activeProjectIndex === projectCards.length - 1;
}

function updateProjectsNavigation() {
    updateActiveProject();
}

projectNavigationButtons.forEach(button => {
    button.addEventListener('click', () => {
        const direction = button.classList.contains('projects__nav--next') ? 1 : -1;
        const targetCard = projectCards[activeProjectIndex + direction];

        if (targetCard) {
            targetCard.scrollIntoView({
                behavior: reduceMotion ? 'auto' : 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }
    });
});

if (projectsCarousel) {
    projectsCarousel.addEventListener('scroll', updateProjectsNavigation, { passive: true });
    window.addEventListener('resize', updateProjectsNavigation);
    requestAnimationFrame(updateProjectsNavigation);
}

projectCards.forEach(card => {
    const dialog = card.querySelector('.projet__dialog');
    const closeButton = dialog.querySelector('.projet__dialog-close');

    function openDialog() {
        dialog.showModal();
        closeButton.focus();
    }

    card.addEventListener('click', event => {
        if (event.target.closest('.projet__dialog') || event.target.closest('a, button')) {
            return;
        }

        openDialog();
    });

    card.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
            if (event.target.closest('.projet__dialog')) {
                return;
            }

            event.preventDefault();
            openDialog();
        }
    });

    closeButton.addEventListener('click', () => dialog.close());

    dialog.addEventListener('close', () => card.focus());

    dialog.addEventListener('click', event => {
        if (event.target === dialog) {
            dialog.close();
        }
    });
});
    

const experienceContainer = document.getElementById('experience-container');
if (experienceContainer) {
    const experiencesHTML = experiences.map(exp => {
        const knowledgeHTML = exp.learned_comp.map(knowledge => `<span class="knowledge">${knowledge}</span>`).join('');

        return `
            <div class="timeline-item">
            <div class="timeline-dot"></div>
            <article class="experience__card">
            <h3>${exp.experience_name}</h3>
            <h4>${exp.company} · ${exp.date}</h4>
            <p>${exp.description}</p>
            <div class="knowledge-container">
                ${knowledgeHTML}
            </div>
            </article>
            </div>
        `;
    }).join('');
    experienceContainer.innerHTML = experiencesHTML;
}

const skillsContainer = document.getElementById('skills-container');
if (skillsContainer) {
    skillsContainer.innerHTML = skills.map(skill => `
        <article class="skills__group">
            <h3>${skill.category}</h3>
            <ul>${skill.items.map(item => `<li>${item}</li>`).join('')}</ul>
        </article>
    `).join('');
}

const educationContainer = document.getElementById('education-container');
if (educationContainer) {
    educationContainer.innerHTML = education.map(item => `
        <article class="education__item">
            <p class="education__date">${item.date}</p>
            <div>
                <h3>${item.diploma}</h3>
                <p class="education__school">${item.school}</p>
                <p>${item.description}</p>
            </div>
        </article>
    `).join('');
}

const contactContainer = document.getElementById('contact-container');
if (contactContainer) {
    contactContainer.innerHTML = `
        <a class="contact__link contact__link--primary" href="mailto:${profile.email}">
            <span class="contact__label">E-mail</span>
            <strong>${profile.email}</strong>
        </a>
        <a class="contact__link" href="${profile.github}" target="_blank" rel="noreferrer">
            <span class="contact__label">Code</span>
            <strong>GitHub</strong>
        </a>
        <a class="contact__link" href="${profile.linkedin}" target="_blank" rel="noreferrer">
            <span class="contact__label">Réseau professionnel</span>
            <strong>LinkedIn</strong>
        </a>
        <a class="contact__link" href="${profile.cv}" download>
            <span class="contact__label">Document</span>
            <strong>Télécharger mon CV</strong>
        </a>
        <p class="contact__location">${profile.location}</p>
    `;
}

const currentYear = document.getElementById('current-year');
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* ############################################
            ANIMATION Experience BAR
    ############################################
*/

function updateTitleProgress(sectionSelector, propertyName) {
    const section = document.querySelector(sectionSelector);
    const title = section?.querySelector('h2');

    if (!section || !title) {
        return;
    }

    if (reduceMotion){
        title.style.setProperty(propertyName, '1');
        return;
    }

    const sectionTop = section.getBoundingClientRect().top;
    const progress = Math.min(Math.max(1 - sectionTop / window.innerHeight, 0), 1);
    title.style.setProperty(propertyName, progress);
}

function updateSectionTitles() {
    updateTitleProgress('.experiences', '--experiences-progress');
    updateTitleProgress('.projects', '--projects-progress');
}

function updateScrollButton() {
    const scrollButton = document.querySelector('.scroll_btn');

    if (!scrollButton) {
        return;
    }

    scrollButton.classList.toggle('is-hidden', window.scrollY > 20);
}

let lastScrollY = window.scrollY;

function updateNavbarVisibility() {
    const navbar = document.querySelector('#navbar');

    if (!navbar) {
        return;
    }

    const currentScrollY = window.scrollY;
    const isScrollingDown = currentScrollY > lastScrollY;

    navbar.classList.toggle('is-hidden', currentScrollY > 20 && isScrollingDown);
    lastScrollY = currentScrollY;
}

updateSectionTitles();
updateScrollButton();
updateNavbarVisibility();
window.addEventListener('scroll', updateSectionTitles, { passive: true });
window.addEventListener('scroll', updateScrollButton, { passive: true });
window.addEventListener('scroll', updateNavbarVisibility, { passive: true });
window.addEventListener('resize', updateSectionTitles);