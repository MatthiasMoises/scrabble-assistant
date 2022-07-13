import Header from '../../components/UI/Header'
import Footer from '../../components/UI/Footer'

import Container from '@mui/material/Container'

const Layout = props => {
  return (
    <>
      <Header />
      <main>
        <Container style={{ padding: '15px', minHeight: '65vh' }}>
          {props.children}
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default Layout
