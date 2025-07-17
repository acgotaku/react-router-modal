import {
  // createBrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import type { Location } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../views/Home';
import Gallery from '../views/Gallery';
import ImageView from '../views/ImageView';
import ImageModal from '../views/ImageModal';
import ViewModal from '../views/ViewModal';
import ViewView from '../views/ViewView';

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

interface LocationState {
  backgroundLocation?: Location;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getBaseLocation = (loc: Location<any>): Location => {
  const state = loc.state as LocationState;
  return state?.backgroundLocation
    ? getBaseLocation(state.backgroundLocation)
    : loc;
};
const AppRoutes = () => {
  const location = useLocation();
  const baseLocation = getBaseLocation(location);
  const state = location.state as LocationState;

  return (
    <>
      <Routes location={baseLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:id" element={<ImageView />} />
          <Route path="/view/:id" element={<ViewView />} />
        </Route>
      </Routes>

      {/* Show the modal when a `backgroundLocation` is set */}
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/gallery/:id" element={<ImageModal />} />
          <Route path="/view/:id" element={<ViewModal />} />
        </Routes>
      )}
    </>
  );
};

export default AppRoutes;
