import React from 'react'

const Create = () => {
    return (
        <div className='p-4 w-full mt-10'>
            <form>
                <div className='w-[20%] m-auto text-center'>
                    <input className='px-4 py-2 w-full outline-none border-[2px] border-black/10 rounded-full' type='text' placeholder='ชื่อ - นามสกุล' required />
                </div>
                <div className='w-[20%] m-auto mt-5 text-center'>
                    <input className='px-4 py-2 w-full outline-none border-[2px] border-black/10 rounded-full' type='number' placeholder='ชั้นปีที่' required />
                </div>
                <div className='w-[20%] m-auto mt-5 text-center'>
                    <input className='px-4 py-2 w-full outline-none border-[2px] border-black/10 rounded-full' type='text' placeholder='เพศ' required />
                </div>
                <div className='w-[20%] m-auto mt-5 text-center'>
                    <input className='px-4 py-2 w-full outline-none border-[2px] border-black/10 rounded-full' type='number' placeholder='อายุ' required />
                </div>
                <div className='w-full text-center mt-5 p-2'>
                    <button type='submit' className='bg-green-500 w-[10%] rounded-full p-2 text-white'>เพิ่ม</button>
                </div>
            </form>
        </div>
    )
}

export default Create