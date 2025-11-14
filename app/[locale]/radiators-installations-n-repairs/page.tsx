import { getTranslations } from 'next-intl/server';
import RadiatorsHero from '../../components/RadiatorsPage/RadiatorsHero/RadiatorsHero';
import RadiatorsAbout from '../../components/RadiatorsPage/RadiatorsAbout/RadiatorsAbout';
import RadiatorsOurProcess from '../../components/RadiatorsPage/RadiatorsOurProcess/RadiatorsOurProcess';
import RadiatorsProblems from '../../components/RadiatorsPage/RadiatorsProblems/RadiatorsProblems';
import styles from './styles.module.css'
import CallMeWidget from '../../components/CallMeWidget/callme-widget';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Radiators.metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: [
      t('keywords.radiatorInstallation'),
      t('keywords.radiatorRepair'),
      t('keywords.radiatorInstallationBristol'),
      t('keywords.radiatorRepairBristol'),
      t('keywords.radiatorInstallationBridgwater'),
      t('keywords.radiatorRepairBridgwater'),
      t('keywords.leakingRadiator'),
      t('keywords.coldSpots'),
      t('keywords.noisyRadiators'),
      t('keywords.heatingEngineer'),
    ],
    openGraph: {
      title: t('openGraph.title'),
      description: t('openGraph.description'),
      siteName: t('openGraph.siteName'),
      locale: locale === 'pl' ? 'pl_PL' : 'en_GB',
      type: "article",
      images: [
        {
          url: "/images/poheating-metadata.jpg",
          width: 1200,
          height: 630,
          alt: t('openGraph.imageAlt'),
        },
      ],
    },
    alternates: {
      // canonical: "https://www.yourdomain.co.uk/radiators-installations-n-repairs",
      // languages: {
      //   "en-GB": "https://www.yourdomain.co.uk/radiators-installations-n-repairs",
      //   "pl-PL": "https://www.yourdomain.co.uk/pl/grzejniki",
      // },
    },
  };
}

const radiatorNHeatingUpgrades = () => {
    return ( 
        <div className={styles.page}>
            <RadiatorsHero />
            <RadiatorsAbout />
            <RadiatorsProblems />
            <RadiatorsOurProcess />
            <CallMeWidget />
        </div>
     );
}
 
export default radiatorNHeatingUpgrades;