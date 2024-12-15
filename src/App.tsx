import { ThemeProvider } from 'styled-components'
import themePadrao from './containers/themes/padrao'

import EstiloGlobal, { Container } from './styles'

import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

function App() {
  return (
    <ThemeProvider theme={themePadrao}>
      <EstiloGlobal />
      <Cabecalho />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
