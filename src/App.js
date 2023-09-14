import { defer, RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import RootLayout from './pages/Root';
import PricePage from './pages/Price';
import PortfolioPage from './pages/Portfolio';
import ProjectPage from './pages/Project';
import ContactsPage from './pages/Contacts';
import ErrorPage from './pages/Error';

import { loadProjects } from './components/HomePageProjectsListLayout';

const router = createBrowserRouter([
  {
    path: `/`,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: loader,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'price',
        element: <PricePage />,
      },
      {
        path: 'portfolio',
        children: [
          {
            index: true,
            element: <PortfolioPage />,
            loader: loader,
          },
          {
            path: ':project_url',
            element: <ProjectPage />,
          }
        ],
      },
      {
        path: 'contacts',
        element: <ContactsPage />,
      }
    ],
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

function loader() {
  return defer({
    projects: loadProjects(),
  });
};

export default App;