import { useState } from "react"
import {useNavigate} from 'react-router-dom';
import assets from '../assets/assets';


const ProfilePage = () => {
  
  const [selectedImg,setSelectedImg] = useState(null);
  const navigate = useNavigate();
  const [name,setName] = useState("Aftab Alam");
  const [bio,setBio] = useState("Hi everyone, I am Aftab");

  const submitHandler = async(e) =>{
    e.preventDefault();
    navigate('/');
  }
  return (
    <div className="min-h-screen bg-cover bg-no-repeat flex items-center justify-center" >

      <div className="w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-2
      border-gray-600 flex items-center justify-between max-sm:flex-col-reverse rounded-lg" >
        <form onSubmit={submitHandler} className="flex flex-col gap-5 p-10 flex-1" >
          <h3 className="text-lg">Profile details</h3>
          <label className="flex items-center gap-3 cursor-pointer" htmlFor="avatar">
            <input onChange={(e)=>setSelectedImg(e.target.files[0])} type="file"  id="avatar" accept=".png, .jpg, .jpeg" hidden />
            <img src={selectedImg?URL.createObjectURL(selectedImg):assets.avatar_icon} alt="" className={`w-12 h-12 ${selectedImg && 'rounded-full'}`} />
            upload profile image
          </label>

          <input value={name} onChange={(e)=>setName(e.target.value)} className="p-2 border border-gray-500 rouded-md focus:outline-none focus:ring-2 focus:ring-violet-500" type="text" required  placeholder="your name" />
          <textarea value={bio} onChange={(e)=>setBio(e.target.value)} className="p-2 border border-gray-500 rouded-md focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Write profile bio" rows={4} required></textarea>

           <button className="p-2 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-full text-lg cursor-pointer"  type="submit">Save</button>
        </form>
        <img className="max-w-44 aspect-square rounded-full mx-10 max-sm:mt-10" src={assets.logo_icon} alt="" />
      </div>

    </div>
  )
}

export default ProfilePage