import React, {useCallback, useEffect, useState} from 'react'
import {Input} from '../Input/Input'
import styles from './Classes.module.scss'
import {TableClassesColumnsType, TableClassesDataType, TableClassesValueType} from '../../types/Types'
import {logsActions} from '../../redux/logs-reducer'
import {useDispatch} from 'react-redux'

export const useClasses = (classes: any) => {
    const dispatch = useDispatch()
    const [changing, setChanging] = useState<boolean>(false)

    const [value, setValue] = useState<TableClassesValueType[]>()
    const [tempValue, setTempValue] = useState<TableClassesValueType[]>([])
    const [columns, setColumns] = useState<TableClassesColumnsType[]>([])
    const [data, setData] = useState<TableClassesDataType[]>([])

    useEffect(() => {
        setValue(classes)
        setTempValue(classes)
    }, [])

    const handleButtonClick = useCallback((isChange: boolean) => {
        if(!isChange) {
            setChanging(true)
            setTempValue(value as TableClassesValueType[])
        }
        else {
            setChanging(false)
            setTempValue([] as TableClassesValueType[])
        }
    }, [changing, value])
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, type: 'min' | 'max', rowIndex: number) => {
        setTempValue((tempValue) =>
            tempValue.map((item, index) => index !== rowIndex ? item :
                {
                    ...item,
                    [type]: e.target.value
                }
            )
        )
    }, [changing])
    const handleSave = useCallback(() => {
        dispatch(logsActions.changeClasses(tempValue))
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
                    render: (child: any, row: any, index: any) => <Input type={'number'} className={styles['input']} onChange={(e) => handleChange(e, 'min', index)}
                                                                         color={'orange'} defaultValue={String(tempValue[index].min)} placeholder='Min' />,
                },
                {
                    title: 'Максимальное',
                    dataIndex: 'max',
                    key: 'max',
                    render: (child: any, row: any, index: any) => <Input type={'number'} className={styles['input']} onChange={(e) => handleChange(e, 'max', index)}
                                                                         color={'orange'} defaultValue={String(tempValue[index].max)} placeholder='Max' />,
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
        if(value) {
            setData(
                [
                    { class: 7, min: value[0].min, max: value[0].max, result: '14%', key: '0' },
                    { class: 6, min: value[1].min, max: value[1].max, result: '14%', key: '1' },
                    { class: 5, min: value[2].min, max: value[2].max, result: '14%', key: '2' },
                    { class: 4, min: value[3].min, max: value[3].max, result: '14%', key: '3' },
                    { class: 3, min: value[4].min, max: value[4].max, result: '14%', key: '4' },
                    { class: 2, min: value[5].min, max: value[5].max, result: '14%', key: '5' },
                    { class: 1, min: value[6].min, max: value[6].max, result: '2%', key: '6' },
                ]
            )
        }
    }, [value])

    return {columns, data, changing, setChanging, handleButtonClick, handleSave}
}
