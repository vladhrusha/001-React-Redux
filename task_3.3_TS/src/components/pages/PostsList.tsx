import './Main.scss';
import React from 'react';
import {useEffect, useState} from 'react';
import {fetchData} from '../../scripts/fetchData'
import DOMpurify from 'dompurify'

const PostsList = () => {
  const [posts, setPosts] = useState([{
      userId: 1,
      id: 1,
      title: "",
      body: ""
    }]);
  
  const getData = async () => {
    setPosts(await fetchData('posts'));
  }
  useEffect(() => {
    getData();
  }, []);

  let postsHTML : string;
  postsHTML = `<div class='main'>
              <table class="table">
              <thead>
              <tr class="tr">
              <td class="td">Title</td>
              <td class="td">Content</td>
              </tr>
              </thead>
              <tbody>`;
  if (posts) {
    posts.forEach((post)  => {
      postsHTML += `
        <tr class="tr">
        <td class="td">${post.title}</td>
        <td class="td">${post.body}</td>
        </tr>
      `;
     });
  }
  postsHTML += `</tbody></table></div>`

  return (<div dangerouslySetInnerHTML={{__html: DOMpurify.sanitize(postsHTML)}} />)
  
};


export default PostsList;
