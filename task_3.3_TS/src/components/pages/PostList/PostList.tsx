import './PostList.scss'
import {useState, useEffect} from 'react'
import { fetchData } from '../../../scripts/fetchData'
import {Post} from '../../../models/post'


const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    const getData = async () => {
      setPosts(await fetchData('posts'))
    }
    getData()
  }, [])



  if (posts.length === 0){
  return <>Loading...</>
  }

  return (
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
          <tr key={post.id}className="tr">
            <td className="td">{post.title}</td>
            <td className="td">{post.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export { PostList }
