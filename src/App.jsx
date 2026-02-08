// Import de React pour créer les composants
import React, {useState} from 'react'; // useState est un "Hook" qui permet de gérer des variables qui changent (comme le menu ouvert/fermé
import './index.css'; // Lie du fichier CSS pour le style

// --- IMPORTS DES IMAGES ---
// En react, on traite les images comme des variables
// Vite se charge de trouver le bon chemin du ficher final
import PhotoProfil from './assets/photoprofil.webp';
import portfoliov1 from './assets/portfoliov1.webp';
import agenda from './assets/Agenda.webp';
import shopease from './assets/shopease.webp';
import voyage from './assets/voyage.webp';


// --- DONNÉES DES PROJETS ---
// Tableau d'objets contenant toutes les infos des projets.
// Facile à modifier pour ajouter un nouveau projet plus tard.
const projectsData = [
    {
        id: 1, // Identifiant unique
        title: "Shop Ease",
        cat: "Formation",
        desc: "Projet en formation d'une gestion dynamique d'une liste de produits",
        techNames: ["Javascript"],
        img: shopease, // Variable importée plus en haut
        link: "https://github.com/PaulineB15/Shop-Ease-.git",
    },
    {
        id: 2,
        title: "Agenda 2030",
        cat: "Conseil départemental 41",
        desc: "Interface web dédiée aux actions de l'Agenda 2030 du département 41.",
        techNames: ["Wordpress", "CSS", "Figma"],
        img: agenda,
        link: "https://agenda2030.pbennoin.dev-campus.fr/",
    },
    {
        id: 3,
        title: "Portfolio v.1",
        cat: "Personnel",
        desc: "Première version de mon portfolio intégré HTML/CSS puis avec Wordpress.",
        techNames: ["HTML", "CSS", "Wordpress", "Figma"],
        img: portfoliov1,
        link: "https://portfolio.pbennoin.dev-campus.fr/",
    }
];

// --- COMPOSANTS ICÔNES SVG ---
// Création de composants légers pour les logos (évite d'importer une librairie lourde)
const IconMail = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
);

const IconLinkedin = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const IconGithub = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);


// --- COMPOSANT PRINCIPAL ---
function App() {
    return (
        <div className="App">
            {/* les 3 div créent la décoration de fond (Blobs) */}
            <div className="blob blob-green"></div>
            <div className="blob blob-orange"></div>
            <div className="blob blob-purple"></div>

            {/*Section Header*/}
            <Header />

            <main>
                <HeroSection /> {/*Section Héro*/}
                <AboutSection /> {/*Section à propos*/}
                <SkillsSection /> {/*Section Compétences*/}
                <ProjectsSection /> {/*Section Projets*/}
                <ContactSection /> {/*Section Contact*/}
            </main>

            <Footer /> {/*Section Pied de page*/}
        </div>
    );
}


// --- HEADER & NAVIGATION ---
const Header = () => {
    // État (State) pour gérer l'ouverture du menu sur mobile
    // --- HOOK (STATE) ---
    // isOpen : la variable (true = menu ouvert, false = menu fermé).
    // setIsOpen : la fonction pour changer la variable.
    // useState(false) : L'état initial est "fermé" (false).
    const [isOpen, setIsOpen] = useState(false);

    // Fonction appelée quand on clique sur le burger. Elle inverse la valeur (Vrai devient Faux, Faux devient Vrai).
    const toggleMenu = () => setIsOpen(!isOpen);

    // Fermer le menu (utilisé lors du clic sur un lien)
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="header">
            <div className="container nav-container">
                {/* Logo cliquable qui ramène en haut */}
                <a href="#home" className="logo" onClick={closeMenu}>Pauline.</a>

                {/* BOUTON BURGER (visible uniquement sur mobile via CSS) */}
                {/* Au clic, on lance toggleMenu */}
                <div className="burger-menu" onClick={toggleMenu}>
                    {isOpen ? (
                        // Icône Croix (Fermer)
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--text-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                        // Icône Burger (Ouvrir)
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--text-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    )}
                </div>

                {/* MENU DE NAVIGATION */}
                {/* On ajoute dynamiquement la classe CSS 'active' si isOpen est vrai. */}
                {/* C'est ça qui fait apparaître le menu sur mobile (voir CSS .nav-menu.active) */}
                <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <ul className="nav-links">
                        {/* Chaque lien ferme le menu au clic grâce à onClick={closeMenu} */}
                        <li><a href="#home" onClick={closeMenu}>Accueil</a></li>
                        <li><a href="#about" onClick={closeMenu}>Mon parcours</a></li>
                        <li><a href="#skills" onClick={closeMenu}>Compétences</a></li>
                        <li><a href="#projects" onClick={closeMenu}>Projets</a></li>
                        <li><a href="/CVPbennoin.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>CV</a></li>

                        {/* Ce bouton n'apparaît que dans le menu mobile (géré par CSS) */}
                        <li className="mobile-only-btn">
                            <a href="#contact" className="btn-main" onClick={closeMenu} style={{display: 'inline-block', marginTop: '10px'}}>Me contacter</a>
                        </li>
                    </ul>
                </nav>

                {/* Ce bouton n'apparaît que sur PC (géré par CSS) */}
                <div className="desktop-only-btn">
                    <a href="#contact" className="btn-main">Me contacter</a>
                </div>
            </div>
        </header>
    );
};

