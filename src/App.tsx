import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "./pages/ErrorPage"
import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App