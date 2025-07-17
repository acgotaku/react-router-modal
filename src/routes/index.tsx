import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../views/Home';
import Gallery from '../views/Gallery';
import ImageView from '../views/ImageView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'gallery',
        element: <Gallery />
      },
      {
        path: 'gallery/:id',
        element: <ImageView />
      }
    ]
  },
  {
    path: '*',
    element: <div>404 Not Found</div>
  }
]);

export default router;
