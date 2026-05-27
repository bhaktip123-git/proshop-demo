import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Homescreen from './screens/Homescreen';

const App = () => {
  return (
    <>
        <Header />
        <main className='py-3'>
          <Container>

            <h1>Welcome to Proshop</h1>

              <Homescreen />
          </Container>
       </main>
       <Footer /> 
    </>
  )
}

export default App