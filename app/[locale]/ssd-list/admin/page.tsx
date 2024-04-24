'use client'
import React, { useState, useEffect } from 'react'

interface Ssd {
  _id: string
  capacity: number
  readSpeed: number
  writeSpeed: number
  score: number
  asin: string
}

type SsdList = Ssd[]

export default function Page() {
  const [ssdList, setSsdList] = useState<SsdList>([])
  const [editedAsin, setEditedAsin] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch('/api/fetch', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            method: 'find',
            databaseName: 'codex',
            collectionName: 'ssd-data',
          }),
        })

        if (!data.ok) {
          throw new Error('Failed to fetch data')
        }

        let responseData = await data.json()
        responseData = responseData.map((ssdData) => {
          ssdData.asin = JSON.stringify(ssdData.asin)
          return ssdData
        })
        setSsdList(responseData)
        // Initialize editedAsin state with ASIN values from ssdList
      } catch (error) {
        console.error('Error fetching data:', error)
        // Handle error
      }
    }

    fetchData()
  }, [])

  const theParse = (asin) => {
    try {
      return JSON.parse(asin)
    } catch (e) {
      console.log(e)
      return []
    }
  }

  if (!ssdList.length) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {ssdList.map(
        (
          {
            _id,
            capacity,
            readSpeed,
            writeSpeed,
            score,
            asin,
          }: {
            _id: string
            capacity: number
            readSpeed: number
            writeSpeed: number
            score: number
            asin: string
          },
          index,
        ) => (
          <div key={_id} className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6 mb-4">
            <h2 className="text-black text-2xl font-semibold mb-4">{_id}</h2>
            <div className="flex flex-wrap justify-between">
              <div className="w-full">
                <p className="text-gray-600">
                  <span className="font-semibold">Capacity:</span> {capacity}GB
                </p>
              </div>
              <div className="w-full">
                <p className="text-gray-600">
                  <span className="font-semibold">Read Speed:</span> {readSpeed} MB/s
                </p>
              </div>
              <div className="w-full">
                <p className="text-gray-600">
                  <span className="font-semibold">Write Speed:</span> {writeSpeed} MB/s
                </p>
              </div>
              <div className="w-full">
                <p className="text-gray-600">
                  <span className="font-semibold">Score:</span> {score}
                </p>
              </div>
              <div className="w-full">
                {/* Display ASINs */}
                <label htmlFor={`asin`} className="text-gray-600 font-semibold">
                  ASIN:
                </label>
                <input
                  type="text"
                  value={asin}
                  className="text-black"
                  onChange={(e) => {
                    const newAsinValue = e.target.value
                    setSsdList((prevSsdList) => {
                      return prevSsdList.map((ssd, idx) => {
                        if (idx === index) {
                          // Return a new object with the updated ASIN value
                          return { ...ssd, asin: newAsinValue }
                        }
                        // For other elements, return them unchanged
                        return ssd
                      })
                    })
                  }}
                />
                <button
                  onClick={async (e) => {
                    //check if asin is array

                    //save to server
                    const response = await fetch('/api/fetch', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        method: 'updateOne',
                        databaseName: 'codex',
                        collectionName: 'ssd-data',
                        filter: { _id },
                        data: { asin: JSON.parse(asin) },
                      }),
                    })

                    console.log('HELLOU ', response.ok)
                    console.log(await response.json())
                  }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Save
                </button>
                <div className="text-black flex flex-wrap">
                  {theParse(asin).map((oneAsin) => {
                    /* get last time from last update from amazon db */
                    return (
                      <>
                        <a
                          key={asin}
                          className="bg-gray-200 rounded-lg p-4 mr-2 shadow-md"
                          href={`https://www.amazon.it/dp/${oneAsin}`}
                          target="_blank"
                        >
                          Italy
                        </a>
                        <a
                          key={asin}
                          className="bg-gray-200 rounded-lg p-4 mr-2 shadow-md"
                          href={`https://www.amazon.de/dp/${oneAsin}`}
                          target="_blank"
                        >
                          Germany
                        </a>
                        <a
                          key={asin}
                          className="bg-gray-200 rounded-lg p-4 mr-2 shadow-md"
                          href={`https://www.amazon.fr/dp/${oneAsin}`}
                          target="_blank"
                        >
                          France
                        </a>
                        <a
                          key={asin}
                          className="bg-gray-200 rounded-lg p-4 mr-2 shadow-md"
                          href={`https://www.amazon.es/dp/${oneAsin}`}
                          target="_blank"
                        >
                          Spain
                        </a>
                      </>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  )
}
