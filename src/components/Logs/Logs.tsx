import React from 'react'
import styles from './Logs.module.scss'
import TableComponent from '../TableComponent/TableComponent'
import {useLogs} from './useLogs'

const Logs = () => {
    const {columns, data} = useLogs()

    return (
        <div className={styles['container']}>
            <div className={styles['tableContainer']}>
                <TableComponent tableLayout={'fixed'} className={styles['table']} columns={columns} data={data} />
            </div>
        </div>
    )
}

export default Logs
