'use client';

import headerImage from '@/assets/pages/home/header/headerImage.png';
import ownerImage from '@/assets/pages/home/header/owner.png';
import avatarImage from '@/assets/pages/home/header/avatar.png';
import Image from 'next/image';
import CustomButton from '@/components/common/buttons/CustomButton';
import Partners from '@/components/pages/home/header/partners/Partners';

const ContactCard = () => (
    <div className="absolute bottom-[40px] right-[40px] p-[22px] w-[330px] bg-[#FFFFFF] rounded-[12px] flex flex-col gap-[16px]">
        <div className="flex items-center gap-[18px]">
            <div>
                <Image src={avatarImage} alt="Zdjęcie konsultanta EMS House" />
            </div>
            <div className="flex flex-col gap-[2px]">
                <p className="text-[#262626] text-[clamp(15px,3vw,18px)] font-medium grotesk leading-normal tracking-[-0.36px]">
                    Bezpośredni kontakt
                </p>
                <p className="text-[#262626BF] text-[13px] font-normal leading-normal tracking-[0.13px]">
                    i uzyskaj odpowiedź już teraz
                </p>
            </div>
        </div>
        <a
            href="tel:+48699800222"
            className="block w-full px-[26px] py-[7px] border border-[#2626261A] rounded-[4px] transition-colors duration-200 hover:bg-[#F5F5F5]"
        >
            <p className="text-[#262626] text-[clamp(13px,2vw,14px)] text-center grotesk font-medium leading-normal tracking-[0.21px]">
                +48 699 800 222
            </p>
        </a>
        <span
            className="cursor-pointer"
            role="link"
            tabIndex={0}
            onClick={() =>
                document
                    .getElementById('kontakt')
                    ?.scrollIntoView({ behavior: 'smooth' })
            }
            onKeyDown={(e) => {
                if (e.key === 'Enter')
                    document
                        .getElementById('kontakt')
                        ?.scrollIntoView({ behavior: 'smooth' });
            }}
        >
            <p className="text-center text-[#262626A6] text-[clamp(13px,2vw,14px)] font-medium grotesk leading-normal tracking-[0.21px] transition-colors duration-200 hover:text-[#262626]">
                Formularz kontaktowy
            </p>
        </span>
    </div>
);

