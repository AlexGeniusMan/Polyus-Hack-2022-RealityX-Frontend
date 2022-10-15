import React, {FC, useState} from 'react'
import styles from './Logs.module.scss'
import ModalComponent from '../ModalComponent/ModalComponent'
import {TableLogsDataType} from '../../types/Types'

const LogsModal:FC<MyProps> = ({row, index}) => {
    const [visible, setVisible] = useState(false)
    const handleClick = () => {
        setVisible((visible) => !visible)
    }
    const handleClose = () => {
        setVisible(false)
    }

    return (
        <div className={styles['modal']}>
            <button onClick={handleClick} className={styles['modal-button']}>12_23_16.jpg</button>
            <ModalComponent onClose={handleClose} visible={visible} title={'Кадр негабарита: 12_23_16.jpg'}>
                <div className={styles['modal-img']}>
                    <img src='https://media.istockphoto.com/photos/image-of-open-antique-book-on-wooden-table-with-glitter-overlay-picture-id1354441996?b=1&k=20&m=1354441996&s=170667a&w=0&h=O4JDagXhIh1N13PNN6G4_L5KB5QPZryin7FOrZnzYvc=' className={styles['img']} />
                </div>
            </ModalComponent>
        </div>
    )
}

export default LogsModal

type MyProps = {
    row: TableLogsDataType,
    index: number
}
