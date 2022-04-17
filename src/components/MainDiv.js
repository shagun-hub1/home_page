import { useEffect,useState } from 'react';
import {BsArrowLeft} from 'react-icons/bs'
import axios from 'axios'

const MainDiv = () => {

  useEffect(() => {
    console.log("hiii")
    fetchData();
  }, []);

  const [data, setData] = useState([])
  const fetchData = () => {
    console.log("hi")
     return axios.get("https://mentorplus.s3.ap-south-1.amazonaws.com/config/availability.json")
           .then((response)=>setData(response.data))
    }

     
   
    
    const newData = data?.map((obj) => ({ ...obj, date: new Date(obj.date) }));

    //contain the index of selected day
  const [index, setIndex] = useState(0)
    
   
  return (
      <>
    <div className='flex-[3]'>
        <div className='hidden sm:block border-b-2 w-full h-14'></div>
    <div className='pl-10 mt-3'>
        <div><BsArrowLeft/></div>
        <div>
          <h1 className='font-bold text-2xl'>Book Demo session Slot</h1>
          <div className='flex'>
            <hr className='w-8 border-blue-500 border-t-4' /><hr className='border-red-500 w-8 bg-red-500 border-t-4' />
          </div>
          <h1 className='font-bold mt-8 mb-4'>Select Date</h1>


          <div className='flex gap-5'  >
          {newData?.map((item,idx)=>(

            <div className='flex flex-col font-bold border-blue-500 border-2 py-2 px-4 rounded-md cursor-pointer' 
            key={idx} 
            //clicking functionality
            onClick={()=>setIndex(idx)}
            >  
              <p>{item.date.toString().split(" ")[0]}</p>
              <p className='text-xl'>{item.date.toString().split(" ")[2]}</p>
              <p>{item.date.toString().split(" ")[1]}</p>
            </div>  
          ))}
          </div>

          <h1 className='text-lg font-bold mt-4'>Select Slot</h1>

            {/* Only clicked day slot will be visible default day is first day */}
          <div className='flex gap-4 mt-3'>
          {newData[index]?.available.map((item)=>(
            <div className='flex border-2 border-blue-500 p-2 rounded-md cursor-pointer'>
              <p>{item.hour}:{item.min>0 ? item.min : item.min+'0' } PM</p>
              <p>-</p>
              <p>{item.hour+1}:{item.min>0 ? item.min : item.min+'0' }PM</p>     
            </div>
          ))}
          </div>
        </div>

        <button className='py-2 px-4 font-bold bg-blue-900 my-6 rounded-md'>Proceed To Pay</button>
    </div>
    </div>
      </>
  )
}

export default MainDiv