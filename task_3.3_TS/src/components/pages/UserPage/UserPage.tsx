
import {User} from '../../../models/user'
import './UserPage.scss'
import {
    FaEnvelope,
    FaSignature,
    FaBuilding,
    FaPhone,
    FaHome,
    FaBirthdayCake,
    FaTwitter
} from 'react-icons/fa'
import {MdOutlineWork} from 'react-icons/md'
import Chance from 'chance'
import { useParams } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import {fetchData} from '../../../scripts/fetchData'
import { Album } from '../../../models/albums'
import { Post } from '../../../models/post'
import { Todo } from '../../../models/todo'


type Props = {
    getUserById: (arg : number) => User,
}

export const UserPage = ({getUserById} : Props) => {
    const chance = new Chance()
    const {id} = useParams()
    const parsedId = parseInt(id!)
    const user = useMemo(() => getUserById(parsedId), [parsedId])
    const [albums, setAlbums] = useState<Album[]>([])
    const [todos, setTodos] = useState<Todo[]>([])
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        const getData = async () => {
            setAlbums(await fetchData(`users/${user.id}/albums`))
            setTodos(await fetchData(`users/${user.id}/todos`))
            setPosts(await fetchData(`users/${user.id}/posts`))
        }
        getData()
    }, [user.id])

    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (index : number) => {
        setToggleState(index)
    }

    return (
        <div className="userPage">
            <ul className='tabs'>
                <li
                className ={toggleState === 1 ? "tabs tabs--active" : "tabs"}
                onClick={() => toggleTab(1)}
                >
                    Albums
                </li>
                <li
                    className ={toggleState === 2 ? "tabs tabs--active" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    Todos
                </li>
                <li
                    onClick={() => toggleTab(3)}
                    className ={toggleState === 3 ? "tabs tabs--active" : "tabs"}
                >
                    Posts
                </li>
            </ul>
            <div className='tabs__content'>
                <div className ={toggleState === 1 ? "content content--active" : "content"}>
                    <table>
                        <tbody>
                        {
                        albums.map((album) => {
                            return (
                                    <tr key={album.id} id={album.id.toString()}className="tr" >
                                        <td
                                        className="td title"
                                        >{album.title}
                                        </td>
                                    </tr>
                            )
                        })
                        }
                        </tbody>
                    </table>
                </div>
                <div className ={toggleState === 2 ? "content content--active" : "content"}>
                    <table>
                        <tbody>
                        {
                        todos.map((todo) => {
                            return (
                                    <tr key={todo.id} id={todo.id.toString()}className="tr" >
                                        <td>
                                            <input type="checkbox" defaultChecked={todo.completed}></input>
                                        </td>
                                        <td
                                        className="td title"
                                        >{todo.title}
                                        </td>
                                    </tr>
                            )
                        })
                        }
                        </tbody>
                    </table>
                </div>
                <div className ={toggleState === 3 ? "content content--active" : "content"}>
                    <table>
                        <tbody>
                        {
                        posts.map((post) => {
                            return (
                                    <tr key={post.id} id={post.id.toString()}className="tr" >
                                        <td>{post.id}</td>
                                        <td
                                        className="td title"
                                        >{post.title}
                                        </td>
                                    </tr>
                            )
                        })
                        }
                        </tbody>
                    </table>
                </div>
            </div>

            <table className='userPage__table'>
                <tbody className='tbody'>
                <tr className='table__row'>
                    <td className='td icon'><FaSignature></FaSignature></td>
                    <td className='td info'>
                        {user.name}
                        <span className='span info'>Name</span>
                    </td>
                </tr>
                <tr className='table__row'>
                    <td className='td icon'><MdOutlineWork></MdOutlineWork></td>
                    <td className='td info'>
                        {chance.profession({rank: true})}
                        <span className='span info'>Occupation</span>
                    </td>
                </tr>
                <tr className='table__row'>
                    <td className='td icon'><FaBuilding></FaBuilding></td>
                    <td className='td info'>
                        {chance.company()}
                        <span className='span info'>Company</span>
                    </td>
                </tr>
                <tr className='table__row'>
                    <td className='td icon'><FaEnvelope></FaEnvelope></td>
                    <td className='td info'>
                        {user.username}@gmail.com
                        <span className='span info'>Email</span>
                    </td>
                </tr>
                <tr className='table__row'>
                    <td className='td icon'><FaPhone></FaPhone></td>
                    <td className='td info'>
                        {chance.phone({country: 'us', mobile: true})}
                        <span className='span info'>Mobile Number</span>
                    </td>
                </tr>
                <tr className='table__row'>
                    <td className='td icon'><FaHome></FaHome></td>
                    <td className='td info'>
                        {chance.address({short_suffix: true})}
                        <span className='span info'>Address</span>
                    </td>
                </tr>
                <tr className='table__row'>
                    <td className='td icon'><FaBirthdayCake></FaBirthdayCake></td>
                    <td className='td info'>
                        {chance.birthday({string: true, american: false}).toString()}
                        <span className='span info'>Date of Birth</span>
                    </td>
                </tr>
                <tr className='table__row'>
                    <td className='td icon'><FaTwitter></FaTwitter></td>
                    <td className='td info'>
                        {chance.twitter()}
                        <span className='span info'>Twitter</span>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        )
}