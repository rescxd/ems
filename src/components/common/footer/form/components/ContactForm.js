'use client';

import { useState } from 'react';
import CustomButton from '@/components/common/buttons/CustomButton';

const ContactForm = () => {
    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');

        const form = e.target;
        const data = {
            name: form.name.value,
            phone: form.phone.value,
            email: form.email.value,
            message: form.message.value,
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                const json = await res.json();
                throw new Error(json.error || 'Błąd serwera.');
            }

            setStatus('success');
            form.reset();
            setTimeout(() => setStatus('idle'), 5000);
        } catch (err) {
            setErrorMsg(err.message);
            setStatus('error');
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="xl:max-w-[680px] w-full mx-auto p-[20px] md:p-[40px] bg-[#FFFFFF0D] rounded-[16px] backdrop-blur-[52px]"
        >
            <div className="flex flex-col gap-[40px]">
                <div className="flex flex-col gap-[32px]">
                    <fieldset className="flex flex-col gap-[16px]">
                        <div className="text-[#FFFFFF80] text-[clamp(14px,2vw,16px)] font-normal grotesk leading-normal tracking-[0.32px] uppercase">
                            <span
                                className="text-[#FFFFFF40] font-normal grotesk"
                                aria-hidden="true"
                            >
                                //
                            </span>{' '}
                            Informacje kontaktowe
                        </div>
                        <div className="flex flex-col gap-[5px]">
                            <label htmlFor="contact-name" className="sr-only">
                                Imię i nazwisko
                            </label>
                            <input
                                id="contact-name"
                                type="text"
                                name="name"
                                placeholder="Twoje Imię i nazwisko"
                                required
                                autoComplete="name"
                                className="px-[22px] py-[13.5px] bg-[#FFFFFF0D] placeholder-[#FFFFFF59] text-[#FFFFFF] text-[clamp(13px,2vw,15px)] font-normal leading-[28px] tracking-[0.15px] w-full"
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[5px]">
                                <div>
                                    <label
                                        htmlFor="contact-phone"
                                        className="sr-only"
                                    >
                                        Numer telefonu
                                    </label>
                                    <input
                                        id="contact-phone"
                                        type="tel"
                                        name="phone"
                                        placeholder="Numer telefonu"
                                        required
                                        autoComplete="tel"
                                        className="px-[22px] py-[13.5px] bg-[#FFFFFF0D] placeholder-[#FFFFFF59] text-[#FFFFFF] text-[clamp(13px,2vw,15px)] font-normal leading-[28px] tracking-[0.15px] w-full"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="contact-email"
                                        className="sr-only"
                                    >
                                        Adres e-mail
                                    </label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        name="email"
                                        placeholder="Adres e-mail"
                                        required
                                        autoComplete="email"
                                        className="px-[22px] py-[13.5px] bg-[#FFFFFF0D] placeholder-[#FFFFFF59] text-[#FFFFFF] text-[clamp(13px,2vw,15px)] font-normal leading-[28px] tracking-[0.15px] w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="flex flex-col gap-[16px]">
                        <div className="text-[#FFFFFF80] text-[clamp(14px,2vw,16px)] font-normal grotesk leading-normal tracking-[0.32px] uppercase">
                            <span
                                className="text-[#FFFFFF40] font-normal grotesk"
                                aria-hidden="true"
                            >
                                //
                            </span>{' '}
                            Dodatkowe informacje
                        </div>
                        <div>
                            <label
                                htmlFor="contact-message"
                                className="sr-only"
                            >
                                Dodatkowe informacje
                            </label>
                            <textarea
                                id="contact-message"
                                name="message"
                                placeholder="Wpisz tu dodatkowe informacje..."
                                className="px-[22px] py-[28px] bg-[#FFFFFF0D] resize-none placeholder-[#FFFFFF59] text-[#FFFFFF] text-[clamp(13px,2vw,15px)] font-normal leading-[28px] tracking-[0.15px] w-full"
                                rows={4}
                            />
                        </div>
                    </fieldset>
                </div>
                <div className="flex flex-col gap-[16px]">
                    {status === 'error' && (
                        <p className="text-red-400 text-[clamp(13px,2vw,15px)] grotesk font-medium text-center">
                            {errorMsg || 'Coś poszło nie tak. Spróbuj ponownie.'}
                        </p>
                    )}
                    <CustomButton
                        type="submit"
                        disabled={status === 'loading' || status === 'success'}
                        className={`w-full px-[32px] py-[16px] transition-colors duration-300 disabled:opacity-80 ${status === 'success' ? 'bg-green-500' : 'bg-[#FFFFFF]'}`}
                    >
                        <span className={`text-[clamp(14px,2vw,16px)] grotesk font-medium leading-normal tracking-[0.16px] ${status === 'success' ? 'text-white' : 'text-[#262626]'}`}>
                            {status === 'loading' ? 'Wysyłanie...' : status === 'success' ? 'Wiadomość została wysłana' : 'Wyślij wiadomość'}
                        </span>
                    </CustomButton>
                    <p className="text-[#FFFFFF80] text-[clamp(12px,2vw,14px)] font-normal grotesk leading-[22px] tracking-[0.14px]">
                        Wysyłając nam wiadomość, zgadzasz się do{' '}
                        <a
                            href="/Polityka-prywatnosci.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-solid grotesk cursor-pointer"
                        >
                            Polityki Prywatności
                        </a>{' '}
                        strony i rozumiesz, <br /> że podane dane osobowe będą
                        przetwarzane.
                    </p>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
