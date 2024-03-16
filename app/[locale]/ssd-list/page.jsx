import Main from './components/Main'
import getData from './getData'

/* import jsonData from './sampleData.json'
 */
function getUniqueValues(arr, property) {
  const uniqueValues = new Set() // Using a Set to ensure uniqueness

  console.log('ARR ', arr)

  arr.forEach((item) => {
    // Check if the property exists in the object
    if (property in item) {
      uniqueValues.add(item[property]) // Add the property value to the Set
    }
  })

  return Array.from(uniqueValues) // Convert Set to Array
}

async function App() {
  //let data = await getData()
  let data = await getData()

  const countries = getUniqueValues(data, 'country')

  //console.log(data)

  return <Main data={data} countries={countries} />
}

export default App
