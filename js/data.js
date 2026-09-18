// Toutes les informations personnelles et professionnelles sont regroupees ici.
// Remplace les valeurs exemple sans modifier la structure des objets.
export const profile = {
    email: "julien.toulzac@gmail.com",
    github: "https://github.com/Komeap",
    linkedin: "https://www.linkedin.com/in/username/",
    cv: "assets/CV-Julien-Toulzac.pdf",
    location: "Tours, France"
};

export const skills = [
    {
        category: "Developpement",
        category_en: "Development",
        items: ["dart","C","C++","C#", "Java", "JavaScript", "HTML", "CSS", "python","postgres","mysql","bash","git"]
    },
    {
        category: "Systemes et outils",
        category_en: "Systems & tools",
        items: ["ESP32", "Arduino", "Git", "Linux", "API REST"]
    },
    {
        category: "Methodes",
        category_en: "Methods",
        items: ["Reverse engineering", "Resolution de problemes", "Travail en equipe"]
    }
];

export const education = [
    {
        id: "formation-1",
        diploma: "Nom du diplome",
        diploma_en: "Degree or certification",
        school: "Nom de l'etablissement",
        school_en: "Institution name",
        date: "2023 - 2026",
        description: "Description courte de la formation, specialisation ou principaux enseignements.",
        description_en: "Short description of the program, specialisation or main subjects."
    },
    {
        id: "formation-2",
        diploma: "Formation ou certification",
        diploma_en: "Training or certification",
        school: "Nom de l'etablissement",
        school_en: "Institution name",
        date: "2022 - 2023",
        description: "Description courte de la formation ou de la certification.",
        description_en: "Short description of the training or certification."
    }
];

export const projects = [
    {
        id: "ble-esp32",
        title: "Reverse-Engineering BLE & ESP32",
        title_en: "BLE & ESP32 Reverse Engineering",
        description: "Décompilation d'une application Android (analyse des opcodes Java) pour extraire le payload Bluetooth Low Energy via nRF Connect, afin de piloter un système d'éclairage sur un ESP32 programmé via l'Arduino IDE.",
        description_en: "Reverse engineering of an Android application to extract a Bluetooth Low Energy payload with nRF Connect and control an ESP32 lighting system programmed with the Arduino IDE.",
        tags: ["Java", "C++", "Reverse Engineering", "IoT", "BLE"],
        img_link: "assets/img/img_informatique.jpg",
        github: "",
        demo: ""
    },
    {
        id: "expense-tracker",
        title: "Application de Gestion de Budget partagé",
        title_en: "Shared Budget Management App",
        description: "Développement d'une application de gestion de dépenses et de listes de courses partagées, intégrant la synchronisation via les API BoursoBank et Caisse d'Épargne.",
        description_en: "Development of a shared expense and shopping-list app with synchronisation through BoursoBank and Caisse d'Épargne APIs.",
        tags: ["Web", "API", "Finance"],
        img_link: "",
        github: "",
        demo: ""
    },
];

export const experiences = [
    {
        id: "experience-1",
        experience_name: "Intitule du poste",
        experience_name_en: "Job title",
        company: "Nom de l'entreprise",
        company_en: "Company name",
        date: "MM/AAAA - MM/AAAA",
        description: "Description de la mission et des resultats obtenus.",
        description_en: "Description of the role and its results.",
        learned_comp: ["C++", "Autonomie", "Decouverte du monde professionnel"]
    },
    {
        id: "experience-2",
        experience_name: "Deuxieme experience",
        experience_name_en: "Second experience",
        company: "Nom de l'entreprise",
        company_en: "Company name",
        date: "MM/AAAA - MM/AAAA",
        description: "Description de la mission et des resultats obtenus.",
        description_en: "Description of the role and its results.",
        learned_comp: ["Technologie", "Gestion de projet", "Travail en equipe"]
    }
]