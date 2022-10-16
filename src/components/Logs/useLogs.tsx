import React, {useEffect, useState} from 'react'
import {LogsDataType, TableClassesColumnsType, TableLogsDataType} from '../../types/Types'
import {getCurrentTime} from '../../utils/utils'

export const useLogs = (logs: LogsDataType[], oversizeValue: number) => {
    const [data, setData] = useState<TableLogsDataType[]>([
        { time: '13:22:48', min: 45, max: 45, count: 6, delta_max: '+12', delta_min: '+12', key: '1' },
        { time: '13:24:38', min: 13, max: 13, count: 12, delta_max: '+2', delta_min: '+2', key: '2' },
        { time: '13:24:38', min: 13, max: 13, count: 5, delta_max: '+2', delta_min: '+2', key: '3'},
        { time: '13:24:38', min: 13, max: 13, count: 5, delta_max: '+2', delta_min: '+2', key: '4'},
        { time: '13:24:38', min: 13, max: 13, count: 5, delta_max: '+2', delta_min: '+2', key: '5'},
        { time: '13:24:38', min: 13, max: 13, count: 5, delta_max: '+2', delta_min: '+2', key: '6'},
        { time: '13:24:38', min: 13, max: 13, count: 5, delta_max: '+2', delta_min: '+2', key: '7'},
        { time: '13:24:38', min: 13, max: 13, count: 5, delta_max: '+2', delta_min: '+2', key: '8'},
    ])

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
        // {
        //     title: 'Фрейм',
        //     dataIndex: 'frame',
        //     key: 'frame',
        //     render: (value: any, row: TableLogsDataType, index: number) => <LogsModal row={row} index={index} />
        // },
    ] as TableClassesColumnsType[]

    useEffect(() => {
        if(logs && logs.length > 0) {
            setData(
                logs.map((item, index) => {
                    return {
                        time: getCurrentTime(new Date(item.timestamp)),
                        min: item.min_oversize,
                        max: item.max_oversize,
                        count: item.amount,
                        delta_max: String(item.max_oversize - oversizeValue),
                        delta_min: String(item.min_oversize - oversizeValue),
                        key: index,
                    }
                })
            )
        }
    }, [logs])

    return {columns, data}
}
