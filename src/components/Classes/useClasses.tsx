import React, {useCallback, useEffect, useState} from 'react'
import {Input} from '../Input/Input'
import styles from './Classes.module.scss'
import {TableClassesColumnsType, TableClassesDataType, TableClassesValueType} from '../../types/Types'

export const useClasses = () => {
    const [changing, setChanging] = useState<boolean>(false)

    const [value, setValue] = useState<TableClassesValueType[]>([
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
    const [tempValue, setTempValue] = useState<TableClassesValueType[]>([])

    const [columns, setColumns] = useState<TableClassesColumnsType[]>([])
    const [data, setData] = useState<TableClassesDataType[]>([])

    const handleButtonClick = useCallback((isChange: boolean) => {
        if(!isChange) {
            setChanging(true)
            setTempValue(value)
        }
        else {
            setChanging(false)
            setTempValue([] as TableClassesValueType[])
        }
    }, [changing])
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, type: 'min' | 'max', rowIndex: number) => {
        setTempValue((tempValue) =>
            tempValue.map((item, index) => index !== rowIndex ? item :
                {
                    ...item,
                    [type]: Number(e.target.value)
                }
            )
        )
    }, [changing])
    const handleSave = useCallback(() => {
        setValue(tempValue)
        setTempValue([])
        setChanging(false)
    }, [tempValue])

    useEffect(() => {
        if(changing) {
            setColumns([
                {
                    title: 'Класс',
                    dataIndex: 'class',
                    key: 'class',
                },
                {
                    title: 'Минимальное',
                    dataIndex: 'min',
                    key: 'min',
                    render: (child: any, row: any, index: any) => <Input type={'number'} className={styles['input']} onChange={(e) => handleChange(e, 'min', index)} color={'orange'} defaultValue={String(tempValue[index].min)} />,
                },
                {
                    title: 'Максимальное',
                    dataIndex: 'max',
                    key: 'max',
                    render: (child: any, row: any, index: any) => <Input type={'number'} className={styles['input']} onChange={(e) => handleChange(e, 'max', index)} color={'orange'} defaultValue={String(tempValue[index].max)} />,
                },
                {
                    title: 'Выход класса, %',
                    dataIndex: 'result',
                    key: 'result',
                }
            ])
        }
        else {
            setColumns([
                {
                    title: 'Класс',
                    dataIndex: 'class',
                    key: 'class',
                },
                {
                    title: 'Минимальное',
                    dataIndex: 'min',
                    key: 'min',
                },
                {
                    title: 'Максимальное',
                    dataIndex: 'max',
                    key: 'max',
                },
                {
                    title: 'Выход класса, %',
                    dataIndex: 'result',
                    key: 'result',
                }
            ])
        }
    }, [changing])
    useEffect(() => {
        setData(
            [
                { class: 1, min: value[0].min, max: value[0].max, result: '14%', key: '0' },
                { class: 2, min: value[1].min, max: value[1].max, result: '14%', key: '1' },
                { class: 3, min: value[2].min, max: value[2].max, result: '14%', key: '2' },
                { class: 4, min: value[3].min, max: value[3].max, result: '14%', key: '3' },
                { class: 5, min: value[4].min, max: value[4].max, result: '14%', key: '4' },
                { class: 6, min: value[5].min, max: value[5].max, result: '14%', key: '5' },
                { class: 7, min: value[6].min, max: value[6].max, result: '2%', key: '6' },
            ]
        )
    }, [value])

    return {columns, data, changing, setChanging, handleButtonClick, handleSave}
}
