import { createBrowserRouter, RouterProvider } from "react-router-dom"
import NavBar from "./components/NavBar"
import Blogs from "./pages/Blogs"
import CreateBlog from "./pages/CreateBlog"
import ErrorPage from "./pages/ErrorPage"
import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage"

const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />
  },
  {
    path: "/",
    element: <NavBar><LandingPage /></NavBar>,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/blogs",
    element: <NavBar><Blogs /></NavBar>,
    errorElement: <ErrorPage />
  },
  {
    path: "/blog",
    element: <NavBar><Blogs /></NavBar>,
    errorElement: <ErrorPage />
  },
  {
    path: "/blogs/new",
    element: <NavBar><CreateBlog /></NavBar>,
    errorElement: <ErrorPage />
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App