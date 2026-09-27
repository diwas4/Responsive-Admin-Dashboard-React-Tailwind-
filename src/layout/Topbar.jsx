import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { pageTitles } from '../config/navigation'
import { ChevronDown, ChevronUp, Menu } from 'lucide-react';

const Topbar = ({showSidebar, setShowSidebar}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsIopen] = useState(false);

  const pageTitle = pageTitles[location.pathname] || "Dashboard";
  return (
    <div className='sticky top-0 z-40 flex h-20 items-center
    justify-between border-b border-slate-200
    bg-white px-8 shadow-sm'>
      
      {/* {Page title} */}
      <div className='flex items-center gap-4'>
        <Menu onClick={()=>setShowSidebar(!showSidebar)}/>
        <h1 className='text-xl font-light text-gray-900'>
          {pageTitle}
        </h1>
      </div>

      {/* {Profile} */}
      <div className='relative'>
        <button onClick={()=>setIsIopen(!isOpen)} className='flex items-center justify-center gap-4 cursor-pointer
        transition'>
          {/* letter */}
          <div className='w-9 h-9 bg-primary/80 text-white
          rounded-full flex items-center justify-center
          '>
            AU
          </div>

          {/* text */}
          <span className="a">
            Admin User
          </span>

          {/* icon */}
          <span>
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20}/>}
          </span>
        </button>

        {/* dropdown box */}
        {isOpen && (
          <div className='absolute right-0 top-14 w-74 overflow-hidden
          rounded-xl border border-slate-200 bg-white p-2 shadow-xl'>
            {/* Admin flex box */}
            <div className="flex items-center px-3 py-4  gap-2
            border-b border-gray-200">
              <div className='w-12 h-12 bg-primary-dark/80 rounded-full
              flex items-center justify-center text-white shrink-0'>
                AU
              </div>
              <div>
                <p className='text-sm text-text-primary font-medium'>Admin User</p>
                <p className='text-xs text-gray-500'>admin@gmail.com</p>
              </div>

            </div>
            
          </div>
        )}
      </div>

      
    </div>
  )
}

export default Topbar