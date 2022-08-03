import platform from '../../images/sprites/platform.png'
import './Platform.scss'
export const Platform = () => {
    const gameWidth = document.documentElement.clientWidth / 2
    const gameHeight = document.documentElement.clientHeight
    let style = {
        left: `${Math.random() * (gameWidth - 40)}px`,
        top: `${Math.random() * (gameHeight - 50)}px`
    }
    return (
        <img className='platform sprite' src={platform} style={style}/>
    )
}