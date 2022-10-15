import React, {useEffect, useState} from 'react'
import styles from './Camera.module.scss'
import {Badge} from '../Badge/Badge'
import {errorNotify, infoNotify, stopwatch} from '../../utils/utils'
import ModalComponent from '../ModalComponent/ModalComponent'
import Settings from '../Settings/Settings'
import {Button} from '../Button/Button'
import Icon from '../Icon/Icon'

const Camera = () => {
    const [time, setTime] = useState<string>('')
    const handleInfoNotify = () => {
        infoNotify('Что-то произошло')
    }
    const handleErrorNotify = () => {
        errorNotify('Что-то произошло')
    }
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
                <div>
                    <button onClick={() => handleInfoNotify()}>info</button>
                </div>
                <div>
                    <button onClick={() => handleErrorNotify()}>error</button>
                </div>
                <div>
                    Camera
                </div>
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
