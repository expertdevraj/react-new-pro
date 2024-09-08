import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import Drawer from '@mui/material/Drawer';

const Navbar = () => {

  const [opeMenu, setOpenMenu] = useState (false);
  const menuOptions=[
      {
        text: "Home",
        links: "/"
      },
      {
        text: "About Us",
        links: "/about-us"
      },
      {
        text: "Contact",
        links: "/contact-us"
      },
    ]
 

  return (
    <> 
      <ul className='slimmenu'>
        {menuOptions.map((item) => (
          <li> <NavLink key={item.text} to={item.links} > {item.text} </NavLink> </li>
        ))}
      </ul>

      <div className="hambergen">
        <NavLink onClick={() => setOpenMenu(true)} > <span></span> </NavLink>
      </div>
      <Drawer open={opeMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <div
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >          
          <ul>
            {menuOptions.map((item) => (
              <li><NavLink to={item.links} >
              {item.text}
              </NavLink></li>
            ))}
          </ul>
        </div>
      </Drawer>

    </>
  )
}

export default Navbar
