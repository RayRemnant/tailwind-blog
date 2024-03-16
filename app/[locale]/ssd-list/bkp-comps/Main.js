'use client'
import { useEffect, useState } from 'react'
import jsonData from '../data.json'
import Table from './Table.js'
import SelectMenu from './SelectMenu.js'

import { useParams, usePathname } from 'next/navigation'
import { useTranslation } from 'app/[locale]/i18n/client'

function normalizePricePerformance(data) {
  const pricePerformanceValues = data.map((item) => item.score / item.amazon.pricePerGb)
  const minPricePerformance = Math.min(...pricePerformanceValues)
  const maxPricePerformance = Math.max(...pricePerformanceValues)

  return data.map((item) => ({
    ...item,
    amazon: {
      ...item.amazon,
      pricePerformance:
        ((item.score / item.amazon.pricePerGb - minPricePerformance) / (maxPricePerformance - minPricePerformance)) *
        100,
    },
  }))
}

function Search({ searchTerm, setSearchTerm }) {
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const locale = useParams()?.locale
  const { t } = useTranslation(locale, '')

  return (
    <div className="relative h-10">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder={t('Search') + '...'}
        className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white rounded-md"
      />
    </div>
  )
}

function App({ x }) {
  const [selectedShop, setSelectedShop] = useState('amazon_it') // Default to amazon_com
  const [searchTerm, setSearchTerm] = useState('')

  const handleChangeShop = (event) => {
    setSelectedShop(event.target.value)
  }

  let data = []

  for (let entry of Object.values(jsonData)) {
    data.push(entry)
  }

  // Filter data based on selected shop
  const filteredData = data
    .map((item) => ({
      ...item,
      amazon: item[selectedShop],
    }))
    .filter((item) => item.amazon)
    .filter((item) =>
      Object.values(item).some((value) => typeof value === 'string' && value.toLowerCase().includes(searchTerm)),
    )

  const normalizedData = normalizePricePerformance(filteredData)

  return (
    <>
      {/*       <div>{JSON.stringify(x)}</div>
       */}{' '}
      <div className="flex justify-between items-center mb-4">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <SelectMenu selectedShop={selectedShop} setSelectedShop={setSelectedShop} onChange={handleChangeShop} />
      </div>
      <Table data={normalizedData} />
    </>
  )
}

export default App
