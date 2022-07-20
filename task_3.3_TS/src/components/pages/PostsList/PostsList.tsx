import '../Main.scss'
import DOMpurify from 'dompurify'
import {useState, useEffect} from 'react'
import { fetchData } from '../../../scripts/fetchData'
import {Post} from '../../../models/post'


const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    setPosts(await fetchData('posts'))
  }

  let cleanPostsHTML = `<div class='main'></div>`

  if (posts){
    cleanPostsHTML = DOMpurify.sanitize(createPostsHTMLString(posts))
  }

  return (<div dangerouslySetInnerHTML={{__html: cleanPostsHTML}} />)
}

const createPostsHTMLString = (posts : Post[]) => {
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

  posts.forEach(post => {
      postsHTML += `
      <tr class="tr">
      <td class="td">${post.title}</td>
      <td class="td">${post.body}</td>
      </tr>
    `
  });

  postsHTML += `</tbody></table></div>`
  return postsHTML

}

export { PostsList }
