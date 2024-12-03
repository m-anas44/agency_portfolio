
import { Home, About, Contact, AllServices, Pricing, Blog, AllProjects } from './Pages/index';
import Layout from './Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Create the router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'services',
        element: <AllServices />,
      },
      {
        path: 'pricing',
        element: <Pricing />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'projects',
        element: <AllProjects />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}


export default App;
