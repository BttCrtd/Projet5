import styled from 'styled-components'
import PropTypes from 'prop-types'

const BannerContener = styled.div`
  max-width: 1240px;
  width: 100%;
  height: 223px;
  color: black;
  border: 1px solid rgba(0, 0, 0, 1);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 43px;
`

const Image = styled.img`
  mix-blend-mode: darken;
  z-index: 0;
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
`

const ImageText = styled.h1`
  position: absolute;
  z-index: 2;
  color: white;
  font-size: 48px;
  font-weight: 700;
  border: black;
  text-align: center;
`
const TextBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
  mix-blend-mode: darken;
`

function Banner({ source, text }) {
  return (
    <BannerContener>
      <Image src={source} />
      {text && (
        <>
          <TextBackground />
          <ImageText>{text}</ImageText>
        </>
      )}
    </BannerContener>
  )
}

Banner.propTypes = {
  source: PropTypes.node.isRequired,
  text: PropTypes.node,
}

export default Banner
