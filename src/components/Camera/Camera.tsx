import React, {useState} from 'react'
import styles from './Camera.module.scss'
import {Badge} from '../Badge/Badge'
import {getCurrentTime} from '../../utils/utils'
import ModalComponent from '../ModalComponent/ModalComponent'

const Camera = () => {
    const time = getCurrentTime()
    const [visible, setVisible] = useState(false)
    const handleClick = () => {
        setVisible((visible) => !visible)
    }
    const handleClose = () => {
        setVisible(false)
    }
    return (
        <div className={styles['container']}>
            <div>
                <button onClick={handleClick}>Open me</button>
                <ModalComponent visible={visible} onClose={handleClose} title={'Титульник'}>
                    <p>
                        privet omlet
                    </p>
                </ModalComponent>
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
