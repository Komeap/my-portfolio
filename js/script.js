
import { education, experiences, profile, projects, skills } from './data.js';

const translations = {
    fr: {
        metaTitle: 'Julien Toulzac | Ingénieur informatique',
        metaDescription: "Portfolio de Julien Toulzac, ingénieur informatique spécialisé en développement, systèmes embarqués et IoT.",
        openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu', homeAria: "Retour à l'accueil",
        navAbout: 'À propos', navResearch: 'Recherche', navProjects: 'Projets', navExperience: 'Expériences', navSkills: 'Compétences', navEducation: 'Formation', navContact: 'Me contacter <span aria-hidden="true">↗</span>',
        availability: 'Disponible pour de nouveaux projets', heroAbout: 'Je conçois des expériences numériques utiles, lisibles et pensées pour durer.', heroSubtitle: 'Ingénieur informatique<br>software · systèmes · IoT', scrollAbout: 'Voir la section À propos',
        aboutEyebrow: '01 / À propos', aboutTitle: 'À propos de moi', aboutText: "Je suis Julien TOULZAC, un ingénieur informatique passionné par la résolution de problèmes techniques complexes. Ma curiosité m'a amené à explorer des domaines variés, de l'optimisation logicielle au reverse-engineering, en alliant rigueur analytique et créativité.",
        highlightProblemTitle: 'Résolution de problèmes', highlightProblemText: 'Une approche structurée pour transformer les contraintes en solutions concrètes.', highlightEmbeddedTitle: 'Systèmes embarqués & BLE', highlightEmbeddedText: "Une expertise tournée vers l'IoT, le matériel et les communications sans fil.", highlightLearningTitle: 'Apprentissage continu', highlightLearningText: 'Une veille active pour élargir mes compétences et contribuer à des projets innovants.',
        researchEyebrow: 'Objectif professionnel', researchTitle: 'Ce que je recherche', researchText: 'Je souhaite rejoindre une équipe où je peux mettre mes compétences techniques au service de projets concrets, tout en continuant à progresser au contact de professionnels.', researchTypeTitle: "Type d'opportunité", researchTypeText: 'Stage, alternance ou premier poste en informatique.', researchFieldsTitle: 'Domaines', researchFieldsText: 'Développement logiciel, systèmes embarqués, IoT et cybersécurité.', researchEnvironmentTitle: 'Environnement', researchEnvironmentText: 'Une équipe collaborative, exigeante et orientée vers des résultats utiles.',
        projectsEyebrow: '02 / Sélection', projectsTitle: 'Projets choisis', projectsCarouselLabel: 'Carrousel des projets', previousProject: 'Projet précédent', nextProject: 'Projet suivant',
        experienceEyebrow: '03 / Parcours', experienceTitle: 'Expériences', skillsEyebrow: 'Savoir-faire', skillsTitle: 'Compétences', educationEyebrow: 'Parcours', educationTitle: 'Formation', contactEyebrow: 'Une idée, un projet ?', contactTitle: 'Travaillons ensemble', contactText: 'Retrouve-moi ici ou contacte-moi directement pour échanger sur une opportunité.', backToTop: 'Retour en haut',
        selectedProject: 'Projet sélectionné', more: 'Voir plus ...', close: 'Fermer', email: 'E-mail', code: 'Code', professionalNetwork: 'Réseau professionnel', document: 'Document', downloadCv: 'Télécharger mon CV'
    },
    en: {
        metaTitle: 'Julien Toulzac | Software Engineer',
        metaDescription: 'Portfolio of Julien Toulzac, software engineer focused on development, embedded systems and IoT.',
        openMenu: 'Open menu', closeMenu: 'Close menu', homeAria: 'Back to home',
        navAbout: 'About', navResearch: 'Focus', navProjects: 'Projects', navExperience: 'Experience', navSkills: 'Skills', navEducation: 'Education', navContact: 'Get in touch <span aria-hidden="true">↗</span>',
        availability: 'Available for new projects', heroAbout: 'I design useful, readable digital experiences built to last.', heroSubtitle: 'Software engineer<br>software · systems · IoT', scrollAbout: 'Go to the About section',
        aboutEyebrow: '01 / About', aboutTitle: 'About me', aboutText: 'I am Julien TOULZAC, a software engineer passionate about solving complex technical problems. Curiosity has led me across software optimisation, reverse engineering and creative, rigorous problem-solving.',
        highlightProblemTitle: 'Problem solving', highlightProblemText: 'A structured approach to turn constraints into concrete solutions.', highlightEmbeddedTitle: 'Embedded systems & BLE', highlightEmbeddedText: 'A hands-on focus on IoT, hardware and wireless communications.', highlightLearningTitle: 'Continuous learning', highlightLearningText: 'An active learning mindset to grow my skills and contribute to ambitious projects.',
        researchEyebrow: 'Professional focus', researchTitle: 'What I am looking for', researchText: 'I am looking to join a team where I can apply my technical skills to meaningful projects while continuing to grow alongside experienced professionals.', researchTypeTitle: 'Opportunity', researchTypeText: 'Internship, apprenticeship or first software engineering role.', researchFieldsTitle: 'Fields', researchFieldsText: 'Software development, embedded systems, IoT and cybersecurity.', researchEnvironmentTitle: 'Environment', researchEnvironmentText: 'A collaborative, demanding team focused on useful outcomes.',
        projectsEyebrow: '02 / Selected work', projectsTitle: 'Selected projects', projectsCarouselLabel: 'Project carousel', previousProject: 'Previous project', nextProject: 'Next project',
        experienceEyebrow: '03 / Background', experienceTitle: 'Experience', skillsEyebrow: 'Toolkit', skillsTitle: 'Skills', educationEyebrow: 'Background', educationTitle: 'Education', contactEyebrow: 'Have an idea?', contactTitle: "Let's work together", contactText: 'Find me here or get in touch directly to discuss an opportunity.', backToTop: 'Back to top',
        selectedProject: 'Selected project', more: 'View details ...', close: 'Close', email: 'Email', code: 'Code', professionalNetwork: 'Professional network', document: 'Document', downloadCv: 'Download my CV'
    }
};

