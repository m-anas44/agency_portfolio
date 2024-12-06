import { Home, About, Contact, AllServices, Pricing, Blog, BlogDetail, AllProjects } from './Pages/index';
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}


export default App;
