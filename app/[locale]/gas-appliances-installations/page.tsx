import { getTranslations } from 'next-intl/server';
import CallMeWidget from '../../components/CallMeWidget/callme-widget';
import GasAppliancesAbout from '../../components/GasAppliancesPage/GasAppliancesAbout/GasAppliancesAbout';
import GasAppliancesBoliers from '../../components/GasAppliancesPage/GasAppliancesBoliers/GasAppliancesBoliers';
import GasAppliancesSafety from '../../components/GasAppliancesPage/GasAppliancesSafety/GasAppliancesSafety';
import GasAppliancesSteps from '../../components/GasAppliancesPage/GasAppliancesSteps/GasAppliancesSteps';
import GasAppliancesHero from '../../components/GasAppliancesPage/Hero/page';
import styles from './styles.module.css'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'GasAppliances.metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: [
      t('keywords.gasAppliancesInstallations'),
      t('keywords.gasBoilerInstallation'),
      t('keywords.gasHobInstallation'),
      t('keywords.gasCookerInstallationBristol'),
      t('keywords.gasBoilerInstallationBristol'),
      t('keywords.gasCookerInstallationBridgwater'),
      t('keywords.gasHobInstallationBridgwater'),
      t('keywords.gasSafeEngineer'),
      t('keywords.gasApplianceFitting'),
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
      // canonical: "https://www.yourdomain.co.uk/gas-appliance-installations",
      // languages: {
      //   "en-GB": "https://www.yourdomain.co.uk/gas-appliance-installations",
      //   "pl-PL": "https://www.yourdomain.co.uk/pl/instalacje-gazowe",
      // },
    },
  };
}

const GasAppliancesInstallations = () => {
    return ( 
        <div className={styles.page}>
            <GasAppliancesHero />
            <GasAppliancesAbout />
            <GasAppliancesBoliers />
            <GasAppliancesSafety />
            <GasAppliancesSteps />
            <CallMeWidget />
        </div>
     );
}
 
export default GasAppliancesInstallations;