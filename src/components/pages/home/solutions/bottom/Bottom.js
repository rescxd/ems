const Bottom = () => {
    const items = [
        'Prognozowanie produkcji dla każdego stringa osobno',
        'Uwzględnianie zachmurzenia, opadów i nasłonecznienia',
        'Automatyczna aktualizacja danych co godzinę',
    ];
    return (
        <div className="flex flex-col gap-[32px] 2xl:gap-[40px]">
            <div className="flex flex-col items-center gap-[22px]">
                <div className="">
                    <p className="text-[#FFFFFFA6] text-[clamp(14px,2vw,16px)] font-normal grotesk leading-normal tracking-[0.32px] uppercase">
                        <span className="text-[#FFFFFF40] font-normal grotesk">
                            //
                        </span>{' '}
                        Autorskie API pogodowe
                    </p>
                </div>
                <div className="">
                    <h2 className="solutions-text-gradient text-[clamp(24px,5vw,46px)] text-center grotesk font-medium leading-normal tracking-[-1.38px]">
                        EMS Weather & Solar API
                    </h2>
                </div>
                <div className="max-w-[700px] mx-auto">
                    <p className="text-[#FFFFFFCC] text-[clamp(15px,2vw,17px)] text-center font-normal leading-[28px] xl:leading-[34px] tracking-[0.17px]">
                        Autorski moduł prognostyczny dostarcza precyzyjne dane o
                        produkcji PV dla konkretnej lokalizacji, azymutu i kąta
                        nachylenia każdego stringa. Korzystamy ze swojego API
                        pogodowego, w którym możemy prognozować dowolną ilość
                        stringów.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[5px]">
                {items?.map((item, index) => (
                    <div
                        key={index}
                        className="p-[24px] bg-[#FFFFFF0D] flex items-center gap-[20px]"
                    >
                        <div className="min-w-[56px] min-h-[56px] border border-[#FFFFFF1A] flex items-center justify-center">
                            <span className="text-[#FFFFFF] text-[20px] grotesk font-bold leading-normal tracking-normal">
                                {index + 1}
                            </span>
                        </div>
                        <div className="">
                            <p className="text-[#FFFFFFCC] text-[clamp(14px,2vw,17px)] font-normal leading-normal tracking-[0.17px]">
                                {item}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bottom;
