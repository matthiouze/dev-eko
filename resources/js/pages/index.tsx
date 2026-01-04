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
                <title>Développeur web freelance</title>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <meta name="description" content="Développeur web freelance, création de sites internet, création de sites e-commerce, création d'applications web" />
            </Head>

            <section
                className="relative flex h-[60vh] items-center justify-center bg-neutral-200 text-center text-white md:h-[70vh]"
                style={{
                    backgroundImage: "url('/img/banner.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 mx-auto max-w-3xl px-6">
                    <h1 className="text-4xl leading-tight font-bold md:text-6xl">Création de site internet</h1>
                    <p className="mt-4 text-base text-neutral-100 md:text-lg">Des sites rapides, visibles, les plus légers possible</p>
                    <div className="mt-6 flex items-center justify-center gap-3">
                        <a
                            href="#contact"
                            onClick={scrollToContact}
                            className="bg-green rounded-full px-5 py-2 text-sm font-semibold text-white hover:bg-green-200"
                        >
                            Me contacter
                        </a>
                    </div>
                </div>
            </section>

            <main className="mx-auto max-w-6xl px-4 py-6 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">Création de site internet</h2>
                    <p className="mt-4 dark:text-neutral-300">
                        Je suis développeur web, spécialisé dans la <strong>création de sites internet</strong>
                        modernes et adaptés aux besoins des petites et moyennes entreprises. J'aide les entrepreneurs et PME à gagner en visibilité en
                        ligne grâce à des <strong>solutions sur mesure</strong>,<strong>optimisées pour le SEO</strong>, la rapidité et l'expérience
                        utilisateur.
                        <br />
                        Que ce soit pour un site vitrine, e-commerce ou une application web, je vous mets en place la solution la plus adaptée à vos besoins.
                    </p>
                </div>
            </main>

            {/* Section prestations avec background dégradé - Prend toute la largeur */}
            <section className="w-full bg-gradient-to-b from-gray-200 to-white py-12 md:py-16">
                <div className="mx-auto max-w-6xl px-4 md:px-6">
                    {/* Prestation 1 - Site vitrine */}
                    <div className="mb-12 flex flex-col items-center gap-6 lg:mb-16 lg:flex-row lg:gap-12">
                        <div className="w-full lg:w-1/2">
                            <img
                                src="/img/site.jpg"
                                alt="Site vitrine"
                                className="mx-auto h-auto w-full max-w-md rounded-lg shadow-lg lg:max-w-none"
                            />
                        </div>
                        <div className="w-full text-center lg:w-1/2 lg:text-left">
                            <h3 className="mb-4 text-xl font-bold text-neutral-900 md:text-2xl">Site vitrine</h3>
                            <p className="mb-4 text-base leading-relaxed text-neutral-700 md:text-lg">
                                Créez votre présence en ligne avec un site vitrine professionnel. Moderne, responsive et optimisé pour le
                                référencement, votre site reflétera parfaitement votre image de marque et attirera vos futurs clients.
                            </p>
                            <ul className="inline-block space-y-1 text-left text-sm text-neutral-600 md:text-base">
                                <li>• Design sur mesure</li>
                                <li>• Optimisation SEO</li>
                                <li>• Responsive design</li>
                                <li>• Performance optimale</li>
                            </ul>
                        </div>
                    </div>

                    {/* Prestation 2 - E-commerce */}
                    <div className="mb-12 flex flex-col items-center gap-6 lg:mb-16 lg:flex-row-reverse lg:gap-12">
                        <div className="w-full lg:w-1/2">
                            <img
                                src="/img/ecommerce.jpg"
                                alt="Site e-commerce"
                                className="mx-auto h-auto w-full max-w-md rounded-lg shadow-lg lg:max-w-none"
                            />
                        </div>
                        <div className="w-full text-center lg:w-1/2 lg:text-left">
                            <h3 className="mb-4 text-xl font-bold text-neutral-900 md:text-2xl">Site e-commerce</h3>
                            <p className="mb-4 text-base leading-relaxed text-neutral-700 md:text-lg">
                                Développez votre activité commerciale avec une boutique en ligne performante. Gestion des produits, paiements
                                sécurisés, suivi des commandes, tout est pensé pour maximiser vos ventes.
                            </p>
                            <ul className="inline-block space-y-1 text-left text-sm text-neutral-600 md:text-base">
                                <li>• Catalogue produits</li>
                                <li>• Paiements sécurisés</li>
                                <li>• Gestion des stocks</li>
                                <li>• Tableau de bord vendeur</li>
                            </ul>
                        </div>
                    </div>

                    {/* Prestation 3 - Applications web */}
                    <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-12">
                        <div className="w-full lg:w-1/2">
                            <img
                                src="/img/dashboard.jpg"
                                alt="Application web"
                                className="mx-auto h-auto w-full max-w-md rounded-lg shadow-lg lg:max-w-none"
                            />
                        </div>
                        <div className="w-full text-center lg:w-1/2 lg:text-left">
                            <h3 className="mb-4 text-xl font-bold text-neutral-900 md:text-2xl">Applications web</h3>
                            <p className="mb-4 text-base leading-relaxed text-neutral-700 md:text-lg">
                                Optimisez votre productivité avec des applications web sur mesure. Gestion de données, tableaux de bord interactifs,
                                outils métier, je développe la solution qui correspond à vos besoins spécifiques.
                            </p>
                            <ul className="inline-block space-y-1 text-left text-sm text-neutral-600 md:text-base">
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
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-2xl font-bold text-neutral-900 md:text-3xl">Portfolio</h2>
                        <p className="mx-auto max-w-2xl text-neutral-600">
                            Découvrez quelques-unes de mes réalisations récentes. Cliquez sur un projet pour en savoir plus.
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
                                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                                            {portfolioProjects.slice(slideIndex * 3, slideIndex * 3 + 3).map((project) => (
                                                <div
                                                    key={project.id}
                                                    className="transform cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105"
                                                    onClick={() => openModal(project)}
                                                >
                                                    <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
                                                    <div className="p-4">
                                                        <h3 className="mb-2 font-semibold text-neutral-900">{project.title}</h3>
                                                        <p className="line-clamp-2 text-sm text-neutral-600">
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
                            className="absolute top-1/2 left-4 -translate-y-1/2 transform rounded-full bg-white/90 p-2 text-neutral-800 shadow-lg transition-all hover:bg-white"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute top-1/2 right-4 -translate-y-1/2 transform rounded-full bg-white/90 p-2 text-neutral-800 shadow-lg transition-all hover:bg-white"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Indicateurs */}
                        <div className="mt-6 flex justify-center space-x-2">
                            {Array.from({ length: Math.ceil(portfolioProjects.length / 3) }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`h-3 w-3 rounded-full transition-all ${
                                        currentSlide === index ? 'bg-green' : 'bg-neutral-300 hover:bg-neutral-400'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Modal */}
                    {selectedProject && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                            <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white">
                                <div className="relative">
                                    <img src={selectedProject.image} alt={selectedProject.title} className="h-64 w-full rounded-t-lg object-cover" />
                                    <button
                                        onClick={closeModal}
                                        className="absolute top-4 right-4 rounded-full bg-white/90 p-2 text-neutral-800 shadow-lg transition-all hover:bg-white"
                                    >
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="p-6">
                                    <h3 className="mb-4 text-2xl font-bold text-neutral-900">{selectedProject.title}</h3>
                                    <p className="mb-6 leading-relaxed text-neutral-700">{selectedProject.description}</p>

                                    <div className="mb-6">
                                        <h4 className="mb-2 font-semibold text-neutral-900">Technologies utilisées :</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.technologies.map((tech, index) => (
                                                <span key={index} className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
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
                                            className="bg-green rounded-lg px-6 py-2 font-semibold text-white transition-colors"
                                        >
                                            Voir le site
                                        </a>
                                        <button
                                            onClick={closeModal}
                                            className="rounded-lg bg-neutral-200 px-6 py-2 font-semibold text-neutral-800 transition-colors"
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
