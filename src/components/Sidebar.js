import React from 'react';
import { HiArchive } from 'react-icons/hi';
import { HiOutlineClipboardCopy } from 'react-icons/hi';

const Sidebar = () => {
    const menuItems = [
        {
            icon: 'uil-rocket',
            title: 'Welcome',
        },
        {
            icon: 'uil-create-dashboard',
            title: 'Dashboard',
        },
        {
            icon: 'uil uil-wallet',
            title: 'Sales',
        },
        {
            icon: 'uil-shopping-cart-alt',
            title: 'Purchases',
            children: [
                {
                    title: 'Bills',
                },
                {
                    title: 'Vendors',
                },
                {
                    title: 'Product & Services',
                }
            ]
        },
        {
            icon: 'uil uil-calculator-alt',
            title: 'Accounting',
        },
        {
            icon: 'uil uil-university',
            title: 'Banking',
        },
        {
            icon: 'uil uil-invoice',
            title: 'Payroll',
        },
        {
            icon: 'uil uil-clipboard-alt',
            title: 'Reports',
        },
        {
            icon: 'uil uil-users-alt',
            title: 'Analytics',
            children: [
                {
                    title: 'To-Do'
                },
                {
                    title: 'Upload Chat'
                },
                {
                    title: 'Shedule'
                },
                {
                    title: 'Message Board'
                },
                {
                    title: 'Make Payment'
                },
                {
                    title: 'Billing'
                }
            ]
        },
        {
            icon: 'uil uil-setting',
            title: 'Setting',
        }
    ]

    return (
       <div className='bg-gray-100 w-80 h-full'>
         <ul className='py-10'>
             {menuItems.map((item, index) => 
                <li className='px-10 mb-6 text-gray-400' key={index}>
                    <span className='mr-5 text-2xl'><i className={item.icon}></i></span>
                    {item.title}
                    </li>
                )}
         </ul>
         <div className='flex flex-row justify-start items-center text-xs my-3 mx-10 font-semibold'>
             <span className='mr-5 text-2xl text-red-300'><HiOutlineClipboardCopy /></span>
             <p>Layout</p>
         </div>
         <div className='flex flex-row justify-start items-center text-white text-xs my-10 mx-10 bg-blue-700 rounded-md'>
             <span className='p-1 text-3xl text-white'><HiArchive /></span>
             <p>Accept Payments</p>
         </div>
       </div>
    )
}

export default Sidebar;
