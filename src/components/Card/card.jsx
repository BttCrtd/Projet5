import { Link } from 'react-router-dom'
import '../../style/style.css'

function Card({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`} state={{ logement }}>
      <img
        src={logement.cover}
        alt={`Photo de couverture de ${logement.title}`}
      />
      <div></div>
      <h2 key={logement.id}>{logement.title}</h2>
    </Link>
  )
}

export default Card
