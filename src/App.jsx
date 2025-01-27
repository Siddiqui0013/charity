import './App.css'
import Layout from './Layout/Layout'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const BrowserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={BrowserRouter} />
    </>
  )
}

export default App
