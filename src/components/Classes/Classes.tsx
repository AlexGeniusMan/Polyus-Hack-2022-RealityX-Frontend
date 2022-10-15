import React from 'react'
import styles from './Classes.module.scss'
import TableComponent from '../TableComponent/TableComponent'
import {useClasses} from './useClasses'
import {Button} from '../Button/Button'

const Classes = () => {
    const {columns, data} = useClasses()

    return (
        <div className={styles['container']}>
            <div className={styles['tableContainer']}>
                <TableComponent className={styles['table']} columns={columns} data={data} />
            </div>
            <div className={styles['button']}>
                <Button children={'Сохранить'} />
            </div>
        </div>
    )
}

export default Classes
