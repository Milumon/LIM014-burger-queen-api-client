import React,  { useState } from 'react';
/* import styled from 'styled-components' */
import { NavLink } from 'react-router-dom';
import { SidebarData } from '../Components/SidebarData';
/* import { Link } from 'react-router-dom'; */
import { BiSearch, BiMenu, BiLogOut } from "react-icons/bi";
import { IconContext } from 'react-icons';
import './Navbar.css';

 

function Navbar(props) {

    const [colorIcon, setColorIcon] = useState("#EA7C69");
    const [active, setActive] = useState("");

    const changeStyle = () => {
        setActive((prevState) => {
            if (prevState === "active"){
                setActive("")
            }
            else {
                setActive("active")
            }
        })
    }

    return (
        <>   
            <div className={'sidebar ' + active}>
                <div className="logo_content">
                <div className="logo">
                    <i className='bx bxl-c-plus-plus'></i>
                    <div className="logo_name">Q.Burgeer</div>
                </div> 
                <BiMenu className="bx bx-menu" id="btn" onClick={changeStyle}  />  
                </div>


                <ul className="nav_list">     
                <li>
                    <BiSearch className="bx bx-search" />
                    <input type="text" placeholder="Search... " />
                    <span className="tooltip">Search</span>
                </li>

 
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} >
                        <NavLink to={item.path} onMouseOver={() => setColorIcon("white")} onMouseLeave={() => setColorIcon("#EA7C69")}>
                        <IconContext.Provider value={{ color: colorIcon, size: '1.2rem' }}>
                          {item.icon} 
                        </IconContext.Provider>
                          <span className="tooltip">{item.title}</span>
                        </NavLink>
                      </li>
                    );
                    })}  
                </ul>


                <div className="profile_content">
                <div className="profile">
                    <div className="profile_details">
                    <img src="profile.jpg" alt=""/>
                    <div className="name_job">
                        <div className="name">Piratas del caribe xd</div>
                        <div className="job">Web Designer</div>
                    </div>
                    </div>
                    <BiLogOut className="bx bx-menu" id="log_out" /> 
                </div>
                </div>
            </div>  

        </>
    );
}

export default Navbar;