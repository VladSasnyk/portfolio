import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Skills from './pages/Skills';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/contacts',
        element: <Contacts/>
      },
      {
        path:'/skills',
        element: <Skills/>
      }
    ]
  }
])




function App() {
  return <RouterProvider router={router} />;
}

export default App
