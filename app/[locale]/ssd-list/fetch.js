let x = async (path, databaseName, collectionName, other = {}) => {
  try {
    const response = await fetch(`https://mongodb-atlas-pied.vercel.app/api/${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        databaseName,
        collectionName,
        ...other,
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

export default x
