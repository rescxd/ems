import solutionsImage from '@/assets/pages/home/solutions/solutionsImage.png';
import Image from 'next/image';

const Top = () => {
    const BenefitItems = [
        'Wybór najtańszych godzin ładowania magazynu',
        'Automatyczna sprzedaż przy najwyższych cenach',
        'Dynamiczne zarządzanie poziomem SOC',
        'Adaptacja strategii do warunków pogodowych',
        'Ochrona i wydłużenie żywotności baterii',
        'Ograniczanie eksportu w godzinach nadprodukcji',
    ];
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[40px] gap-[60px] 3xl:gap-[80px]">
            <div className="">
                <Image src={solutionsImage} alt={''} className="" />
            </div>
            <div className="flex flex-col gap-[44px]">
                <div className="flex flex-col justify-center gap-[18px]">
                    <div className="">
                        <p className="text-[#FFFFFFA6] text-[clamp(14px,2vw,16px)] font-normal grotesk leading-normal tracking-[0.32px] uppercase">
                            <span className="text-[#FFFFFF40] font-normal grotesk">
                                //
                            </span>{' '}
                            custom code
                        </p>
                    </div>
                    <div className="">
                        <h2 className="solutions-text-gradient text-[clamp(24px,5vw,46px)] grotesk font-medium leading-[120%] tracking-[-1.38px]">
                            Autorskie Algorytmy Zarządzania Energią w systemie
                            EMS
                        </h2>
                    </div>
                    <div className="">
                        <p className="text-[#FFFFFFCC] text-[clamp(15px,2vw,17px)] font-normal leading-[28px] xl:leading-[34px] tracking-[0.17px]">
                            EMS analizuje produkcję PV, zużycie i ceny energii,
                            ograniczając eksport do sieci i planując optymalną
                            pracę na 24h.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-[22px]">
                    {BenefitItems?.map((benefit, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-[15px]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 28 28"
                                fill="none"
                            >
                                <circle
                                    cx="14"
                                    cy="14"
                                    r="14"
                                    fill="white"
                                    fillOpacity="0.1"
                                />
                                <path
                                    d="M8.16602 14.4374C8.84545 14.5695 10.2424 15.3582 11.4228 16.4688C11.9223 16.9388 12.7558 16.9033 13.1241 16.3247C14.5945 14.0147 16.4418 11.0632 18.666 9.33325"
                                    stroke="white"
                                    strokeWidth="1.5"
                                />
                            </svg>
                            <p className="text-[#FFFFFFCC] text-[clamp(14px,2vw,17px)] font-normal leading-normal tracking-[0.17px]">
                                {benefit}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Top;
