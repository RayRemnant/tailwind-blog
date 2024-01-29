'use client'

import React, { useState, useEffect } from 'react'
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import data from '@/data/gpu'
data.forEach((entry) => {
  entry['fullHD'] = parseInt(entry['1080p Ultra'].split(' ')[0])
})

data.forEach((entry) => {
  entry['quadHD'] = parseInt(entry['1440p Ultra'].split(' ')[0])
})

const ChartPage = () => {
  const [isSSR, setIsSSR] = useState(true)

  useEffect(() => {
    setIsSSR(false)
  }, [])

  return (
    <div className="content min-vh-100 w-full">
      {!isSSR && (
        <ResponsiveContainer width="100%" height={2000}>
          <BarChart
            /* width={1200}
            height={3000} */
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            layout="vertical"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis dataKey="Graphics Card" type="category" width={100} height={50} />
            <XAxis hide axisLine={false} type="number" />
            <Tooltip />
            <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
            <ReferenceLine y={0} stroke="#000" />
            <Brush dataKey="name" height={30} stroke="#8884d8" />
            <Bar barSize={30} dataKey="fullHD" fill="#8884d8" />
            <Bar barSize={30} dataKey="quadHD" fill="#6624d8" />
            {/* 					<Bar dataKey="uv" fill="#82ca9d" />
             */}{' '}
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}

export default ChartPage
