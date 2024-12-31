import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import LogementsData from '../../../public/logements.json'
import '../../style/style.css'

function Card({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`}>
      <img src={logement.cover} />
      <div></div>
      <h2 key={logement.id}>{logement.title}</h2>
    </Link>
  )
}

Card.propTypes = {
  logement: PropTypes.shape({
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}

function CardAffichage() {
  const [logements, setLogements] = useState([])

  useEffect(() => {
    setLogements(LogementsData)
  }, [])

  return (
    <section className="cards">
      {logements.map((logement) => (
        <Card key={logement.id} logement={logement} />
      ))}
    </section>
  )
}

export default CardAffichage
