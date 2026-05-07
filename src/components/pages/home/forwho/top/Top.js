'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CustomButton from '@/components/common/buttons/CustomButton';
import Wholesale from '@/components/pages/home/forwho/top/types/Wholesale';
import Installers from '@/components/pages/home/forwho/top/types/Installers';
import Customers from '@/components/pages/home/forwho/top/types/Customers';

const tabs = [
    { label: 'Instalatorzy PV', component: <Installers /> },
    { label: 'Hurtownie', component: <Wholesale /> },
    { label: 'Klienci indywidualni', component: <Customers /> },
];

const Top = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="flex flex-col gap-[32px] 2xl:gap-[40px]">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-[20px]">
                <div className="flex flex-col gap-[10px]">
                    <div className="">
                        <p className="text-[#262626A6] text-[clamp(14px,2vw,16px)] font-normal grotesk leading-normal tracking-[0.32px] uppercase">
                            <span className="text-[#26262640] font-normal grotesk">
                                //
                            </span>{' '}
                            Dowiedz się więcej
                        </p>
                    </div>
                    <div className="">
                        <h2 className="about-gradient text-[clamp(24px,5vw,46px)] grotesk font-medium leading-normal tracking-[-1.38px]">
                            Dla kogo jest system EMS?
                        </h2>
                    </div>
                    <div className="mt-[15px] p-[4px] w-fit bg-[#2626260D] flex items-center flex-wrap">
                        {tabs.map((tab, index) => (
                            <div key={tab.label}>
                                <CustomButton
                                    className={`px-[18px] py-[7.5px] ${activeIndex === index ? 'bg-[#FFFFFF]' : ''}`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <span className="text-[#262626] text-[clamp(14px,2vw,16px)] font-medium grotesk leading-normal tracking-normal">
                                        {tab.label}
                                    </span>
                                </CustomButton>
                            </div>
                        ))}
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
            <div className="relative overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        {tabs[activeIndex].component}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Top;
