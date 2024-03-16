const aFetch = async (type, body) => {
  try {
    const response = await fetch(`https://firebase-ten-olive.vercel.app/api/${type}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      cache: 'no-store',
    })

    if (!response.ok) {
      throw new Error('GETDOCS FAIL')
    }

    console.log('GETDOCS OK')

    return await response.json()
    //setResponse(responseData);
  } catch (error) {
    console.error('GETDOCS ERROR: ', error)
  }
}

const normalizePricePerformance = (value, min, max) => {
  return ((value - min) / (max - min)) * 100
}

function updateTagInAmazonUrl(url) {
  const regex = /\?.*/ // Match everything after the question mark
  const newTag = 'tag=omni-atlas-21'

  // Check if the URL contains anything after the question mark
  if (regex.test(url)) {
    // Remove everything after the question mark and append the new tag
    return url.replace(regex, `?${newTag}`)
  } else {
    // If the URL doesn't contain anything after the question mark, just append the new tag
    return `${url}?${newTag}`
  }
}

const main = async () => {
  const ssdList = await aFetch('getDocs', { collectionName: 'ssd-tester' })
  //console.log(ssdList)

  const final = []

  await Promise.all(
    ssdList.map(async (ssdData) => {
      for (const asin of ssdData.asin) {
        const data = await aFetch('getDoc', { collectionName: 'hagglezon', docId: asin })

        if (!data.prices) {
          continue
        }

        for (const index in data.prices) {
          const listingData = data.prices[index]
          delete listingData.__typename
          delete listingData.inCampaign

          listingData.url = updateTagInAmazonUrl(listingData.url)

          const ssdInfo = ssdList.find(({ asin }) => asin.includes(data.id))
          delete ssdInfo.amazon_com
          delete ssdInfo.amazon_it
          delete ssdInfo.currency
          delete ssdInfo.url
          delete ssdInfo.inCampaign

          listingData.pricePerGb = (listingData.price / ssdInfo.capacity).toFixed(2)
          listingData.pricePerformance = ssdInfo.score / listingData.pricePerGb

          listingData.ssdInfo = ssdInfo

          final.push(listingData)
        }
      }
    }),
  )

  //console.log(final)

  const pricePerformances = final.map((item) => item.pricePerformance)
  const minPricePerformance = Math.min(...pricePerformances)
  const maxPricePerformance = Math.max(...pricePerformances)
  for (let item of final) {
    item.pricePerformance = normalizePricePerformance(item.pricePerformance, minPricePerformance, maxPricePerformance)
  }

  return final
}

//extract all prices and put them in a single array
//normalize prices (nvm they all EUR)

//assign ssd product to object

module.exports = main
