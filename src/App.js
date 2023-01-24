import React from 'react'
import './App.css';
import MyNavbar from './Components/MyNavbar'
import FormPdf from './Components/FormPdf'
import Carriculum from './Components/Carriculum'
import TableOfCariculum from './Components/TableOfCariculum';
import { Routes, Route } from 'react-router-dom';
//npm install react-router-dom@6
  
  export default function App() {
    return (
      <>
      <Routes>
        <Route path="/" element={<><MyNavbar/> <Carriculum/> <TableOfCariculum /> </>} />
        <Route path="FormPdf" element={<FormPdf />} />
      </Routes>
      </>
    )
  }
  