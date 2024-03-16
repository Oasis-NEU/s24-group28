import { useState } from 'react'
import React from 'react'
import './App.css'
import Homepage from './homepage/Choose.tsx';
import LForm from './looking/Form.tsx';
import SForm from './selling/SForm.tsx';
import { Route, Routes, Navigate } from 'react-router-dom';



const App = () => (
    <Routes>
        <Route path="/" element={<Homepage />} />  
        <Route path="/looking" element={<LForm />} />
        <Route path="/selling" element={<SForm />} />
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
);

export default App;

