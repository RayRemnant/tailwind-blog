export async function POST(req) {
  // Parse the incoming JSON request body
  const { method, databaseName, collectionName, filter = {}, data = {} } = await req.json()

  const response = await fetch(`https://mongodb-atlas-pied.vercel.app/api/${method}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      databaseName,
      collectionName,
      filter,
      data,
    }),
  })

  const resData = await response.json()
  return Response.json(resData)
}
