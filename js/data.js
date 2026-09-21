// Toutes les informations personnelles et professionnelles sont regroupees ici.
// Remplace les valeurs exemple sans modifier la structure des objets.
export const profile = {
    email: "julien.toulzac@gmail.com",
    github: "https://github.com/Komeap",
    linkedin: "https://www.linkedin.com/in/julien-toulzac-b84997368",
    cv: "assets/CV-Julien-Toulzac.pdf",
    location: "Tours, France"
};

export const skills = [
    {
        category: "Langages",
        category_en: "Languages",
        items: ["Dart", "C", "C++", "C#", "Java", "JavaScript", "HTML", "CSS", "Python", "PostgreSQL", "MySQL", "Bash", "Git"]
    },
    {
        category: "Langues",
        category_en: "Spoken languages",
        items: ["Anglais - B2 (TOEIC)", "Espagnol - niveau terminale", "Français - langue maternelle"]
    }
];

export const education = [
    {
        id: "formation-1",
        diploma: "Bac +4 - Département Informatique",
        diploma_en: "Master's degree level - Computer Science Department",
        school: "Département Informatique - Polytech Tours",
        school_en: "Computer Science Department - Polytech Tours",
        date: "2025 - aujourd'hui",
        description: "Poursuite du cursus d'ingénieur en informatique à Polytech Tours.",
        description_en: "Continuation of the computer science engineering curriculum at Polytech Tours."
    },
    {
        id: "formation-2",
        diploma: "Prépa intégrée Informatique",
        diploma_en: "Integrated preparatory program in Computer Science",
        school: "Polytech Tours",
        school_en: "Polytech Tours",
        date: "2022 - 2024",
        description: "Formation préparatoire intégrée aux écoles Polytech, avec bases scientifiques et informatiques.",
        description_en: "Integrated preparatory program for the Polytech engineering schools, covering scientific and computer science fundamentals."
    },
    {
        id: "formation-3",
        diploma: "Baccalauréat général",
        diploma_en: "French general Baccalaureate",
        school: "Lycée Saint-Grégoire - Tours",
        school_en: "Saint-Grégoire High School - Tours",
        date: "2022",
        description: "Spécialités Mathématiques et Physique-Chimie, option Mathématiques expertes et section européenne anglais.",
        description_en: "Majors in Mathematics and Physics-Chemistry, with an advanced Mathematics option and an English European section."
    }
];

