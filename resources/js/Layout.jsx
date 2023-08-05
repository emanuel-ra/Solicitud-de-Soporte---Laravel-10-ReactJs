import React from 'react'
import { Outlet } from "react-router-dom";
import SideBar from './components/SideBar';

function Layout() {
  return (
    <main className='main'>
        <SideBar />

        <div className="container d-flex align-items-center">
            <div className="card col-12" >
                <div className="card-body">
                    <Outlet />
                </div>
            </div>
        </div>

      
    </main>
  )
}

export default Layout