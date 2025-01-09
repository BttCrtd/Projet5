import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function SlideShow({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nexPicture = () => {
    setCurrentIndex((nexIndex) => {
      return nexIndex === pictures.length - 1
        ? nexIndex - pictures.length + 1
        : nexIndex + 1
    })
  }

  const prevPicture = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    })
  }

  return (
    <div className="gallery">
      <img
        src={pictures[currentIndex]}
        alt={`Photo ${currentIndex + 1} sur ${pictures.length} de ${title}`}
      />
      {pictures.length !== 1 ? (
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
              {currentIndex + 1}/{pictures.length}
            </p>
          </div>
        </>
      ) : null}
    </div>
  )
}

export default SlideShow
