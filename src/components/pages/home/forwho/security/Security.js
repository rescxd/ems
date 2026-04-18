import Image from 'next/image';
import aboutImage from '@/assets/pages/home/forWhom/forWhoImage.png';

const Security = () => {
    const data = [
        'Ograniczanie niekontrolowanego eksportu energii do sieci',
        'Przetwarzanie danych wyłącznie na serwerach w Polsce',
        'Działanie zgodne z dyrektywą NIS2 i rozporządzeniem CRA',
        'Brak przesyłania danych poza Europejski Obszar Gospodarczy',
        'Gotowość na usługi elastyczności dla operatorów sieci (OSD)',
        'Lokalna komunikacja z falownikiem przez MODBUS (bez chmury producenta)',
    ];
    return (
        <section className="flex flex-col xl:flex-row xl:items-center gap-y-[32px] gap-x-[40px] md:gap-x-[60px] xl:gap-x-[90px] 2xl:gap-x-[110px] 3xl:gap-[132px]">
            <div className="flex flex-col justify-center gap-[22px] max-w-[585px] w-full">
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
                        INFORMACJE PRAWNE
                    </p>
                    <h2 className="about-gradient text-[clamp(24px,5vw,46px)] grotesk font-medium leading-[130%] tracking-[-1.38px]">
                        Bezpieczeństwo danych i zgodność z wymogami
                    </h2>
                </header>
                <div className="flex flex-col gap-[22px]">
                    <p className="text-[#262626CC] text-[clamp(15px,2vw,17px)] font-normal leading-[28px] xl:leading-[34px] tracking-[0.17px]">
                        System EMS HOUSE spełnia wymagania programu Mój Prąd
                        oraz działa zgodnie z europejskimi standardami
                        cyberbezpieczeństwa dla urządzeń IoT i systemów
                        energetycznych.
                    </p>
                </div>
            </div>
            <div className="flex-1 grid grid-cols-1 2xl:grid-cols-2 gap-[5px]">
                {data?.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-[20px] px-[28px] py-[28px] bg-[#26262608] "
                    >
                        <div className="min-w-[56px] min-h-[56px] w-[56px] h-[56px] border border-[#2626260D] flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="8"
                                height="8"
                                viewBox="0 0 8 8"
                                fill="none"
                            >
                                <circle cx="4" cy="4" r="4" fill="#262626" />
                            </svg>
                        </div>
                        <div className="">
                            <p className="text-[#262626] text-[clamp(14px,2vw,16px)] font-normal leading-[26px] tracking-[-0.16px]">{item}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
  
}

export default Security