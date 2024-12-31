import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import '../../style/style.css'

import { useState } from 'react'

function Collapse({ name, text }) {
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
      {isVisible && (
        <div
          className="content"
          style={{
            maxHeight: isVisible ? '1000px' : '0',
          }}
        >
          <p>{text}</p>
        </div>
      )}
    </div>
  )
}

function CollapseContainer({ children }) {
  return <section className="collapse">{children}</section>
}

Collapse.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

CollapseContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export { CollapseContainer, Collapse }
