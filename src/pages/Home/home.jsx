import Banner from '../../components/Banner/banner'
import HomePicture from '../../assets/IMG.png'
import CardAffichage from '../../components/Card/card'

function Home() {
  return (
    <div>
      <Banner source={HomePicture} text={'Chez vous, partout et ailleurs'} />
      <CardAffichage />
    </div>
  )
}

export default Home
