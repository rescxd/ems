import CustomButton from '@/components/common/buttons/CustomButton';

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
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
                    <CustomButton
                        type="submit"
                        className="w-full px-[32px] py-[16px] bg-[#FFFFFF]"
                    >
                        <span className="text-[#262626] text-[clamp(14px,2vw,16px)] grotesk font-medium leading-normal tracking-[0.16px]">
                            Wyślij wiadomość
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
