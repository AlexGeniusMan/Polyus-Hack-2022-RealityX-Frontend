import React from 'react'
import './App.scss'
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard/Dashboard'
import {ToastContainer} from 'react-toastify'
import {Route, Routes} from 'react-router-dom'
import Login from './pages/Login/Login'

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<Dashboard />} />
            </Routes>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    )
}

export default App
