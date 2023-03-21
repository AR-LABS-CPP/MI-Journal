import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import FlaskExperience from "./content/FlaskExperience"
import ErrorPage from "./pages/ErrorPage"
import LandingPage from "./pages/LandingPage"

const links = [
  {
    link: "/content/FlaskExperience",
    Page: <FlaskExperience />
  }
]

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<LandingPage />} />

        {
          links.map(l => {
            return <Route path={l.link} element={l.Page} />
          })
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App