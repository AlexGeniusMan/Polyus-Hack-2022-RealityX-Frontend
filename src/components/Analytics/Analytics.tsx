import React, {useEffect} from 'react'
import styles from './Analytics.module.scss'
import Graph from './Graph'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType, TypedDispatch} from '../../redux/redux-store'
import {getLogs} from '../../redux/logs-reducer'

const Analytics = () => {
    const dispatch = useDispatch<TypedDispatch>()
    const fullness = useSelector((state: AppStateType) => state.logs.fullness)

    useEffect(() => {
        setInterval(() => {
            dispatch(getLogs())
        }, 1000)
    }, [])

    return (
        <div>
            <Graph values={fullness} title={'Заполненность конвейера, %'} yAxes={'value'} xAxes={'timestamp'} name={'Заполненность'} xLabel={'Время'} yLabel={'Заполнненость'} />
        </div>
    )
}

export default Analytics
