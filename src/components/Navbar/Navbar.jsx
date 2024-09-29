import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile' className={({ isActive }) => isActive ? s.activeLink : ''}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/dialogs' className={({ isActive }) => isActive ? s.activeLink : ''}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/news' className={({ isActive }) => isActive ? s.activeLink : ''}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/music' className={({ isActive }) => isActive ? s.activeLink : ''}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/settings' className={({ isActive }) => isActive ? s.activeLink : ''}>Settings</NavLink>
      </div>
      <div className='friends_wrapper'>
        <p>Friends</p>
        <div className="friends_block">
          {/* <input type="radio" value="rt" />
          <input type="radio" value="rr"/>
          <input type="radio" value="ry"/> */}

          <input type="radio" name="radio1" checked/>
          <input type="radio" name="radio1"/>
          <input type="radio" name="radio1"/>
          {/* <input type="radio" name="test" checked value="1"></input>
<input type="radio" name="test" value="2"></input> */}

          <div>
          ffffff ooooo ppppp
          </div>
        </div>
      </div>
    </nav>
  )
};



export default Navbar;