const currentLanguage = localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'fr';
const text = key => translations[currentLanguage][key] || translations.fr[key] || key;
const localized = (item, field) => currentLanguage === 'en' && item[`${field}_en`] ? item[`${field}_en`] : item[field];

document.documentElement.lang = currentLanguage;
document.querySelectorAll('[data-i18n]').forEach(element => {
    element.innerHTML = text(element.dataset.i18n);
});
document.querySelectorAll('[data-i18n-content]').forEach(element => {
    element.setAttribute('content', text(element.dataset.i18nContent));
});
document.querySelectorAll('[data-i18n-aria-label]').forEach(element => {
    element.setAttribute('aria-label', text(element.dataset.i18nAriaLabel));
});
document.querySelector('[data-language-toggle]')?.classList.toggle('is-english', currentLanguage === 'en');
document.querySelector('[data-language-toggle]')?.addEventListener('click', () => {
    localStorage.setItem('portfolio-language', currentLanguage === 'fr' ? 'en' : 'fr');
    window.location.reload();
});

const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const reduceMotion = reduceMotionQuery.matches;
const lowPowerDevice = navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 4;
const saveData = navigator.connection?.saveData === true;
const liteMotion = reduceMotion || lowPowerDevice || saveData;

const navbar = document.querySelector('#navbar');
const navbarToggle = document.querySelector('.navbar__toggle');
const navbarLinks = document.querySelectorAll('.navbar_btn');

function closeMobileMenu() {
    if (!navbar || !navbarToggle) {
        return;
    }

    navbar.classList.remove('is-open');
    navbarToggle.setAttribute('aria-expanded', 'false');
    navbarToggle.setAttribute('aria-label', text('openMenu'));
}

if (navbar && navbarToggle) {
    navbarToggle.addEventListener('click', () => {
        const isOpen = navbar.classList.toggle('is-open');
        navbarToggle.setAttribute('aria-expanded', String(isOpen));
        navbarToggle.setAttribute('aria-label', isOpen ? text('closeMenu') : text('openMenu'));
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
    const cardsHTML = projects.map(project => {
        const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        const projectLinksHTML = [
            project.github ? `<a href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>` : '',
            project.demo ? `<a href="${project.demo}" target="_blank" rel="noreferrer">Démo</a>` : ''
        ].filter(Boolean).join('');

        return `
            <article class="projet__card" tabindex="0" role="button" aria-haspopup="dialog" aria-controls="project-dialog-${project.id}" data-project-id="${project.id}">
            <h3>${localized(project, 'title')}</h3>
            <p>${localized(project, 'description')}</p>
            <div class="tags-container">
                    ${tagsHTML}
            </div>
                <div class="project__links">${projectLinksHTML}</div>
            <div class="projet__more">${text('more')}</div>
            </article>
        `;
    }).join('');
    const dialogsHTML = projects.map(project => {
        const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        const projectLinksHTML = [
            project.github ? `<a href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>` : '',
            project.demo ? `<a href="${project.demo}" target="_blank" rel="noreferrer">Démo</a>` : ''
        ].filter(Boolean).join('');
        const imageHTML = project.img_link
            ? `<img class="img_projet" src="${project.img_link}" alt="Illustration du projet ${project.title}"/>`
            : '';

        return `
            <dialog class="projet__dialog" id="project-dialog-${project.id}" aria-modal="true" aria-labelledby="project-dialog-${project.id}-title">
                <div class="projet__dialog-header">
                    <p class="section-eyebrow">${text('selectedProject')}</p>
                    <button class="projet__dialog-close" type="button" aria-label="${text('close')}">&times;</button>
                </div>
                <div class="projet__dialog-content">
                    <div>
                        <h3 id="project-dialog-${project.id}-title">${localized(project, 'title')}</h3>
                        <p>${localized(project, 'description')}</p>
                        <div class="tags-container">${tagsHTML}</div>
                        <div class="project__links">${projectLinksHTML}</div>
                    </div>
                    ${imageHTML}
                </div>
            </dialog>
        `;
    }).join('');
    projectsContainer.innerHTML = `${cardsHTML}${dialogsHTML}`;


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
    const dialog = document.querySelector(`#project-dialog-${card.dataset.projectId}`);
    const closeButton = dialog.querySelector('.projet__dialog-close');

    function openDialog() {
        dialog.showModal();
        closeButton.focus({ preventScroll: true });
    }

    card.addEventListener('click', event => {
        if (event.target.closest('a, button')) {
            return;
        }

        openDialog();
    });

    card.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openDialog();
        }
    });

    closeButton.addEventListener('click', () => dialog.close());

    dialog.addEventListener('close', () => {
        card.focus({ preventScroll: true });
    });

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
            <h3>${localized(exp, 'experience_name')}</h3>
            <h4>${localized(exp, 'company')} · ${exp.date}</h4>
            <p>${localized(exp, 'description')}</p>
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
            <h3>${localized(skill, 'category')}</h3>
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
                <h3>${localized(item, 'diploma')}</h3>
                <p class="education__school">${localized(item, 'school')}</p>
                <p>${localized(item, 'description')}</p>
            </div>
        </article>
    `).join('');
}

const contactContainer = document.getElementById('contact-container');
if (contactContainer) {
    contactContainer.innerHTML = `
        <a class="contact__link contact__link--primary" href="mailto:${profile.email}">
            <span class="contact__label">${text('email')}</span>
            <strong>${profile.email}</strong>
        </a>
        <a class="contact__link" href="${profile.github}" target="_blank" rel="noreferrer">
            <span class="contact__label">${text('code')}</span>
            <strong>GitHub</strong>
        </a>
        <a class="contact__link" href="${profile.linkedin}" target="_blank" rel="noreferrer">
            <span class="contact__label">${text('professionalNetwork')}</span>
            <strong>LinkedIn</strong>
        </a>
        <a class="contact__link" href="${profile.cv}" download>
            <span class="contact__label">${text('document')}</span>
            <strong>${text('downloadCv')}</strong>
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

