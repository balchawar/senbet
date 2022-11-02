import React from 'react'
import {FaTh,FaUser} from 'react-icons/fa'

const Sidebar = () => {
    const menuItem = [
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/abalat",
            name:"Abalat",
            icon:<FaUser/>
        }
    ]
    return (
        <div className='w-100'>
            <typography>
                sidebar page
            </typography>
           
        </div>
        
    )
}

export default Sidebar
