import { useState } from 'react'
import { AboutMe } from './components/Header/AboutMe/index'
import { Header } from './components/Header/index'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    // border-r-[900px] border-dark
    <div className='min-h-[100vh] bg-black flex justify-center' >
     <div className='h-full flex flex-col max-w-[1440px]'>
     <Header />
     <AboutMe />
     <Skills />
     <Projects />
     </div>
    </div>
  )
}

export default App
