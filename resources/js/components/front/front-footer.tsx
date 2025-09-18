import { useForm } from '@inertiajs/react';
import { useMemo, useState } from 'react';

export default function FrontFooter() {
    const { data, setData, post, processing, reset } = useForm({
        name: '',
        email: '',
        tel: '',
        reason: 'contact' as 'contact' | 'booking',
        nb_people: '' as number | string,
        message: '',
    });

    const [success, setSuccess] = useState<string | null>(null);

    const isBooking = useMemo(() => data.reason === 'booking', [data.reason]);

    function submit(e: React.FormEvent) {
        e.preventDefault();
        setSuccess(null);
        post(route('contacts.store'), {
            onSuccess: () => {
                reset();
                setSuccess('Votre message a été envoyé. Nous vous répondrons rapidement.');
            },
            preserveScroll: true,
        });
    }

    return (
        <footer id="contact" className="border-t border-neutral-200 bg-neutral-50 dark:bg-neutral-950">
            <div className="bg-green-50 dark:bg-green-950/20 py-6">
                <div className="mx-auto max-w-6xl px-4 md:px-6">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                            Contact
                        </h3>
                    </div>

                    <section itemScope itemType="https://schema.org/ContactPage" className="max-w-2xl mx-auto bg-white dark:bg-neutral-900 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700 shadow-sm">
                        <meta itemProp="name" content="Page de contact" />
                        <meta itemProp="description"
                              content="Formulaire de contact et réservation pour le Restaurant Le Gourmet" />

                        {success && (
                            <div className="mb-6 rounded-md border border-green-200 bg-green-50 p-4 text-sm text-green-800 dark:border-green-900/50 dark:bg-green-950 dark:text-green-200">
                                {success}
                            </div>
                        )}

                        <form
                            onSubmit={submit}
                            itemProp="mainEntity"
                            itemScope
                            itemType="https://schema.org/ContactPoint"
                            className="space-y-6"
                        >
                            <meta itemProp="areaServed" content="FR" />
                            <meta itemProp="contactType" content="customer service" />

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-2">Nom</label>
                                    <input
                                        itemProp="name"
                                        required
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        type="text"
                                        name="name"
                                        className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder-neutral-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-100"
                                        placeholder="Votre nom"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-2">Email</label>
                                    <input
                                        itemProp="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        type="email"
                                        name="email"
                                        className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder-neutral-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-100"
                                        placeholder="nom@domaine.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-2">Téléphone</label>
                                    <input
                                        itemProp="telephone"
                                        value={data.tel}
                                        onChange={(e) => setData('tel', e.target.value)}
                                        type="tel"
                                        name="tel"
                                        className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder-neutral-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-100"
                                        placeholder="06 00 00 00 00"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-2">Message</label>
                                <textarea
                                    itemProp="description"
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    name="message"
                                    rows={4}
                                    className="w-full resize-y rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder-neutral-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-100"
                                    placeholder={isBooking ? 'Votre demande de réservation...' : 'Votre message...'}
                                />
                            </div>

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="inline-flex items-center rounded-md bg-green px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-60 dark:focus:ring-offset-neutral-900"
                                >
                                    Envoyer
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>

            <div className="h-px bg-neutral-200 dark:bg-neutral-800"></div>

            <div className="bg-neutral-100 dark:bg-neutral-900 py-6">
                <div className="mx-auto text-center px-4 md:px-6">
                    &copy; Matthieu Villalonga | 2025 | Tous droits réservés.
                </div>
            </div>
        </footer>
    );
}


