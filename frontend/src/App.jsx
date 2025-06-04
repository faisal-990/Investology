import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Dashboard from './pages/Dashboard';
import Investors from './pages/Investors';
import { StockDataProvider } from './Context/StockDataContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'investors', element: <Investors /> },
    ],
  },
]);

function App() {
  return (
    <StockDataProvider>
      <RouterProvider router={router} />
    </StockDataProvider>
  );
}

export default App;
