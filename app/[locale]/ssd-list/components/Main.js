'use client'
import { useEffect, useState } from 'react'
import Table from './Table.js'
import SelectMenu from './SelectMenu.js'

import { useParams, usePathname } from 'next/navigation'
import { useTranslation } from 'app/[locale]/i18n/client'

function App({ data, countries }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCountries, setSelectedCountries] = useState([])

  // Filtered data based on search term and selected countries
  const filteredData = data.filter(
    (item) =>
      item.ssdInfo.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCountries.length === 0 || selectedCountries.includes(item.country)),
  )

  const locale = useParams()?.locale
  const { t } = useTranslation(locale, '')

  const handleCountryToggle = (country) => {
    console.log('COUNTRY: ', country)
    console.log(selectedCountries)
    setSelectedCountries((prevSelectedCountries) => {
      if (prevSelectedCountries.includes(country)) {
        return prevSelectedCountries.filter((c) => c !== country)
      } else {
        return [...prevSelectedCountries, country]
      }
    })
  }

  return (
    <>
      <div className="flex justify-between relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={t('Search') + '...'}
          className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white rounded-md"
        />

        <SelectMenu
          selectedCountries={selectedCountries}
          setSelectedCountries={setSelectedCountries}
          countries={countries}
          handleCountryToggle={handleCountryToggle}
        />
      </div>
      <Table data={filteredData} />
    </>
  )
}

export default App
