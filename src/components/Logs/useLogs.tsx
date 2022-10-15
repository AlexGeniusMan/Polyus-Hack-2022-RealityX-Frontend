import React, {useCallback, useEffect, useState} from 'react'
import {Input} from '../Input/Input'
import styles from './Logs.module.scss'
import {TableClassesColumnsType, TableLogsDataType} from '../../types/Types'

export const useLogs = () => {

    const [data, setData] = useState<TableLogsDataType[]>([])

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
        {
            title: 'Фрейм',
            dataIndex: 'frame',
            key: 'frame',
        },
    ] as TableClassesColumnsType[]

    useEffect(() => {

    }, )
    useEffect(() => {
        setData([
            { time: '13:22:48', min: 45, max: 45, count: 6, delta_max: '+12', delta_min: '+12', key: '1', frame: '12_22_33.pngdasdsadsadasdsa' },
            { time: '13:24:38', min: 13, max: 13, count: 12, delta_max: '+2', delta_min: '+2', key: '2', frame: '12_22_33.png' },
            { time: '13:24:38', min: 13, max: 13, count: 5, delta_max: '+2', delta_min: '+2', key: '3', frame: '12_22_33.png'},
            { time: '13:24:38', min: 13, max: 13, count: 5, delta_max: '+2', delta_min: '+2', key: '3', frame: '12_22_33.png'},
            { time: '13:24:38', min: 13, max: 13, count: 5, delta_max: '+2', delta_min: '+2', key: '3', frame: '12_22_33.png'},
            { time: '13:24:38', min: 13, max: 13, count: 5, delta_max: '+2', delta_min: '+2', key: '3', frame: '12_22_33.png'},
            { time: '13:24:38', min: 13, max: 13, count: 5, delta_max: '+2', delta_min: '+2', key: '3', frame: '12_22_33.png'},
            { time: '13:24:38', min: 13, max: 13, count: 5, delta_max: '+2', delta_min: '+2', key: '3', frame: '12_22_33.png'},
        ] as TableLogsDataType[])
    }, [])

    return {columns, data}
}