// --- SECTION HERO  ---
const HeroSection = () => (
    <section id="home" className="hero container">
        <div className="hero-content">
            <div className="hero-text">
                <span className="tagline">Hi everyone ! I'm Pauline🌿</span>
                <h1>
                    Coder avec la même <span className="highlight-mint">passion</span> que j'explore le monde.
                </h1>

                <p style={{marginBottom: '35px'}}>
                    D'une <strong>vie d'expatriée</strong> au métier de développeuse: une transition naturelle.
                    Actuellement en formation, je mets aujourd'hui ma rigueur au service du code pour créer des <strong>interfaces modernes et intuitives</strong>.
                </p>

                <div style={{display: 'flex', gap: '15px'}}>
                    <a href="#projects" className="btn-main">Mes projets</a>
                    <a href="#about" className="btn-second">Mon parcours</a>
                </div>
            </div>

            <div className="hero-img-box">
                {/* Affichage de la photo de profil importée */}
                <img src={PhotoProfil} alt="Pauline Bennoin" className="hero-img" />
            </div>
        </div>
    </section>
);

// --- SECTION A PROPOS ---
const AboutSection = () => {
    return (
        <section id="about" className="about-section container">
            <div className="story-grid">
                <div className="polaroid-wrapper">
                    <div className="polaroid">
                        <img src={voyage} alt="Pauline en voyage" />
                        <span>D'une rive à l'autre...</span>
                    </div>
                </div>

                <div className="story-text">
                    <h2 className="section-title">Mon parcours</h2>
                    <p>
                        Mon parcours n'est pas linéaire, et c'est ma plus grande force. Riche de
                        <strong> 15 ans d'expérience Outre Atlantique</strong>, j'ai choisi de revenir en France pour ouvrir un nouvel éditeur de code.
                        Mon moteur ? <strong>Comprendre un besoin et y répondre avec créativité.</strong>
                    </p>
                    <p>
                        Pour moi le développement web est le point de rencontre parfait entre la logique technique et l'expression créative.
                        Actuellement étudiante à la <strong>Fabrique Numérique 41</strong>, je m'attache à produire un code propre et maintenable,
                        tout en plaçant l'<strong>expérience utilisateur</strong> au cœur de mes projets.
                    </p>
                    <p>
                        Aujourd'hui, je ne cherche pas juste un tuteur, mais un <strong>mentor</strong>.
                        Disponible pour une <strong>alternance dès Avril 2026</strong>, j'apporte bien plus que du code:
                        ma maturité professionnelle et ma fiabilité.
                    </p>

                    <div style={{marginTop: '30px'}}>
                        <a href="/CVPbennoin.pdf" target="_blank" rel="noopener noreferrer" className="btn-second">
                            Télécharger mon CV 📄
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- SECTION COMPÉTENCES ---
const SkillsSection = () => {
    return (
        <section id="skills" className="container">
            <div className="skills-section">
                <div className="container">
                    <h2 className="section-title" style={{textAlign: 'center'}}>Mes Compétences</h2>
                    <p style={{textAlign: 'center', marginBottom: '50px', maxWidth: '600px', margin: '0 auto 50px'}}>
                        La fusion entre mes compétences techniques actuelles et mon savoir être.
                    </p>

                    <div className="skills-wrapper">
                        {/* Colonne Hard Skills */}
                        <div className="skill-col">
                            {/* Au lieu de réécrire le code HTML pour chaque compétence, on appelle SkillItem */}
                            {/* On lui passe des "props" (name et icon) pour personnaliser chaque ligne */}
                            <h3 style={{color: 'var(--primary-dark)'}}>💻 Hard Skills </h3>
                            <SkillItem name="HTML/CSS | Javascript " icon="🖥️" />
                            <SkillItem name="Node.js | SQL | PHP" icon="⚙️" />
                            <SkillItem name="React | Tailwind CSS" icon="🧩" />
                            <SkillItem name="Wordpress" icon="📝" />
                            <SkillItem name=" Github | JetBrains | Vs Code | Figma" icon="🛠️" />
                        </div>

                        {/* Colonne Soft Skills */}
                        <div className="skill-col">
                            <h3 style={{color: 'var(--accent-orange)'}}>✨ Soft Skills</h3>
                            <SkillItem name="Adaptabilité" icon="🦎" />
                            <SkillItem name="Rigueur" icon="🎯" />
                            <SkillItem name="Esprit d'équipe" icon="🤝" />
                            <SkillItem name="Gestion de projets" icon="📅" />
                            <SkillItem name="Curiosité" icon="🌏" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// C'est le moule pour créer une ligne de compétence.
// Il reçoit { name, icon } et les place dans le HTML.
const SkillItem = ({ name, icon }) => (
    <div className="skill-item">
        <span className="skill-name">{name}</span>
        <span className="skill-icon">{icon}</span>
    </div>
);

// --- SECTION PROJETS ---
const ProjectsSection = () => {
    return (
        <section id="projects" className="projects-section container">
            <h2 className="section-title">Mes Projets Récents</h2>
            <div className="projects-grid">

                {/* BOUCLE MAP : */}
                {/* On prend le tableau 'projectsData' et pour chaque projet (p)... */}
                {projectsData.map((p) => (
                    // ... on crée une carte HTML (div project-card).
                    // key={p.id} est obligatoire pour que React s'y retrouve.
                    <div className="project-card" key={p.id}>

                        {/* On utilise p.link, p.img, p.title qui viennent de l'objet */}
                        <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                            <img src={p.img} alt={p.title} className="project-img" />
                        </a>

                        <div className="project-body">
                            <span className="project-cat">{p.cat}</span>
                            <h3 className="project-title">{p.title}</h3>
                            <p style={{color: 'var(--text-grey)', fontSize: '0.95rem'}}>{p.desc}</p>

                            {/* Deuxième boucle à l'intérieur pour les badges (JS, CSS...) */}
                            <div className="project-techs" style={{marginBottom: '20px', display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
                                {p.techNames.map((name, index) => (
                                    <span key={index} style={{
                                        fontSize: '0.8rem',
                                        padding: '4px 10px',
                                        background: 'var(--primary-light)',
                                        color: 'var(--primary-dark)',
                                        borderRadius: '12px',
                                        fontWeight: '600'
                                    }}>
                                        {name}
                                    </span>
                                ))}
                            </div>

                            {/* Bouton Lien */}
                            <a
                                href={p.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-main"
                                style={{
                                    display: 'inline-block',
                                    width: '100%',
                                    textAlign: 'center',
                                    background: 'var(--accent-orange-light)',
                                    color: 'var(--accent-orange)',
                                    border: '1px solid #eee',
                                    boxShadow: 'none',
                                    cursor: 'pointer',
                                    textDecoration: 'none'
                                }}
                            >
                                Voir le site →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

// --- SECTION CONTACT ---
const ContactSection = () => (
    <section id="contact" className="contact-section container">
        <div className="contact-card">
            <h2 className="section-title">Envie de discuter ?</h2>
            <p>
                Que ce soit pour parler de votre <strong>projet</strong>, de <strong>voyage</strong> ou de futures <strong> opportunités </strong>,
                je serais ravie d'échanger avec vous.
            </p>
            <div className="socials">
                <a href="mailto:pauline@example.com" className="social-link" aria-label="Envoyer un email">
                    <IconMail />
                </a>
                <a href="https://www.linkedin.com/in/pauline-bennoin-870754178/" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <IconLinkedin />
                </a>
                <a href="https://github.com/PaulineB15" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <IconGithub />
                </a>
            </div>
        </div>
    </section>
);

// --- FOOTER ---
const Footer = () => (
    <footer className="footer">
        <p>© 2026 Pauline Bennoin. Fait avec 💚 et de l'aventure.</p>
    </footer>
);

export default App;