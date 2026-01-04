import { Link } from '@inertiajs/react';
import { useCallback } from 'react';
import { Menu as MenuIcon, ChevronDown } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function FrontHeader() {

    const scrollToContact = useCallback((e?: React.MouseEvent) => {
        if (e) e.preventDefault();
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, []);

    const NavLinks = (
        <ul className="flex flex-col gap-4 text-base font-medium md:flex-row md:items-center md:gap-6 md:text-sm">
            <li>
                <Link href={route('home')} className="text-neutral-700 hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-white">
                    Accueil
                </Link>
            </li>
            <li>
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-neutral-700 hover:text-neutral-900 focus:outline-none dark:text-neutral-200 dark:hover:text-white">
                        Prestations
                        <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                        <DropdownMenuItem asChild>
                            <Link href={route('site-vitrine')} className="cursor-pointer">
                                Site vitrine
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href={route('site-ecommerce')} className="cursor-pointer">
                                Site e-commerce
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href={route('application-web')} className="cursor-pointer">
                                Application web
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </li>
        </ul>
    );

    return (
        <>
            <header className="sticky top-0 z-40 w-full border-b border-neutral-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-neutral-800/70 dark:bg-neutral-900/60">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
                <Link href={route('home')} className="flex items-center gap-2">
                    <img src="/img/logo-eko-dev-line.svg" alt="Logo" className="h-16 w-auto" />
                </Link>

                <nav className="absolute left-1/2 hidden -translate-x-1/2 md:block">
                    {NavLinks}
                </nav>

                <div className="ml-auto hidden md:block">
                    <a
                        href="#contact"
                        onClick={scrollToContact}
                        className="inline-flex items-center rounded-md bg-green px-4 py-2 text-sm font-semibold text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900"
                    >
                        Contact
                    </a>
                </div>

                <div className="ml-auto md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <button aria-label="Ouvrir le menu" className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white p-2 text-neutral-700 shadow-sm hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800">
                                <MenuIcon className="h-5 w-5" />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="left" className="bg-white dark:bg-neutral-900">
                            <div className="px-2 py-6">
                                <div className="mb-6 flex items-center gap-2 px-2">
                                    <img src="/img/logo-eko-dev-line.svg" alt="Logo" className="h-16 w-auto" />
                                </div>
                                <nav>
                                    <ul className="flex flex-col gap-4 text-base font-medium">
                                        <li>
                                            <SheetClose asChild>
                                                <Link href={route('home')} className="text-neutral-700 hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-white">
                                                    Accueil
                                                </Link>
                                            </SheetClose>
                                        </li>
                                        <li>
                                            <div className="text-neutral-700 dark:text-neutral-200">
                                                <div className="mb-2 font-semibold">Prestations</div>
                                                <ul className="ml-4 flex flex-col gap-2">
                                                    <li>
                                                        <SheetClose asChild>
                                                            <Link href={route('site-vitrine')} className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">
                                                                Site vitrine
                                                            </Link>
                                                        </SheetClose>
                                                    </li>
                                                    <li>
                                                        <SheetClose asChild>
                                                            <Link href={route('site-ecommerce')} className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">
                                                                Site e-commerce
                                                            </Link>
                                                        </SheetClose>
                                                    </li>
                                                    <li>
                                                        <SheetClose asChild>
                                                            <Link href={route('application-web')} className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">
                                                                Application web
                                                            </Link>
                                                        </SheetClose>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <SheetClose asChild>
                                                <a href="#contact" onClick={scrollToContact} className="text-neutral-700 hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-white">Contact</a>
                                            </SheetClose>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            </header>
        </>
    );
}


