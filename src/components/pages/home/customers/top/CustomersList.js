import customerImage from '@/assets/pages/home/customers/clientImage.jpg';
import customer1 from "@/assets/pages/home/customers/customer1.png"
import customer2 from "@/assets/pages/home/customers/customer2.png"
import customer3 from "@/assets/pages/home/customers/customer3.png"
import customer4 from "@/assets/pages/home/customers/customer4.png"
import customer5 from "@/assets/pages/home/customers/customer5.png"
import customer6 from "@/assets/pages/home/customers/customer6.png"

export const CustomersList = [
    {
        name: 'Maurycy Wojciechowski',
        shortName: 'Maurycy W.',
        date: '01.2025',
        image: customer1,
        review: 'System działa bezobsługowo od momentu instalacji. Widzę dokładnie, ile energii produkuję i zużywam. Zdalna kontrola przez telefon to ogromna wygoda.',
        stats: [
            {
                label: 'OSZCZĘDNOŚĆ',
                text: (
                    <>
                        Rachunki niższe o <b>25%</b>
                    </>
                ),
            },
            {
                label: 'ZUŻYCIE',
                text: (
                    <>
                        Redukcja o <b>30%</b>
                    </>
                ),
            },
            {
                label: 'ZWROT',
                text: (
                    <>
                        <b>18 miesięcy</b>
                    </>
                ),
            },
        ],
    },
    {
        name: 'Błażej Kubiak',
        shortName: 'Błażej K.',
        date: '03.2025',
        image: customer2,
        review: 'Jako instalator szukałem rozwiązania, które mogę oferować klientom bez obaw. EMS HOUSE to gotowy produkt z profesjonalnym wsparciem. Zdalny dostęp do instalacji klientów oszczędza mi dziesiątki godzin miesięcznie.',
        stats: [
            {
                label: 'CZAS',
                text: (
                    <>
                        <b>40%</b> mniej wizyt
                    </>
                ),
            },
            {
                label: 'KLIENCI',
                text: (
                    <>
                        <b>100%</b> zadowolonych
                    </>
                ),
            },
            {
                label: 'REKLAMACJE',
                text: (
                    <>
                        Spadek o <b>90%</b>
                    </>
                ),
            },
        ],
    },
    {
        name: 'Artur Recheta',
        shortName: 'Artur R.',
        date: '11.2024',
        image: customer3,
        review: 'Nie znam się na technologii, ale dashboard EMS HOUSE jest intuicyjny. Widzę wykresy produkcji, stan baterii i wszystko działa automatycznie. Mąż jest pod wrażeniem, że sama to ogarniam.',
        stats: [
            {
                label: 'OSZCZĘDNOŚĆ',
                text: (
                    <>
                        Rachunki niższe o <b>35%</b>
                    </>
                ),
            },
            {
                label: 'AUTOKONSUMPCJA',
                text: (
                    <>
                        Wzrost do <b>68%</b>
                    </>
                ),
            },
            {
                label: 'KOMFORT',
                text: (
                    <>
                        <b>Pełna automatyzacja</b>
                    </>
                ),
            },
        ],
    },
    {
        name: 'Szymon Nowakowski',
        shortName: 'Szymon N.',
        date: '02.2025',
        image: customer4,
        review: 'Prognoza produkcji dla 4 stringów to strzał w dziesiątkę. Mam panele na trzech połaciach dachu i dopiero teraz widzę, jak różnie pracują. System sam dostosowuje strategię do każdego stringa.',
        stats: [
            {
                label: 'PROGNOZA',
                text: (
                    <>
                        Trafność <b>92%</b>
                    </>
                ),
            },
            {
                label: 'EFEKTYWNOŚĆ',
                text: (
                    <>
                        Wzrost o <b>28%</b>
                    </>
                ),
            },
            {
                label: 'OSZCZĘDNOŚĆ',
                text: (
                    <>
                        <b>1 450 zł</b> rocznie
                    </>
                ),
            },
        ],
    },
    {
        name: 'Adam Filipek',
        shortName: 'Adam F.',
        date: '12.2024',
        image: customer5,
        review: 'Przekonał mnie argument o zgodności z programem Mój Prąd. System spełnia wszystkie wymagania, a do tego naprawdę optymalizuje zużycie. Polecam każdemu, kto ma magazyn energii.',
        stats: [
            {
                label: 'OSZCZĘDNOŚĆ',
                text: (
                    <>
                        <b>420 zł</b> miesięcznie
                    </>
                ),
            },
            {
                label: 'ZUŻYCIE Z SIECI',
                text: (
                    <>
                        Redukcja o <b>55%</b>
                    </>
                ),
            },
            {
                label: 'OCENA',
                text: (
                    <>
                        <b>100%</b> spełnione
                    </>
                ),
            },
        ],
    },
    {
        name: 'Paweł Impert',
        shortName: 'Paweł I.',
        date: '01.2025',
        image: customer6,
        review: 'Miałem falownik DEYE i magazyn, ale brakowało inteligentnego zarządzania. EMS HOUSE połączył wszystko w jeden sprawny system. Instalacja zajęła 20 minut, konfiguracja kolejne 10.',
        stats: [
            {
                label: 'INSTALACJA',
                text: (
                    <>
                        Gotowe w <b>30 min</b>
                    </>
                ),
            },
            {
                label: 'OSZCZĘDNOŚĆ',
                text: (
                    <>
                        Rachunki niższe o <b>40%</b>
                    </>
                ),
            },
            {
                label: 'BATERIA',
                text: (
                    <>
                        Żywotność <b>+25%</b>
                    </>
                ),
            },
        ],
    },
    {
        name: 'Karolina Zielińska',
        shortName: 'Karolina Z.',
        date: '10.2024',
        image: customerImage,
        review: 'Pracuję z domu i zużywam sporo prądu w ciągu dnia. System nauczył się mojego rytmu i automatycznie kieruje energię tam, gdzie jest potrzebna. Rachunki spadły, a ja nie muszę o niczym pamiętać.',
        stats: [
            {
                label: 'OSZCZĘDNOŚĆ',
                text: (
                    <>
                        <b>38%</b> niższe rachunki
                    </>
                ),
            },
            {
                label: 'AUTOKONSUMPCJA',
                text: (
                    <>
                        Wzrost do <b>72%</b>
                    </>
                ),
            },
            {
                label: 'OBSŁUGA',
                text: (
                    <>
                        <b>Zero</b> ręcznej
                    </>
                ),
            },
        ],
    },
    {
        name: 'Piotr Wójcik',
        shortName: 'Piotr W.',
        date: '04.2025',
        image: customerImage,
        review: 'Jestem elektronikiem i cenię dobrze napisany kod. EMS HOUSE zaskoczył mnie przemyślaną architekturą i integracją z Home Assistant. Mogę rozbudowywać system o własne automatyzacje.',
        stats: [
            {
                label: 'INTEGRACJE',
                text: (
                    <>
                        <b>15</b> urządzeń
                    </>
                ),
            },
            {
                label: 'STABILNOŚĆ',
                text: (
                    <>
                        <b>99.9%</b> uptime
                    </>
                ),
            },
            {
                label: 'ROZBUDOWA',
                text: (
                    <>
                        <b>Nieograniczona</b>
                    </>
                ),
            },
        ],
    },
    {
        name: 'Ewa Kamińska',
        shortName: 'Ewa K.',
        date: '12.2024',
        image: customerImage,
        review: 'Wsparcie techniczne działa błyskawicznie. Miałam pytanie o konfigurację i dostałam odpowiedź w 15 minut. Czuć, że za tym produktem stoją ludzie, którym zależy.',
        stats: [
            {
                label: 'ODPOWIEDŹ',
                text: (
                    <>
                        Średnio <b>12 minut</b>
                    </>
                ),
            },
            {
                label: 'AKTUALIZACJE',
                text: (
                    <>
                        Co <b>2-3 tygodnie</b>
                    </>
                ),
            },
            {
                label: 'OCENA',
                text: (
                    <>
                        <b>5/5 ⭐</b>
                    </>
                ),
            },
        ],
    },
    {
        name: 'Rafał Szymański',
        shortName: 'Rafał S.',
        date: '02.2025',
        image: customerImage,
        review: 'Prowadzę firmę instalacyjną i wdrożyłem EMS HOUSE u 23 klientów. Ani jedna reklamacja, za to mnóstwo poleceń. System sprzedaje się sam, bo klienci widzą realne oszczędności.',
        stats: [
            {
                label: 'WDROŻENIA',
                text: (
                    <>
                        <b>23</b> instalacje
                    </>
                ),
            },
            {
                label: 'POLECENIA',
                text: (
                    <>
                        <b>89%</b> klientów
                    </>
                ),
            },
            {
                label: 'REKLAMACJE',
                text: (
                    <>
                        <b>0</b> w 6 miesięcy
                    </>
                ),
            },
        ],
    },
];
