import '../../style/style.css'

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

export default Banner
