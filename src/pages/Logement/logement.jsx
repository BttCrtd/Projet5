import '../../style/style.css'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Collapse from '../../components/Collapse/collapse'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Logement() {
  const location = useLocation()
  const { logement } = location.state || {}

  const [currentIndex, setCurrentIndex] = useState(0)

  const nexPicture = () => {
    setCurrentIndex((nexIndex) => {
      return nexIndex === logement.pictures.length - 1
        ? nexIndex - logement.pictures.length + 1
        : nexIndex + 1
    })
  }

  const prevPicture = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
    })
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
  for (let u = 5 - logement.rating; u != 0; u--) {
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
      <div className="gallery">
        <img src={logement.pictures[currentIndex]} />
        {logement.pictures.length !== 1 ? (
          <>
            <div className="button">
              <button onClick={prevPicture}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button onClick={nexPicture}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
            <div className="pictureNumber">
              <p>
                {currentIndex + 1}/{logement.pictures.length}
              </p>
            </div>
          </>
        ) : null}
      </div>
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
        <div>
          <div className="host">
            <p>{logement.host.name}</p>
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
