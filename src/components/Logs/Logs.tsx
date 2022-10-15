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
            <Input title={'Turtles'} placeholder={'kasjdkjsak'} />
            <Button>Привет</Button>
            <Button
                icon={<Icon name={'ri-check-line'} type={'line'} size={20} />}
                iconPosition='left'
                success
            />
            <Button
                children={'asdjsa'}
                icon={<Icon name={'arrow-right-s-fill'} type={'fill'} size={20} />}
                iconPosition='right'
            />
            <Input placeholder={'kasjdkjsak'} children={
                <Button
                    icon={<Icon name={'arrow-right-s-fill'} type={'fill'} size={20} />}
                />
            } />
        </div>
    )
}

export default Logs
