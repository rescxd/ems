'use client';

import { Advantages } from '@/components/pages/home/about/bottom/Advantages';
import CustomButton from '@/components/common/buttons/CustomButton';
import { motion } from 'framer-motion';

const Bottom = () => {
    const advantages = Advantages;
    return (
        <div className="flex flex-col gap-[32px] 2xl:gap-[40px]">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-[20px]">
                <div className="flex flex-col gap-[6px]">
                    <div className="">
                        <p className="text-[#262626A6] text-[clamp(14px,2vw,16px)] font-normal grotesk leading-normal tracking-[0.32px] uppercase">
                            <span className="text-[#26262640] font-normal grotesk">
                                //
                            </span>{' '}
                            Co oferujemy
                        </p>
                    </div>
                    <div className="">
                        <h2 className="about-gradient text-[clamp(24px,5vw,46px)] grotesk font-medium leading-normal tracking-[-1.38px]">
                            Co wyróżnia system EMS?
                        </h2>
                    </div>
                </div>
                <div className="">
                    <CustomButton
                        className="lg:max-w-[320px] lg:min-w-[320px] w-full px-[32px] py-[22px] bg-[#262626]"
                        onClick={() => window.open('https://calendly.com/slawasc/30min', '_blank')}
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
                            >
                                <path
                                    d="M14 0.147095C14.4444 2.36932 16.4667 6.81378 21 6.81378"
                                    stroke="white"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M14 13.4805C14.4444 11.2582 16.4667 6.81378 21 6.81378"
                                    stroke="white"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M20.6667 6.81384L2.33128e-06 6.81384"
                                    stroke="white"
                                    strokeWidth="1.5"
                                />
                            </svg>
                        </div>
                    </CustomButton>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[5px]">
                {advantages?.map((advantage, index) => (
                    <motion.div
                        className="px-[28px] py-[28px] bg-[#26262608] flex items-center gap-[20px]"
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.1,
                            ease: [0.25, 0.1, 0.25, 1],
                        }}
                    >
                        <div className="min-w-[56px] min-h-[56px] border border-[#2626260D] flex items-center justify-center">
                            {advantage?.svg}
                        </div>
                        <div className="">
                            <p className="text-[#262626] text-[clamp(14px,2vw,16px)] font-normal leading-[26px] tracking-[0.16px]">
                                {advantage?.label}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Bottom;
