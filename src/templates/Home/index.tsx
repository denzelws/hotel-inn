import Header from '../../components/Header'
import Highlight from '../../components/Highlight'
import NavBar from '../../components/NavBar'

import { Container } from '../../components/Highlight/styles'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Container>
        <Highlight />
      </Container>
    </div>
  )
}

export default Home
