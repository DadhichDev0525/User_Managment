import axios from "axios";
import { BiSolidEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { API_URL } from "../utils/constants";
import toast from "react-hot-toast";
import EditUserModal from "./EditUserModel";
import { useState } from "react";

const UserCard = ({user,deleteUser, editUser, setLoading}) => {
    const [isModelOpen , setIsModelOpen] =useState(false)

    const handleDelete = async(userId)=>{
        setLoading(true)
        try{
            await axios.delete(`${API_URL}/users/${userId}`)
            toast.success("User Deleted successfully")
            deleteUser(userId)
            setLoading(false)
        }catch(error){
            setLoading(false)
            toast.error(error.response?.data?.message || "Failed to delete the user.")
        }
    }
  return (
    <div className='relative rounded-md px-3 py-5  bg-gray-200 shadow flex items-center gap-5 max-w-md overflow-hidden'>
        <div className="absolute top-2 right-3 flex gap-1 text-xl">
            <div 
            className="cursor-pointer  text-blue-300 hover:text-blue-400"
            onClick={()=>setIsModelOpen(true)}
            >
                <BiSolidEditAlt />
                </div>
            <div
             className="cursor-pointer text-purple-400 hover:text-purple-500"
             onClick={()=>handleDelete(user?.id)}
             >
                <MdDelete />
                </div>
        </div>
        <img src={user?.avatar} className='rounded-full h-20 ' />
       <div>
       <h2 className='text-xl font-semibold text-gray-800'>{user?.first_name + ' ' + user?.last_name}</h2>
       <p className='font-medium text-gray-600'>{user?.email}</p>
       </div>
       {isModelOpen && <EditUserModal user={user} closeModal={()=>setIsModelOpen(false)} editUser={editUser} setLoading={setLoading} />}
    </div>
  )
}

export default UserCard;