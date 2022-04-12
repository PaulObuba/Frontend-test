import React from 'react'
import { HiOutlineChatAlt } from 'react-icons/hi';

// const ViewReports = () => {
//     return (
//         <div className='bg-white p-10 rounded-xl w-screen '>
//             <h1 className='text-xl font-black py-5'>View reports</h1>
//             <div className='text-xs w-5/6'>
//                 <div className='flex flex-row justify-between items-center p-3 border border-gray-200'>
//                     <div className='flex flex-row items-center'>
//                         <input type='checkbox' className='mr-4' />
//                         <p className='text-blue-900 mr-10 font-semibold'>February Report</p>
//                         <p>4th, October 2021 11:20am</p>
//                     </div>
//                     <div className='flex flex-row items-center'>
//                         <button className='mr-4 py-2 px-7 text-white bg-blue-400 border-2 hover:border-blue-500 rounded-md'>View</button>
//                         <span className='text-xl text-gray-400'><HiOutlineChatAlt /></span>
//                     </div>
//                 </div>
//                 <div className='flex flex-row justify-between items-center p-3 border border-gray-200'>
//                     <div className='flex flex-row items-center'>
//                         <input type='checkbox' className='mr-4' />
//                         <p className='text-blue-900 mr-10 font-semibold'>Match Report</p>
//                         <p>4th, October 2021 11:20am</p>
//                     </div>
//                     <div className='flex flex-row items-center'>
//                         <button className='mr-4 py-2 px-7 text-white bg-blue-400 border-2 hover:border-blue-500 rounded-md'>View</button>
//                         <span className='text-xl text-gray-400'><HiOutlineChatAlt /></span>
//                     </div>
//                 </div>
//                 <div className='flex flex-row justify-between items-center p-3 border border-gray-200'>
//                     <div className='flex flex-row items-center'>
//                         <input type='checkbox' className='mr-4' />
//                         <p className='text-blue-900 mr-10 font-semibold'>Match Report</p>
//                         <p>4th, October 2021 11:20am</p>
//                     </div>
//                     <div className='flex flex-row items-center'>
//                         <button className='mr-4 py-2 px-7 text-white bg-blue-400 border-2 hover:border-blue-500 rounded-md'>View</button>
//                         <span className='text-xl text-gray-400'><HiOutlineChatAlt /></span>
//                     </div>
//                 </div>
//                 <div className='flex flex-row justify-between items-center p-3 border border-gray-200'>
//                     <div className='flex flex-row items-center'>
//                         <input type='checkbox' className='mr-4' />
//                         <p className='text-blue-900 mr-10 font-semibold'>Match Report</p>
//                         <p>4th, October 2021 11:20am</p>
//                     </div>
//                     <div className='flex flex-row items-center'>
//                         <button className='mr-4 py-2 px-7 text-white bg-blue-400 border-2 hover:border-blue-500 rounded-md'>View</button>
//                         <span className='text-xl text-gray-400'><HiOutlineChatAlt /></span>
//                     </div>
//                 </div>
//                 <div className='flex flex-row justify-between items-center p-3 border border-gray-200'>
//                     <div className='flex flex-row items-center'>
//                         <input type='checkbox' className='mr-4' />
//                         <p className='text-blue-900 mr-10 font-semibold'>Match Report</p>
//                         <p>4th, October 2021 11:20am</p>
//                     </div>
//                     <div className='flex flex-row items-center'>
//                         <button className='mr-4 py-2 px-7 text-white bg-blue-400 border-2 hover:border-blue-500 rounded-md'>View</button>
//                         <span className='text-xl text-gray-400'><HiOutlineChatAlt /></span>
//                     </div>
//                 </div>
//                 <div className='flex flex-row justify-between items-center p-3 border border-gray-200'>
//                     <div className='flex flex-row items-center'>
//                         <input type='checkbox' className='mr-4' />
//                         <p className='text-blue-900 mr-10 font-semibold'>Match Report</p>
//                         <p>4th, October 2021 11:20am</p>
//                     </div>
//                     <div className='flex flex-row items-center'>
//                         <button className='mr-4 py-2 px-7 text-white bg-blue-400 border-2 hover:border-blue-500 rounded-md'>View</button>
//                         <span className='text-xl text-gray-400'><HiOutlineChatAlt /></span>
//                     </div>
//                 </div>
//                 <div className='flex flex-row justify-between items-center p-3 border border-gray-200'>
//                     <div className='flex flex-row items-center'>
//                         <input type='checkbox' className='mr-4' />
//                         <p className='text-blue-900 mr-10 font-semibold'>Match Report</p>
//                         <p>4th, October 2021 11:20am</p>
//                     </div>
//                     <div className='flex flex-row items-center'>
//                         <button className='mr-4 py-2 px-7 text-white bg-blue-400 border-2 hover:border-blue-500 rounded-md'>View</button>
//                         <span className='text-xl text-gray-400'><HiOutlineChatAlt /></span>
//                     </div>
//                 </div>
//                 <div className='flex flex-row justify-between items-center p-3 border border-gray-200'>
//                     <div className='flex flex-row items-center'>
//                         <input type='checkbox' className='mr-4' />
//                         <p className='text-blue-900 mr-10 font-semibold'>Match Report</p>
//                         <p>4th, October 2021 11:20am</p>
//                     </div>
//                     <div className='flex flex-row items-center'>
//                         <button className='mr-4 py-2 px-7 text-white bg-blue-400 border-2 hover:border-blue-500 rounded-md'>View</button>
//                         <span className='text-xl text-gray-400'><HiOutlineChatAlt /></span>
//                     </div>
//                 </div>
//                 <div className='flex flex-row justify-between items-center p-3 border border-gray-200'>
//                     <div className='flex flex-row items-center'>
//                         <input type='checkbox' className='mr-4' />
//                         <p className='text-blue-900 mr-10 font-semibold'>February Report</p>
//                         <p>4th, October 2021 11:20am</p>
//                     </div>
//                     <div className='flex flex-row items-center'>
//                         <button className='mr-4 py-2 px-7 text-white bg-blue-400 border-2 hover:border-blue-500 rounded-md'>View</button>
//                         <span className='text-xl text-gray-400'><HiOutlineChatAlt /></span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
const reports = [
    {
        checkbox: <input type='checkbox' />,
        date: 'February Report',
        dateAndTime: '4th, October 2021 11:20am',
        view: 'View',
        icon: <HiOutlineChatAlt />,
    },
    {
        checkbox: <input type='checkbox' />,
        date: 'March 2021 Report',
        dateAndTime: '4th, October 2021 11:20am',
        view: 'View',
        icon: <HiOutlineChatAlt />,
    },
    {
        checkbox: <input type='checkbox' />,
        date: 'March 2021 Report',
        dateAndTime: '4th, October 2021 11:20am',
        view: 'View',
        icon: <HiOutlineChatAlt />,
    },
    {
        checkbox: <input type='checkbox' />,
        date: 'March 2021 Report',
        dateAndTime: '4th, October 2021 11:20am',
        view: 'View',
        icon: <HiOutlineChatAlt />,
    },
    {
        checkbox: <input type='checkbox' />,
        date: 'March 2021 Report',
        dateAndTime: '4th, October 2021 11:20am',
        view: 'View',
        icon: <HiOutlineChatAlt />,
    },
    {
        checkbox: <input type='checkbox' />,
        date: 'March 2021 Report',
        dateAndTime: '4th, October 2021 11:20am',
        view: 'View',
        icon: <HiOutlineChatAlt />,
    },
    {
        checkbox: <input type='checkbox' />,
        date: 'March 2021 Report',
        dateAndTime: '4th, October 2021 11:20am',
        view: 'View',
        icon: <HiOutlineChatAlt />,
    },
    {
        checkbox: <input type='checkbox' />,
        date: 'March 2021 Report',
        dateAndTime: '4th, October 2021 11:20am',
        view: 'View',
        icon: <HiOutlineChatAlt />,
    },
    {
        checkbox: <input type='checkbox' />,
        date: 'February Report',
        dateAndTime: '4th, October 2021 11:20am',
        view: 'View',
        icon: <HiOutlineChatAlt />,
    },
]

const ViewReports = () => {
    return (
        <div className='bg-white p-10 rounded-xl w-screen'>
            <h1 className='text-xl font-black py-5'>View reports</h1>
            {reports.map((item, i) => (
                <div className='flex flex-row justify-between items-center p-3 border border-gray-200 text-xs w-5/6'>
                    <div className='flex flex-row items-center'>
                        <p className='mr-4 opacity-25'> {item.checkbox} </p>
                        <p className='text-blue-900 mr-10 font-semibold'> {item.date} </p>
                        {item.dateAndTime}
                    </div>
                    <div className='flex flex-row items-center'>
                        <button className='mr-4 py-2 px-7 text-white bg-blue-400 border-2 hover:border-blue-500 rounded-md'>{item.view} </button>
                        <span className='text-xl text-gray-400'> {item.icon} </span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ViewReports;
