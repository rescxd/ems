import aboutImage from '@/assets/pages/home/about/aboutImage.png';
import Image from 'next/image';

const Top = () => {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[40px] gap-[60px] 3xl:gap-[80px] overflow-hidden">
            <div className="relative">
                <div className="rounded-[16px] overflow-hidden max-h-[452px]">
                    <Image src={aboutImage} alt="" className="w-full h-full" />
                </div>

                <div className="hidden xl:block absolute top-[-50px] left-[-24%] bg-[#FFFFFF] w-[400px] h-[170px] rotate-[-45deg]"></div>

                <div className="absolute bottom-[14px] right-[14px] rounded-[8px] py-[5px] pl-[5px] pr-[24px] bg-[#FFFFFF] flex items-center gap-[12px]">
                    <div className="px-[12px] py-[5.5px] bg-[#279EFF] rounded-[4px]">
                        <span className="text-[#FFFFFF] text-[clamp(15px,2vw,17px)] grotesk font-bold leading-[100%] tracking-[0.255px]">
                            100%
                        </span>
                    </div>
                    <div className="">
                        <p className="text-[#262626] text-[clamp(14px,2vw,16px)] font-medium leading-normal tracking-[-0.48px]">
                            Zadowolonych klientów
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center gap-[22px]">
                <div className="flex flex-col gap-[16px] md:gap-[24px]">
                    <div className="">
                        <p className="text-[#262626A6] text-[clamp(14px,2vw,16px)] font-normal grotesk leading-normal tracking-[0.32px] uppercase">
                            <span className="text-[#26262640] font-normal grotesk">
                                //
                            </span>{' '}
                            Co oferujemy
                        </p>
                    </div>
                    <div className="">
                        <h2 className="about-gradient text-[clamp(24px,5vw,46px)] grotesk font-medium leading-[130%] tracking-[-1.38px]">
                            System zarządzania energią wraz z rozwiązaniem Smart
                            Home
                        </h2>
                    </div>
                </div>
                <div className="flex flex-col gap-[22px]">
                    <p className="text-[#262626CC] text-[clamp(15px,2vw,17px)] font-normal leading-[28px] xl:leading-[34px] tracking-[0.17px]">
                        Inteligentny system zarządzania energią zgodny z
                        programem Mój Prąd. Ogranicza eksport do sieci, zwiększa
                        autokonsumpcję i chroni Twoje dane na polskich
                        serwerach.
                    </p>
                    <p className="text-[#262626CC] text-[clamp(15px,2vw,17px)] font-normal leading-[28px] xl:leading-[34px] tracking-[0.17px]">
                        EMS stanowi centralny system Smart Home i zarządzania
                        energią, zgodny z wymogami programu Mój Prąd.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Top;
