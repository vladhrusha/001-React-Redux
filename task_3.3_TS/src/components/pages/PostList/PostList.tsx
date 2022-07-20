import './PostList.scss'
import {useState, useEffect} from 'react'
import { fetchData } from '../../../scripts/fetchData'
import {Post} from '../../../models/post'


const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    setPosts(await fetchData('posts'))
  }

  if (posts.length === 0){
  return <>Loading...</>
  }
  let rows :JSX.Element[] = posts.map((post) =>(
    <tr key={post.id}className="tr">
      <td className="td">{post.title}</td>
      <td className="td">{post.body}</td>
    </tr>
  ))

  return (
    <table className="table">
      <thead className="thead">
        <tr className="tr">
          <td className="td">Title</td>
          <td className="td">Content</td>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

export { PostList }
