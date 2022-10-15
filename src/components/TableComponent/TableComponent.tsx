import React, {FC} from 'react'
import Table from 'rc-table'
import styles from './TableComponent.module.scss'

const TableComponent:FC<MyProps> = ({columns, data}) => {
    return (
        <Table className={styles['table']} columns={columns} data={data} />
    )
}

export default TableComponent

type MyProps = {
    columns: any
    data: any
}
