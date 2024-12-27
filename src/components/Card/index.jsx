import styled from 'styled-components'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CardContener = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 320px;
  height: 320px;
  padding: 10px;
  position: relative;
`
const CardFilter = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(10, 10, 10, 0),
    rgba(4, 4, 4, 0.205),
    rgba(0, 0, 0, 0.5)
  );
  position: absolute;
  z-index: 1;
`

const CardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
`

const CardTitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  color: rgba(255, 255, 255, 1);
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  position: absolute;
  z-index: 2;
`

function Card({ logement }) {
  return (
    <CardContener to={`/logement/${logement.id}`}>
      <CardImage src={logement.cover} />
      <CardFilter />
      <CardTitle key={logement.id}>{logement.title}</CardTitle>
    </CardContener>
  )
}

Card.propTypes = {
  logement: PropTypes.shape({
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}

const CardsContener = styled.section`
  max-width: 1140px;
  padding-top: 56px;
  padding-bottom: 56px;
  padding-left: 50px;
  padding-right: 50px;
  background-color: rgba(246, 246, 246, 1);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 43px;
  gap: 50px;
`

function CardAffichage() {
  const [logements, setLogements] = useState([])

  useEffect(() => {
    fetch('/logements.json')
      .then((reponse) => reponse.json())
      .then((data) => setLogements(data))
  }, [])

  return (
    <CardsContener>
      {logements.map((logement) => (
        <Card key={logement.id} logement={logement} />
      ))}
    </CardsContener>
  )
}

export default CardAffichage
