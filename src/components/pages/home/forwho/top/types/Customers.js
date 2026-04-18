import installerImage from '@/assets/pages/home/forWhom/type3Image.png';
import Image from 'next/image';

const Customers = () => {
    const BenefitItems = [
        'Automatyczna optymalizacja bez ręcznej obsługi',
        'Przejrzysty podgląd produkcji, zużycia i stanu baterii w jednym miejscu a Twoje dane pozostają w Polsce.',
    ];
    return (
        <section className="types-gradient py-[24px] px-[30px] sm:px-[45px] md:px-[55px] lg:px-[75px] xl:px-[90px] 2xl:px-[110px] 3xl:px-[130px]">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-[40px] md:gap-[60px] 2xl:gap-[80px]">
                <div className="flex flex-col justify-center gap-[20px]">
                    <h3 className="text-[#14171CE5] text-[clamp(18px,4vw,26px)] grotesk font-bold leading-normal tracking-[0.26px]">
                        Klienci indywidualni
                    </h3>
                    <p className="text-[#262626CC] text-[clamp(14px,2vw,17px)] font-normal leading-[28px] xl:leading-[34px] tracking-[0.17px]">
                        Właściciele domów z fotowoltaiką zyskują system
                        kwalifikujący się do dotacji Mój Prąd. EMS automatycznie
                        ogranicza eksport do sieci, zwiększa autokonsumpcję, a
                        Twoje dane pozostają bezpiecznie na polskich serwerach.
                    </p>
                    <ul className="mt-[15px] flex flex-col gap-[20px]">
                        {BenefitItems?.map((benefit, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-[15px]"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="26"
                                    height="26"
                                    viewBox="0 0 26 26"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <circle
                                        cx="13"
                                        cy="13"
                                        r="13"
                                        fill="#279EFF"
                                        fillOpacity="0.1"
                                    />
                                    <path
                                        d="M7.58398 13.4056C8.20091 13.5256 9.45489 14.2284 10.535 15.2238C11.0393 15.6885 11.8733 15.6526 12.2414 15.074C13.598 12.9419 15.2955 10.2515 17.334 8.66602"
                                        stroke="#00579E"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                                <p className="text-[#262626CC] text-[clamp(13px,2vw,15px)] font-medium leading-normal tracking-[0.15px]">
                                    {benefit}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-end">
                    <Image
                        src={installerImage}
                        alt="Instalator fotowoltaiki na dachu budynku przy panelach słonecznych"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default Customers;
