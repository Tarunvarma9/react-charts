import React from 'react'
import { Link } from 'react-router-dom'
import { BarChart } from '../react-chartjs-2/Chart1'
import { PieChart } from '../react-chartjs-2/Chart2'
import { HorizontalChart } from '../react-chartjs-2/Chart3'
import { PolarChart } from '../react-chartjs-2/Chart4'
import { DoughnutChart } from '../react-chartjs-2/Chart5'
import './home.css'
function Home() {
  return (
    <div className='home-main'>
        <BarChart/>
        <PieChart/>
      <HorizontalChart/>
        <DoughnutChart/>
        <PolarChart/>      
    </div>
  )
}

export default Home