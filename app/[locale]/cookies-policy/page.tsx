import { getTranslations } from 'next-intl/server';
import styles from './styles.module.css'
import { useTranslations } from 'next-intl';



export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const m = await getTranslations({ locale, namespace: 'Cookies-Metadata' });


    return {
        title: m('title'),
        description: m('description'),
        keywords: [
            m('keywords.cookiesPolicy'),
            m('keywords.essentialCookies'),
            m('keywords.websiteCookies'),
        ],
        openGraph: {
            title: m('openGraph.title'),
            description: m('openGraph.description'),
            siteName: m('openGraph.siteName'),
            locale: locale === 'pl' ? 'pl_PL' : 'en_GB',
            type: "article",
            images: [
                {
                    url: "/images/poheating-metadata.jpg",
                    width: 1200,
                    height: 630,
                    alt: m('openGraph.imageAlt'),
                },
            ],
        },
        alternates: {
            // canonical: locale === 'pl' ? "https://www.yourdomain.co.uk/pl/cookies-policy" : "https://www.yourdomain.co.uk/cookies-policy",
        },
    };
}


const CookiesPolicy = () => {
    const t = useTranslations('CookiesPolicy');

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <h1>{t('title')}</h1>
                <div className={styles.block}>
                    <p>{t('block1')}</p>
                </div>

                <div className={styles.block}>
                    <p>{t('block2.title')}</p>
                    <ul>
                        <li>{t('block2.list.analytics')}</li>
                        <li>{t('block2.list.advertising')}</li>
                        <li>{t('block2.list.thirdParty')}</li>
                        <li>{t('block2.list.profiling')}</li>
                    </ul>
                </div>

                <div className={styles.block}>
                    <p>{t('block3')}</p>
                </div>

                <div className={styles.block}>
                    <p>{t('block4')}</p>
                </div>

                <div className={styles.block}>
                    <p>{t('block5')}</p>
                </div>
            </div>
        </div>
    );
}

export default CookiesPolicy;