import {Post} from '../models/post'

const {REACT_APP_API_URL} = process.env;
const fetchData = async (resourceName : string) => {
    let response = await fetch(REACT_APP_API_URL + resourceName)
    let data = await response.json()
    return data
}

const createOrUpdatePosts = async (resourceName : string, posts : Post[]) => {
    let response = await fetch(REACT_APP_API_URL + resourceName,
        {
            method: 'POST',
            body: JSON.stringify(posts),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
        },
        )
    await response.json()
    return
}

export {fetchData, createOrUpdatePosts}