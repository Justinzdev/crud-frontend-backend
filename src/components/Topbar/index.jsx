import React from 'react'
import { Link } from 'react-router-dom'

const menuLists = [
    {
        name: 'รายการ',
        path: '/'
    },
    {
        name: 'สร้างรายการ',
        path: '/create'
    }
]

const Topbar = () => {
    return (
        <div className='bg-black/20 w-full h-auto flex justify-center items-center gap-5 p-4'>
            {
                menuLists.map((index, i) => {
                    return (
                        <Link key={i} to={index.path}>
                            <li className='list-none'>
                                <p>{ index.name }</p> 
                            </li>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Topbar