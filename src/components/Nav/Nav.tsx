import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css';

function NavBar() {
  return (
    <div className='nav' >
       <Link className='link'  style={{textDecoration:'none'}}to='/barchart'>
           Bar-Chart
       </Link> 
       <Link className='link'  to='/piechart'>
           Pie-Chart
       </Link> 
       <Link className='link' to='/horizontalchart'>
           Horizontal-Chart
       </Link> 
       <Link className='link'  to='/doughnutchart'>
           Doughnut-Chart
       </Link> 
       <Link className='link'  to='/polarchart'>
           polar-Chart
       </Link> 
       <Link className='link'  to='/allcharts'>
        All Charts
       </Link> 
    </div>
  )
}

export default NavBar