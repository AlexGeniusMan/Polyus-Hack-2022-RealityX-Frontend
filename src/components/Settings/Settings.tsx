import React, {useEffect, useState} from 'react'
import styles from './Settings.module.scss'

import {Button} from '../Button/Button'
import Icon from '../Icon/Icon'
import {Input} from '../Input/Input'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType, TypedDispatch} from '../../redux/redux-store'
import {setOversizeValue} from '../../redux/settings-reducer'

const Settings = () => {
    const dispatch = useDispatch<TypedDispatch>()
    const [value, setValue] = useState<string>('250')
    const oversizeValue = useSelector((state: AppStateType) => state.settings.oversizeValue)

    useEffect(() => {
        setValue(String(oversizeValue))
    }, [oversizeValue])

    const handleSubmit = () => {
        console.log(value)
        dispatch(setOversizeValue(value))
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
