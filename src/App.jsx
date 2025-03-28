import { useRef } from 'react'
import Navbar from "./components/Navbar"
import UserList from "./components/UserList"
import Footer from './components/Footer'
const App = () => {
   const sectionRefs = useRef([])
  
    const scrollToSection = (index) => {
      sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
    };
  return (
   <div className="w-full ">
   <Navbar scrollToSection={scrollToSection} />
   <UserList sectionRef={(el) => (sectionRefs.current[0] = el)} />
   <Footer scrollToSection={scrollToSection} />
   </div>
  )
}

export default App