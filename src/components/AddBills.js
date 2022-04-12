import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'

const AddBills = () => {
    return (
        <div className='bg-white p-10 rounded-xl w-screen'>
            <form>
                <h1 className='text-xl font-black py-5'>Add bills</h1>
                <div className='grid grid-cols-3 justify-center items-start gap-x-32 w-5/6'>
                    <div className='flex flex-col justify-start items-start mb-5 text-xs'>
                        <label className='text-xs text-gray-600 mb-3 ml-1' for='vendor'>Vendor</label>
                        <select className='border border-gray-300 w-40 p-2 rounded-md text-gray-400 outline-none' id='vendor'>
                            <option>Choose</option>
                        </select>
                    </div>
                    <div className='flex flex-col justify-start items-start mb-5 text-xs'>
                        <label className='text-xs text-gray-600 mb-3 ml-1' for='date'>Date</label>
                        <input className='border border-gray-300 w-40 p-2 rounded-md text-gray-400 outline-none' type='date' id='date' />
                    </div>
                    <div className='flex flex-col justify-start items-start mb-5 text-xs'>
                        <label className='text-xs text-gray-600 mb-3 ml-1'>Bill#</label>
                        <input className='border border-gray-300 w-40 p-2 rounded-md text-gray-400 outline-none' type='text' />
                    </div>
                    <div className='flex flex-col justify-start items-start mb-5 text-xs'>
                        <label className='text-xs text-gray-600 mb-3 ml-1' for='currency'>Currency</label>
                        <select className='border border-gray-300 w-40 p-2 rounded-md text-gray-400 outline-none' id='currency'>
                            <option>USD - U.S dollar</option>
                        </select>
                    </div>
                    <div className='flex flex-col justify-start items-start mb-5 text-xs'>
                        <label className='text-xs text-gray-600 mb-3 ml-1' for='Duedate'>Due Date</label>
                        <input className='border border-gray-300 w-40 p-2 rounded-md text-gray-400 outline-none' type='date' id='Duedate' />
                    </div>
                    <div className='row-span-3 flex flex-col justify-start items-start mb-5 text-xs'>
                        <label className='text-xs text-gray-600 mb-3 ml-1' for='textarea'>Note</label>
                        <textarea id='textarea' className='h-32 border border-gray-300 w-40 p-2 rounded-md text-gray-400 outline-none resize-none'></textarea>
                    </div>
                    <div className='flex flex-col justify-start items-start mb-5 text-xs'>
                        <label className='text-xs text-gray-600 mb-3 ml-1' for='file'>Upload Copy of Bills</label>
                        <input className='border border-gray-300 w-40 p-2 rounded-md text-gray-400 outline-none' type='file' id='file' />
                    </div>
                    <div className='flex flex-col justify-start items-start mb-5 text-xs'>
                        <label className='text-xs text-gray-600 mb-3 ml-1' for='po/so'>P.0./S.O</label>
                        <input className='border border-gray-300 w-40 p-2 rounded-md text-gray-400 outline-none' type='text' id='po/so' />
                    </div>
                </div>

                <div className='px-2 border border-gray-300 rounded-md'>
                    <div className='flex flex-row'>
                        <div className='flex flex-col p-3 border-b border-gray-300'>
                            <a href='#' className='text-sm text-secondary font-semibold border-b-2 border-gray-300 py-3 mb-3 '>Item</a>
                            <select className='text-xs px-2 py-2 border border-gray-300 rounded-sm'> <option value='choose'> Choose </option> </select>
                        </div>
                        <div className='flex flex-col p-3 border-b border-gray-300'>
                            <a href='#' className='text-sm text-secondary font-semibold border-b-2 border-gray-300 py-3 mb-3 '>Expense Category</a>
                            <select className='text-xs w-52 px-2 py-2 border border-gray-300 rounded-sm'> <option value='choose'> Choose </option> </select>
                        </div>
                        <div className='flex flex-col p-3 border-b border-gray-300'>
                            <a href='#' className='text-sm text-secondary font-semibold border-b-2 border-gray-300 py-3 mb-3 '>Description</a>
                            <input type='text' placeholder='' className='w-32 px-2 py-1 border border-gray-300 rounded-sm' />
                        </div>
                        <div className='flex flex-col p-3 border-b border-gray-300'>
                            <a href='#' className='text-sm text-secondary font-semibold border-b-2 border-gray-300 py-3 mb-3 '>Qty</a>
                            <input type='text' placeholder='1' className='w-10 px-2 py-1 border border-gray-300 rounded-sm' />
                        </div>
                        <div className='flex flex-col p-3 border-b border-gray-300'>
                            <a href='#' className='text-sm text-secondary font-semibold border-b-2 border-gray-300 py-3 mb-3 '>Price</a>
                            <input type='text' placeholder='0' className='w-20 px-2 py-1 border border-gray-300 rounded-sm' />
                        </div>
                        <div className='flex flex-col p-3 border-b border-gray-300'>
                            <a href='#' className='text-sm text-secondary font-semibold border-b-2 border-gray-300 py-3 mb-3 '>Tax</a>
                            <input type='text' placeholder='' className='w-20 px-2 py-1 border border-gray-300 rounded-sm' />
                        </div>
                        <div className='flex flex-col p-3 border-b border-gray-300'>
                            <a href='#' className='text-sm text-secondary font-semibold border-b-2 border-gray-300 py-3 mb-3 '>Amount</a>
                            <div className='flex flex-row justify-between items-center'>
                                <p className='text-xs text-right text-secondary mr-3'>N0.00</p>
                                <p> <HiOutlineTrash /> </p>
                            </div>
                        </div>
                    </div>
                    <div className='text-xs text-right text-secondary'>
                        <p className='px-2 py-1 '>Subtotal: <span>N0.00</span> </p>
                        <p className=' px-2 py-1 '>Total (NGN): <span>N0.00</span> </p>
                    </div>
                </div>
                <div className='flex flex-row justify-end items-center my-3'>
                    <button className='mr-4 px-5 py-2 text-xs text-gray-400 border border-gray-300 hover:underline'>Cancel</button>
                    <button className='px-5 py-2 text-xs text-white hover:underline bg-blue-400 hover:border-2 hover:border-green-600'>Save</button>
                </div>
            </form>
        </div >
    )
}

export default AddBills;
