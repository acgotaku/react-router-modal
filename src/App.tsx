import React from 'react';
// import { RouterProvider } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

const App: React.FC = () => {
  // return (
  //   <RouterProvider
  //     router={router}
  //     future={{
  //       v7_startTransition: true
  //     }}
  //   />
  // );

  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true
      }}
    >
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
