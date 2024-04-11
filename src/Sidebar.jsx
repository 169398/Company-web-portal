import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsCardText, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill,BsQuestionCircleFill,BsBuilding, BsFileText  ,BsCalendarFill, BsFillGearFill}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsBuilding  className='icon_header'/>Idris  Company
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsCardText className='icon'/> Form Apllicants
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    < BsFileText  className='icon'/> Our Documents
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> View Networks
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> Inventory
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Dynamic Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsCalendarFill className='icon'/> Calender
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill  className='icon'/> 3rd Party Management
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href="">
                    <BsQuestionCircleFill  className='icon'/> Help
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar