import './Main.scss'
import DOMpurify from 'dompurify'

import {IPosts, IPostsProps} from '../../interfaces/JSONPlaceholderTypes'


const PostsList: React.FC<IPostsProps> = ({posts} : IPostsProps) => {

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

  posts.forEach(post => {
      postsHTML += `
      <tr class="tr">
      <td class="td">${post.title}</td>
      <td class="td">${post.body}</td>
      </tr>
    `
  });

  // Object.entries(posts).forEach(post => {
  //     postsHTML += `
  //     <tr class="tr">
  //     <td class="td">${post[1].title}</td>
  //     <td class="td">${post[1].body}</td>
  //     </tr>
  //   `
  // });

  //   for (let i=0; i < posts[99].id; i++) {
  //   postsHTML += `
  //     <tr class="tr">
  //     <td class="td">${posts[i].title}</td>
  //     <td class="td">${posts[i].body}</td>
  //     </tr>
  //   `
  // }


  postsHTML += `</tbody></table></div>`
  return postsHTML

}

export default PostsList
