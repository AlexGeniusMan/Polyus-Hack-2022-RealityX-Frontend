import React, {useEffect} from 'react'
import styles from './Logs.module.scss'
import TableComponent from '../TableComponent/TableComponent'
import {useLogs} from './useLogs'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType, TypedDispatch} from '../../redux/redux-store'
import {getLogs} from '../../redux/logs-reducer'
import NoData from '../NoData/NoData'

const Logs = () => {
    const dispatch = useDispatch<TypedDispatch>()
    const oversizeValue = useSelector((state: AppStateType) => state.settings.oversizeValue)
    const classes = useSelector((state: AppStateType) => state.logs.classes)

    const logs = useSelector((state: AppStateType) => state.logs.logs)

    const {columns, data} = useLogs(logs, oversizeValue)

    useEffect(() => {
        dispatch(getLogs(classes[6].max, classes[5].max, classes[4].max, classes[3].max, classes[2].max, classes[1].max, classes[0].max))
    }, [])

    return (
        <div className={styles['container']}>
            <div className={styles['tableContainer']}>
                {
                   ( logs && logs.length > 0) ? <TableComponent tableLayout={'fixed'} className={styles['table']} columns={columns} data={data} />
                       : <NoData />
                }

            </div>
        </div>
    )
}

export default Logs
