import { Provider } from 'react-redux'
import store from './store/index'
import GlobalStyle, { Container } from './styles/index'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Páginas
import Home from './pages/Home'
import Cadastro from './pages/RegisterContact'

// Roteamento de páginas
const rotas = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/criar_tarefa', element: <Cadastro /> }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
