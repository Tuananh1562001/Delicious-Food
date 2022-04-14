import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiSushis } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import './category.css'
function Category() {
   return (
     <div className='List'>
         <NavLink to={'/cuisine/Italian'} className={({isActive}) => (isActive ? 'Slink active' : 'Slink')}>
             <FaPizzaSlice />
             <h4>Italian</h4>
         </NavLink>
         <NavLink to={'/cuisine/American'} className="Slink">
             <FaHamburger />
             <h4>American</h4>
         </NavLink>
         <NavLink to={'/cuisine/VietNamese'} className="Slink">
             <GiNoodles />
             <h4>VietNamese</h4>
         </NavLink>
         <NavLink to={'/cuisine/Japanese'} className="Slink">
             <GiSushis />
             <h4>Japanese</h4>
         </NavLink>
     </div>
   )
 }
 
 export default Category