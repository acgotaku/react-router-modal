import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../views/Home';
import Gallery from '../views/Gallery';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'gallery',
        element: <Gallery />
      }
    ]
  }
]);

export default router;
