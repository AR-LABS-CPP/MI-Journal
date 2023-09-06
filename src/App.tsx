import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import FlaskExperience from "./content/FlaskExperience"
import ErrorPage from "./pages/ErrorPage"
import LandingPage from "./pages/LandingPage"
import MakingItFlow from "./content/MakingItFlow"
import LanguageServers from "./content/LanguageServers"
import LoginPage from "./pages/LoginPage"

const links = [
  {
    link: "/content/FlaskExperience",
    Page: <FlaskExperience />
  },
  {
    link: "/content/MakingItFlow",
    Page: <MakingItFlow />
  },
  {
    link: "/content/LanguageServers",
    Page: <LanguageServers />
  }
]

const App = () => {
  return (
    <BrowserRouter>
      {
        window.location.pathname !== "/login"
        &&
        <NavBar />
      }
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<LandingPage />} />
        {
          links.map(l => {
            return <Route path={l.link} element={l.Page} key={l.link} />
          })
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App