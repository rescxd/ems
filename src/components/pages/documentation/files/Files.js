import Card from '@/components/pages/documentation/files/card/Card';

const Files = () => {
    const downloadFiles = [
        {
            title: 'Broszura',
            type: 'plik',
            url: 'https://ems.sugester.pl/203922554-EMS-HOUSE-Broszura?appendix=QwlA6wv3NOfG5FP5zJ',
        },
        {
            title: 'Broszura film',
            type: 'video',
            url: 'https://youtu.be/ubzS1Sve6_o',
        },
        {
            title: 'Instrukcja obsługi',
            type: 'plik',
            url: 'https://ems.sugester.pl/203922268-EMS-HOUSE-Instrukcja-Obslugi-v3-11?appendix=CcfxNHBTGK0BWlpK53op',
        },
        {
            title: 'Instrukcja Obsługi fim',
            type: 'video',
            url: 'https://youtu.be/FhrKnEoi2ZI',
        },
        {
            title: 'Wentylator - Instrukcja',
            type: 'plik',
            url: 'https://ems.sugester.pl/176183331-Cooling-SG04LP3-EU?appendix=Pa89qq6E48fsbVJKwAdm',
        },
        {
            title: 'Wentylator - Karta produktu',
            type: 'plik',
            url: 'https://ems.sugester.pl/176183331-Cooling-SG04LP3-EU?appendix=9Km1lQWkU2ScHPbH1uH',
        },
    ];
    return (
        <div className="flex flex-col gap-[32px] md:gap-[48px]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-[20px]">
                <div className="">
                    <h1 className="text-[#262626] text-[clamp(26px,5vw,52px)] grotesk font-medium leading-[138%] tracking-[-1.56px]">
                        Pobierz pliki EMS
                    </h1>
                </div>
                <div className="md:max-w-[480px]">
                    <p className="text-[#262626CC] text-[clamp(14px,2vw,17px)] font-normal leading-[28px] xl:leading-[34px] tracking-[0.17px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas felis dolor, luctus vel dapibus id,
                        condimentum.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-[24px] gap-y-[24px] xl:gap-y-[56px]">
                {
                    downloadFiles?.map((file, index) => (
                        <div key={index} className="flex flex-col">
                            <Card file={file}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
  
}

export default Files