
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

export const UserPage = (user : User) => {
    const createMobilePhoneNumber = require("random-mobile-numbers")
    const chance = new (require('chance'))
    return (
            <table className='userPage__table'>
                <tbody className='tbody'>
                <tr className='table__row'>
                    <td className='td icon'>
                        <FaSignature></FaSignature>
                    </td>
                    <td className='td info'>
                        {user.name}
                        <span className='span info'>Name</span>
                    </td>
                </tr>
                <tr className='table__row'>
                    <td className='td icon'>
                        <MdOutlineWork></MdOutlineWork>
                    </td>
                    <td className='td info'>
                        {chance.profession({rank: true})}
                        <span className='span info'>Occupation</span>
                    </td>
                </tr>
                <tr className='table__row'>
                    <td className='td icon'>
                        <FaBuilding></FaBuilding>
                    </td>
                    <td className='td info'>
                        {chance.company()}
                        <span className='span info'>Company</span>
                    </td>
                </tr>
                <tr className='table__row'>
                    <td className='td icon'>
                        <FaEnvelope></FaEnvelope>
                    </td>
                    <td className='td info'>
                        {user.username}@gmail.com
                        <span className='span info'>Email</span>
                    </td>
                </tr>
                <tr className='table__row'>
                    <td className='td icon'>
                        <FaPhone></FaPhone>
                    </td>
                    <td className='td info'>
                        {createMobilePhoneNumber('USA')}
                        <span className='span info'>Mobile Number</span>
                    </td>
                </tr>
                <tr className='table__row'>
                    <td className='td icon'>
                        <FaHome></FaHome>
                    </td>
                    <td className='td info'>
                        {chance.address({short_suffix: true})}
                        <span className='span info'>Address</span>
                    </td>
                </tr>
                <tr className='table__row'>
                    <td className='td icon'>
                        <FaBirthdayCake></FaBirthdayCake>
                    </td>
                    <td className='td info'>
                        {chance.birthday({string: true, american: false})}
                        <span className='span info'>Date of Birth</span>
                    </td>
                </tr>
                <tr className='table__row'>
                    <td className='td icon'>
                        <FaTwitter></FaTwitter>
                    </td>
                    <td className='td info'>
                        {chance.twitter()}
                        <span className='span info'>Twitter</span>
                    </td>
                </tr>
                </tbody>
            </table>
        )
}