import CallMeWidget from '../components/CallMeWidget/callme-widget';
import GasAppliancesAbout from '../components/GasAppliancesPage/GasAppliancesAbout/GasAppliancesAbout';
import GasAppliancesBoliers from '../components/GasAppliancesPage/GasAppliancesBoliers/GasAppliancesBoliers';
import GasAppliancesSafety from '../components/GasAppliancesPage/GasAppliancesSafety/GasAppliancesSafety';
import GasAppliancesSteps from '../components/GasAppliancesPage/GasAppliancesSteps/GasAppliancesSteps';
import GasAppliancesHero from '../components/GasAppliancesPage/Hero/page';
import styles from './styles.module.css'

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