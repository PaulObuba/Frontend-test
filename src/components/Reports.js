import React from 'react'
import Navbar from '../Navbar';
import Header from './Header';
import Sidebar from './Sidebar';
import ViewReports from './ViewReports';

const Reports = () => {
  return (
    <div className='bg-gray-100'>
        <Navbar />
        <Header />
        <div className='flex flex-row justify-start items-start'>
          <Sidebar />
          <ViewReports />
        </div>
    </div>
  )
}

export default Reports;
