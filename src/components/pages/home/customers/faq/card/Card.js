'use client';

import { motion, AnimatePresence } from 'framer-motion';

const Card = ({ item, isOpen, onToggle, index }) => {
    const questionId = `faq-question-${index}`;
    const answerId = `faq-answer-${index}`;

    return (
        <div
            className="px-[40px] py-[22px] bg-[#26262608] cursor-pointer"
            onClick={onToggle}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onToggle();
                }
            }}
            aria-expanded={isOpen}
            aria-controls={answerId}
            id={questionId}
        >
            <div className="flex items-center justify-between gap-[16px]">
                <h3 className="text-[#1E1F25D9] text-[clamp(14px,2vw,16px)] font-medium grotesk leading-normal tracking-normal">
                    {item?.question}
                </h3>
                <motion.span
                    className="text-[#1E1F2559] text-[25px] grotesk font-medium leading-normal tracking-normal select-none"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    aria-hidden="true"
                >
                    +
                </motion.span>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id={answerId}
                        role="region"
                        aria-labelledby={questionId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <p className="pt-[5px] text-[#1E1F2599] text-[clamp(13px,2vw,15px)] font-normal grotesk leading-[26px] tracking-normal">
                            {item?.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Card;
