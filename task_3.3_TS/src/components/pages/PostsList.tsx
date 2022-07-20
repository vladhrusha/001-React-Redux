import './Main.scss'
import DOMpurify from 'dompurify'

import {IPosts} from '../../interfaces/JSONPlaceholderTypes'
import { fetchData } from '../../scripts/fetchData'
import {useState, useEffect} from 'react'



const PostsList: React.FC<IPosts> = (posts : IPosts) => {


  const [dummy, setDummy] = useState<IPosts>()

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    setDummy(await fetchData('posts'))
  }
  if (dummy){
    console.log(typeof dummy === typeof posts)
    console.log(dummy == posts)
  }

  let cleanPostsHTML = `<div class='main'></div>`

  cleanPostsHTML = DOMpurify.sanitize(createPostsHTMLString(posts))

  return (<div dangerouslySetInnerHTML={{__html: cleanPostsHTML}} />)
}

const createPostsHTMLString = (posts : IPosts) => {
  let postsHTML : string
  postsHTML = `<div class='main'>
    <table class="table">
    <thead class="thead">
    <tr class="tr">
    <td class="td">Title</td>
    <td class="td">Content</td>
    </tr>
    </thead>
    <tbody>
  `
  for (let i=0; i < posts[99].id; i++) {
    postsHTML += `
      <tr class="tr">
      <td class="td">${posts[i].title}</td>
      <td class="td">${posts[i].body}</td>
      </tr>
    `
  }
  postsHTML += `</tbody></table></div>`
  return postsHTML

}

export default PostsList
