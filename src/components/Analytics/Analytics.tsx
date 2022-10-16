import React, {useEffect} from 'react'
import styles from './Analytics.module.scss'
import Graph from './Graph'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType, TypedDispatch} from '../../redux/redux-store'
import {getLogs} from '../../redux/logs-reducer'

const Analytics = () => {
    const dispatch = useDispatch<TypedDispatch>()
    const fullness = useSelector((state: AppStateType) => state.logs.fullness)
    const classes = useSelector((state: AppStateType) => state.logs.classes)

    useEffect(() => {
        setInterval(() => {
            dispatch(getLogs(classes[6].max, classes[5].max, classes[4].max, classes[3].max, classes[2].max, classes[1].max, classes[0].max))
        }, 1000)
    }, [])

    return (
        <div>
            <Graph values={fullness} title={'Заполненность конвейера, %'} yAxes={'value'} xAxes={'timestamp'} name={'Заполненность'} xLabel={'Время'} yLabel={'Заполнненость'} />
        </div>
    )
}

export default Analytics
