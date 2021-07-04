import React, { useState } from 'react';
import styled from 'styled-components'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';


const color = '#E08E2F'
const colorContrast = '#4C2414'


const StyledHeader = styled.div`
    background-color: ${color};
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
` 

const StyledNavLink = styled(NavLink)`
    margin-left:2rem;
    font-size: 2rem;
    background: none;
`;

const StyledNavLinkB = styled(StyledNavLink)`
    margin-left:0.5rem; 
`;

const NavMenuActive = {  
  backgroundColor: color,
  width: "250px",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  position: "fixed",
  top: 0,
  left: "-100%",
  transition: "850ms"
} 
 

const NavMenu  =  {
  backgroundColor: colorContrast,
  width: "250px",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  position: "fixed",
  top: 0, 
  left: 0,
  transition: "350ms" 
}

const Menu = styled.ul`
     width: 100%;
` 

const StyleNavToggle = styled.nav`
    background-color: ${colorContrast};
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
` 

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <StyledHeader>
            <StyledNavLink to="#">
                <FaIcons.FaBars onClick={showSidebar} />
            </StyledNavLink>
        </StyledHeader>


        <nav style={sidebar ? NavMenuActive : NavMenu}>
          <Menu onClick={showSidebar}>
            <StyleNavToggle>
                <StyledNavLinkB to='#'>
                    <AiIcons.AiOutlineClose />
                </StyledNavLinkB>
            </StyleNavToggle>

            
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <NavLink to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </Menu>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;