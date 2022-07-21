
const {REACT_APP_API_URL} = process.env;
const fetchData = async (resourceName : string) => {
    let response = await fetch(REACT_APP_API_URL + resourceName)
    let data = await response.json()
    return data
}

export {fetchData}