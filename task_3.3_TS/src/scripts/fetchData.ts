
const API_URL : string = 'https://jsonplaceholder.typicode.com/'

const fetchData = async (resourceName : string) => {
    let response = await fetch(API_URL + resourceName)
    let data = await response.json()
    return data
}

export {fetchData}