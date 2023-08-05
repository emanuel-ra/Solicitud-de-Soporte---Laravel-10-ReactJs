import React from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home';
import Layout from './Layout';

import '../css/app.css'

function app() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            {/* <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} /> */}

            {/* Using path="*"" means "match anything", so this route
                    acts like a catch-all for URLs that we don't have explicit
                    routes for. */}
            <Route path="*" element={<NoMatch />} /></Route>

        </Routes>
    </>
  )
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
        <p>
            <Link to="/">Go to the home page</Link>
        </p>
        </div>
    );
}

export default app