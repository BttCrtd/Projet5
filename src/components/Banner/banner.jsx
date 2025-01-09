import '../../style/style.css'

function Banner({ source, text, alt }) {
  return (
    <div className="banner">
      {text ? (
        <>
          <img src={source} alt={alt} />
          <div></div>
          <h1>{text}</h1>
        </>
      ) : (
        <>
          <img src={source} alt={alt} />
          <div className="simple-banner"></div>
        </>
      )}
    </div>
  )
}

export default Banner