export const projects = [
    {
        id: "ble-esp32",
        title: "Reverse-Engineering BLE & ESP32",
        title_en: "BLE & ESP32 Reverse Engineering",
        summary: "Analyse BLE, extraction de payload et pilotage d'un ESP32.",
        summary_en: "BLE analysis, payload extraction and ESP32 control.",
        description: "Projet de reverse-engineering d'une application Android : analyse des opcodes Java et observation des échanges Bluetooth Low Energy avec nRF Connect pour comprendre le protocole utilisé. Le payload extrait permet ensuite de piloter un système d'éclairage avec un ESP32 programmé via l'Arduino IDE.",
        description_en: "A reverse-engineering project based on an Android application: Java bytecode analysis and observation of Bluetooth Low Energy exchanges with nRF Connect to understand the protocol. The extracted payload is then used to control a lighting system with an ESP32 programmed through the Arduino IDE.",
        tags: ["Java", "C++", "Reverse Engineering", "IoT", "BLE"],
        img_link: "",
        github: "",
        demo: ""
    },
    {
        id: "chip8-emulator",
        title: "Émulateur CHIP-8",
        title_en: "CHIP-8 Emulator",
        summary: "Émulateur C/SDL2 fonctionnel avec menu ROM, clavier et son.",
        summary_en: "Functional C/SDL2 emulator with ROM menu, keyboard and sound.",
        description: "Émulateur CHIP-8 développé en C avec SDL2 dans le cadre de mes cours. L'émulateur interprète les instructions de la machine virtuelle pour exécuter fidèlement différentes ROMs sur ordinateur. Il intègre un menu de sélection, la gestion du clavier et du beep, ainsi que les tests de compatibilité IBM, Corax, Flags, Quirks et Keypad. La compilation et le lancement sont automatisés avec un Makefile.",
        description_en: "A CHIP-8 emulator developed in C with SDL2 as part of my coursework. It interprets the virtual machine instructions to faithfully run different ROMs on a computer. It includes a ROM selection menu, keyboard and beep support, as well as the IBM, Corax, Flags, Quirks and Keypad compatibility tests. Build and launch are automated with a Makefile.",
        tags: ["C", "SDL2", "Emulation", "Makefile", "Low-level"],
        img_link: "assets/img/chip8acceuil.png",
        gallery: [
            "assets/img/chip8acceuil.png",
            "assets/img/chip8IBM.png",
            "assets/img/chip8Pong.png"
        ],
        github: "https://github.com/Komeap/Chip-8-Emulator",
        demo: ""
    },
    {
        id: "polic-connect-four",
        title: "POLIC - Puissance 4 Modulable",
        title_en: "POLIC - Modular Connect Four",
        summary: "Puissance 4 configurable avec IA MinMax, bonus et multiprocessing.",
        summary_en: "Configurable Connect Four with MinMax AI, bonuses and multiprocessing.",
        description: "Jeu de Puissance 4 développé en Python avec tkinter dans le cadre de mes cours. La grille, les couleurs, le premier joueur et le nombre de pions nécessaires pour gagner sont configurables. L'IA repose sur MinMax avec une profondeur maximale de 8 coups ; le multiprocessing permet de réduire le temps de calcul. Trois difficultés sont proposées : aléatoire/mixte, intermédiaire et meilleur coup systématique. Le joueur et l'IA disposent chacun d'une bombe, d'un undo et d'une aide qui recommande un coup.",
        description_en: "A Connect Four game developed in Python with tkinter as part of my coursework. The board, colors, starting player and number of pieces required to win are configurable. The AI is based on MinMax with a maximum search depth of 8 moves, while multiprocessing reduces computation time. Three difficulty levels are available: random/mixed, intermediate and always-best-move. Both the player and the AI have access to a bomb, undo and a help feature that recommends a move.",
        tags: ["Python", "tkinter", "MinMax", "AI", "Multiprocessing"],
        img_link: "assets/img/acceuilpolic.png",
        gallery: [
            "assets/img/acceuilpolic.png",
            "assets/img/gameplaypolic.png",
            "assets/img/gameplaypolic2.png",
            "assets/img/parampolic.png"
        ],
        github: "https://github.com/Komeap/Poly-4",
        demo: ""
    },
    {
        id: "babyfoot-app",
        title: "Babyfoot App",
        title_en: "Babyfoot App",
        summary: "App d'école utilisée chaque jour par des centaines de joueurs.",
        summary_en: "School app used daily by hundreds of players.",
        description: "Application web complète développée et déployée dans mon école pour gérer les parties de baby-foot. Elle construit un classement à partir d'une cote ELO, permet de déclarer et d'évaluer les matchs, suit l'évolution des niveaux et conserve l'historique des résultats. Elle intègre également une gestion automatique des tournois. Le service est utilisé quotidiennement par plusieurs centaines d'utilisateurs.",
        description_en: "A complete web application developed and deployed at my school to manage foosball games. It builds a ranking from an ELO rating, allows users to record and evaluate matches, tracks skill progression and stores result history. It also includes automatic tournament management. The service is used daily by several hundred users.",
        tags: ["Dart", "Flutter", "Firebase", "Ranking", "ELO", "Tournaments"],
        img_link: "assets/img/homebaby.png",
        gallery: [
            "assets/img/homebaby.png",
            "assets/img/acceuil_baby.png",
            "assets/img/profil_baby.png",
            "assets/img/tournoisexebaby.png"
        ],
        github: "https://github.com/Komeap/babyfoot_app",
        demo: ""
    },
    {
        id: "tablature-app",
        title: "Projet perso Tablature",
        title_en: "Personal Tablature Project",
        summary: "Serveur Python/FastAPI et interface Flutter pour gérer des tablatures.",
        summary_en: "Python/FastAPI server and Flutter interface for managing tablatures.",
        description: "Projet personnel développé principalement en Python, avec une interface Flutter et une API FastAPI. Il permet d'écrire manuellement des tablatures, de les stocker sur un serveur hébergé sur mon ordinateur et de les retrouver depuis mon téléphone. L'application permet aussi d'enregistrer un audio de guitare et d'expérimenter sa transcription en tablature ou en partition. Le serveur est géré avec un Makefile et un environnement virtuel, et expose sa documentation interactive sur /docs. La transcription audio reste expérimentale et inachevée faute de ressources suffisantes.",
        description_en: "A personal project developed mainly in Python, with a Flutter interface and a FastAPI backend. It allows users to write tablatures manually, store them on a server hosted on my computer and retrieve them from a phone. The application can also record guitar audio and experiment with transcription into tablature or sheet music. The server is managed with a Makefile and a virtual environment, and exposes interactive documentation at /docs. Audio transcription remains experimental and unfinished due to limited resources.",
        tags: ["Python", "FastAPI", "Flutter", "Audio", "Tablatures"],
        img_link: "",
        github: "https://github.com/Komeap/Project_App_Tablature",
        demo: ""
    },
    {
        id: "graph-library",
        title: "Bibliothèque de gestion de graphes",
        title_en: "Graph Management Library",
        summary: "Bibliothèque C/C++ réutilisée pour résoudre un sujet de graphes.",
        summary_en: "Reusable C/C++ graph library applied to a graph problem.",
        description: "Projet de cours centré sur la conception d'une bibliothèque complète de gestion de graphes en C/C++. L'objectif était de produire une base réutilisable, propre et cohérente, puis de l'employer pour résoudre un second sujet imposé. Le travail portait surtout sur la modélisation des données, la séparation des responsabilités, l'organisation des modules et la qualité de l'architecture.",
        description_en: "A coursework project focused on designing a complete C/C++ graph management library. The goal was to produce a clean, consistent and reusable foundation, then apply it to a second assigned graph problem. The main focus was data modeling, separation of responsibilities, module organization and architectural quality.",
        tags: ["C++", "C", "Graph algorithms", "Architecture"],
        img_link: "",
        github: "https://github.com/Komeap/Projet_Graphes",
        demo: ""
    },
    {
        id: "timeclock-java",
        title: "Système de pointeuse en Java",
        title_en: "Java Time Clock System",
        summary: "Système client-serveur Java/JavaFX avec sockets et synchronisation réseau.",
        summary_en: "Java/JavaFX client-server system with sockets and network synchronization.",
        description: "Projet tutoré de découverte de Java : développement en groupe du backend d'un système de pointeuse pour une entreprise. L'application repose sur une architecture client-serveur, des échanges par sockets, la sérialisation et un buffer d'historique. Ma contribution a couvert l'architecture Serveur/Message, la sécurisation des flux, le build Gradle, l'IHM JavaFX de la pointeuse avec horloge dynamique et thread d'envoi, ainsi que l'interconnexion des employés et départements dans l'interface principale.",
        description_en: "A supervised Java project introducing the language through the group development of an employee time clock backend. The application uses a client-server architecture, socket communication, serialization and a history buffer. My contributions covered the Server/Message architecture, data flow security, the Gradle build, the JavaFX time clock interface with a dynamic clock and sending thread, and the integration of employees and departments in the main interface.",
        tags: ["Java", "JavaFX", "Sockets", "Client-server", "Gradle"],
        img_link: "",
        github: "https://github.com/Komeap/Pointeuse_simulator",
        demo: ""
    },
];

