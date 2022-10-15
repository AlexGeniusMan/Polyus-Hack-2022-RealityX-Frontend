import React, {useState} from 'react'
import {Input} from '../Input/Input'

export const useClasses = () => {

    const [value, setValue] = useState([
        {
            min: 250,
            max: 999,
        },
        {
            min: 150,
            max: 250,
        },
        {
            min: 100,
            max: 150,
        },
        {
            min: 80,
            max: 100,
        },
        {
            min: 70,
            max: 80,
        },
        {
            min: 40,
            max: 70,
        },
        {
            min: 0,
            max: 40,
        },
    ])

    const columns = [
        {
            title: 'Класс',
            dataIndex: 'class',
            key: 'class',
        },
        {
            title: 'Минимальное',
            dataIndex: 'min',
            key: 'min',
            render: (child: any, row: any, index: any) => <Input defaultValue={String(value[index].min)} />,
        },
        {
            title: 'Максимальное',
            dataIndex: 'max',
            key: 'max',
            render: (child: any, row: any, index: any) => <Input defaultValue={String(value[index].max)} />,
        },
        {
            title: 'Выход класса, %',
            dataIndex: 'result',
            key: 'result',
        },

    ]

    const data = [
        { class: 1, result: 14, key: '0' },
        { class: 2, result: 14, key: '1' },
        { class: 3, result: 14, key: '2' },
        { class: 4, result: 14, key: '3' },
        { class: 5, result: 14, key: '4' },
        { class: 6, result: 14, key: '5' },
        { class: 7, result: 2, key: '6' },
    ];

    return {columns, data}
}
