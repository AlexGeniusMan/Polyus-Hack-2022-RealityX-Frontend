import React from 'react'
import styles from './Camera.module.scss'
import {Badge} from '../Badge/Badge'
import {getCurrentTime} from '../../utils/utils'

const Camera = () => {
    const time = getCurrentTime()
    return (
        <div className={styles['container']}>
            <div>
                Camera
            </div>
            <div className={styles['footer']}>
                <div className={styles['name']}>
                    Камера №CM123-231 время {time}
                </div>
                <div className={styles['status']}>
                    Статус камеры
                    <Badge type={'light'} color={'green'}>Поключена</Badge>
                </div>
            </div>
        </div>
    )
}

export default Camera