const navbarRevealDistance = 64;
let lastScrollY = window.scrollY;
let upwardScrollStart = null;

function updateNavbarVisibility() {
    if (!navbar) {
        return;
    }

    const currentScrollY = window.scrollY;
    const isScrollingDown = currentScrollY > lastScrollY + 2;
    const isScrollingUp = currentScrollY < lastScrollY - 2;
    const isAtTop = currentScrollY <= 20;

    if (isAtTop || navbar.classList.contains('is-open')) {
        navbar.classList.remove('is-hidden');
        upwardScrollStart = null;
    } else if (isScrollingDown) {
        upwardScrollStart = null;
        navbar.classList.add('is-hidden');
    } else if (isScrollingUp) {
        upwardScrollStart ??= lastScrollY;

        if (upwardScrollStart - currentScrollY >= navbarRevealDistance) {
            navbar.classList.remove('is-hidden');
            upwardScrollStart = null;
        }
    }

    lastScrollY = currentScrollY;
}

updateSectionTitles();
updateScrollButton();
updateNavbarVisibility();
window.addEventListener('scroll', updateSectionTitles, { passive: true });
window.addEventListener('scroll', updateScrollButton, { passive: true });
window.addEventListener('scroll', updateNavbarVisibility, { passive: true });
window.addEventListener('resize', updateSectionTitles);

/* ############################################
            MOTION & INTERACTIONS
    ############################################
*/

const motionTargets = document.querySelectorAll(
    '.about__intro, .about__highlights, .research .section-heading, .research__content, .projects .section-heading, .experiences .section-heading, .timeline, .skills .section-heading, .skills__grid, .education .section-heading, .education__list, .contact__intro, .contact__links'
);

motionTargets.forEach((target, index) => {
    target.classList.add('reveal');
    if (index % 4 === 1) {
        target.classList.add('reveal--left');
    } else if (index % 4 === 3) {
        target.classList.add('reveal--right');
    }
});

document.querySelectorAll('.about__highlights, .research__items, .skills__grid, .contact__links').forEach(target => {
    target.classList.add('stagger');
});

if (reduceMotion) {
    motionTargets.forEach(target => target.classList.add('is-visible'));
    document.querySelectorAll('.stagger').forEach(target => target.classList.add('is-visible'));
} else {
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    document.querySelectorAll('.reveal, .stagger').forEach(target => revealObserver.observe(target));
}

if (liteMotion) {
    document.body.classList.add('motion-lite');
}

const sections = [...document.querySelectorAll('main section[id]')];
const sectionLinks = [...document.querySelectorAll('.navbar_btn[href^="#"]')];
const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }

        sectionLinks.forEach(link => {
            link.classList.toggle('is-current', link.getAttribute('href') === `#${entry.target.id}`);
        });
    });
}, { rootMargin: '-35% 0px -55% 0px' });

sections.forEach(section => sectionObserver.observe(section));

const projectScroller = document.querySelector('.projects__grid');
if (projectScroller && !liteMotion) {
    projectScroller.addEventListener('wheel', event => {
        if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
            return;
        }

        event.preventDefault();
        projectScroller.scrollLeft += event.deltaY;
    }, { passive: false });
}