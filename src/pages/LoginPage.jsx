import { useState } from "react"
import assets from "../assets/assets";

const LoginPage = () => {

  const [state,setState] = useState('Sign up');

   const [name, setName] = useState('');
   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');
   const [bio,setBio] = useState('');
   const [isDataSubmitted,setIsDataSubmitted] = useState(false);

   const onSubmitHandler = (event) =>{
    event.preventDefault();
    if(state==='Sign up' && !isDataSubmitted){
      setIsDataSubmitted(true);
      return;
    }

   }


  return (
     <div className='min-h-screen bg-cover bg-center flex items-center justify-center gap-8
      sm:justify-evenly max-sm:flex-col backdrop-blur-2xl'>

  {/* -------- left -------- */}
  <img  src={assets.logo_big} alt="" className='w-[min(30vw,250px)]'  />

  {/* -------- right -------- */}
   <form onSubmit={onSubmitHandler} className="border-2 bg-white/8 text-white border-gray-500
   p-6 flex flex-col gap-6 rounded-lg shadow-lg" >

     <h2 className="font-medium text-2xl flex justify-between items-center">
      {state}
      {isDataSubmitted &&
       <img onClick={()=>setIsDataSubmitted(false)} className="w-5 cursor-pointer" src={assets.arrow_icon} alt="" /> }
     
      </h2>

      { state=='Sign up' && !isDataSubmitted && (
        <input type="text"  className="p-2 border border-gray-500 rounded-md focus:outline-none"
        placeholder="Enter full name" value={name} onChange={(e)=>setName(e.target.value)} required />
      )
      }

      { !isDataSubmitted && (

         <>

           <input className="p-2 border border-gray-500 rounded-md focus:outline-none" type="email" value={email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}
           required />

            <input className="p-2 border border-gray-500 rounded-md focus:outline-none" type="password" value={password} placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}
           required />

           </>
      )}
      { state==='Sign up' &&
        isDataSubmitted && (
           
           <textarea className="p-2 border border-gray-500 rounded-md focus:outline-none" 
            onChange={(e)=>setBio(e.target.value)} value={bio}
            rows={4} placeholder="provide a short bio ..."required ></textarea>
        )
       
       
      }

      <button type="submit" className="py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer">
        {state==='Sign up' ? 'Create Account' :'Login Now'}
      </button>

      <div className="flex items-center gap-2 text-sm text-gray-500">
        <input type="checkbox" />
        <p>Agree to the terms of use & privacy policy.</p>
      </div>

      <div className="flex flex-col gap-2">
        { state==="Sign up" ? (
           <p className="text-sm text-gray-600"> Already have an account <span onClick={()=>{setState('Login'); setIsDataSubmitted(false)}} className="font-medium text-violet-500 cursor-pointer">Login here</span> </p> )
           : (
             <p className="text-sm text-gray-600" >Create an account <span onClick={()=>setState('Sign up')} className="font-medium text-violet-500 cursor-pointer" >Click here</span></p>
           )  
            }
      </div>


      

   </form>

</div>

  )
}

export default LoginPage