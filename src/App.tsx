import { Provider } from 'react-redux'
import store from './store/index'
import GlobalStyle, { Container } from './styles/index'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Páginas
import Home from './pages/Home'
import Register from './pages/RegisterContact'

// Roteamento de páginas
const rotas = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/new_contact', element: <Register /> }
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
