import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Dashboard from './pages/Dashboard'
import Investors from './pages/Investors'

//path is where the parent is , its child (diff pages from that page) reside in the children array, and it is accesiible by outlet so layout renders header footer and outlet in between , that renders all the other elements.

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },           // path: '/'
      { path: 'portfolio', element: <Portfolio /> },       // path: '/portfolio'
      { path: 'dashboard', element: <Dashboard /> },       // path: '/dashboard'
      { path: 'investors', element: <Investors /> },       // path: '/investors'
      // more routes here
    ],
  },
])


function App() {
  return <RouterProvider router={router} />
}

export default App
