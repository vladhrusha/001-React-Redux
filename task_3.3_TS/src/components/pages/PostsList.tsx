import './Main.scss'
import {useEffect, useState} from 'react'
import {fetchData} from '../../scripts/fetchData'
import DOMpurify from 'dompurify'

import {IPosts} from '../../interfaces/JSONPlaceholderTypes'


const PostsList = (props : IPosts) => {
  const [posts, setPosts] = useState<IPosts>()
  const getData = async () => {
    setPosts(await fetchData('posts'))
  }
  useEffect(() => {
    getData()
  }, [])
  let cleanPostsHTML = `<div class='main'></div>`
  if (posts) {
    cleanPostsHTML = DOMpurify.sanitize(createPostsHTMLString(posts))
  }
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
  if (posts) {
    posts.forEach((post)  => {
      postsHTML += `
        <tr class="tr">
        <td class="td">${post.title}</td>
        <td class="td">${post.body}</td>
        </tr>
      `
    })
  }
  postsHTML += `</tbody></table></div>`
  return postsHTML

}

export default PostsList
