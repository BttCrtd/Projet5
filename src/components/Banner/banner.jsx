import '../../style/style.css'

function Banner({ source, text }) {
  return (
    <div className="banner">
      {text ? (
        <>
          <img src={source} />
          <div></div>
          <h1>{text}</h1>
        </>
      ) : (
        <>
          <img src={source} />
          <div className="simple-banner"></div>
        </>
      )}
    </div>
  )
}

export default Banner
