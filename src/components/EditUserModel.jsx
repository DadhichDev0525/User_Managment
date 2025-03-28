import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { API_URL } from "../utils/constants";

const EditUserModal = ({ user, closeModal, editUser ,setLoading}) => {
  const [formData, setFormData] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const res = await axios.put(`${API_URL}/users/${user.id}`, {...user, ...formData});
      toast.success("User updated successfully!");
      editUser(user.id,res.data)
      closeModal();
      setLoading(false)
    } catch (error) {
        setLoading(false)
      toast.error(error.response?.data?.message || "Failed to update user.");
    }
  };

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/85 ">
      <div className="p-6 mx-2 rounded-lg shadow-lg max-w-md bg-gray-100/90">
        <h2 className="text-xl font-semibold mb-4">Edit User</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
            <label htmlFor='fistname' className='text-lg text-zinc-700 font-semibold'>FirstName</label>
          <input
            type="text"
            id="firstname"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-0"
            placeholder="First Name"
          />
          <label htmlFor='lastname' className='text-lg text-zinc-700 font-semibold'>LastName</label>
          <input
            type="text"
            id="lastname"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Last Name"
          />
          <label htmlFor='email' className='text-lg text-zinc-700 font-semibold'>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Email"
          />
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 bg-gray-300 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;
