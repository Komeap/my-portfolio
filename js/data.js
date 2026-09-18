// Toutes les informations personnelles et professionnelles sont regroupees ici.
// Remplace les valeurs exemple sans modifier la structure des objets.
export const profile = {
    email: "prenom.nom@example.com",
    github: "https://github.com/username",
    linkedin: "https://www.linkedin.com/in/username/",
    cv: "assets/CV-Julien-Toulzac.pdf",
    location: "Ville, France"
};

export const skills = [
    {
        category: "Developpement",
        items: ["C++", "Java", "JavaScript", "HTML", "CSS"]
    },
    {
        category: "Systemes et outils",
        items: ["ESP32", "Arduino", "Git", "Linux", "API REST"]
    },
    {
        category: "Methodes",
        items: ["Reverse engineering", "Resolution de problemes", "Travail en equipe"]
    }
];

export const education = [
    {
        id: "formation-1",
        diploma: "Nom du diplome",
        school: "Nom de l'etablissement",
        date: "2023 - 2026",
        description: "Description courte de la formation, specialisation ou principaux enseignements."
    },
    {
        id: "formation-2",
        diploma: "Formation ou certification",
        school: "Nom de l'etablissement",
        date: "2022 - 2023",
        description: "Description courte de la formation ou de la certification."
    }
];

export const projects = [
    {
        id: "ble-esp32",
        title: "Reverse-Engineering BLE & ESP32",
        description: "Décompilation d'une application Android (analyse des opcodes Java) pour extraire le payload Bluetooth Low Energy via nRF Connect, afin de piloter un système d'éclairage sur un ESP32 programmé via l'Arduino IDE.",
        tags: ["Java", "C++", "Reverse Engineering", "IoT", "BLE"],
        img_link: "assets/img/img_informatique.jpg",
        github: "",
        demo: ""
    },
    {
        id: "expense-tracker",
        title: "Application de Gestion de Budget partagé",
        description: "Développement d'une application de gestion de dépenses et de listes de courses partagées, intégrant la synchronisation via les API BoursoBank et Caisse d'Épargne.",
        tags: ["Web", "API", "Finance"],
        img_link: "",
        github: "",
        demo: ""
    },  
    {
        id: "ble-esp32",
        title: "Reverse-Engineering BLE & ESP32",
        description: "Décompilation d'une application Android (analyse des opcodes Java) pour extraire le payload Bluetooth Low Energy via nRF Connect, afin de piloter un système d'éclairage sur un ESP32 programmé via l'Arduino IDE.",
        tags: ["Java", "C++", "Reverse Engineering", "IoT", "BLE"],
        img_link: "assets/img/img_informatique.jpg",
        github: "",
        demo: ""
    },
    {
        id: "ble-esp32",
        title: "Reverse-Engineering BLE & ESP32",
        description: "Décompilation d'une application Android (analyse des opcodes Java) pour extraire le payload Bluetooth Low Energy via nRF Connect, afin de piloter un système d'éclairage sur un ESP32 programmé via l'Arduino IDE.",
        tags: ["Java", "C++", "Reverse Engineering", "IoT", "BLE"],
        img_link: "assets/img/img_informatique.jpg",
        github: "",
        demo: ""
    },
    {
        id: "ble-esp32",
        title: "Reverse-Engineering BLE & ESP32",
        description: "Décompilation d'une application Android (analyse des opcodes Java) pour extraire le payload Bluetooth Low Energy via nRF Connect, afin de piloter un système d'éclairage sur un ESP32 programmé via l'Arduino IDE.",
        tags: ["Java", "C++", "Reverse Engineering", "IoT", "BLE"],
        img_link: "assets/img/img_informatique.jpg",
        github: "",
        demo: ""
    },
];

export const experiences = [
    {
        id: "experience-1",
        experience_name: "Intitule du poste",
        company: "Nom de l'entreprise",
        date: "MM/AAAA - MM/AAAA",
        description: "Description de la mission et des resultats obtenus.",
        learned_comp: ["C++", "Autonomie", "Decouverte du monde professionnel"]
    },
    {
        id: "experience-2",
        experience_name: "Deuxieme experience",
        company: "Nom de l'entreprise",
        date: "MM/AAAA - MM/AAAA",
        description: "Description de la mission et des resultats obtenus.",
        learned_comp: ["Technologie", "Gestion de projet", "Travail en equipe"]
    }
]