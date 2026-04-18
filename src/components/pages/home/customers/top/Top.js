'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { CustomersList } from '@/components/pages/home/customers/top/CustomersList';

const Top = () => {
    const clients = CustomersList;
    const [activeIndex, setActiveIndex] = useState(0);
    const activeClient = clients[activeIndex];

    return (
        <div className="flex flex-col gap-[32px] md:gap-[40px] 2xl:gap-[56px]">
            <div className="flex flex-col items-center justify-center gap-[8px]">
                <header className="flex flex-col gap-[16px]">
                    <p
                        className="text-[#262626A6] text-[clamp(14px,2vw,16px)] text-center font-normal grotesk leading-normal tracking-[0.32px] uppercase"
                        aria-label="Co mówią o nas klienci"
                    >
                        <span
                            className="text-[#26262640] font-normal grotesk"
                            aria-hidden="true"
                        >
                            //
                        </span>{' '}
                        CO O NAS MÓWIĄ?
                    </p>
                    <h2 className="about-gradient text-[clamp(24px,5vw,46px)] text-center grotesk font-medium leading-[130%] tracking-[-1.38px]">
                        Nasi Zadowoleni Klienci
                    </h2>
                </header>
                <div className="flex flex-col gap-[22px]">
                    <p className="text-[#262626CC] text-[clamp(15px,2vw,17px)] text-center font-normal leading-[28px] xl:leading-[34px] tracking-[0.17px]">
                        Nie jesteśmy dla każdego. Tylko dla tych, którzy nie
                        chcą przepłacać!
                    </p>
                </div>
            </div>
            <div className="max-w-[1360px] w-full mx-auto flex flex-col">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="flex flex-col xl:flex-row xl:items-center gap-[30px] xl:gap-[48px] border border-[#EAEAEA]"
                    >
                        <div className="xl:min-w-[565px] xl:max-w-[565px] w-full">
                            <Image
                                src={activeClient.image}
                                alt={`Zdjęcie klienta ${activeClient.name}`}
                                loading="lazy"
                            />
                        </div>
                        <div className="flex-1 flex flex-col justify-center gap-[24px] pl-[12px] sm:pl-[20px] pb-[32px] xl:pb-0 xl:pl-0 pr-[12px] sm:pr-[20px] xl:pr-[48px]">
                            <div className="flex flex-col gap-[4px]">
                                <h3 className="text-[#262626] text-[clamp(14px,2vw,17px)] font-medium grotesk leading-normal tracking-[-0.17px]">
                                    {activeClient.name}
                                </h3>
                                <p className="text-[#26262680] text-[clamp(12px,2vw,14px)] font-medium leading-normal tracking-normal">
                                    Nasz klient od {activeClient.date}
                                </p>
                            </div>
                            <div className="w-full h-[1px] bg-[#2626261A]"></div>
                            <p className="text-[#262626CC] text-[clamp(14px,2vw,16px)] font-normal leading-[28px] xl:leading-[32px] tracking-[0.16px]">
                                {activeClient.review}
                            </p>
                            <div className="w-full h-[1px] bg-[#2626261A]"></div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[20px] mt-[8px]">
                                {activeClient.stats.map((stat, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-col gap-[16px]"
                                    >
                                        <p className="text-[#262626A6] text-[clamp(13px,2vw,15px)] font-normal grotesk leading-normal tracking-[0.32px] uppercase">
                                            <span
                                                className="text-[#26262640]"
                                                aria-hidden="true"
                                            >
                                                //{' '}
                                            </span>
                                            {stat.label}
                                        </p>
                                        <p className="text-[#262626A6] text-[clamp(12px,2vw,14px)] font-normal leading-[145%] tracking-[0.15px]">
                                            {stat.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
                <div className="grid grid-cols-3 md:grid-cols-6 border border-[#EAEAEA]">
                    {clients?.slice?.(0,6)?.map((client, index) => (
                        <button
                            key={index}
                            className={`xl:min-h-[98px] xl:max-h-[98px] h-full py-[18px] px-[12px] text-center text-[clamp(13px,2vw,15px)] grotesk font-medium leading-normal tracking-normal transition-colors duration-200 cursor-pointer ${
                                index !== clients.length - 1
                                    ? 'border-r border-[#EAEAEA]'
                                    : ''
                            } ${
                                activeIndex === index
                                    ? 'text-[#1E1F25] bg-[#FFFFFF0D]'
                                    : 'text-[#26262680] hover:text-[#1E1F25] bg-[#2626260D]'
                            }`}
                            onClick={() => setActiveIndex(index)}
                        >
                            {client.shortName}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Top;
