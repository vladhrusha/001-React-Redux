
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
import { useMemo } from 'react'

type Props = {
    getUserById: (arg : number) => User,
}

export const UserPage = ({getUserById} : Props) => {
    const chance = new Chance()
    const {id} = useParams()
    const parsedId = parseInt(id!)
    const user = useMemo(() => getUserById(parsedId), [parsedId])
    return (
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
        )
}