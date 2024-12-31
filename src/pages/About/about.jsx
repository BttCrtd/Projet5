import AboutPicture from '../../assets/kalen-emsley.png'
import Banner from '../../components/Banner/banner'
import { CollapseContainer, Collapse } from '../../components/Collapse/collapse'

function About() {
  const fiabilityText =
    'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toute les informations sont régulièrementvérifiées par nos équipes.'
  const respectText =
    'La bienveilllance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
  const serviceText =
    'La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.'
  const securityText =
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standars sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  return (
    <div>
      <Banner source={AboutPicture} />
      <CollapseContainer>
        <Collapse name={'Fiabilité'} text={fiabilityText} />
        <Collapse name={'Respect'} text={respectText} />
        <Collapse name={'Service'} text={serviceText} />
        <Collapse name={'Sécurité'} text={securityText} />
      </CollapseContainer>
    </div>
  )
}

export default About
