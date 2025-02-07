import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './routes/Home.tsx';
import Perfil from './routes/Perfil.tsx';
import Chat from './routes/Chat.tsx';
import Notification from './routes/Notification.tsx';
import ApresentationScrean from './pages/ApresentationScrean/ApresentationScrean.tsx';
import SearchPage from './routes/SearchPage.tsx'
import NonExistentPage from './pages/NonExistentPage/NonExistentPage.tsx';
import InitialCategories from './routes/SubPagesSearchPage/InitialCategories/InitialCategories.tsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TvPage from './routes/SubPagesSearchPage/TVs/TvPage.tsx';
import CellPage from './routes/SubPagesSearchPage/Celulares/CelularesPages.tsx';
import MonitorPage from './routes/SubPagesSearchPage/Monitores/MonitoresPage.tsx';
import TecladosPages from './routes/SubPagesSearchPage/Teclados/TecladosPage.tsx';
import Login from './routes/Login.tsx';
import Cadastro from './routes/Cadastro.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NonExistentPage />,
    element: <ApresentationScrean />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "perfil",
    element: <Perfil />,
  },
  {
    path: "chat",
    element: <Chat />,
  },
  {
    path: "notification",
    element: <Notification />,
  },
  {
    path: "search",
    element: <SearchPage />,
    children: [
      {
        path: "categories",
        element: <InitialCategories />
      },
      {
        path: "tvs",
        element: <TvPage />
      },
      {
        path: "celulares",
        element: <CellPage />
      },
      {
        path: "monitores",
        element: <MonitorPage />
      },
      {
        path: "teclados",
        element: <TecladosPages />
      }
    ]
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "Cadastro",
    element: <Cadastro />
  }
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)