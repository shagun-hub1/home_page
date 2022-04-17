 
import Logo from '../utils/picture.jpg'
import HeaderData from './HeaderData'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react'
 

const Sidebar = () => {

  const [isClicked, setisClicked] = useState(false)

  return (
    <>
    {/* Desktop Sidebar */}
    <div className='hidden sm:flex  w-1/5  h-screen items-center flex-col py-5 bg-gray-200 gap-10 '>
      <div className='flex gap-2 items-center'>
        <img src={Logo}  alt='logo'/>
        <h1 className='text-xl font-bold'><span className='text-indigo-800'>Mentor</span><span className=' text-rose-500'>Plus</span></h1>
      </div>
      <div className='flex flex-col gap-3'>
      <HeaderData/>
      </div>
    </div>

    {/* Mobile Header */}
     <div className='flex sm:hidden justify-around w-screen h-20 shadow-md items-center'>
     <div className='flex gap-2 items-center'>
        <img src={Logo}  alt='logo'/>
        <h1 className='text-xl font-bold'><span className='text-indigo-800'>Mentor</span><span className=' text-rose-500'>Plus</span></h1>
      </div>
      <GiHamburgerMenu fontSize={30} className='cursor-pointer' onClick={()=>setisClicked(!isClicked)}/>
     </div>
     {isClicked && <div className='w-screen flex flex-col items-center gap-4 pt-3'><HeaderData/> </div>}
    </>
  )
} 

export default Sidebar