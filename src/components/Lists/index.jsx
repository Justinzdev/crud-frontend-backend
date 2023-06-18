import React, { useState } from 'react'

const Lists = () => {
    const [getStudents, setStudents] = useState([
        {
            name: 'นาย ก',
            year: 2,
            gender: 'ชาย',
            age: '18'
        },
        {
            name: 'นาย ก',
            year: 2,
            gender: 'ชาย',
            age: '18'
        },
        {
            name: 'นาย ก',
            year: 2,
            gender: 'ชาย',
            age: '18'
        },
        {
            name: 'นาย ก',
            year: 2,
            gender: 'ชาย',
            age: '18'
        },
        {
            name: 'นาย ก',
            year: 2,
            gender: 'ชาย',
            age: '18'
        }
    ])

    return (
        <>
            <div className='w-full text-center p-4 mt-8'>
                <h1 className='text-[30px] font-bold'>รายการนักเรียน</h1>
            </div>
            <div className='flex justify-center items-center p-5 w-full mt-2'>  
                <div className="relative overflow-x-auto w-[80%]">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    ชื่อ - นามสกุล
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ชั้นปีที่
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    เพศ
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    อายุ
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    -
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                getStudents.map((index, i) => {
                                    return (
                                        <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                { index.name }
                                            </th>
                                            <td className="px-6 py-4">
                                                { index.year }
                                            </td>
                                            <td className="px-6 py-4">
                                                { index.gender }
                                            </td>
                                            <td className="px-6 py-4">
                                                { index.age }
                                            </td>
                                            <td className="flex gap-2 justify-center items-center px-6 py-4 w-full">
                                                <button type='button' className='bg-orange-500 text-white w-[30%] p-2 rounded-full'>แก้ไข</button>
                                                <button type='button' className='bg-red-500 text-white w-[30%] p-2 rounded-full'>ลบ</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Lists