import React from 'react'
import Navbar from '../Navbar';
import AddBills from './AddBills';
import Header from './Header';
import Sidebar from './Sidebar';
import Icons from './Sidebar';

const Bills = () => {
    return (
        <div className='bg-gray-100'>
            <Navbar />
            <Header />
            <div className='flex flex-row justify-start items-start'>
                <Sidebar />
                <AddBills />
            </div>
        </div>
    )
}

export default Bills;
