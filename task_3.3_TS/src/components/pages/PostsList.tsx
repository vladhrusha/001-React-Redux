import './Main.scss'
import {useEffect, useState} from 'react'
import {fetchData} from '../../scripts/fetchData'
import DOMpurify from 'dompurify'

import {IPosts} from '../../interfaces/JSONPlaceholderTypes'


const PostsList: React.FC<IPosts> = (posts : IPosts) => {
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
