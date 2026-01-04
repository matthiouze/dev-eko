import { Head } from '@inertiajs/react';
import FrontLayout from '@/layouts/front-layout';

export default function SiteEcommerce() {
    function scrollToContact(e?: React.MouseEvent) {
        if (e) e.preventDefault();
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <FrontLayout>
            <Head>
                <title>Site E-commerce - Création de boutique en ligne | Développeur web freelance</title>
                <meta
                    name="description"
                    content="Création de site e-commerce et boutique en ligne professionnelle. Gestion produits, paiements sécurisés, suivi commandes. Solution complète pour vendre en ligne."
                />
            </Head>

            <section
                className="relative flex h-[50vh] items-center justify-center bg-neutral-200 text-center text-white md:h-[60vh]"
                style={{
                    backgroundImage: "url('/img/ecommerce.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 mx-auto max-w-3xl px-6">
                    <h1 className="text-4xl font-bold leading-tight md:text-5xl">Site E-commerce</h1>
                    <p className="mt-4 text-base text-neutral-100 md:text-lg">
                        Développez votre activité commerciale avec une boutique en ligne performante
                    </p>
                </div>
            </section>

            <main className="mx-auto max-w-6xl px-4 py-12 md:px-6">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-semibold text-neutral-900 dark:text-neutral-100">
                            Vendez en ligne avec une boutique e-commerce professionnelle
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                            Une solution e-commerce complète pour gérer vos produits, vos commandes et vos paiements. Développez vos ventes en ligne
                            avec une plateforme sécurisée, intuitive et optimisée pour la conversion.
                        </p>
                    </div>

                    <div className="mb-16 grid gap-8 md:grid-cols-2">
                        <div className="rounded-lg border border-sidebar-border/70 bg-white p-6 shadow-sm dark:border-sidebar-border dark:bg-neutral-900">
                            <h3 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-neutral-100">Catalogue produits</h3>
                            <p className="text-neutral-700 dark:text-neutral-300">
                                Gestion complète de votre catalogue : ajout, modification, catégorisation. Photos multiples, variantes de produits,
                                descriptions détaillées : tout pour présenter vos produits au mieux.
                            </p>
                        </div>

                        <div className="rounded-lg border border-sidebar-border/70 bg-white p-6 shadow-sm dark:border-sidebar-border dark:bg-neutral-900">
                            <h3 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-neutral-100">Paiements sécurisés</h3>
                            <p className="text-neutral-700 dark:text-neutral-300">
                                Intégration de solutions de paiement sécurisées (Stripe, PayPal, etc.). Transactions cryptées, conformité PCI-DSS
                                : la sécurité de vos clients est garantie.
                            </p>
                        </div>

                        <div className="rounded-lg border border-sidebar-border/70 bg-white p-6 shadow-sm dark:border-sidebar-border dark:bg-neutral-900">
                            <h3 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-neutral-100">Gestion des stocks</h3>
                            <p className="text-neutral-700 dark:text-neutral-300">
                                Suivi en temps réel de vos stocks, alertes de réapprovisionnement, gestion des variantes. Ne manquez plus jamais
                                de stock et gérez efficacement votre inventaire.
                            </p>
                        </div>

                        <div className="rounded-lg border border-sidebar-border/70 bg-white p-6 shadow-sm dark:border-sidebar-border dark:bg-neutral-900">
                            <h3 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-neutral-100">Tableau de bord vendeur</h3>
                            <p className="text-neutral-700 dark:text-neutral-300">
                                Interface d'administration complète pour gérer vos commandes, clients, statistiques de vente. Visualisez vos
                                performances et prenez des décisions éclairées.
                            </p>
                        </div>
                    </div>

                    <div className="mb-12 rounded-lg bg-gradient-to-br from-neutral-50 to-neutral-100 p-8 dark:from-neutral-800 dark:to-neutral-900">
                        <h3 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">Fonctionnalités e-commerce</h3>
                        <ul className="space-y-3 text-neutral-700 dark:text-neutral-300">
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-green">✓</span>
                                <span>
                                    <strong>Panier d'achat :</strong> Gestion du panier, codes promo, calcul automatique des frais de livraison
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-green">✓</span>
                                <span>
                                    <strong>Gestion des commandes :</strong> Suivi des commandes, statuts, notifications automatiques par email
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-green">✓</span>
                                <span>
                                    <strong>Comptes clients :</strong> Espace client, historique des commandes, adresses de livraison sauvegardées
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-green">✓</span>
                                <span>
                                    <strong>Multi-livraison :</strong> Gestion de plusieurs modes de livraison, calcul automatique selon le poids et
                                    la destination
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-green">✓</span>
                                <span>
                                    <strong>Optimisation conversion :</strong> Design optimisé pour maximiser les ventes, tunnel d'achat simplifié
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-green">✓</span>
                                <span>
                                    <strong>SEO e-commerce :</strong> Optimisation pour les recherches produits, rich snippets, sitemap produits
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-12">
                        <h3 className="mb-6 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">Ce qui est inclus</h3>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="rounded-lg border border-sidebar-border/70 bg-white p-6 dark:border-sidebar-border dark:bg-neutral-900">
                                <h4 className="mb-3 font-semibold text-neutral-900 dark:text-neutral-100">Fonctionnalités e-commerce</h4>
                                <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                                    <li>• Catalogue produits complet</li>
                                    <li>• Panier et processus de commande</li>
                                    <li>• Intégration paiements sécurisés</li>
                                    <li>• Gestion des stocks</li>
                                    <li>• Espace client</li>
                                    <li>• Gestion des commandes</li>
                                </ul>
                            </div>

                            <div className="rounded-lg border border-sidebar-border/70 bg-white p-6 dark:border-sidebar-border dark:bg-neutral-900">
                                <h4 className="mb-3 font-semibold text-neutral-900 dark:text-neutral-100">Administration et support</h4>
                                <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                                    <li>• Tableau de bord administrateur</li>
                                    <li>• Formation à la gestion</li>
                                    <li>• Documentation complète</li>
                                    <li>• Support technique initial</li>
                                    <li>• Optimisation SEO produits</li>
                                    <li>• Maintenance optionnelle</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="mb-6 text-lg text-neutral-700 dark:text-neutral-300">
                            Prêt à lancer votre boutique en ligne ? Discutons de votre projet e-commerce.
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

