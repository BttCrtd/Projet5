import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ErrorContainer = styled.div`
  max-width: 1240px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const ErrorTitle = styled.h1`
  font-size: 288px;
  font-weight: 700;
  color: rgba(255, 96, 96, 1);
  margin: 0;
`

const ErrorText = styled.p`
  font-size: 36px;
  font-weight: 500;
  color: rgba(255, 96, 96, 1);
`
const ErrorLink = styled(Link)`
  font-size: 18px;
  font-weight: 500;
  text-decoration: underline;
  color: rgba(0, 0, 0, 1);
`

function Error() {
  return (
    <ErrorContainer>
      <ErrorTitle>404</ErrorTitle>
      <ErrorText>Oups! La page que vous demandez n&apos;existe pas.</ErrorText>
      <ErrorLink to="/">Retourner sur la page d’accueil</ErrorLink>
    </ErrorContainer>
  )
}

export default Error
