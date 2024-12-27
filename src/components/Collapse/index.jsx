import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react'

const CollapseContener = styled.div`
  max-width: 1023px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 43px;
`
const CollapseBanner = styled.div`
    width 100%;
    height: 54px;
    background-color: rgba(255, 96, 96, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
`

const CollapseElement = styled.div`
  width: 100%;
`
const CollapseCategory = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: rgba(255, 255, 255, 1);
  width: 100%;
`
const CollapseButton = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background-color: rgba(255, 96, 96, 1);
  color: white;
`

const CollapseContent = styled.div`
  background-color: #f8f8f8;
  border-radius: 5px;
  width: 100%;
  margin: 0;
`

const CollapseInfo = styled.p`
  margin: 0;
  padding: 15px;
`

function Collapse({ name, text }) {
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }
  return (
    <CollapseElement>
      <CollapseBanner>
        <CollapseCategory>{name}</CollapseCategory>
        <CollapseButton onClick={toggleVisibility}>
          <FontAwesomeIcon icon={faChevronUp} size="2xl" />
        </CollapseButton>
      </CollapseBanner>
      {isVisible && (
        <CollapseContent>
          <CollapseInfo>{text}</CollapseInfo>
        </CollapseContent>
      )}
    </CollapseElement>
  )
}

function CollapseContainer({ children }) {
  return <CollapseContener>{children}</CollapseContener>
}

Collapse.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

CollapseContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export { CollapseContainer, Collapse }
