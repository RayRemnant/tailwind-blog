/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({ selectedRegions, setSelectedRegions, handleRegionToggle, regions }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  return (
    <>
      <button
        id="dropdownBgHoverButton"
        className="w-48 text-white bg-primary-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
        onClick={toggleDropdown}
      >
        Filter regions
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>
      <div
        id="dropdownBgHover"
        className={`z-10 ${isOpen ? '' : 'hidden'} right-0 top-12 absolute w-48 bg-white rounded-lg shadow dark:bg-gray-700`}
      >
        <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
          {regions.map((region) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <li
              key={region}
              onClick={(e) => {
                e.stopPropagation() // Stop event from bubbling up
                e.preventDefault() // Prevent default behavior
                handleRegionToggle(region)
              }}
            >
              <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <input
                  key={`check-${region}`}
                  id={`checkbox-${region}`}
                  type="checkbox"
                  value="nothing"
                  className={`w-4 h-4 bg-gray-100 border-gray-300 rounded ${
                    selectedRegions.includes(region) ? 'bg-primary-500' : 'bg-white-500'
                  }`}
                  tabIndex={0}
                />

                <label
                  htmlFor={`checkbox-${region}`}
                  className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                >
                  <img
                    src={`https://flagicons.lipis.dev/flags/4x3/${region == 'co.uk' ? 'gb' : region}.svg`}
                    alt={region}
                    className="inline w-6 h-6 "
                  />{' '}
                  amazon.{region == 'us' ? 'com' : region}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
