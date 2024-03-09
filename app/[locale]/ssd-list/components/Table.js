import React, { useState } from 'react'
import { ArrowUpIcon, ArrowDownIcon, ShoppingCartIcon } from '@heroicons/react/20/solid'

function getScoreColor(score, groups) {
  if (score <= groups[0]) {
    return 'red'
  } else if (score <= groups[1]) {
    return 'lightSalmon'
  } else {
    return 'green'
  }
}

function getSortingIcon(column, sortBy, sortDesc) {
  //console.log(sortBy, ' ', column)
  if (sortBy === column) {
    //console.log(sortDesc)
    return sortDesc ? (
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
  const [nestedSortBy, setNestedSortBy] = useState(null)

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
        const aSort = sortBy.split('.').reduce((obj, key) => obj[key], a)
        //console.log('aSort ', aSort)
        const bSort = sortBy.split('.').reduce((obj, key) => obj[key], b)
        //console.log('bSort ', bSort)

        // Sorting by top-level property
        if (sortAsc) {
          return aSort - bSort
        } else {
          return bSort - aSort
        }
      })
    : data

  const scores = sortedData.map((item) => item.score)
  scores.sort((a, b) => a - b) // Sort scores in ascending order

  const groupSize = Math.ceil(scores.length / 3)
  const groups = [
    scores[groupSize - 1], // Upper bound for the first group
    scores[groupSize * 2 - 1], // Upper bound for the second group
  ]

  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="cursor-pointer">
            <th onClick={() => handleSort('name')}>Name {getSortingIcon('name', sortBy, sortAsc)}</th>
            <th onClick={() => handleSort('capacity')}>Capacity {getSortingIcon('capacity', sortBy, sortAsc)}</th>
            <th onClick={() => handleSort('readSpeed')}>Read Speed {getSortingIcon('readSpeed', sortBy, sortAsc)}</th>
            <th onClick={() => handleSort('writeSpeed')}>
              Write Speed {getSortingIcon('writeSpeed', sortBy, sortAsc)}
            </th>
            <th onClick={() => handleSort('score')}>Score {getSortingIcon('score', sortBy, sortAsc)}</th>
            <th onClick={() => handleSort('amazon.price')}>Price {getSortingIcon('amazon.price', sortBy, sortAsc)}</th>
            <th onClick={() => handleSort('amazon.pricePerGb')}>
              Price Per GB {getSortingIcon('amazon.pricePerGb', sortBy, sortAsc)}
            </th>
            <th onClick={() => handleSort('amazon.pricePerformance')}>
              Price Performance {getSortingIcon('amazon.pricePerformance', sortBy, sortAsc)}
            </th>
            <th>Shop</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.capacity} GB</td>
              <td>{item.readSpeed} MB/s</td>
              <td>{item.writeSpeed} MB/s</td>
              <td style={{ color: getScoreColor(item.score, groups) }}>{item.score}</td>
              <td>
                {item.amazon.currency}
                {item.amazon.price}
              </td>
              <td>
                {item.amazon.currency}
                {item.amazon.pricePerGb}
              </td>
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
                      width: `${item.amazon.pricePerformance}%`,
                      backgroundColor: 'green',
                      height: '100%',
                    }}
                  ></div>
                </div>
              </td>
              <td>
                <a href={`${item.amazon.link}?tag=omni-atlas-21`} target="_blank">
                  <button className="flex items-center justify-center w-10 h-10 rounded-full bg-primary ">
                    <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
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
