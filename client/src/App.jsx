import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import {
  Home,
  About,
  Contact,
  AllServices,
  Pricing,
  Blog,
  AllProjects,
  ServiceDetails,
} from './Pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'services', element: <AllServices /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'blog', element: <Blog /> },
      { path: 'projects', element: <AllProjects /> },
      { path: 'servicedetails', element: <ServiceDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
