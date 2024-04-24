import React, { useState } from 'react'
import { ArrowUpIcon, ArrowDownIcon, ShoppingCartIcon } from '@heroicons/react/20/solid'
import { useParams } from 'next/navigation'
import { useTranslation } from 'app/[locale]/i18n/client'

function getScoreColor(score, groups) {
  if (score <= groups[0]) {
    return 'red'
  } else if (score <= groups[1]) {
    return 'lightSalmon'
  } else {
    return 'green'
  }
}

function getSortingIcon(column, sortBy, sortAsc) {
  if (sortBy === column) {
    return sortAsc ? (
      <ArrowUpIcon className="h-4 w-4 inline-block" />
    ) : (
      <ArrowDownIcon className="h-4 w-4 inline-block" />
    )
  } else {
    return null
  }
}

function Table({ data }) {
  const [sortBy, setSortBy] = useState('')
  const [sortAsc, setSortAsc] = useState(false)
  const locale = useParams()?.locale
  const { t } = useTranslation(locale, '')

  const handleSort = (column) => {
    if (sortBy === column && !sortAsc) {
      setSortAsc(true)
    } else {
      setSortBy(column)
      setSortAsc(false)
    }
  }

  const sortedData = sortBy
    ? data.sort((a, b) => {
        const aValue = a['ssdSpec'][sortBy] !== undefined ? a['ssdSpec'][sortBy] : a[sortBy]
        const bValue = b['ssdSpec'][sortBy] !== undefined ? b['ssdSpec'][sortBy] : b[sortBy]
        return sortAsc ? aValue - bValue : bValue - aValue
      })
    : data

  const scores = sortedData.map((item) => item['ssdSpec']['score'])
  scores.sort((a, b) => a - b)

  const groupSize = Math.ceil(scores.length / 3)
  const groups = [scores[groupSize - 1], scores[groupSize * 2 - 1]]

  return (
    <div className="md:flex md:justify-center md:mt-6">
      <table className="ssd-table shrink-0">
        <thead>
          <tr className="cursor-pointer">
            <th onClick={() => handleSort('name')}>
              {t('name').capitalize()} {getSortingIcon('name', sortBy, sortAsc)}
            </th>
            <th onClick={() => handleSort('capacity')}>
              {t('capacity').capitalize()} {getSortingIcon('capacity', sortBy, sortAsc)}
            </th>
            {/* <th onClick={() => handleSort('readSpeed')}>
              {t('read speed').capitalize()}
              {getSortingIcon('readSpeed', sortBy, sortAsc)}
            </th>
            <th onClick={() => handleSort('writeSpeed')}>
              {t('write speed').capitalize()}
              {getSortingIcon('writeSpeed', sortBy, sortAsc)}
            </th> */}
            <th onClick={() => handleSort('score')}>
              {t('score').capitalize()}
              {getSortingIcon('score', sortBy, sortAsc)}
            </th>
            <th onClick={() => handleSort('eurPrice')}>
              {t('price').capitalize()}
              {getSortingIcon('eurPrice', sortBy, sortAsc)}
            </th>
            <th onClick={() => handleSort('pricePerGb')}>
              {t('price per GB').capitalize()}
              {getSortingIcon('pricePerGb', sortBy, sortAsc)}
            </th>
            <th onClick={() => handleSort('normalizedPricePerformanceRatio')}>
              {t('price').capitalize()} / {t('performance').capitalize()}
              {getSortingIcon('normalizedPricePerformanceRatio', sortBy, sortAsc)}
            </th>
            <th> {t('shop').capitalize()}</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index}>
              <td>{item['ssdSpec']['name']}</td>
              {/* TODO: add link to ssd-tester full specification page */}
              <td>{item['ssdSpec']['capacity']} GB</td>
              {/* <td>{item['ssdSpec']['readSpeed']} MB/s</td>
              <td>{item['ssdSpec']['writeSpeed']} MB/s</td> */}
              <td style={{ color: getScoreColor(item['ssdSpec']['score'], groups) }}>{item['ssdSpec']['score']}</td>
              <td>{item.eurPrice ? '€' + item.eurPrice : '-'}</td>
              <td>{item.pricePerGb ? '€' + item.pricePerGb : '-'}</td>
              <td>
                <div
                  style={{
                    width: '100%',
                    backgroundColor: 'lightgray',
                    height: '20px',
                    borderRadius: '4px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${item['normalizedPricePerformanceRatio']}%`,
                      backgroundColor: 'green',
                      height: '100%',
                    }}
                  ></div>
                </div>
              </td>
              <td>
                <a
                  href={`https://www.amazon.${item.region}/dp/${item.asin}?tag=omni-atlas-21`}
                  target="_blank"
                  rel="noreferrer"
                  className="relative block w-full h-8"
                >
                  <img
                    className="absolute inset-0 w-full h-full object-contain opacity-50"
                    width="36px"
                    src={`https://flagicons.lipis.dev/flags/4x3/${item.region === 'co.uk' ? 'gb' : item.region}.svg`}
                  />
                  <ShoppingCartIcon
                    className="h-6 w-6 absolute inset-0 w-full h-full object-cover opacity-75"
                    aria-hidden="true"
                  />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
