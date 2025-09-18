import { Head } from '@inertiajs/react';
import FrontLayout from '@/layouts/front-layout';
import { SetStateAction, useState } from 'react';

interface PortfolioProject {
    id: number;
    title: string;
    image: string;
    description: string;
    technologies: string[];
    url: string;
}

export default function Index() {

    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

    // Données du portfolio
    const portfolioProjects: PortfolioProject[] = [
        {
            id: 1,
            title: 'Concour passerelle',
            image: '/img/concours.png',
            description: 'Boutique en ligne pour artisan avec catalogue produits, blog, système de commande personnalisée et intégration réseaux sociaux. Design authentique reflétant le savoir-faire artisanal.',
            technologies: ['NextJS', 'Tailwind'],
            url: 'https://grande-ecole.passerelle-esc.com/'
        },
        {
            id: 2,
            title: 'Colocatere',
            image: '/img/coloc.png',
            description: 'Développement de la plateforme de gestion locative',
            technologies: ['Laravel', 'Tailwind', 'JavaScript', 'Bootstrap', 'alpineJS', 'VueJS'],
            url: 'https://www.colocatere.com/fr'
        },
        {
            id: 3,
            title: 'Aglae',
            image: '/img/aglae.png',
            description: 'Refonte de l\'exxtranet.',
            technologies: ['PHP', 'JQuery', 'MySQL', 'Boostrap'],
            url: 'https://www.association-aglae.fr/fr'
        },

        {
            id: 4,
            title: 'Stores discount',
            image: '/img/sd.png',
            description: 'Développement du site ecommerce',
            technologies: ['PHP', 'HTML', 'MySQL', 'CSS', 'JQuery'],
            url: 'https://exemple-formation.com'
        },
        {
            id: 5,
            title: 'Saint-maclou',
            image: '/img/saintmac.png',
            description: 'Maintenance de la boutique en ligne.',
            technologies: ['Magento', 'HTML', 'CSS', 'Javascript'],
            url: 'https://www.saint-maclou.com/'
        },
        {
            id: 5,
            title: 'E-survey',
            image: '/img/esurvey.png',
            description: 'Développement d\'une solution d\'étude de marché.',
            technologies: ['Laravel', 'Couchbase'],
            url: 'https://www.e-survey.io/fr/'
        }

    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(portfolioProjects.length / 3));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + Math.ceil(portfolioProjects.length / 3)) % Math.ceil(portfolioProjects.length / 3));
    };

    const openModal = (project: SetStateAction<PortfolioProject | null>) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };
    function scrollToContact(e?: React.MouseEvent) {
        if (e) e.preventDefault();
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <FrontLayout>
            <Head>
                <title>Accueil</title>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <meta name="description" content="Meta desc index" />
            </Head>

            <section
                className="relative flex h-[60vh] items-center justify-center bg-neutral-200 text-center text-white md:h-[70vh]"
                style={{
                    backgroundImage: "url('/img/banner.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 mx-auto max-w-3xl px-6">
                    <h1 className="text-3xl leading-tight font-bold md:text-5xl">Création de site internet</h1>
                    <p className="mt-4 text-base text-neutral-100 md:text-lg">
                        Des sites rapides, visibles, les plus légers possible
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-3">
                        <a
                            href="#contact"
                            onClick={scrollToContact}
                            className="rounded-full bg-green px-5 py-2 text-sm font-semibold text-white hover:bg-green-200"
                        >
                            Me contacter
                        </a>
                    </div>
                </div>
            </section>

            <main className="mx-auto max-w-6xl px-4 py-6 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                        Création de site internet
                    </h2>
                    <p className="mt-4 dark:text-neutral-300">
                        Je suis développeur, spécialisé dans la <strong>création de sites internet</strong>,
                        modernes et adaptés aux besoins des petites et moyennes entreprises.
                        J'aide les entrepreneurs et PME à gagner en visibilité en ligne grâce à des solutions sur mesure,
                        optimisées pour le SEO, la rapidité et l'expérience utilisateur.
                        <br/>
                        Que ce soit pour un site vitrine, e-commerce ou une application web, je vous mets en place une
                        solution.
                    </p>
                </div>
            </main>

            {/* Section prestations avec background dégradé - Prend toute la largeur */}
            <section className="w-full bg-gradient-to-b from-gray-200 to-white py-12 md:py-16">
                <div className="mx-auto max-w-6xl px-4 md:px-6">
                    {/* Prestation 1 - Site vitrine */}
                    <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 mb-12 lg:mb-16">
                        <div className="w-full lg:w-1/2">
                            <img
                                src="/img/site.jpg"
                                alt="Site vitrine"
                                className="w-full h-auto rounded-lg shadow-lg max-w-md mx-auto lg:max-w-none"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">Site vitrine</h3>
                            <p className="text-neutral-700 text-base md:text-lg leading-relaxed mb-4">
                                Créez votre présence en ligne avec un site vitrine professionnel.
                                Moderne, responsive et optimisé pour le référencement, votre site
                                reflétera parfaitement votre image de marque et attirera vos futurs clients.
                            </p>
                            <ul className="text-sm md:text-base text-neutral-600 space-y-1 inline-block text-left">
                                <li>• Design sur mesure</li>
                                <li>• Optimisation SEO</li>
                                <li>• Responsive design</li>
                                <li>• Performance optimale</li>
                            </ul>
                        </div>
                    </div>

                    {/* Prestation 2 - E-commerce */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-12 mb-12 lg:mb-16">
                        <div className="w-full lg:w-1/2">
                            <img
                                src="/img/ecommerce.jpg"
                                alt="Site e-commerce"
                                className="w-full h-auto rounded-lg shadow-lg max-w-md mx-auto lg:max-w-none"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">Site e-commerce</h3>
                            <p className="text-neutral-700 text-base md:text-lg leading-relaxed mb-4">
                                Développez votre activité commerciale avec une boutique en ligne performante.
                                Gestion des produits, paiements sécurisés, suivi des commandes,
                                tout est pensé pour maximiser vos ventes.
                            </p>
                            <ul className="text-sm md:text-base text-neutral-600 space-y-1 inline-block text-left">
                                <li>• Catalogue produits</li>
                                <li>• Paiements sécurisés</li>
                                <li>• Gestion des stocks</li>
                                <li>• Tableau de bord vendeur</li>
                            </ul>
                        </div>
                    </div>

                    {/* Prestation 3 - Applications web */}
                    <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
                        <div className="w-full lg:w-1/2">
                            <img
                                src="/img/dashboard.jpg"
                                alt="Application web"
                                className="w-full h-auto rounded-lg shadow-lg max-w-md mx-auto lg:max-w-none"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">Applications web</h3>
                            <p className="text-neutral-700 text-base md:text-lg leading-relaxed mb-4">
                                Optimisez votre productivité avec des applications web sur mesure.
                                Gestion de données, tableaux de bord interactifs, outils métier,
                                je développe la solution qui correspond à vos besoins spécifiques.
                            </p>
                            <ul className="text-sm md:text-base text-neutral-600 space-y-1 inline-block text-left">
                                <li>• Interface intuitive</li>
                                <li>• Gestion de données</li>
                                <li>• Tableaux de bord</li>
                                <li>• Solutions sur mesure</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-neutral-50 py-12 md:py-16">
                <div className="mx-auto max-w-6xl px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                            Portfolio
                        </h2>
                        <p className="text-neutral-600 max-w-2xl mx-auto">
                            Découvrez quelques-unes de mes réalisations récentes.
                            Cliquez sur un projet pour en savoir plus.
                        </p>
                    </div>

                    {/* Slider */}
                    <div className="relative">
                        <div className="overflow-hidden rounded-lg">
                            <div
                                className="flex transition-transform duration-300 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {Array.from({ length: Math.ceil(portfolioProjects.length / 3) }).map((_, slideIndex) => (
                                    <div key={slideIndex} className="w-full flex-shrink-0">
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {portfolioProjects
                                                .slice(slideIndex * 3, slideIndex * 3 + 3)
                                                .map((project) => (
                                                    <div
                                                        key={project.id}
                                                        className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
                                                        onClick={() => openModal(project)}
                                                    >
                                                        <img
                                                            src={project.image}
                                                            alt={project.title}
                                                            className="w-full h-48 object-cover"
                                                        />
                                                        <div className="p-4">
                                                            <h3 className="font-semibold text-neutral-900 mb-2">
                                                                {project.title}
                                                            </h3>
                                                            <p className="text-sm text-neutral-600 line-clamp-2">
                                                                {project.description.substring(0, 100)}...
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Boutons navigation */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-neutral-800 rounded-full p-2 shadow-lg transition-all"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-neutral-800 rounded-full p-2 shadow-lg transition-all"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Indicateurs */}
                        <div className="flex justify-center mt-6 space-x-2">
                            {Array.from({ length: Math.ceil(portfolioProjects.length / 3) }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${
                                        currentSlide === index
                                            ? 'bg-green'
                                            : 'bg-neutral-300 hover:bg-neutral-400'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Modal */}
                    {selectedProject && (
                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                                <div className="relative">
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="w-full h-64 object-cover rounded-t-lg"
                                    />
                                    <button
                                        onClick={closeModal}
                                        className="absolute top-4 right-4 bg-white/90 hover:bg-white text-neutral-800 rounded-full p-2 shadow-lg transition-all"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                                        {selectedProject.title}
                                    </h3>
                                    <p className="text-neutral-700 leading-relaxed mb-6">
                                        {selectedProject.description}
                                    </p>

                                    <div className="mb-6">
                                        <h4 className="font-semibold text-neutral-900 mb-2">Technologies utilisées :</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <a
                                            href={selectedProject.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-green text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                                        >
                                            Voir le site
                                        </a>
                                        <button
                                            onClick={closeModal}
                                            className="bg-neutral-200 text-neutral-800 px-6 py-2 rounded-lg font-semibold transition-colors"
                                        >
                                            Fermer
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </FrontLayout>
    );
}
