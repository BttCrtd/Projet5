import Banner from '../../components/Banner/banner'
import HomePicture from '../../assets/IMG.png'
import LogementsData from '../../../public/logements.json'
import Card from '../../components/Card/card'

function Home() {
  return (
    <div>
      <Banner
        source={HomePicture}
        text={'Chez vous, partout et ailleurs'}
        alt={
          "Photo de fond d'une côte maritime pour le titre Chez vous, partout et ailleurs"
        }
      />
      <section className="cards">
        {LogementsData.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </section>
    </div>
  )
}

export default Home
