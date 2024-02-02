import React from 'react'

const Product1 = ({ name, imageUrl, amazonUrl, children }) => {
  return (
    <>
      <h3>{name}</h3>
      <img src={imageUrl} alt={name} className="mx-auto" width="500" height="500" />
      {children}
      <a href={amazonUrl} target="_blank">
        <p className="m-auto w-fit whitespace-nowrap rounded-md border border-white p-3 ">Compra su Amazon</p>
      </a>
    </>
  )
}

export default Product1
