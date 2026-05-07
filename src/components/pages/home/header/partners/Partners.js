'use client';

import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import partner1 from '@/assets/pages/home/header/partner1.svg';
import partner2 from '@/assets/pages/home/header/partner2.svg';
import partner3 from '@/assets/pages/home/header/partner3.svg';
import partner4 from '@/assets/pages/home/header/partner4.svg';

const partners = [partner1, partner2, partner3, partner4];

const Partners = () => {
    return (
        <div className="flex flex-col gap-[32px]">
            <div>
                <p className="text-[#262626A6] text-[clamp(14px,2vw,16px)] font-normal grotesk leading-normal tracking-[0.32px] uppercase">
                    <span
                        className="text-[#26262640] font-normal grotesk"
                        aria-hidden="true"
                    >
                        //
                    </span>{' '}
                    Integrujemy się z:
                </p>
            </div>
            <Marquee
                speed={40}
                gradient={true}
                gradientColor="white"
                gradientWidth={113}
                autoFill={true}
            >
                {partners.map((partner, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center mx-[40px]"
                        style={{ width: '113px', height: '52px' }}
                    >
                        <Image
                            src={partner}
                            alt=""
                            className="w-full h-full object-contain opacity-50"
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default Partners;
