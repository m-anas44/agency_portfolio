import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import { Home, About, Contact, AllServices, Pricing, Blog,BlogDetail, AllProjects, ServiceDetails } from './Pages/index';

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
        path: 'aboutUs',
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
        path: 'blog/:slug',
        element: <BlogDetail />,
      },
      {
        path: 'projects',
        element: <AllProjects />,
      },
      {
        path: 'services/:slug',
        element: <ServiceDetails />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
