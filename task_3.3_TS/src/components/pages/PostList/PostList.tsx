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


  let rows :JSX.Element[] = []
  if (posts && posts.length > 0){
    rows = composeRows(posts)
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
  return (<></>)

}

const composeRows = (posts : Post[]) => {
    let rows :JSX.Element[] = []
    posts.forEach((post) => {
      rows.push(
        <tr key={post.id}className="tr">
          <td className="td">{post.title}</td>
          <td className="td">{post.body}</td>
        </tr>
      )
    });
    return rows
}

export { PostList }
