import {NavLink} from 'react-router-dom'

const menuItems=[
    {text:'Home',link:'/'},
    {text:'Profile',link:'/profile'},
    {text:'',link:'/kl'},
    {text:'',link:'/kl'},
    {text:'',link:'/kl'},
  ] 
 
  
  const HeaderData = () => {
    return (  
    <>
    {menuItems.map((item,idx)=>(
    <div key={idx}>
          <NavLink
          to={item.link}
          className={({ isActive }) => (isActive ?  'inline-block w-36 h-14 flex items-center justify-center bg-blue-400 text-base rounded-lg shadow-lg' : 'w-36 h-14 flex items-center justify-center inline-block bg-blue-100 text-base rounded-lg shadow-lg')}
          >
             
            {item.text}
             
         </NavLink>
        </div>
  ))}
  </>
    )
  }
  
  export default HeaderData
 