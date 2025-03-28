import { useNavigate } from "react-router-dom";
const Navbar = ({ scrollToSection }) => {
    const navigate = useNavigate()
  const handleLogout =()=>{
    localStorage.removeItem('token')
    navigate('/login')
  }
  return (
    <nav className="fixed top-0 left-0 z-1 w-full flex py-4 bg-gradient-to-r from-blue-900/80 to-purple-900/90 text-white justify-between items-center lg:px-35 md:px-10 px-3 ">
      <button onClick={()=>scrollToSection(0)} className="font-bold text-2xl cursor-pointer">Global Groupware </button>
      <button
      onClick={handleLogout}
      className="cursor-pointer hover:text-purple-400 md:p-0 py-2 px-5 "
      >
        Logout
        </button>
    </nav>
  );
};

export default Navbar;
