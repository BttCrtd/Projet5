import '../../style/style.css'
import PropTypes from 'prop-types'

function Banner({ source, text }) {
  return (
    <div className="banner">
      <img src={source} />
      {text && (
        <>
          <div></div>
          <h1>{text}</h1>
        </>
      )}
    </div>
  )
}

Banner.propTypes = {
  source: PropTypes.node.isRequired,
  text: PropTypes.node,
}

export default Banner
