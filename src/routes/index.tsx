import {
  // createBrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../views/Home';
import Gallery from '../views/Gallery';
import ImageView from '../views/ImageView';
import ImageModal from '../views/ImageModal';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       { index: true, element: <Home /> },
//       {
//         path: 'gallery',
//         element: <Gallery />
//       },
//       {
//         path: 'gallery/:id',
//         element: <ImageView />
//       }
//     ]
//   },
//   {
//     path: '*',
//     element: <div>404 Not Found</div>
//   }
// ]);

const AppRoutes = () => {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:id" element={<ImageView />} />
        </Route>
      </Routes>

      {/* Show the modal when a `backgroundLocation` is set */}
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/gallery/:id" element={<ImageModal />} />
        </Routes>
      )}
    </>
  );
};

export default AppRoutes;
