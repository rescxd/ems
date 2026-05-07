import Image from 'next/image';
import aboutImage from '@/assets/pages/home/forWhom/forWhoImage.png';

const Bottom = () => {
    return (
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-[40px] md:gap-[60px] 3xl:gap-[80px]">
            <div>
                <Image
                    src={aboutImage}
                    alt="Konsultant techniczny podczas wideokonferencji z klientem"
                    loading="lazy"
                />
            </div>
            <div className="flex flex-col justify-center gap-[22px]">
                <header className="flex flex-col gap-[16px] md:gap-[24px]">
                    <p
                        className="text-[#262626A6] text-[clamp(14px,2vw,16px)] font-normal grotesk leading-normal tracking-[0.32px] uppercase"
                        aria-label="Kompletne zero ryzyka"
                    >
                        <span
                            className="text-[#26262640] font-normal grotesk"
                            aria-hidden="true"
                        >
                            //
                        </span>{' '}
                        kompletne 0 ryzyka!
                    </p>
                    <h2 className="about-gradient text-[clamp(24px,5vw,46px)] grotesk font-medium leading-[130%] tracking-[-1.38px]">
                        Wdrożenie bez ryzyka i pełne wsparcie techniczne
                    </h2>
                </header>
                <div className="flex flex-col gap-[22px]">
                    <p className="text-[#262626CC] text-[clamp(15px,2vw,17px)] font-normal leading-[28px] xl:leading-[34px] tracking-[0.17px]">
                        Dostarczamy kompletne, skonfigurowane środowisko gotowe
                        do pracy. Urządzenie EMS HOUSE jest zintegrowane z
                        falownikiem i magazynem energii od pierwszego dnia. Nie
                        musisz budować infrastruktury od podstaw – system
                        spełnia wymogi programu Mój Prąd bez dodatkowych
                        formalności.
                    </p>
                    <p className="text-[#262626CC] text-[clamp(15px,2vw,17px)] font-normal leading-[28px] xl:leading-[34px] tracking-[0.17px]">
                        Zapewniamy ciągłe wsparcie techniczne, regularne
                        aktualizacje oprogramowania oraz możliwość rozbudowy
                        funkcjonalności wraz z rozwojem Twojej instalacji.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Bottom;
