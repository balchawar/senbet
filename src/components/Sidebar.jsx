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
        <div>
            <h1>sidebar page</h1>
        </div>
        
    )
}

export default Sidebar
