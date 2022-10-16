import React, {useEffect, useState} from 'react'
import styles from './Analytics.module.scss'
import Graph from './Graph'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType, TypedDispatch} from '../../redux/redux-store'
import {getLogs} from '../../redux/logs-reducer'
import LineGraph from './LineGraph'

const Analytics = () => {
    const [timer, setTimer] = useState<any>()
    const dispatch = useDispatch<TypedDispatch>()
    const fullness = useSelector((state: AppStateType) => state.logs.fullness)
    const classes = useSelector((state: AppStateType) => state.logs.classes)
    const oversize = useSelector((state: AppStateType) => state.logs.oversize)

    const [classesData, setClassesData] = useState<any>([])
    const [classesLineData, setClassesLineData] = useState<any>([])

    const {class_1_percent, class_2_percent, class_3_percent, class_4_percent, class_5_percent, class_6_percent, class_7_percent} = useSelector((state: AppStateType) => state.logs.class_data)
    const {class_1_amount, class_3_amount, class_4_amount, class_5_amount, class_2_amount, class_6_amount, class_7_amount} = useSelector((state: AppStateType) => state.logs.class_data)

    useEffect(() => {
        const array = []
        array.push({value: class_1_percent, index: 1})
        array.push({value: class_2_percent, index: 2})
        array.push({value: class_3_percent, index: 3})
        array.push({value: class_4_percent, index: 4})
        array.push({value: class_5_percent, index: 5})
        array.push({value: class_6_percent, index: 6})
        array.push({value: class_7_percent, index: 7})
        setClassesData(array)
    }, [class_1_percent, class_2_percent, class_3_percent, class_4_percent, class_5_percent, class_6_percent, class_7_percent])

    useEffect(() => {
        const array = []
        array.push({value: class_1_amount, index: 1})
        array.push({value: class_1_amount + class_2_amount, index: 2})
        array.push({value: class_1_amount + class_2_amount + class_3_amount, index: 3})
        array.push({value: class_1_amount + class_2_amount + class_3_amount + class_4_amount, index: 4})
        array.push({value: class_1_amount + class_2_amount + class_3_amount + class_4_amount + class_5_amount, index: 5})
        array.push({value: class_1_amount + class_2_amount + class_3_amount + class_4_amount + class_5_amount + class_6_amount, index: 6})
        array.push({value: class_1_amount + class_2_amount + class_3_amount + class_4_amount + class_5_amount + class_6_amount + class_7_amount, index: 7})
        setClassesLineData(array)
    }, [class_1_amount, class_3_amount, class_4_amount, class_5_amount, class_2_amount, class_6_amount, class_7_amount])

    useEffect(() => {
        if(timer) {
            clearInterval(timer)
        }
        console.log(classes[0].max)
        const localTimer = setInterval(() => {
            dispatch(getLogs(oversize, classes[6].max, classes[5].max, classes[4].max, classes[3].max, classes[2].max, classes[1].max, classes[0].max))
        }, 1000)
        setTimer(localTimer)
    }, [classes, oversize])

    return (
        <>
            <div>
                <LineGraph values={fullness} title={'Заполненность конвейера, %'} color={'blue'} yAxes={'value'} xAxes={'timestamp'} name={'Заполненность'}  />
            </div>
            <div>
                <Graph values={classesData} title={'Выход класса, %'} color={'green'} yAxes={'value'} xAxes={'index'} name={'Выходы класса'} />
            </div>
            <div>
                <LineGraph values={classesLineData} title={'Куммулятивный'} color={'orange'} yAxes={'value'} xAxes={'index'} name={'Выходы класса'} />
            </div>
        </>
    )
}

export default Analytics
