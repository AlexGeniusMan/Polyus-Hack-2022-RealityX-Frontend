import React from 'react'
import styles from './Logs.module.scss'
import {Input} from '../Input/Input'
import {Button} from '../Button/Button'
import Icon from '../Icon/Icon'

const Logs = () => {
    return (
        <div>
            Logs
            <Input placeholder={'kasjdkjsak'} />
            <Button>Привет</Button>
            <Button
                icon={<Icon name={'ri-check-line'} size={20} />}
                iconPosition='left'
            />
            <Button
                children={'asdjsa'}
                icon={<Icon name={'ri-check-line'} size={20} />}
                iconPosition='right'
            />
        </div>
    )
}

export default Logs
