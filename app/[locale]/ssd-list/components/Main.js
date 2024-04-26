'use client'
import { useEffect, useState } from 'react'
import Table from './Table.js'
import SelectMenu from './SelectMenu.js'

import { useParams, usePathname } from 'next/navigation'
import { useTranslation } from 'app/[locale]/i18n/client'

function App({ data, regions }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRegions, setSelectedRegions] = useState([])

  // Filtered data based on search term and selected regions
  const filteredData = data.filter(
    (item) =>
      item.ssdSpec.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedRegions.length === 0 || selectedRegions.includes(item.region)),
  )

  const locale = useParams()?.locale
  const { t } = useTranslation(locale, '')

  const handleRegionToggle = (region) => {
    //console.log('COUNTRY: ', region)
    //console.log(selectedRegions)
    setSelectedRegions((prevSelectedRegions) => {
      if (prevSelectedRegions.includes(region)) {
        return prevSelectedRegions.filter((c) => c !== region)
      } else {
        return [...prevSelectedRegions, region]
      }
    })
  }

  return (
    <>
      <div className="flex justify-between relative mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={t('Search') + '...'}
          className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white rounded-md"
        />

        <SelectMenu
          selectedRegions={selectedRegions}
          setSelectedRegions={setSelectedRegions}
          regions={regions}
          handleRegionToggle={handleRegionToggle}
        />
      </div>
      <Table data={filteredData} />
    </>
  )
}

export default App
