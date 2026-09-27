import React from 'react'
import {api} from '../services/api'
import { useState, useEffect } from 'react';
const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadDashboardData = async () => {
    setLoading(true);
    try{
      const data = await api.getDashboard();
      setDashboardData(data);
    } catch (error) {
      console.error("Dashboard loading failed:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(()=> {
    loadDashboardData()
  }, [])

  if (loading && !dashboardData) {
    return (
      <div className='flex items-center justify-center h-64'>
        <div className='w-12 h-12 border-4 border-gary-200
        border-t-blue-500 rounded-full animate-spin'></div>
      </div>
    )
  }
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard