import React from 'react'

const Product1 = ({ name, imageUrl, amazonUrl, children }) => {
  // Use a regular expression to extract the desired part
  const regex = /https:\/\/www\.amazon\.([a-z]+)\/(.+?)?dp\/([^/?]+)/
  const match = amazonUrl.match(regex)

  const asin = match[3]
  const locale = match[1]

  // If there is a match, construct the new URL
  if (match) {
    amazonUrl = `https://www.amazon.${locale}/dp/${asin}?tag=omni-atlas-21`
  } else {
    console.log('amazon URL formatting not matched.')
  }

  //for amazon images consult this: https://www.oreilly.com/library/view/amazon-hacks/0596005423/ch01s07.html
  return (
    <>
      <h3>{name}</h3>
      <img
        src={imageUrl || `https://images.amazon.com/images/P/${asin}._PI_MZZZZZZZ_.jpg`}
        alt={name}
        className="mx-auto"
        width="500"
        height="500"
      />
      {children}
      <a href={amazonUrl} target="_blank">
        <p className="m-auto w-fit whitespace-nowrap rounded-md border border-white p-3 ">Compra su Amazon</p>
      </a>
      <img src={`https://graph.keepa.com/pricehistory.png?asin=${asin}&domain=${locale}`} className="mx-auto" />
    </>
  )
}

export default Product1
