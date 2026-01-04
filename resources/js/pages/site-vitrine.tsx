import { Head } from '@inertiajs/react';
import FrontLayout from '@/layouts/front-layout';

export default function SiteVitrine() {
    function scrollToContact(e?: React.MouseEvent) {
        if (e) e.preventDefault();
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <FrontLayout>
            <Head>
                <title>Site Vitrine - Création de site internet professionnel | Développeur web freelance</title>
                <meta
                    name="description"
                    content="Création de site vitrine professionnel sur mesure. Design moderne, responsive et optimisé SEO pour améliorer votre visibilité en ligne et attirer vos futurs clients."
                />
            </Head>

            <section
                className="relative flex h-[50vh] items-center justify-center bg-neutral-200 text-center text-white md:h-[60vh]"
                style={{
                    backgroundImage: "url('/img/site.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 mx-auto max-w-3xl px-6">
                    <h1 className="text-4xl font-bold leading-tight md:text-5xl">Site Vitrine</h1>
                    <p className="mt-4 text-base text-neutral-100 md:text-lg">
                        Créez votre présence en ligne avec un site vitrine professionnel et moderne
                    </p>
                </div>
            </section>

            <main className="mx-auto max-w-6xl px-4 py-12 md:px-6">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-semibold text-neutral-900 dark:text-neutral-100">
                            Qu'est-ce qu'un site vitrine ?
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                            Un site vitrine est votre carte de visite digitale. Il présente votre entreprise, vos services et vos valeurs de manière
                            professionnelle. C'est l'outil essentiel pour établir votre crédibilité en ligne et attirer de nouveaux clients.
                        </p>
                    </div>

                    <div className="mb-16 grid gap-8 md:grid-cols-2">
                        <div className="rounded-lg border border-sidebar-border/70 bg-white p-6 shadow-sm dark:border-sidebar-border dark:bg-neutral-900">
                            <h3 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-neutral-100">Design sur mesure</h3>
                            <p className="text-neutral-700 dark:text-neutral-300">
                                Chaque site est conçu pour refléter parfaitement votre identité de marque. Un design unique qui vous différencie de
                                vos concurrents et qui parle à votre audience cible.
                            </p>
                        </div>

                        <div className="rounded-lg border border-sidebar-border/70 bg-white p-6 shadow-sm dark:border-sidebar-border dark:bg-neutral-900">
                            <h3 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-neutral-100">Optimisation SEO</h3>
                            <p className="text-neutral-700 dark:text-neutral-300">
                                Votre site est optimisé pour les moteurs de recherche dès le départ. Structure sémantique, balises meta, performance
                                : tout est pensé pour améliorer votre référencement naturel.
                            </p>
                        </div>

                        <div className="rounded-lg border border-sidebar-border/70 bg-white p-6 shadow-sm dark:border-sidebar-border dark:bg-neutral-900">
                            <h3 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-neutral-100">Responsive design</h3>
                            <p className="text-neutral-700 dark:text-neutral-300">
                                Votre site s'adapte parfaitement à tous les écrans : smartphone, tablette, ordinateur. Une expérience utilisateur
                                optimale sur tous les appareils.
                            </p>
                        </div>

                        <div className="rounded-lg border border-sidebar-border/70 bg-white p-6 shadow-sm dark:border-sidebar-border dark:bg-neutral-900">
                            <h3 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-neutral-100">Performance optimale</h3>
                            <p className="text-neutral-700 dark:text-neutral-300">
                                Des sites rapides et légers qui se chargent en un instant. L'optimisation des images, du code et de l'hébergement
                                garantit une vitesse de chargement exceptionnelle.
                            </p>
                        </div>
                    </div>

                    <div className="mb-12 rounded-lg bg-gradient-to-br from-neutral-50 to-neutral-100 p-8 dark:from-neutral-800 dark:to-neutral-900">
                        <h3 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">Pourquoi choisir un site vitrine ?</h3>
                        <ul className="space-y-3 text-neutral-700 dark:text-neutral-300">
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-green">✓</span>
                                <span>
                                    <strong>Crédibilité professionnelle :</strong> Un site web moderne renforce la confiance de vos clients
                                    potentiels
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-green">✓</span>
                                <span>
                                    <strong>Visibilité 24/7 :</strong> Votre entreprise est accessible à tout moment, où que se trouvent vos
                                    clients
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-green">✓</span>
                                <span>
                                    <strong>Présentation de vos services :</strong> Mettez en valeur vos prestations avec des pages dédiées et des
                                    visuels impactants
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-green">✓</span>
                                <span>
                                    <strong>Contact facilité :</strong> Formulaires de contact, coordonnées, plan d'accès : simplifiez la prise de
                                    contact
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-green">✓</span>
                                <span>
                                    <strong>Référencement local :</strong> Optimisé pour apparaître dans les résultats de recherche locaux (Google
                                    My Business)
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-12">
                        <h3 className="mb-6 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">Ce qui est inclus</h3>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="rounded-lg border border-sidebar-border/70 bg-white p-6 dark:border-sidebar-border dark:bg-neutral-900">
                                <h4 className="mb-3 font-semibold text-neutral-900 dark:text-neutral-100">Développement</h4>
                                <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                                    <li>• Design personnalisé et responsive</li>
                                    <li>• Intégration de votre contenu</li>
                                    <li>• Optimisation des performances</li>
                                    <li>• Configuration SEO de base</li>
                                    <li>• Formulaire de contact</li>
                                </ul>
                            </div>

                            <div className="rounded-lg border border-sidebar-border/70 bg-white p-6 dark:border-sidebar-border dark:bg-neutral-900">
                                <h4 className="mb-3 font-semibold text-neutral-900 dark:text-neutral-100">Formation et support</h4>
                                <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                                    <li>• Formation à la gestion du contenu</li>
                                    <li>• Documentation technique</li>
                                    <li>• Support technique initial</li>
                                    <li>• Conseils pour le référencement</li>
                                    <li>• Maintenance optionnelle</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="mb-6 text-lg text-neutral-700 dark:text-neutral-300">
                            Prêt à créer votre site vitrine professionnel ? Discutons de votre projet.
                        </p>
                        <a
                            href="#contact"
                            onClick={scrollToContact}
                            className="inline-block rounded-full bg-green px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-green-200"
                        >
                            Me contacter pour un devis
                        </a>
                    </div>
                </div>
            </main>
        </FrontLayout>
    );
}

