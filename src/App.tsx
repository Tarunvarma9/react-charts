import React from 'react';
import './App.css';
import { BarChart } from './components/react-chartjs-2/Chart1';
import { PieChart } from './components/react-chartjs-2/Chart2';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import NavBar from './components/Nav/Nav';
import Home from './components/home/Home';
import { HorizontalChart } from './components/react-chartjs-2/Chart3';
import { PolarChart } from './components/react-chartjs-2/Chart4';
import { DoughnutChart } from './components/react-chartjs-2/Chart5';

const App: React.FC = () => {

  return (
    <>
    <div>
      <Router>
      <NavBar/>
        <Routes>
        <Route path='/' element={<Navigate replace to='/allcharts'/>}   />
       <Route path='/allcharts' element={<Home/>}   />
      <Route path="/barchart" element={<BarChart/>} />
      <Route path="/piechart" element={<PieChart/>} />
      <Route path='/horizontalchart' element={<HorizontalChart/>}/>
      <Route path="/doughnutchart" element={<DoughnutChart/>} />
      <Route path="/polarchart" element={<PolarChart/>} />
     </Routes>
    </Router>
    </div>
    </>
  )
}

export default App;
