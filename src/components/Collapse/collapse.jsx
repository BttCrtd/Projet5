import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import '../../style/style.css'
import { useState } from 'react'

function Collapse({ name, text, list }) {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div className="element">
      <div>
        <h2>{name}</h2>
        <button
          className={isVisible ? 'rotated' : ''}
          onClick={toggleVisibility}
        >
          <FontAwesomeIcon icon={faChevronUp} size="2xl" />
        </button>
      </div>
      <div className={`content ${isVisible ? 'active' : 'close'}`}>
        {text ? (
          <p>{text}</p>
        ) : list && list.length > 0 ? (
          <ul>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <ul>
            <li>Aucun équipement</li>
          </ul>
        )}
      </div>
    </div>
  )
}

export default Collapse
