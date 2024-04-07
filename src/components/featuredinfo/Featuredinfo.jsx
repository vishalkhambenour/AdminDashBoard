import React from 'react'
import "./featuredinfo.scss"
import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@material-ui/icons'

export default function Featuredinfo() {
  return (
    <div className='featured'>
      <div className="featureditem">
        <span className="featuredtitle">Revenue</span>
        <div className="featuredmoneycontainer">
            <span className="featuredmoney">$45,765</span>
            <span className="featuredmoneyRates">-765<ArrowDownwardOutlined className="featuredicon negative"/></span>
        </div>
        <span className="featuredsub">compared to last month</span>
      </div>
      <div className="featureditem">
        <span className="featuredtitle">Sales</span>
        <div className="featuredmoneycontainer">
            <span className="featuredmoney">$4,765</span>
            <span className="featuredmoneyRates">-65<ArrowDownwardOutlined className="featuredicon negative"/></span>
        </div>
        <span className="featuredsub">compared to last month</span>
      </div>
      <div className="featureditem">
        <span className="featuredtitle">Cost</span>
        <div className="featuredmoneycontainer">
            <span className="featuredmoney">$455</span>
            <span className="featuredmoneyRates">+5<ArrowUpwardOutlined className="featuredicon" /></span>
        </div>
        <span className="featuredsub">compared to last month</span>
      </div>
    </div>
  )
}
