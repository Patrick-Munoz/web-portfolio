import './App.css'
import NavigationMenu from './components/NavigationMenu'
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
    </>
  )
}

export default App
