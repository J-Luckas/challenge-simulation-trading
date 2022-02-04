import { InvestForm } from './components/InvestForm/index';
import { GlobalStyle, Container } from './styles/global';
import { InvestResult } from './components/InvestResult/index';
import { SimulationsProvider } from './hooks/useSimulation';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <SimulationsProvider>
      <h1 id="page-title">Simulador de Investimentos</h1>
      <Container>
        <InvestForm />
        <InvestResult />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Container>
    </SimulationsProvider>
  );
}

export default App;
