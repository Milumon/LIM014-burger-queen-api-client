import React from 'react';
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
/* import * as IoIcons from 'react-icons/io';  */


/* import * as BoxIcons from 'react-icons/bi';  */

export const SidebarData = [
    {
      title: 'Home',
      path: '/Home',
      icon: <AiIcons.AiFillHome className="bx"/> 
    },
    {
      title: 'Orders',
      path: '/reports',
      icon: <RiIcons.RiNotificationLine className="bx"/> 
    }, 
    {
      title: 'Products',
      path: '/products',
      icon: <AiIcons.AiOutlineSetting  className="bx"/> 
    }/* ,
    {
      title: 'Team',
      path: '/team',
      icon: <IoIcons.IoMdPeople />,
      cName: 'nav-text'
    },
    {
      title: 'Messages',
      path: '/messages',
      icon: <FaIcons.FaEnvelopeOpenText />,
      cName: 'nav-text'
    },
    {
      title: 'Support',
      path: '/support',
      icon: <IoIcons.IoMdHelpCircle />,
      cName: 'nav-text'
    } */
  ];