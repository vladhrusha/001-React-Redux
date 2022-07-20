
const API_URL : string = 'https://jsonplaceholder.typicode.com/'
const {REACT_APP_API_URL} = process.env;
const fetchData = async (resourceName : string) => {
    let response = await fetch('https:/' + REACT_APP_API_URL + resourceName)
    let data = await response.json()
    return data
}

export {fetchData}