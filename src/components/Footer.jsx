
const Footer = ({scrollToSection}) => {
    return (
      <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-bold">Global Groupware Solutions</h2>
                <p className="text-gray-400">Building Tomorrow's Technology Today</p>
              </div>
              <div className="flex space-x-4">
                <button onClick={()=>scrollToSection(0)} className="hover:text-blue-400 cursor-pointer transition duration-300">Twitter</button>
                <button onClick={()=>scrollToSection(0)} className="hover:text-blue-400 cursor-pointer transition duration-300">LinkedIn</button>
                <button onClick={()=>scrollToSection(0)} className="hover:text-blue-400 cursor-pointer transition duration-300">GitHub</button>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
              © {new Date().getFullYear()} Global Groupware Solutions. All rights reserved.
            </div>
          </div>
        </footer>
    )
  }
  
  export default Footer