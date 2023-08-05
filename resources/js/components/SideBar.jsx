import React from 'react'

function SideBar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-white" style={{width:'280px'}} >
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">        
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
            <span className="fs-4">Massive Home</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
                <a href="#" className="nav-link active" aria-current="page">
                    {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg> */}
                    Home
                </a>
            </li>
            <li>
                <a href="#" className="nav-link link-dark">
                    {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> */}
                    Dashboard
                </a>
            </li>                      
        </ul>

        <hr />

        <div className="dropdown">
            <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                <strong>mdo</strong>
            </a>
            <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                <li><a className="dropdown-item" href="#">New project...</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
            </ul>
        </div>
  </div>
  )
}

export default SideBar