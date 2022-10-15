import React, {useState} from 'react'
import styles from './Classes.module.scss'
import ModalComponent from '../ModalComponent/ModalComponent'
import Classes from './Classes'
import {Button} from '../Button/Button'

const ClassesModal = () => {
    const [visible, setVisible] = useState(false)
    const handleClick = () => {
        setVisible((visible) => !visible)
    }
    const handleClose = () => {
        setVisible(false)
    }

    return (
        <div className={styles['modal']}>
            <Button color={'orange'} onClick={handleClick} className={styles['modal-button']}>Статистика по классам</Button>
            <ModalComponent onClose={handleClose} visible={visible} title={'Статистика по классам'}>
                <Classes />
            </ModalComponent>
        </div>
    )
}

export default ClassesModal
