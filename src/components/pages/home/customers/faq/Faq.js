'use client';

import { useState } from 'react';
import Script from 'next/script';
import { Questions } from '@/components/pages/home/customers/faq/Questions';
import Card from '@/components/pages/home/customers/faq/card/Card';
import CustomButton from '@/components/common/buttons/CustomButton';

const Faq = () => {
    const questionsList = Questions;
    const [openIndex, setOpenIndex] = useState(null);
    const [showAll, setShowAll] = useState(false);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const visibleQuestions = showAll
        ? questionsList
        : questionsList?.slice(0, 5);

    const midpoint = Math.ceil(questionsList?.length / 2);

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: questionsList?.map((item) => ({
            '@type': 'Question',
            name: item?.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item?.answer,
            },
        })),
    };

    return (
        <section id="faq" className="flex flex-col gap-[32px] 2xl:gap-[40px]">
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-[20px]">
                <header className="flex flex-col gap-[6px]">
                    <p
                        className="text-[#262626A6] text-[clamp(14px,2vw,16px)] font-normal grotesk leading-normal tracking-[0.32px] uppercase"
                        aria-label="Sprawdź nasze FAQ"
                    >
                        <span
                            className="text-[#26262640] font-normal grotesk"
                            aria-hidden="true"
                        >
                            //
                        </span>{' '}
                        sprawdź nasze FAQ
                    </p>
                    <h2 className="about-gradient text-[clamp(24px,5vw,46px)] grotesk font-medium leading-normal tracking-[-1.38px]">
                        Najczęściej zadawane pytania
                    </h2>
                </header>
                <div className="max-w-[530px]">
                    <p className="text-[#262626CC] text-[clamp(15px,2vw,17px)] font-normal leading-[28px] xl:leading-[34px] tracking-[0.17px]">
                        Masz wciąż jakieś wątpliwości? Sprawdź poniższe FAQ!
                        Jeśli wciąż nie znajdziesz odpowiedzi -{' '}
                        <span
                            className="cursor-pointer underline decoration-solid font-normal"
                            role="link"
                            tabIndex={0}
                            onClick={() =>
                                document
                                    .getElementById('kontakt')
                                    ?.scrollIntoView({ behavior: 'smooth' })
                            }
                            onKeyDown={(e) => {
                                if (e.key === 'Enter')
                                    document
                                        .getElementById('kontakt')
                                        ?.scrollIntoView({
                                            behavior: 'smooth',
                                        });
                            }}
                        >
                            Skontaktuj się z nami
                        </span>
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-[5px] lg:hidden">
                {visibleQuestions?.map((question, index) => (
                    <Card
                        key={index}
                        item={question}
                        index={index}
                        isOpen={openIndex === index}
                        onToggle={() => handleToggle(index)}
                    />
                ))}
                {!showAll && questionsList?.length > 5 && (
                    <div className="mt-[16px]">
                        <CustomButton
                            className="w-full px-[32px] py-[16px] bg-[#262626]"
                            onClick={() => setShowAll(true)}
                        >
                            <div className="flex items-center justify-between gap-[16px]">
                                <span className="text-[#FFFFFF] text-[clamp(14px,2vw,16px)] font-medium grotesk leading-normal tracking-[0.16px]">
                                    Pokaż więcej pytań
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="21"
                                    height="14"
                                    viewBox="0 0 21 14"
                                    fill="none"
                                    aria-hidden="true"
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
                )}
            </div>

            <div className="hidden lg:grid lg:grid-cols-2 gap-[5px]">
                <div className="flex flex-col gap-[5px]">
                    {questionsList
                        ?.slice(0, midpoint)
                        ?.map((question, index) => (
                            <Card
                                key={index}
                                item={question}
                                index={index}
                                isOpen={openIndex === index}
                                onToggle={() => handleToggle(index)}
                            />
                        ))}
                </div>
                <div className="flex flex-col gap-[5px]">
                    {questionsList?.slice(midpoint)?.map((question, index) => {
                        const globalIndex = midpoint + index;
                        return (
                            <Card
                                key={globalIndex}
                                item={question}
                                index={globalIndex}
                                isOpen={openIndex === globalIndex}
                                onToggle={() => handleToggle(globalIndex)}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Faq;
