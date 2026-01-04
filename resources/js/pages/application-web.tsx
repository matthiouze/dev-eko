import { Head } from '@inertiajs/react';
import FrontLayout from '@/layouts/front-layout';

export default function ApplicationWeb() {
    function scrollToContact(e?: React.MouseEvent) {
        if (e) e.preventDefault();
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <FrontLayout>
            <Head>
                <title>Application Web - Développement d'applications web sur mesure | Développeur web freelance</title>
                <meta
                    name="description"
                    content="Développement d'applications web sur mesure pour optimiser votre productivité. Gestion de données, tableaux de bord interactifs, outils métier personnalisés."
                />
            </Head>

            <section
                className="relative flex h-[50vh] items-center justify-center bg-neutral-200 text-center text-white md:h-[60vh]"
                style={{
                    backgroundImage: "url('/img/dashboard.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 mx-auto max-w-3xl px-6">
                    <h1 className="text-4xl font-bold leading-tight md:text-5xl">Application Web</h1>
                    <p className="mt-4 text-base text-neutral-100 md:text-lg">
                        Optimisez votre productivité avec des applications web sur mesure
                    </p>
                </div>
            </section>

            <main className="mx-auto max-w-6xl px-4 py-12 md:px-6">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-semibold text-neutral-900 dark:text-neutral-100">
                            Des applications web adaptées à vos besoins métier
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                            Besoin d'une solution spécifique pour votre entreprise ? Je développe des applications web sur mesure qui s'adaptent à
                            vos processus métier et optimisent votre productivité. Gestion de données, tableaux de bord, outils collaboratifs : tout
                            est possible.
                        </p>
                    </div>

                    <div className="mb-16 grid gap-8 md:grid-cols-2">
                        <div className="rounded-lg border border-sidebar-border/70 bg-white p-6 shadow-sm dark:border-sidebar-border dark:bg-neutral-900">
                            <h3 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-neutral-100">Interface intuitive</h3>
                            <p className="text-neutral-700 dark:text-neutral-300">
                                Des interfaces pensées pour l'utilisateur final. Navigation claire, workflows optimisés, expérience utilisateur
                                fluide : vos équipes adoptent rapidement la solution.
                            </p>
                        </div>

                        <div className="rounded-lg border border-sidebar-border/70 bg-white p-6 shadow-sm dark:border-sidebar-border dark:bg-neutral-900">
                            <h3 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-neutral-100">Gestion de données</h3>
                            <p className="text-neutral-700 dark:text-neutral-300">
                                Stockage sécurisé, traitement efficace, import/export de données. Gestion de bases de données complexes avec
                                intégrité et performance garanties.
                            </p>
                        </div>

                        <div className="rounded-lg border border-sidebar-border/70 bg-white p-6 shadow-sm dark:border-sidebar-border dark:bg-neutral-900">
                            <h3 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-neutral-100">Tableaux de bord</h3>
                            <p className="text-neutral-700 dark:text-neutral-300">
                                Visualisation de vos données en temps réel avec des graphiques interactifs, KPIs, rapports personnalisables. Prenez
                                des décisions basées sur des données précises.
                            </p>
                        </div>

                        <div className="rounded-lg border border-sidebar-border/70 bg-white p-6 shadow-sm dark:border-sidebar-border dark:bg-neutral-900">
                            <h3 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-neutral-100">Solutions sur mesure</h3>
                            <p className="text-neutral-700 dark:text-neutral-300">
                                Chaque application est développée spécifiquement pour répondre à vos besoins. Pas de solution générique : une
                                application qui s'intègre parfaitement à vos processus.
                            </p>
                        </div>
                    </div>

                    <div className="mb-12 rounded-lg bg-gradient-to-br from-neutral-50 to-neutral-100 p-8 dark:from-neutral-800 dark:to-neutral-900">
                        <h3 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">Types d'applications web</h3>
                        <ul className="space-y-3 text-neutral-700 dark:text-neutral-300">
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-green">✓</span>
                                <span>
                                    <strong>Applications de gestion :</strong> CRM, ERP, gestion de projets, suivi d'activité, gestion de stocks
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-green">✓</span>
                                <span>
                                    <strong>Outils collaboratifs :</strong> Plateformes de collaboration, gestion de documents, workflows
                                    automatisés
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-green">✓</span>
                                <span>
                                    <strong>Applications métier :</strong> Solutions spécifiques à votre secteur d'activité, outils de calcul,
                                    générateurs de rapports
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-green">✓</span>
                                <span>
                                    <strong>Portails clients/partenaires :</strong> Espaces dédiés avec authentification, accès personnalisé aux
                                    données
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-green">✓</span>
                                <span>
                                    <strong>Applications de reporting :</strong> Tableaux de bord analytiques, rapports automatisés, visualisation
                                    de données
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-green">✓</span>
                                <span>
                                    <strong>Intégrations API :</strong> Connexion avec vos outils existants (comptabilité, CRM, etc.) pour un
                                    écosystème unifié
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-12">
                        <h3 className="mb-6 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">Avantages d'une application sur mesure</h3>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="rounded-lg border border-sidebar-border/70 bg-white p-6 dark:border-sidebar-border dark:bg-neutral-900">
                                <h4 className="mb-3 font-semibold text-neutral-900 dark:text-neutral-100">Adaptation à vos besoins</h4>
                                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                                    L'application est conçue spécifiquement pour vos processus métier. Pas de fonctionnalités inutiles, pas de
                                    contraintes liées à des solutions génériques.
                                </p>
                            </div>

                            <div className="rounded-lg border border-sidebar-border/70 bg-white p-6 dark:border-sidebar-border dark:bg-neutral-900">
                                <h4 className="mb-3 font-semibold text-neutral-900 dark:text-neutral-100">Évolutivité</h4>
                                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                                    L'application grandit avec votre entreprise. Ajout de fonctionnalités, adaptation aux nouveaux besoins : la
                                    solution évolue avec vous.
                                </p>
                            </div>

                            <div className="rounded-lg border border-sidebar-border/70 bg-white p-6 dark:border-sidebar-border dark:bg-neutral-900">
                                <h4 className="mb-3 font-semibold text-neutral-900 dark:text-neutral-100">Performance</h4>
                                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                                    Optimisée pour vos volumes de données et votre usage spécifique. Pas de surcharge, performance maximale.
                                </p>
                            </div>

                            <div className="rounded-lg border border-sidebar-border/70 bg-white p-6 dark:border-sidebar-border dark:bg-neutral-900">
                                <h4 className="mb-3 font-semibold text-neutral-900 dark:text-neutral-100">Sécurité</h4>
                                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                                    Sécurité renforcée adaptée à vos données sensibles. Authentification, autorisations, chiffrement : vos données
                                    sont protégées.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h3 className="mb-6 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">Processus de développement</h3>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green text-white">1</div>
                                <div>
                                    <h4 className="mb-2 font-semibold text-neutral-900 dark:text-neutral-100">Analyse des besoins</h4>
                                    <p className="text-sm text-neutral-700 dark:text-neutral-300">
                                        Compréhension approfondie de vos processus, identification des fonctionnalités nécessaires, définition des
                                        objectifs.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green text-white">2</div>
                                <div>
                                    <h4 className="mb-2 font-semibold text-neutral-900 dark:text-neutral-100">Conception et maquettage</h4>
                                    <p className="text-sm text-neutral-700 dark:text-neutral-300">
                                        Création de maquettes, validation des interfaces, définition de l'architecture technique.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green text-white">3</div>
                                <div>
                                    <h4 className="mb-2 font-semibold text-neutral-900 dark:text-neutral-100">Développement</h4>
                                    <p className="text-sm text-neutral-700 dark:text-neutral-300">
                                        Développement itératif avec validation régulière, tests continus, ajustements en cours de route.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green text-white">4</div>
                                <div>
                                    <h4 className="mb-2 font-semibold text-neutral-900 dark:text-neutral-100">Déploiement et formation</h4>
                                    <p className="text-sm text-neutral-700 dark:text-neutral-300">
                                        Mise en production, formation des utilisateurs, documentation, support initial.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="mb-6 text-lg text-neutral-700 dark:text-neutral-300">
                            Vous avez un projet d'application web ? Discutons de votre besoin spécifique.
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