export const experiences = [
    {
        id: "harmonie-mutuelle-sihm-internship",
        experience_name: "Stagiaire - Systèmes d'information",
        experience_name_en: "Information Systems Intern",
        company: "SIHM - Harmonie Mutuelle",
        company_en: "SIHM - Harmonie Mutuelle",
        date: "15 juin - 21 août",
        description: "Réalisation et livraison d'un script d'automatisation pour mettre à jour les listes blanches des pare-feu de l'entreprise via l'API concernée. Ce stage m'a permis de découvrir l'ensemble de l'architecture réseau d'Harmonie Mutuelle, de participer à des opérations de maintenance réseau et de contribuer concrètement à un projet réel au sein d'une équipe réseau et cybersécurité.",
        description_en: "Developed and delivered an automation script to update the company's firewall allowlists through the relevant API. This internship provided an overview of Harmonie Mutuelle's network architecture, included network maintenance tasks and involved contributing to a real project within the company's network and cybersecurity team.",
        learned_comp: ["Python", "API", "Réseaux", "Cybersécurité", "Automatisation", "Pare-feu"]
    },
    {
        id: "babyfoot-club",
        experience_name: "Président du club",
        experience_name_en: "Club president",
        company: "Club Babyfoot de Polytech Tours",
        company_en: "Polytech Tours Foosball Club",
        date: "2025-2026",
        description: "Création et présidence du club Babyfoot de l'école. Organisation de cours et d'événements, participation à différentes manifestations et mise en place de compétitions avec cash prize pour récolter des fonds destinés à financer la réparation et l'entretien des baby-foot de l'école.",
        description_en: "Founded and led the school's Foosball Club. Organized training sessions and events, took part in various activities, and set up cash-prize competitions to raise funds for the repair and maintenance of the school's foosball tables.",
        learned_comp: ["Présidence", "Organisation d'événements", "Gestion de projet", "Collecte de fonds"]
    },
    {
        id: "polytech-cafeteria",
        experience_name: "Trésorier / Responsable courses et achats",
        experience_name_en: "Treasurer / Purchasing manager",
        company: "Kafétéria de Polytech Tours",
        company_en: "Polytech Tours Cafeteria",
        date: "2025-2026",
        description: "Gestion des achats, du budget et des économies d'un club majeur de l'école, qui propose chaque midi un service de restauration à de nombreux élèves. Suivi des dépenses et des besoins futurs, optimisation des achats, gestion de l'équipe et participation au management quotidien de la Kafétéria.",
        description_en: "Managed purchasing, budgeting and cost savings for a major school club providing lunch to many students every day. Monitored expenses and future needs, optimized purchases, managed the team and contributed to the cafeteria's day-to-day operations.",
        learned_comp: ["Trésorerie", "Achats", "Gestion budgétaire", "Management", "Gestion d'équipe"]
    },
    {
        id: "robotics-club",
        experience_name: "Membre du club",
        experience_name_en: "Club member",
        company: "Club de robotique",
        company_en: "Robotics Club",
        date: "2025-2026",
        description: "Participation au concours national de robotique. Programmation de robots avec ROS2, programmation embarquée et simulation réaliste du robot sur ordinateur.",
        description_en: "Participation in the national robotics competition. Robot programming with ROS2, embedded programming and realistic robot simulation on a computer.",
        learned_comp: ["ROS2", "Robotique", "Programmation embarquée", "Simulation"]
    },
    {
        id: "harmonie-mutuelle-internship",
        experience_name: "Stagiaire",
        experience_name_en: "Intern",
        company: "Harmonie Mutuelle",
        company_en: "Harmonie Mutuelle",
        date: "Juin 2024",
        description: "Migration d'une base de données MySQL vers PostgreSQL, avec découverte de l'environnement professionnel et des enjeux liés aux données.",
        description_en: "Migration of a MySQL database to PostgreSQL, along with an introduction to the professional environment and data-related challenges.",
        learned_comp: ["MySQL", "PostgreSQL", "Bash", "SQL"]
    },
    {
        id: "theatre-group",
        experience_name: "Membre de la troupe",
        experience_name_en: "Theatre group member",
        company: "Troupe de théâtre",
        company_en: "Theatre group",
        date: "2016-2023",
        description: "Création de pièces de théâtre, improvisation et représentation sur scène.",
        description_en: "Creation of theatre plays, improvisation and live stage performances.",
        learned_comp: ["Créativité", "Improvisation", "Expression orale", "Travail en équipe"]
    },
    {
        id: "youth-council",
        experience_name: "Membre du conseil",
        experience_name_en: "Council member",
        company: "Conseil municipal des jeunes - Saché",
        company_en: "Youth municipal council - Saché",
        date: "2017-2020",
        description: "Création et mise en place d'activités touristiques, gestion des contraintes territoriales et travail en équipe.",
        description_en: "Creation and implementation of tourism activities, management of local constraints and teamwork.",
        learned_comp: ["Gestion de projet", "Tourisme", "Organisation", "Travail en équipe"]
    }
]