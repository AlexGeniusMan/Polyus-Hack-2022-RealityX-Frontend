import React, {useEffect, useState} from 'react'
import styles from './Camera.module.scss'
import {Badge} from '../Badge/Badge'
import {stopwatch} from '../../utils/utils'
import ModalComponent from '../ModalComponent/ModalComponent'
import Settings from '../Settings/Settings'
import {Button} from '../Button/Button'
import Icon from '../Icon/Icon'

const Camera = () => {
    const [time, setTime] = useState<string>('')
    const [visible, setVisible] = useState(false)
    const handleClick = () => {
        setVisible((visible) => !visible)
    }
    const handleClose = () => {
        setVisible(false)
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
                <button onClick={handleClick}>Open me</button>
                <ModalComponent visible={visible} onClose={handleClose} title={'Титульник'}>
                    <p>
                        privet omlet
                    </p>
                </ModalComponent>
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
