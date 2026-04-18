import Documentation from '@/components/pages/documentation/Documentation';

export const metadata = {
    title: 'Dokumentacja EMS HOUSE – Pliki, instrukcje i materiały',
    description:
        'Pobierz dokumentację EMS HOUSE: broszury, instrukcje obsługi, materiały wideo i karty produktów. Wszystko, czego potrzebujesz do instalacji i obsługi systemu zarządzania energią.',
    keywords: [
        'EMS HOUSE dokumentacja',
        'instrukcja EMS HOUSE',
        'broszura EMS',
        'pliki EMS HOUSE',
        'system zarządzania energią instrukcja',
        'EMS fotowoltaika dokumenty',
        'EMS HOUSE PDF',
        'EMS HOUSE materiały',
    ],
    openGraph: {
        title: 'Dokumentacja EMS HOUSE – Pobierz pliki i instrukcje',
        description:
            'Broszury, instrukcje i materiały wideo EMS HOUSE w jednym miejscu. Pobierz i dowiedz się więcej o systemie zarządzania energią.',
        url: 'https://ems.envcode.pl/dokumentacja',
        siteName: 'EMS HOUSE',
        locale: 'pl_PL',
        type: 'website',
        images: [
            {
                url: 'https://ems.envcode.pl/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Dokumentacja EMS HOUSE',
            },
        ],
    },
    alternates: {
        canonical: 'https://ems.envcode.pl/dokumentacja',
    },
};

const Page = () => {
    return (
        <div>
            <div className="">
                <Documentation />
            </div>
        </div>
    );
};

export default Page;
