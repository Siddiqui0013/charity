import './App.css'
import Layout from './Layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Donation from './pages/Donation'
import ViewDonation from './pages/ViewDonation'
import Events from './pages/Events'
import ViewEvent from './pages/ViewEvent'
import DashboardLayout from './Layout/DashboardLayout'
import Main from './dashboard/Main'
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
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/donation",
          element: <Donation />
        },
        {
          path: "/donation/:id",
          element: <ViewDonation />
        },
        {
          path: "/events",
          element: <Events />
        },
        {
          path: "/event/:id",
          element: <ViewEvent />
        }
      ]
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "/dashboard",
          element: <Main />
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
