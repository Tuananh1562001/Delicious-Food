import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiSushis } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import './category.css'
function Category() {
   return (
     <div className='List'>
         <NavLink to={'/cuisine/Italian'}>
             <FaPizzaSlice />
             <h4>Italian</h4>
         </NavLink>
         <NavLink to={'/cuisine/American'}>
             <FaHamburger />
             <h4>American</h4>
         </NavLink>
         <NavLink to={'/cuisine/VietNamese'}>
             <GiNoodles />
             <h4>VietNamese</h4>
         </NavLink>
         <NavLink to={'/cuisine/Japanese'}>
             <GiSushis />
             <h4>Japanese</h4>
         </NavLink>
     </div>
   )
 }
 
 export default Category