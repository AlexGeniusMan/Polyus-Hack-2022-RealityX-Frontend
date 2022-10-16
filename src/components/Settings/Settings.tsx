import React, {useEffect, useState} from 'react'
import styles from './Settings.module.scss'

import {Button} from '../Button/Button'
import Icon from '../Icon/Icon'
import {Input} from '../Input/Input'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType, TypedDispatch} from '../../redux/redux-store'
import {logsActions} from '../../redux/logs-reducer'

const Settings = () => {
    const dispatch = useDispatch<TypedDispatch>()
    const oversize = useSelector((state: AppStateType) => state.logs.oversize)
    const [value, setValue] = useState<string>(oversize)

    useEffect(() => {
        setValue(oversize)
    }, [oversize])

    const handleSubmit = () => {
        dispatch(logsActions.changeOversize(value))
    }

    return (
        <div className={styles['container']}>
            <Input defaultValue={value} onChange={(e) => setValue(e.target.value)} title={'Минимальное значение негабарита'} className={styles['input']} placeholder={'250'} children={
                <Button onClick={() => handleSubmit()}
                    icon={<Icon name={'arrow-right-s-fill'} type={'fill'} size={24} />}
                />
            } />
        </div>
    )
}

export default Settings
