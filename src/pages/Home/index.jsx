import Banner from '../../components/Banner'
import HomePicture from '../../assets/IMG.png'

function Home() {
  return (
    <div>
      <Banner source={HomePicture} text={'Chez vous, partout et ailleurs'} />
    </div>
  )
}

export default Home
