const aFetch = async (path, databaseName, collectionName) => {
  try {
    const response = await fetch(`https://mongodb-atlas-pied.vercel.app/api/${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        databaseName,
        collectionName,
      }),
    })

    return await response.json()
  } catch (e) {
    console.log('FETCH ERROR: ', e)
  }

  /* if (!response.ok) {
    throw new Error('GETDOCS FAIL: ', response)
  } */
  /* 
  console.log('GETDOCS OK')

  return await response.json() */
}

const exchanger = require('currency-exchanger-js')

const x = async () => {
  let data = await aFetch('amazon/getUniqueRecentDocs', 'codex', 'amazon')

  try {
    for (const listing of data) {
      if (typeof listing.price != 'number') {
        continue
      }
      switch (listing.region) {
        case 'pl':
          listing.eurPrice = await exchanger.convert(listing.price, 'pln', 'eur')
          break
        case 'se':
          listing.eurPrice = await exchanger.convert(listing.price, 'sek', 'eur')
          break
        case 'co.uk':
          listing.eurPrice = await exchanger.convert(listing.price, 'gbp', 'eur')
          break
        case 'us':
          listing.eurPrice = await exchanger.convert(listing.price, 'usd', 'eur')
          break
        default:
          listing.eurPrice = listing.price
      }

      listing.eurPrice = parseFloat(listing.eurPrice.toFixed(2))
    }
  } catch (e) {
    console.log(e)
  }

  //let u = data.filter((listing) => listing.region == 'pl')
  //console.log(u)
  return data
}

const mergeData = (amazonData, ssdSpecs) => {
  return amazonData
    .filter((amazon) => {
      // Filter out Amazon listings without a matching SSD spec
      return ssdSpecs.some((ssd) => ssd.asin.includes(amazon.asin))
    })
    .map((amazon) => {
      // Map over filtered Amazon listings
      const matchingSsdSpec = ssdSpecs.find((ssd) => ssd.asin.includes(amazon.asin))
      return { ...amazon, ssdSpec: matchingSsdSpec }
    })
}

let y = async () => {
  const amazonData = await x()

  let ssdList = await aFetch('find', 'codex', 'ssd-data')

  ssdList = ssdList.map((spec) => {
    const { _id, ...rest } = spec
    return { name: _id, ...rest }
  })

  const computePricePerformanceRatio = (mergedData) => {
    return mergedData.map((item) => {
      const { ssdSpec, eurPrice } = item
      let pricePerGb = eurPrice ? eurPrice / ssdSpec.capacity : null

      const pricePerformanceRatio = pricePerGb ? ssdSpec.score / pricePerGb : null

      pricePerGb = pricePerGb ? parseFloat(pricePerGb.toFixed(2)) : null
      return { ...item, pricePerformanceRatio, pricePerGb }
    })
  }

  const normalizeData = (data) => {
    const minRatio = Math.min(...data.map((item) => item.pricePerformanceRatio))
    const maxRatio = Math.max(...data.map((item) => item.pricePerformanceRatio))

    const normalizedData = data.map((item) => {
      const { pricePerformanceRatio } = item
      const normalizedRatio = ((pricePerformanceRatio - minRatio) / (maxRatio - minRatio)) * 100
      delete item.pricePerformanceRatio
      return { ...item, normalizedPricePerformanceRatio: normalizedRatio }
    })

    return normalizedData
  }

  // Merge the data
  const mergedData = mergeData(amazonData, ssdList)

  // Compute price/performance ratio
  const dataWithRatio = computePricePerformanceRatio(mergedData)

  // Normalize the data
  const normalizedData = normalizeData(dataWithRatio)

  return normalizedData
}

export default y