const Header = () => {
    return (
        <section className="relative">
            <div className="absolute top-0 left-0 right-0 bottom-0 h-full 4xl:rounded-b-[28px] 4xl:mx-[20px] z-[-1] bg-[#FFFFFF]"></div>
            <div className="relative max-w-[1880px] mx-auto">
                <div className="container mx-auto pt-[45px] md:pt-[55px] xl:pt-[65px] pb-[30px] md:pb-[45px] xl:pb-[70px] flex flex-col 2xl:flex-row items-center gap-[16px]">
                    <div className="max-w-full xl:max-w-[920px] flex flex-col gap-[50px] md:gap-[70px] xl:gap-[110px] 2xl:gap-[130px]">
                        <div className="flex flex-col gap-[32px] max-w-[820px]">
                            <div className="flex flex-col gap-[32px]">
                                <div className="w-fit p-[4px] border border-[#2626261A] rounded-[4px] flex items-center gap-[12px]">
                                    <div>
                                        <Image
                                            src={ownerImage}
                                            alt="Zdjęcie właściciela firmy EMS House"
                                        />
                                    </div>
                                    <p className="pr-[20px] text-[#262626D9] text-[clamp(13px,2vw,15px)] font-medium leading-[100%] tracking-normal">
                                        Umów rozmowę z właścicielem firmy już
                                        dziś!
                                    </p>
                                </div>
                                <div className="flex flex-col gap-[22px]">
                                    <h1 className="text-[#262626] text-[clamp(28px,5vw,62px)] grotesk font-medium leading-[120%] tracking-[-1.86px]">
                                        System zarządzania energią <br />
                                        <span className="text-[#262626D9] grotesk font-medium">
                                            i automatyką dla branży PV
                                        </span>
                                    </h1>
                                    <p className="text-[#262626CC] text-[clamp(15px,3vw,19px)] font-normal leading-[28px] md:leading-[34px] tracking-[0.19px]">
                                        Inteligentny system zarządzania energią
                                        zgodny z programem Mój Prąd. Ogranicza
                                        eksport do sieci, zwiększa
                                        autokonsumpcję i chroni Twoje dane na
                                        polskich serwerach.
                                    </p>
                                </div>
                            </div>
                            <nav
                                className="flex flex-col lg:flex-row lg:items-center gap-[16px]"
                                aria-label="Główne akcje"
                            >
                                <CustomButton
                                    className="w-full lg:w-[320px] px-[32px] py-[21px] border bg-[#262626]"
                                    onClick={() =>
                                        document
                                            .getElementById('kontakt')
                                            ?.scrollIntoView({
                                                behavior: 'smooth',
                                            })
                                    }
                                >
                                    <div className="flex items-center justify-between gap-[16px]">
                                        <span className="text-[#FFFFFF] text-[clamp(14px,2vw,16px)] font-medium grotesk leading-normal tracking-[0.16px]">
                                            Umów rozmowę
                                        </span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="21"
                                            height="14"
                                            viewBox="0 0 21 14"
                                            fill="none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M14 0.147095C14.4444 2.36932 16.4667 6.81378 21 6.81378"
                                                stroke="white"
                                                strokeWidth="1.5"
                                            />
                                            <path
                                                d="M14 13.4805C14.4444 11.2583 16.4667 6.81384 21 6.81384"
                                                stroke="white"
                                                strokeWidth="1.5"
                                            />
                                            <path
                                                d="M20.6667 6.81391L2.33129e-06 6.8139"
                                                stroke="white"
                                                strokeWidth="1.5"
                                            />
                                        </svg>
                                    </div>
                                </CustomButton>
                                <CustomButton
                                    onClick={() =>
                                        document
                                            .getElementById('oferta')
                                            ?.scrollIntoView({
                                                behavior: 'smooth',
                                            })
                                    }
                                    className="w-full lg:w-[320px] px-[32px] py-[21px] border bg-[#FFFFFF] border border-[#F2F2F2]"
                                >
                                    <div className="flex items-center justify-between gap-[16px]">
                                        <span className="text-[#262626] text-[clamp(14px,2vw,16px)] font-medium grotesk leading-normal tracking-[0.16px]">
                                            Co oferujemy?
                                        </span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="21"
                                            height="14"
                                            viewBox="0 0 21 14"
                                            fill="none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M14 0.147095C14.4444 2.36932 16.4667 6.81378 21 6.81378"
                                                stroke="#262626"
                                                strokeWidth="1.5"
                                            />
                                            <path
                                                d="M14 13.4805C14.4444 11.2583 16.4667 6.81384 21 6.81384"
                                                stroke="#262626"
                                                strokeWidth="1.5"
                                            />
                                            <path
                                                d="M20.6667 6.81391L2.33129e-06 6.8139"
                                                stroke="#262626"
                                                strokeWidth="1.5"
                                            />
                                        </svg>
                                    </div>
                                </CustomButton>
                            </nav>
                        </div>
                        <div className="overflow-hidden">
                            <Partners />
                        </div>
                    </div>
                    <div className="hidden 2xl:block 3xl:hidden relative">
                        <Image
                            src={headerImage}
                            alt="Dashboard systemu EMS House do zarządzania energią fotowoltaiczną"
                            loading="eager"
                        />
                        <ContactCard />
                    </div>
                </div>
                <div className="hidden 3xl:block absolute bottom-[20px] right-[20px]">
                    <Image
                        src={headerImage}
                        alt="Dashboard systemu EMS House do zarządzania energią fotowoltaiczną"
                        loading="eager"
                    />
                    <ContactCard />
                </div>
            </div>
        </section>
    );
};

export default Header;
