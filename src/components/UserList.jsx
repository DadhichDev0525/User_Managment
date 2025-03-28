import axios from "axios"
import { useState,useEffect } from "react"
import { API_URL } from "../utils/constants"
import UserCard from "./UsersCard";
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";
import { FaSearch } from "react-icons/fa";
import toast from "react-hot-toast";
import Skeleton from "./Skeleton";

const UserList = ({sectionRef}) => {
  const [userList, setUserList] = useState([])
  const [loading,setLoading] = useState(false)
  const [page,setPage] = useState(1)
  const [totalPage,setTotalPage] = useState(1)
  const [term, setTerm] = useState('')

  useEffect(()=>{
    fetchUsers(page)
  },[page])
  const deleteUser = (userId)=>{
    const updatedList = filteredList.filter(user=> user.id !== userId)
    setUserList(updatedList)
  }
  const editUser = (userId,updatedUser)=>{
    setUserList(prev=>{
    const  updatedList = prev.map(user=>(
        user.id === userId ? updatedUser : user
      ))

      return updatedList;
    })
  }

  const fetchUsers = async(page)=>{
    setLoading(true)
    try{
      const res = await axios.get(`${API_URL}/users?page=${page}`)
      setUserList(res.data.data)
      setTotalPage(res.data.total_pages)
      setLoading(false)
    }catch(error){
      toast.error(error.response?.data?.message || "Failed to fetch the users.")
      setLoading(false)
    }
  }

  const filteredList = userList.filter(user=>{
    const username = user?.first_name + ' ' + user?.last_name
    return username.toLowerCase().includes(term.toLowerCase())
  })


  return (
    <section ref={(el)=>sectionRef(el)} className="relative mt-16 bg-gray-100 flex flex-col gap-4 p-5  md:p-10 w-full ">
        <h1 className="w-full text-center text-3xl font-bold">Our Team</h1>
        <div className="ml-auto flex items-center px-3 border rounded-md max-w-sm w-full">
          <FaSearch />
        <input 
        type="text"
        value={term}
        onChange={(e)=>setTerm(e.target.value)}
        placeholder="Search User by name"
        className=" py-1 px-3 focus:outline-0 w-full "
        />
        </div>
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading ? <Skeleton times={6} className='h-25 max-w-md' /> :
          filteredList.map(user=>(
            <UserCard key={user.id} user={user} deleteUser={deleteUser} editUser={editUser} setLoading={setLoading} />
          ))}
        </div>
        <div className='mt-15 text-gray-600 flex items-center justify-between w-full text-2xl '>
          <button 
          onClick={()=>{setPage(Math.max(page-1,1))}}
          disabled = {page === 1}
          className={page === 1 ? 'text-gray-400 cursor-not-allowed' : 'cursor-pointer'}
          >
            <TfiAngleLeft />
          </button>
          <span className="h-7 w-7 rounded-md bg-white shadow flex justify-center items-center">{page}</span>
          <button
          onClick={()=>{setPage(Math.min(page+1,totalPage))}}
          disabled = {page === totalPage}
          className={page === totalPage ? 'text-gray-400 cursor-not-allowed' : 'cursor-pointer'}
          >
            <TfiAngleRight />
          </button>
        </div>
        

    </section>
  )
}

export default UserList