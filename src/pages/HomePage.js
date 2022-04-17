 
import { MainDiv,Sidebar } from "../components"

const HomePage = () => {
  return (
    <div className='flex flex-col sm:flex-row'>
    <Sidebar/>
    <MainDiv/>
    </div>
  )
}

export default HomePage