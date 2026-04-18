'use client';

import envcodeLogo from '@/assets/common/envcodeLogo.svg';
import logo from '@/assets/common/emsLogoLight.svg';
import Image from 'next/image';
import Link from 'next/link';

const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Bottom = () => {
    return (
        <footer className="flex flex-col gap-[32px] md:gap-[48px] xl:gap-[72px] mx-auto">
            <div className="sm:border-r sm:border-l sm:border-[#FFFFFF1A]">
                <div className="sm:px-[15px] md:px-[30px] lg:px-[45px] xl:px-[75px] 2xl:px-[90px] 3xl:px-[117px]">
                    <div className="w-full flex flex-col xl:flex-row xl:items-center justify-between gap-[20px]">
                        <div className="max-w-[355px] w-full">
                            <div className="flex flex-col gap-[20px] md:gap-[32px]">
                                <Link href="/">
                                    <Image
                                        src={logo}
                                        alt="EMS House - Inteligentny System Zarządzania Energią"
                                    />
                                </Link>
                                <p className="text-[#FFFFFF80] text-[clamp(14px,2vw,16px)] font-normal grotesk leading-[28px] md:leading-[30px] tracking-[0.32px] uppercase">
                                    Autorski system zarządzania energią PV.
                                    Monitoring, automatyzacja i oszczędności.
                                    Zgodny z Mój Prąd, dane na polskich
                                    serwerach
                                </p>
                            </div>
                        </div>
                        <div className="flex-1 justify-between flex-wrap flex xl:justify-end gap-[34px] sm:gap-[50px] md:gap-[68px] lg:gap-[75px] xl:gap-[90px] 2xl:gap-[136px]">
                            <nav aria-label="Nawigacja firmowa">
                                <div className="flex flex-col gap-[24px]">
                                    <p className="text-[#FFFFFFA6] text-[clamp(14px,2vw,16px)] grotesk font-normal leading-normal tracking-[0.32px]">
                                        <span
                                            className="text-[#FFFFFF40] grotesk font-normal"
                                            aria-hidden="true"
                                        >
                                            {'//'}
                                        </span>{' '}
                                        Ważne linki
                                    </p>
                                    <ul className="flex flex-col gap-[14px]">
                                        <li>
                                            <button
                                                onClick={() =>
                                                    scrollToSection('oferta')
                                                }
                                                className="cursor-pointer text-[#FFFFFF80] text-[clamp(13px,2vw,15px)] font-normal leading-normal tracking-[0.15px] transition-colors duration-200 hover:text-[#FFFFFFCC]"
                                            >
                                                Nasza oferta
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() =>
                                                    scrollToSection(
                                                        'dla-kogo-ems'
                                                    )
                                                }
                                                className="cursor-pointer text-[#FFFFFF80] text-[clamp(13px,2vw,15px)] font-normal leading-normal tracking-[0.15px] transition-colors duration-200 hover:text-[#FFFFFFCC]"
                                            >
                                                Dla kogo EMS?
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() =>
                                                    scrollToSection('klienci')
                                                }
                                                className="cursor-pointer text-[#FFFFFF80] text-[clamp(13px,2vw,15px)] font-normal leading-normal tracking-[0.15px] transition-colors duration-200 hover:text-[#FFFFFFCC]"
                                            >
                                                Opinie od klientów
                                            </button>
                                        </li>
                                        <li>
                                            <Link
                                                href="/dokumentacja"
                                                className="text-[#FFFFFF80] text-[clamp(13px,2vw,15px)] font-normal leading-normal tracking-[0.15px] transition-colors duration-200 hover:text-[#FFFFFFCC]"
                                            >
                                                Dokumentacja
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>

                            <div className="flex flex-col gap-[24px]">
                                <p className="text-[#FFFFFFA6] text-[clamp(14px,2vw,16px)] grotesk font-normal leading-normal tracking-[0.32px]">
                                    <span
                                        className="text-[#FFFFFF40] grotesk font-normal"
                                        aria-hidden="true"
                                    >
                                        {'//'}
                                    </span>{' '}
                                    KONTAKT
                                </p>
                                <address className="not-italic flex flex-col gap-[14px]">
                                    <a
                                        href="tel:+481669800222"
                                        className="text-[#FFFFFF80] text-[clamp(13px,2vw,15px)] font-normal leading-normal tracking-[0.15px] transition-colors duration-200 hover:text-[#FFFFFFCC]"
                                    >
                                        +48 669 800 222
                                    </a>

                                    <a
                                        href="mailto:biuro@ems.house"
                                        className="text-[#FFFFFF80] text-[clamp(13px,2vw,15px)] font-normal leading-normal tracking-[0.15px] transition-colors duration-200 hover:text-[#FFFFFFCC]"
                                    >
                                        biuro@ems.house
                                    </a>

                                    <a
                                        href="https://calendly.com/slawasc/30min"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#FFFFFF80] text-[clamp(13px,2vw,15px)] font-normal leading-normal tracking-[0.15px] transition-colors duration-200 hover:text-[#FFFFFFCC]"
                                    >
                                        Umów rozmowę
                                    </a>
                                </address>
                            </div>

                            <nav aria-label="firma">
                                <div className="flex flex-col gap-[24px]">
                                    <p className="text-[#FFFFFFA6] text-[clamp(14px,2vw,16px)] grotesk font-normal leading-normal tracking-[0.32px]">
                                        <span
                                            className="text-[#FFFFFF40] grotesk font-normal"
                                            aria-hidden="true"
                                        >
                                            {'//'}
                                        </span>{' '}
                                        FIRMA
                                    </p>
                                    <ul className="flex flex-col gap-[14px]">
                                        <li>
                                            <p className="text-[#FFFFFF80] text-[clamp(13px,2vw,15px)] font-normal leading-normal tracking-[0.15px]">
                                                EMS HOUSE sp. z o. o.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-[#FFFFFF80] text-[clamp(13px,2vw,15px)] font-normal leading-normal tracking-[0.15px]">
                                                NIP: 9562392607
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-[#FFFFFF80] text-[clamp(13px,2vw,15px)] font-normal leading-normal tracking-[0.15px]">
                                                REGON: 528405478
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-[#FFFFFF80] text-[clamp(13px,2vw,15px)] font-normal leading-normal tracking-[0.15px]">
                                                KRS: 0001101236
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sm:px-[15px] md:px-[30px] lg:px-[45px] xl:px-[75px] 2xl:px-[90px] 3xl:px-[117px]">
                <div className="border-t border-[#FFFFFF0F] pt-[32px] flex flex-col 2xl:flex-row 2xl:items-center justify-between gap-[16px]">
                    <div className="flex items-center gap-[16px] xl:gap-[32px] flex-wrap xl:flex-nowrap justify-between">
                        <p className="text-[#FFFFFF80] text-[clamp(12px,2vw,14px)] font-normal leading-normal tracking-[0.14px]">
                            © 2026 EMS HOUSE. Wszelkie prawa zastrzeżone.
                        </p>
                        <div className="hidden 2xl:block">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="6"
                                viewBox="0 0 6 6"
                                fill="none"
                            >
                                <circle
                                    cx="3"
                                    cy="3"
                                    r="3"
                                    fill="white"
                                    fillOpacity="0.25"
                                />
                            </svg>
                        </div>
                        <div className="flex items-center gap-[26px] flex-wrap xl:flex-nowrap">
                            <a
                                href="/Polityka-prywatnosci.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#FFFFFF80] text-[clamp(12px,2vw,14px)] font-normal leading-[24px] tracking-[0.14px] underline decoration-solid"
                            >
                                Polityka Prywatności
                            </a>
                            <a
                                href="/Polityka-wsparcia.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#FFFFFF80] text-[clamp(12px,2vw,14px)] font-normal leading-[24px] tracking-[0.14px] underline decoration-solid"
                            >
                                Polityka Wsparcia
                            </a>
                            <a
                                href="/Polityka-ujawniania-podatnosci.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#FFFFFF80] text-[clamp(12px,2vw,14px)] font-normal leading-[24px] tracking-[0.14px] underline decoration-solid"
                            >
                                Polityka Ujawniania Podatności
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-[20px]">
                        <p className="text-[#FFFFFF59] text-[clamp(12px,2vw,14px)] grotesk font-normal leading-normal tracking-[0.14px]">
                            Powered by:
                        </p>

                        <a
                            href="https://envcode.pl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-opacity duration-200 hover:opacity-80"
                        >
                            <Image
                                src={envcodeLogo}
                                alt="Envcode - wykonawca strony"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Bottom;