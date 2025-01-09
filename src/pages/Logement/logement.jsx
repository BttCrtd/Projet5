import '../../style/style.css'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Collapse from '../../components/Collapse/collapse'
import SlideShow from '../../components/SlideShow/slideShow'
import { useEffect } from 'react'
import LogementsData from '../../../public/logements.json'

function Logement() {
  const navigate = useNavigate()
  const { id } = useParams()
  const valideID = LogementsData.map((logement) => logement.id)

  useEffect(() => {
    if (!valideID.includes(id)) {
      navigate('*')
    }
  }, [id, valideID, navigate])

  const location = useLocation()
  const { logement } = location.state || {}

  if (!logement) {
    return null
  }

  const stars = []
  for (let i = 0; i < logement.rating; i++) {
    stars.push(
      <FontAwesomeIcon
        key={`star-full-${i}`}
        icon={faStar}
        color="rgba(255, 96, 96, 1)"
      />,
    )
  }
  for (let u = 5 - logement.rating; u !== 0; u--) {
    stars.push(
      <FontAwesomeIcon
        key={`star-empty-${u}`}
        icon={faStar}
        color="rgba(227, 227, 227, 1)"
      />,
    )
  }

  return (
    <div className="logement">
      <SlideShow pictures={logement.pictures} title={logement.title} />
      <div>
        <div>
          <div className="title">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
          </div>
          <div className="tags">
            {logement.tags?.map((tag) => (
              <div key={tag}>
                <p>{tag}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="host-and-rating">
          <div className="host">
            <p>
              {logement.host.name.split(' ')[0]}
              <br />
              {logement.host.name.split(' ')[1]}
            </p>
            <img src={logement.host.picture} alt="" />
          </div>
          <div className="rating">{stars}</div>
        </div>
      </div>
      <div className="collapse">
        <Collapse name={'Description'} text={logement.description} />
        <Collapse name={'Équipement'} list={logement.equipments} />
      </div>
    </div>
  )
}

export default Logement
