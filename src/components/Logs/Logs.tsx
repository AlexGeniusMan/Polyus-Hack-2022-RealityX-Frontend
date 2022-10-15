import React from 'react'
import styles from './Logs.module.scss'
import TableComponent from '../TableComponent/TableComponent'

const Logs = () => {
    const columns = [
        {
            title: 'Время',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'Min / кадр',
            dataIndex: 'min',
            key: 'min',
        },
        {
            title: 'Max / кадр',
            dataIndex: 'max',
            key: 'max',
        },
        {
            title: 'Кол-во',
            dataIndex: 'count',
            key: 'count',
        },
        {
            title: '∆ макс',
            dataIndex: 'delta_max',
            key: 'delta_max',
        },
        {
            title: '∆ мин',
            dataIndex: 'delta_min',
            key: 'delta_min',
        },
    ];

    const data = [
        { time: '13:22:48', min: 45, max: 45, count: 6, delta_max: '+12', delta_min: '+12', key: '1' },
        { time: '13:24:38', min: 13, max: 13, count: 12, delta_max: '+2', delta_min: '+2', key: '2' },
        { time: '13:24:38', min: 13, max: 13, count: 5, delta_max: '+2', delta_min: '+2', key: '3' },
    ];

    return (
        <div className={styles['container']}>
            <TableComponent columns={columns} data={data} />
        </div>
    )
}

export default Logs
