import './GameScreen.scss'
import '../Doodle/Doodle.scss'
import { Doodle } from '../Doodle'
import { Platform } from '../Platform'
import React, { useEffect, useRef } from 'react'

export const GameScreen = () => {
    const ref = useRef(true)
    const platformsEmptyDummy = Array.apply('', new Array(Math.floor(Math.random() * (20 - 10) + 10)))

    useEffect(() => {
        const firstRender = ref.current
        const doodle = document.querySelector('.doodlerGuy') as HTMLElement
        const gameHeight = document.documentElement.clientHeight
        const fall = () => {
            const doodle1 = document.querySelector('.doodlerGuy') as HTMLElement
            const doodleHeight = doodle1.getBoundingClientRect().height
            const doodleWidth = doodle1.getBoundingClientRect().width
            const platformArr = document.querySelectorAll('.platform')
            let doodlePosition = getComputedStyle(doodle1).getPropertyValue('bottom')
            const fallTick = () => {
                if( parseInt(doodlePosition) < -41) {
                    alert('game over')
                    clearInterval(fallInterval)
                }

                doodlePosition = (parseInt(doodlePosition) - 5).toString()
                doodle1.style.bottom = `calc(${doodlePosition}px)`

                platformArr.forEach(platformElement => {

                const doodleX = doodle1.getBoundingClientRect().x
                const doodleY = doodle1.getBoundingClientRect().y
                const platformWidth = platformElement.getBoundingClientRect().width
                const platformHeight = platformElement.getBoundingClientRect().height
                const platformX = platformElement.getBoundingClientRect().x
                const platformY = platformElement.getBoundingClientRect().y

                if (
                    (Math.floor(doodleY + doodleHeight) > Math.floor(platformY))
                    && (Math.floor(doodleY + doodleHeight) < Math.floor(platformY + platformHeight))
                    && (Math.floor(doodleX + doodleWidth - 5) > Math.floor(platformX))
                    && (Math.floor(doodleX) < Math.floor(platformX + platformWidth))
                    ){
                    clearInterval(fallInterval)
                    jump()
                }
                })
            }
            const fallInterval = setInterval(fallTick, 25)
        }

        const jump = () => {
            let doodleVerticalPosition = getComputedStyle(doodle).getPropertyValue('bottom')
            const platformArr = document.querySelectorAll('.platform')
            const jumpTick = () => {
                doodleVerticalPosition = (parseInt(doodleVerticalPosition) + 3).toString()
                doodle.style.bottom = `calc(${doodleVerticalPosition}px)`
                if ( doodle.getBoundingClientRect().y < gameHeight / 2) {
                platformArr.forEach(platformElement => {
                    let platformPosition = getComputedStyle(platformElement).getPropertyValue('top')
                    platformPosition = (parseInt(platformPosition) + 3).toString()
                    const plat = platformElement as HTMLElement
                    plat.style.top = `calc(${platformPosition}px)`
                    let top = plat.style.top
                    let topValue =parseInt(top.substring(top.lastIndexOf('(') + 3, top.lastIndexOf(')')))
                    if (topValue > gameHeight) {
                        plat.remove()
                    }
                });
            }

            }
            const jumpInterval = setInterval(jumpTick, 25)
            setTimeout(function() { clearInterval(jumpInterval); }, 1000);
            setTimeout(fall, 1000)

        }

        if (firstRender) {
            ref.current = false
            const handleKeyDown = (e : KeyboardEvent) => {
                const arrowLeftPressed = () => {
                    const doodleHorizontalPosition = getComputedStyle(doodle).getPropertyValue('left')
                    if (parseInt(doodleHorizontalPosition) > 2){
                        doodle.style.left = `calc(${doodleHorizontalPosition} - 10px)`
                    }
                }
            const arrowRightPressed = () => {
                const doodleHorizontalPosition = getComputedStyle(doodle).getPropertyValue('left')
                const gameWidth = document.documentElement.clientWidth / 2
                if (parseInt(doodleHorizontalPosition) < gameWidth - 40 + 6){
                    doodle.style.left = `calc(${doodleHorizontalPosition} + 10px)`
                }
            }
                switch (e.key) {
                    case "ArrowLeft":
                        arrowLeftPressed()
                        break;
                    case "ArrowRight":
                        arrowRightPressed()
                        break;
                }
            }
            window.addEventListener('keydown', handleKeyDown)
            window.addEventListener('load', fall)

        }
    }, [])

    return (
        <div className="game__container">
            <Doodle></Doodle>
            {
                platformsEmptyDummy.map(() => {
                    return <Platform key={Math.random() * 1000}></Platform>
                })
            }
        </div>
    )
}