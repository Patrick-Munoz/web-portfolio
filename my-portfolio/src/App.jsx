import './App.css'
import NavigationMenu from './components/NavigationMenu'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

function App() {
  return (
    <>
      <NavigationMenu/>
      <Home/>
      <Projects/>
      <Skills/>
      <Contact/>
    </>
  )
}

export default App
