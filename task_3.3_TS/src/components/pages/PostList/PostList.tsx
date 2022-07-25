import './PostList.scss'
import {useState, useEffect} from 'react'
import { fetchData, createOrUpdatePosts } from '../../../scripts/fetchData'
import {Post, FormValues} from '../../../models/post'
import {AddPost} from './AddPost'



const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    const getData = async () => {
      setPosts(await fetchData('posts'))
    }
    getData()
  }, [])

  const addPost = (formValues : FormValues):void => {
    posts.push({
      userId : posts[posts.length - 1].userId + 1,
      id : posts[posts.length - 1].id + 1,
      title: formValues.title,
      body: formValues.body
    })
    setPosts([...posts])
    createOrUpdatePosts('posts', posts)
  }

  if (posts.length === 0){
  return <>Loading...</>
  }

  return (
    <div className="postList">
    <AddPost addPost={addPost}/>
    <table className="table">
      <thead className="thead">
        <tr className="tr">
          <td className="td">Title</td>
          <td className="td">Content</td>
        </tr>
      </thead>
      <tbody>
        {
        posts.map((post) =>(
          <tr key={post.id} id={post.id.toString()} className="tr">
            <td className="td">{post.title}</td>
            <td className="td">{post.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}



export { PostList }
