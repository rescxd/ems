import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/common/footer/Footer';
import Navbar from '@/components/common/navbar/Navbar';

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});

const spaceGrotesk = Space_Grotesk({
    variable: '--font-space-grotesk',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
    title: 'EMS HOUSE – Inteligentny system zarządzania energią | Fotowoltaika, magazyny energii, Smart Home',
    description:
        'EMS HOUSE to zaawansowany system zarządzania energią dla instalacji fotowoltaicznych. Zwiększ autokonsumpcję, obniż rachunki nawet o 40% i spełnij wymagania programu Mój Prąd. Inteligentne sterowanie, prognozy PV i pełna automatyzacja.',
    keywords: [
        'EMS HOUSE',
        'system zarządzania energią',
        'EMS fotowoltaika',
        'HEMS',
        'magazyn energii',
        'fotowoltaika optymalizacja',
        'autokonsumpcja energii',
        'Mój Prąd EMS',
        'smart home energia',
        'zarządzanie energią w domu',
        'dynamiczne taryfy prądu',
        'prognoza produkcji PV',
        'Home Assistant integracja',
        'system EMS Polska',
        'optymalizacja zużycia energii',
    ],
    authors: [{ name: 'EMS HOUSE' }],
    creator: 'EMS HOUSE',
    publisher: 'EMS HOUSE',

    icons: {
        icon: [
            { url: '/favicon.ico' },
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
        other: [
            {
                rel: 'android-chrome-192x192',
                url: '/android-chrome-192x192.png',
            },
            {
                rel: 'android-chrome-512x512',
                url: '/android-chrome-512x512.png',
            },
        ],
    },

    manifest: '/site.webmanifest',

    openGraph: {
        title: 'EMS HOUSE – Inteligentne zarządzanie energią dla PV i Smart Home',
        description:
            'Automatyczne sterowanie energią, niższe rachunki, pełna kontrola i zgodność z programem Mój Prąd. EMS HOUSE to nowoczesny system EMS dla instalatorów i użytkowników fotowoltaiki.',
        url: 'https://ems.envcode.pl',
        siteName: 'EMS HOUSE',
        locale: 'pl_PL',
        type: 'website',
        images: [
            {
                url: 'https://ems.envcode.pl/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'EMS HOUSE – system zarządzania energią',
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title: 'EMS HOUSE – Inteligentny system zarządzania energią',
        description:
            'Zwiększ autokonsumpcję, ogranicz eksport do sieci i zarządzaj energią automatycznie. EMS HOUSE – nowoczesne rozwiązanie dla fotowoltaiki.',
        images: ['https://ems.envcode.pl/og-image.jpg'],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    alternates: {
        canonical: 'https://ems.envcode.pl',
    },

    category: 'technology',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pl">
            <body
                className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
            >
                <Navbar />
                <div className="flex flex-col gap-[20px]">
                    {children}
                    <Footer />
                </div>

                <div className="h-[20px]"></div>
            </body>
        </html>
    );
}
