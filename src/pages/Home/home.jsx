import Banner from '../../components/Banner/banner'
import HomePicture from '../../assets/IMG.png'
import LogementsData from '../../../public/logements.json'
import { useEffect, useState } from 'react'
import Card from '../../components/Card/card'

function Home() {
  const [logements, setLogements] = useState([])

  useEffect(() => {
    setLogements(LogementsData)
  }, [])
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
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </section>
    </div>
  )
}

export default Home
