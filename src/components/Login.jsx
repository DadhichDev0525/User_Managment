import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { API_URL } from "../utils/constants";
import toast from "react-hot-toast";

const Login = () => {
    const navigate = useNavigate()
  const [loading,setLoading] =useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const handleSubmit =async (e) => {
    e.preventDefault();
    setLoading(true)
   try{
    const response = await axios.post(`${API_URL}/login`,{
        email,
        password
    })
    localStorage.setItem("token",response.data.token);
    toast.success("Logged in successfully!")
    setLoading(false)
    navigate('/')
   }catch(error){
    setLoading(false)
    toast.error(error.response?.data?.error || "Login failed, Check your credentials")
   }
  };

  return (
    <div className="h-[100vh] w-full flex justify-center items-center bg-gradient-to-r from-blue-400 to-purple-300">
      <div className="md:min-w-md md:p-10 p-3 bg-gradient-to-r from-blue-300 to-purple-400 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-5">
          <h1 className="w-full text-center font-semibold text-3xl">Login</h1>
          <label htmlFor="email" className=" font-medium text-lg">
            UserName
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Type your Email"
            className="p-1 sm:p-3 w-full outline-0 my-2 border rounded "
            required
          />
          <label htmlFor="password" className=" font-medium text-lg">
            Password
          </label>
          <div className="pr-3 my-2 border rounded w-full flex items-center">
            <input
              type={show ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Enter your Password"
              className="p-1 sm:p-3 w-full outline-0"
              required
            />
            <div className="cursor-pointer" onClick={() => setShow(!show)}>
              {show ? <IoMdEyeOff /> : <IoMdEye />}
            </div>
          </div>
          <button className="rounded w-full py-2 cursor-pointer flex justify-center items-center font-semibold mt-10 bg-gradient-to-r from-blue-400 to-purple-600 hover:from-blue-500 hover:to-purple-700 ">
            {!loading ? 'Login' : <div className="w-5 h-5 border-2 border-purple-400 border-t-blue-600 rounded-full animate-spin" />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
