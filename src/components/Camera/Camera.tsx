import React, {useEffect, useState} from 'react'
import styles from './Camera.module.scss'
import {Badge} from '../Badge/Badge'
import {errorNotify, infoNotify, stopwatch} from '../../utils/utils'
import ModalComponent from '../ModalComponent/ModalComponent'
import Settings from '../Settings/Settings'
import {Button} from '../Button/Button'
import Icon from '../Icon/Icon'
import {useDispatch} from 'react-redux'
import {TypedDispatch} from '../../redux/redux-store'
import {getStream} from '../../redux/camera-reducer'
import {baseURL} from '../../api/api'

const Camera = () => {
    const [time, setTime] = useState<string>('')
    useEffect(() => {
        setInterval(() => {
            setTime(stopwatch())
        }, 1000)
    }, [])

    return (
        <div className={styles['container']}>
            <div className={styles['header']}>
                <div className={styles['name']}>
                    Cam №CM123-231 :: {time}
                </div>
                <div className={styles['status']}>
                    Статус камеры
                    <Badge type={'light'} color={'green'}>Поключена</Badge>
                </div>
            </div>
            <div className={styles['main']}>
                <img className={styles['stream']} src={baseURL + 'api/app/stream'} />
            </div>
            <div className={styles['footer']}>
                <div className={styles['minimalValue']}>
                    <Settings />
                </div>
            </div>

        </div>
    )
}

export default Camera
