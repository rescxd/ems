'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ContactForm from '@/components/common/footer/form/components/ContactForm';

const tabs = [{ label: 'Formularz kontaktowy' }, { label: 'Umów rozmowę' }];

const CAL_URL = 'https://cal.com';

const Form = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleTabClick = (index) => {
        if (index === 1) {
            window.open(CAL_URL, '_blank');
            return;
        }
        setActiveIndex(index);
    };

    return (
        <section id="kontakt">
            <div className="">
                <div className="sm:px-[15px] md:px-[30px] lg:px-[45px] xl:px-[75px] 2xl:px-[90px] 3xl:px-[117px]">
                    <div className="flex flex-col gap-[16px] xl:flex-row xl:items-center justify-between xl:gap-[60px] 2xl:gap-[118px]">
                        <div className="xl:max-w-[596px] w-full flex flex-col gap-[32px] md:gap-[48px] lg:gap-[56px] xl:gap-[64px] 2xl:gap-[73px]">
                            <div className="">
                                <h2 className="text-[#FFFFFF] text-[clamp(32px,5vw,80px)] grotesk font-medium leading-[110%] tracking-[-2.4px]">
                                    Skontaktuj się <br /> z EMS.HOUSE
                                </h2>
                            </div>
                            <div className="flex flex-col gap-[11px]">
                                <div className="px-[32px] py-[21px] bg-[#FFFFFF0D]">
                                    <a
                                        href="tel:+48669800222"
                                        className="text-[#FFFFFF] text-[clamp(14px,2vw,16px)] font-medium leading-[26px] tracking-[0.16px]"
                                    >
                                        +48 669 800 222
                                    </a>
                                </div>
                                <div className="px-[32px] py-[21px] bg-[#FFFFFF0D]">
                                    <a
                                        href="mailto:biuro@ems.house"
                                        className="text-[#FFFFFF] text-[clamp(14px,2vw,16px)] font-medium leading-[26px] tracking-[0.16px]"
                                    >
                                        biuro@ems.house
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Form;
