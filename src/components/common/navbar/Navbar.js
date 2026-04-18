'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import CustomButton from '@/components/common/buttons/CustomButton';
import { MdMenu, MdClose } from 'react-icons/md';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import logoLight from '@/assets/common/emsLogoDark.svg';

const links = [
    { name: 'Strona Główna', link: '/' },
    { name: 'Nasza oferta', link: '/#oferta' },
    { name: 'FAQ', link: '/#faq' },
    { name: 'Pliki', link: '/dokumentacja' },
];

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const pathname = usePathname();
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const threshold = window.innerWidth >= 1700 ? 20 : 0;
            setIsSticky(window.scrollY > threshold);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNav = () => setNav(!nav);
    const closeNav = () => setNav(false);

    const handleSectionNavigation = (e, href) => {
        if (!href.includes('#')) return;

        e.preventDefault();

        const targetId = href.split('#')[1];

        if (pathname !== '/') {
            window.location.href = href;
            return;
        }

        const element = document.getElementById(targetId);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            window.history.replaceState(null, '', `/#${targetId}`);
        }

        closeNav();
    };

    const isActive = useCallback(
        (link) => {
            if (link === '/') return pathname === '/';
            if (link.includes('#')) return pathname === '/';
            return pathname.startsWith(link);
        },
        [pathname]
    );

    const mobileMenuVariants = {
        hidden: {
            opacity: 0,
            y: -20,
            transition: { duration: 0.2 },
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: 'easeOut' },
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: { duration: 0.2, ease: 'easeIn' },
        },
    };

    return (
        <>
            <div className="hidden 4xl:block h-[20px] w-full"></div>

            <header
                className={`z-[500] w-full transition-shadow duration-300 ${
                    isSticky
                        ? 'sticky top-0 bg-white shadow-md'
                        : 'relative bg-transparent'
                }`}
            >
                <div className="relative">
                    <div className="absolute inset-0 4xl:rounded-t-[28px] 4xl:mx-[20px] z-[-1] bg-[#FFFFFF]"></div>
                    <div className="container mx-auto">
                        <div className="flex flex-col gap-[15px]">
                            <div className="flex items-center justify-between py-[16px]">
                                <div className="flex items-center gap-[48px]">
                                    <Link href="/" onClick={closeNav}>
                                        <div className="max-w-[185px]">
                                            <Image
                                                src={logoLight}
                                                alt="Logo EMS House"
                                                priority
                                            />
                                        </div>
                                    </Link>
                                    <nav className="hidden lg:flex items-center gap-[24px] xl:gap-[40px]">
                                        {links.map((link, index) => (
                                            <Link
                                                href={link.link}
                                                key={index}
                                                onClick={(e) =>
                                                    handleSectionNavigation(
                                                        e,
                                                        link.link
                                                    )
                                                }
                                            >
                                                <p
                                                    className={`${
                                                        isActive(link.link)
                                                            ? 'text-[#262626] font-medium'
                                                            : 'text-[#262626D9] font-medium'
                                                    } text-[clamp(13px,1.5vw,15px)] hover:opacity-50 grotesk font-medium cursor-pointer transition-opacity duration-200`}
                                                >
                                                    {link.name}
                                                </p>
                                            </Link>
                                        ))}
                                    </nav>
                                </div>

                                <div className="hidden lg:flex items-center gap-[10px]">
                                    <Link
                                        href="/#kontakt"
                                        onClick={(e) =>
                                            handleSectionNavigation(
                                                e,
                                                '/#kontakt'
                                            )
                                        }
                                    >
                                        <CustomButton className="px-[26px] py-[11.5px] rounded-[4px]">
                                            <span className="text-[#262626D9] text-[clamp(13px,2vw,15px)] font-medium grotesk leading-normal tracking-[0.225px]">
                                                Skontaktuj się
                                            </span>
                                        </CustomButton>
                                    </Link>
                                    <Link
                                        href="https://calendly.com/slawasc/30min"
                                        target="_blank"
                                    >
                                        <CustomButton className="px-[26px] py-[11.5px] bg-[#279EFF] rounded-[4px]">
                                            <span className="text-[#FFFFFF] text-[clamp(13px,2vw,15px)] font-medium grotesk leading-normal tracking-[0.225px]">
                                                Umów rozmowę
                                            </span>
                                        </CustomButton>
                                    </Link>
                                </div>

                                <div
                                    className="lg:hidden cursor-pointer p-2"
                                    onClick={handleNav}
                                >
                                    <MdMenu size={30} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {nav && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={mobileMenuVariants}
                        className="fixed left-0 top-0 z-[600] w-full h-screen bg-[#FFFFFF] lg:hidden overflow-y-auto"
                    >
                        <div className="container mx-auto">
                            <div className="flex items-center justify-between py-[30px]">
                                <Link href="/" onClick={closeNav}>
                                    <div className="max-w-[185px]">
                                        <Image
                                            src={logoLight}
                                            alt="Logo EMS House"
                                            priority
                                        />
                                    </div>
                                </Link>

                                <div
                                    className="lg:hidden cursor-pointer p-2"
                                    onClick={closeNav}
                                >
                                    <MdClose size={30} color="#000" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-[32px] pt-[20px] pb-[50px]">
                                <div className="flex flex-col gap-[20px]">
                                    {links.map((link, index) => (
                                        <Link
                                            href={link.link}
                                            key={index}
                                            onClick={(e) =>
                                                handleSectionNavigation(
                                                    e,
                                                    link.link
                                                )
                                            }
                                        >
                                            <p
                                                className={`${
                                                    isActive(link.link)
                                                        ? 'text-[#262626] font-medium'
                                                        : 'text-[#262626D9] font-medium'
                                                } text-[clamp(13px,1.5vw,15px)] hover:opacity-50 grotesk font-medium cursor-pointer transition-opacity duration-200`}
                                            >
                                                {link.name}
                                            </p>
                                        </Link>
                                    ))}
                                </div>

                                <div className="flex flex-col gap-[10px]">
                                    <Link
                                        href="/#kontakt"
                                        onClick={(e) =>
                                            handleSectionNavigation(
                                                e,
                                                '/#kontakt'
                                            )
                                        }
                                    >
                                        <CustomButton className="w-full px-[26px] py-[11.5px] rounded-[4px]">
                                            <span className="text-[#262626D9] text-[clamp(13px,2vw,15px)] font-medium grotesk leading-normal tracking-[0.225px]">
                                                Skontaktuj się
                                            </span>
                                        </CustomButton>
                                    </Link>
                                    <Link
                                        href="https://calendly.com/slawasc/30min"
                                        target="_blank"
                                        onClick={closeNav}
                                    >
                                        <CustomButton className="w-full px-[26px] py-[11.5px] bg-[#279EFF] rounded-[4px]">
                                            <span className="text-[#FFFFFF] text-[clamp(13px,2vw,15px)] font-medium grotesk leading-normal tracking-[0.225px]">
                                                Umów rozmowę
                                            </span>
                                        </CustomButton>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
